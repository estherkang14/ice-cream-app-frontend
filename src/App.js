import React from 'react';
import './App.css';
import StoresContainer from './containers/StoresContainer';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import Login from './components/LogIn';
import StorePage from './components/StorePage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

let BASEURL = "http://localhost:3000/"
let STORESURL = BASEURL + "stores"
let USERSURL = BASEURL + "users"
let REVIEWSURL = BASEURL + "reviews"
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
    password: ""
  }

  componentDidMount() {
    fetch(STORESURL)
    .then(response => response.json())
    .then(stores => this.setState({ stores}))
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

  signUp = (e) => {
    e.preventDefault()
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      }, 
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }

    fetch(USERSURL, options)
    .then(response => response.json())
    .then(data => {localStorage.token = data.token})
  }

  render() { 
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <div className="container">
            <Switch>
              <Route path="/login" render={(routeProps) => <Login {...routeProps} />} />
              <Route path="/signup" render={(routeProps) => <SignUp setUsername={this.setUsername}
              setPassword={this.setPassword} {...routeProps} signUp={this.signUp}/> } />
              <Route path="/store/:id" render={(routeProps) => <StorePage reviewText={this.reviewText}
              reviewRating={this.reviewRating} reviewPhoto={this.reviewPhoto} {...routeProps} />} />
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
