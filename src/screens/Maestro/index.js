import React from 'react';
import ReactFireMixin from 'reactfire';
//import { browserHistory } from 'react-router';
import './Mestro.css';

var Mestro = React.createClass({
  mixins: [ReactFireMixin],

   getInitialState: function() {
    return {
      jam: {},
      username: '',
      name: ''
    };
  },

  componentWillMount: function() {
    this.firebaseRef = window.firebase.database().ref('jammins');
    this.bindAsArray(this.firebaseRef.orderByChild("name").equalTo(this.props.params.id), 'jam');
  },

  componentWillUnmount: function() {
    this.firebaseRef.off();
  },

  render: function() {
    return (
      <div className="Mestro">{this.state.jam.name}</div>
    );
  }
});

export default Mestro;