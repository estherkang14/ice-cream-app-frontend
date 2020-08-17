import React from 'react';
import './App.css';
import StoresContainer from './containers/StoresContainer';
import NavBar from './components/NavBar';
import NavBar2 from './components/NavBar2';
import SignUp from './components/SignUp';
import Login from './components/LogIn';
import StorePage from './components/StorePage';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

let BASEURL = "http://localhost:3000/"
let STORESURL = BASEURL + "stores"
let USERSURL = BASEURL + "users"
let REVIEWSURL = BASEURL + "reviews"
let LOGINURL = BASEURL + 'login'

class App extends React.Component {
  state = {
    stores: [],
    search: "",
    reviewForm: { 
      text: "",
      rating: "", 
      photo: ""
    }, 
    username: "",
    password: "",
    location: "",
    loggedIn: false
  }

  componentDidMount() {
    fetch(STORESURL)
    .then(response => response.json())
    .then(stores => this.setState({ stores }))
    console.log(localStorage)
  }

  updateSearch = (e) => {
    let newSearch = e.target.value
    this.setState({
      search: newSearch
    })
  }

  addNewReview = (userId, storeId, text, rating, photo) => {
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        user_id: userId,
        store_id: storeId,
        text,
        rating,
        photo
      })
    }
    
    fetch(REVIEWSURL, options)
    .then(response => response.json())
    .then(reviewData => console.log(reviewData))
  }

  displayStores = () => {
    let stores = this.state.stores 
    let search = this.state.search
    if (stores.length > 0 && search !== "") {
      return stores.filter(store => store.name.toLowerCase().includes(search.toLowerCase()))
    } else {
      return stores
    }
  }

  reviewText = (e) => {
    let reviewForm = {...this.state.reviewForm, text: e.target.value}
    this.setState({
      reviewForm
    })
  }

  reviewRating = (e) => {
    let reviewForm = {...this.state.reviewForm, rating: e.target.value}
    this.setState({
      reviewForm
    })
  }

  reviewPhoto = (e) => {
    let reviewForm = {...this.state.reviewForm, photo: e.target.value}
    console.log(reviewForm)
  }

  postReview = (e, store) => {
    e.preventDefault()
    console.log(store.id)
   
      let reviewData = {...this.state.reviewData, user_id: this.state.userId, store_id: store.id}
      let options = {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          accept: "application/json"
        },
        body: JSON.stringify({ reviewData })
      }

      fetch(REVIEWSURL, options)
      .then(response => response.json())
      .then(console.log("Review Added"))
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

  signUp = (e) => {
    e.preventDefault()

    const user = {
      username: this.state.username,
      password: this.state.password,
      location: this.state.location
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
      this.setState({ loggedIn: true, userId: data.user.id }, () => {debugger})
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
      // debugger
      localStorage.setItem("token", data.token)
      localStorage.setItem("userId", data.user.id)
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
    }, localStorage.clear())
    
  }

  showNavbar = () => {
    if (this.state.loggedIn) {
      return (
        <NavBar2 logOut={this.logOut} />
      )
    } else {
      return (
        <NavBar />
      )
    }
  }
 


  render() { 
    return (

      <BrowserRouter>
        <div className="App">
        {/* { (this.state.loggedIn) ? <NavBar2 logOut={this.logOut}/> : <NavBar/> } */}
        {/* <NavBar /> */}
        {this.showNavbar()}
          <div className="container">
            <Switch>
              <Route path="/login" render={(routeProps) => (this.state.loggedIn) ? <Redirect to="/" /> : 
              <Login setUsername={this.setUsername} setPassword={this.setPassword}
              {...routeProps} logIn={this.logIn} /> }/>

              <Route path="/signup" render={(routeProps) => (this.state.loggedIn) ? <Redirect to="/" /> :
              <SignUp setUsername={this.setUsername}
              setPassword={this.setPassword} setLocation={this.setLocation} signUp={this.signUp}
              {...routeProps} /> } />

              <Route path="/store/:id" render={(routeProps) => <StorePage reviewText={this.reviewText}
              reviewRating={this.reviewRating} reviewPhoto={this.reviewPhoto} postReview={this.postReview}
              {...routeProps} />} />

              <Route path="/" render={(routeProps) => <StoresContainer stores={this.displayStores()} 
              updateSearch={this.updateSearch} {...routeProps} /> } />
            </Switch>
          </div>
        </div>
      </ BrowserRouter>
    );
  }
}

export default App;
