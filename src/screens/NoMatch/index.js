import React from 'react';
import { Link } from 'react-router';
import logo from './sad.svg';
import './NoMatch.css';

var NoMatch = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
  },

  render: function() {
    return (
      <div className="NoMatch">
        <h1>Sorry, can't help you here...</h1>
        <img src={logo} alt=":ops:" title="Sorry, can't help you here!" className="NoMatch-logo" />
        <div>
          <Link to="/" className="link">Back to home</Link>
        </div>
      </div>
    );
  }
});

export default NoMatch;