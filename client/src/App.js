import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation.js'
import Predictor from './Predictor.js'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Predictor />
      </div>
    );
  }
}

export default App;
