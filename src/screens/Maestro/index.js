import React from 'react';
import ReactFireMixin from 'reactfire';
import { browserHistory } from 'react-router';
import './Mestro.css';

var Mestro = React.createClass({
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
      <div className="Mestro"></div>
    );
  }
});

export default Mestro;