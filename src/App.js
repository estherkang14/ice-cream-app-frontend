import React from 'react';
import logo from './logo.svg';
import './App.css';
import StoresContainer from './containers/StoresContainer';
import NavBar from './components/NavBar';

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
      <div className="App">
        <NavBar />
        <StoresContainer stores={this.state.stores} /> 
      </div>
    );
  }
}

export default App;
