import React from 'react';
import './App.css';
import StoresContainer from './containers/StoresContainer';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

let BASEURL = "http://localhost:3000/"
let STORESURL = BASEURL + "stores"
class App extends React.Component {
  state = {
    stores: [],
    search: ""
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

  render() { 
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <div className="container">
            <Switch>
              <Route path="/signup" render={(routeProps) => <SignUp  {...routeProps} /> } />
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
