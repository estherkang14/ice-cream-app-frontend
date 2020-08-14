import React from 'react';
import logo from './logo.svg';
import './App.css';
import StoresContainer from './containers/StoresContainer';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

let BASEURL = "http://localhost:3000/"
let STORESURL = BASEURL + "stores"
class App extends React.Component {
  state = {
    stores: []
  }

  componentDidMount() {
    fetch(STORESURL)
    .then(response => response.json())
    .then(stores => this.setState({ stores }))
  }

  render() { 
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <div className="container">
            <Switch>
              <Route path="/signup" render={(routeProps) => <SignUp {...routeProps} /> } />
              <Route path="/" render={(routeProps) => <StoresContainer stores={this.state.stores} {...routeProps} /> } />
            </Switch>
          </div>
        </div>
      </ BrowserRouter>
    );
  }
}

export default App;
