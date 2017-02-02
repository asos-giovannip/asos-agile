import React, { Component } from 'react';
import logo from './icon-asos.svg';
import { Link } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
          <Link to="/" className="App-header-logo">Jammin</Link>
        </div>
        <div className="Screen">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
