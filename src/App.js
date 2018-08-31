import React, { Component } from 'react';
import './App.css';
import { Routes } from './routes';
import { HashRouter as Router } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import UserService from './services/UserService';
library.add(fas);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null
    };
  }
  componentDidMount() {
    UserService.checkIfUser().then(loggedInUser => {
      this.setState({ loggedInUser })
      // console.log(this.state.loggedInUser);
    }).catch(() => {
      alert('please sign up')
    })
  }
  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="App">
            <Header />
            <Routes />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
