import React from 'react';
import ReactFireMixin from 'reactfire';
import { browserHistory } from 'react-router';
import './Host.css';

var Host = React.createClass({
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

  onUserChange: function(event) {
    this.setState({username: event.target.value});
  },

  onNameChange: function(event) {
    this.setState({name: event.target.value});
  },

  showSession: function() {
    browserHistory.push('/session/maestro/' + encodeURI(this.state.name));
  },

  handleSubmit: function(event) {
    event.preventDefault();
    if (this.state.name && this.state.name.trim().length !== 0) {
      this.firebaseRefs.jammins.push({
        name: this.state.name,
        admin: this.state.username,
        date_created: new Date().getTime()
      }).then(this.showSession);
    }
  },

  render: function() {
    return (
      <div className="Host">
        <form className='createSessionForm' onSubmit={this.handleSubmit}>
          <h2>You are the session master! <span>🔮</span></h2>
          <p>To create a new session enter your name and a unique name for this session</p>
          <label>Your name:</label>
          <input type='text' placeholder='Your name' ref='author' onChange={ this.onUserChange } value={ this.state.username } />
          <label>Session name:</label>
          <input type='text' placeholder='Session name' ref='text' onChange={ this.onNameChange } value={ this.state.name }/>
          <input type='submit' value="let's go" className="btn" />
        </form>
      </div>
    );
  }
});

export default Host;