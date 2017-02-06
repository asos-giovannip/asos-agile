import React from 'react';
import ReactFireMixin from 'reactfire';
//import { browserHistory } from 'react-router';
import './Voice.css';

var Voice = React.createClass({
  mixins: [ReactFireMixin],

   getInitialState: function() {
    return {
      jammins: {},
      username: '',
      name: ''
    };
  },

  componentWillMount: function() {
    this.firebaseRef = window.firebase.database().ref('jammins');
    this.bindAsArray(this.firebaseRef.limitToLast(25), 'jammins');
  },

  componentWillUnmount: function() {
    this.firebaseRef.off();
  },

  render: function() {
    return (
      <div className="Voice"></div>
    );
  }
});

export default Voice;