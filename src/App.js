import React from 'react';
import './App.css';
import StoresContainer from './containers/StoresContainer';
import NavBar from './components/NavBar';
import NavBar2 from './components/NavBar2';
import SignUp from './components/SignUp';
import Login from './components/LogIn';
import StorePage from './components/StorePage';
import MyProfile from './components/MyProfile';
import StoreForm from './components/StoreForm';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

let BASEURL = "http://localhost:3000/"
let STORESURL = BASEURL + "stores"
let USERSURL = BASEURL + "users"
let LOGINURL = BASEURL + 'login'

class App extends React.Component {
  state = {
    stores: [],
    filteredStores: [],
    search: "",
    // reviewData: { 
    //   text: "",
    //   rating: "", 
    //   photo: ""
    // }, 
    username: "",
    password: "",
    location: "",
    is_store_owner: false,
    loggedIn: false,
    mapLocation: null,
    storeName: "",
    storeLocation: ""
  }

  componentDidMount() {
    fetch(STORESURL)
    .then(response => response.json())
    .then(stores => this.setState({ stores, filteredStores: stores }))
    if (localStorage.token) {
      this.setState({loggedIn: true})
    }
  }

  updateSearch = (e) => {
    let newSearch = e.target.value
    this.setState({
      search: newSearch
    })
  }

  displayStores = () => {
    let stores = this.state.stores 
    let filteredStores = this.state.filteredStores
    let search = this.state.search
    if (stores.length > 0 && search !== "") {
      return stores.filter(store => store.name.toLowerCase().includes(search.toLowerCase()))
    } else if (filteredStores.length > 0 && search === "") {
      return filteredStores
    } else {
      return stores
    }
  }

  filterStores = (e) => {
    let stores = this.state.stores 
    let filteredStores = stores
    if (e.target.value === "All") {
      this.setState({ filteredStores,
        mapLocation: 'Washington, DC' })
    } else if (e.target.value === "Highest Rated") {
      this.setState({ filteredStores: filteredStores.sort( (store1, store2) => store2.avg_rating - store1.avg_rating)})
    } else if (e.target.value === "Alphabetically") {
      this.setState({ filteredStores: filteredStores.sort( (store1, store2) => store1.name.localeCompare(store2.name))})
    } else if (e.target.value === "Most Flavors") {
      this.setState({ filteredStores: filteredStores.sort( (store1, store2) => store2.ice_cream_count - store1.ice_cream_count)})
    } else if (e.target.value === "Washington, DC") {
      this.setState({ 
        filteredStores: filteredStores.filter( store => store.location === "Washington, DC"),
        mapLocation: 'Washington, DC'
      })
    } else if (e.target.value === "Baltimore, MD") {
      this.setState({ 
        filteredStores: filteredStores.filter( store => store.location === "Baltimore, MD"), 
        mapLocation: 'Baltimore, MD'
      })
    } 
  }

  setUsername= (e) => {
    this.setState({
      username: e.target.value
    })
  }

  setPassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  setLocation = (e) => {
    this.setState({
      location: e.target.value
    }
    )
  }

  setStoreOwner = (e) => {
    if (e.target.checked) {
      this.setState({ is_store_owner: true})
    } else {
      this.setState({ is_store_owner: false})
    }
  }

  signUp = (e) => {
    e.preventDefault()

    const user = {
      username: this.state.username,
      password: this.state.password,
      location: this.state.location,
      is_store_owner: this.state.is_store_owner
    }

    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      }, 
      body: JSON.stringify({user})
    }

    fetch(USERSURL, options)
    .then(response => response.json())
    .then(data => {
      localStorage.setItem("token", data.token)
      localStorage.setItem("userId", data.user.id)
      localStorage.setItem("is_store_owner", data.user['is_store_owner'])
      this.setState({ loggedIn: true, userId: data.user.id })
    })
    .catch(error => alert(error))
  }

  logIn = (e) => {
    e.preventDefault()
    let options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }

    fetch(LOGINURL, options)
    .then(response => response.json())
    .then(data => {
      localStorage.setItem("token", data.token)
      localStorage.setItem("userId", data.user.id)
      localStorage.setItem("is_store_owner", data.user['is_store_owner'])
      this.setState({loggedIn: true})
      // this.setState({loggedIn: true, userId: data.user.id})
    })
  }

  logOut = (e) => {
    e.preventDefault()
    this.setState({
      username: "",
      password: "",
      location: "",
      loggedIn: false,
      userId: ""
    }, localStorage.clear(), alert("You have been logged out!"))

  }

  showNavbar = () => {
    if (this.state.loggedIn) {
      return (
        <NavBar2 logOut={this.logOut} />
      )
    } else {
      return (
        <NavBar loginCheck={this.loginCheck}/>
      )
    }
  }

  loginCheck = () => {
    alert("Sorry! You must be logged in.")
  }

  storeName = (e) => {
    this.setState({ storeName: e.target.value })
  }

  storeLocation = (e) => {
    this.setState({ storeLocation: e.target.value })
  }

  postStore = (e) => {
    e.preventDefault()

    const store = {
      storeName: this.state.storeName,
      storeLocation: this.state.storeLocation
    }

    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      }, 
      body: JSON.stringify({store})
    }

    fetch(STORESURL, options)
    .then(response => response.json())
    .then(data => {
      localStorage.setItem("token", data.token)
      localStorage.setItem("storeId", data.store.id)
      this.setState({ loggedIn: true })
    })
    .catch(error => alert(error))
  }

 


  render() { 
    return (

      <BrowserRouter>
        <div className="App">
        {this.showNavbar()}
          <div className="container">
            <Switch>
              <Route path="/login" render={(routeProps) => (this.state.loggedIn) ? <Redirect to="/" /> : 
              <Login setUsername={this.setUsername} setPassword={this.setPassword}
              {...routeProps} logIn={this.logIn} /> }/>

              <Route path="/signup" render={(routeProps) => (this.state.loggedIn) ? <Redirect to="/" /> :
              <SignUp setUsername={this.setUsername}
              setPassword={this.setPassword} setLocation={this.setLocation} 
              signUp={this.signUp} setStoreOwner={this.setStoreOwner}
              {...routeProps} /> } />

              <Route path="/addstore" render={(routeProps) => <StoreForm storeName={this.storeName} 
              storeLocation={this.storeLocation} postStore={this.postStore} {...routeProps } />} />

              <Route path="/store/:id" render={(routeProps) => <StorePage 
              // reviewText={this.reviewText}
              // reviewRating={this.reviewRating} reviewPhoto={this.reviewPhoto} 
              // {...routeProps} reviewData={this.state.reviewData} 
              />} />

              <Route path="/my-profile" render={(routeProps) => <MyProfile {...routeProps}/>} />

              <Route path="/" render={(routeProps) => <StoresContainer stores={this.displayStores()} 
              updateSearch={this.updateSearch} filterStores={this.filterStores} mapLocation={this.state.mapLocation}
              {...routeProps} /> } />
            </Switch>
          </div>
        </div>
      </ BrowserRouter>
    );
  }
}

export default App;
