import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld.js';
import GreetingContainer from './GreetingContainer.js';
import Counter from './counter.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <HelloWorld />
        </header>
        <GreetingContainer />
        <Counter />
      </div>
    );
  }
}

export default App;
