import React from 'react';
import './App.css';
import StoresContainer from './containers/StoresContainer';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import StorePage from './components/StorePage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

let BASEURL = "http://localhost:3000/"
let STORESURL = BASEURL + "stores"
class App extends React.Component {
  state = {
    stores: [],
    search: "",
    reviewForm: { 
      text: "",
      rating: "", 
      photo: ""
    }
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

  render() { 
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <div className="container">
            <Switch>
              <Route path="/signup" render={(routeProps) => <SignUp  {...routeProps} /> } />
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
