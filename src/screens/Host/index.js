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
      uid: '',
      name: '',
      nameAlreadyTaken: true
    };
  },

  componentWillMount: function() {
    this.firebaseRef = window.firebase.database().ref('jammins');
    window.firebase.auth().signInAnonymously().catch(function(error) {});
    window.firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
    this.bindAsArray(this.firebaseRef, 'jammins');
  },

  onAuthStateChanged: function(user) {
    if (user) {
      this.setState({uid: user.uid});
    }
  },

  onUserChange: function(event) {
    this.setState({username: event.target.value});
  },

  onNameChange: function(event) {
    this.setState({nameAlreadyTaken: false});
    var namesRef = window.firebase.database().ref('jammins').orderByChild('name').equalTo(event.target.value);
    namesRef.on('child_added', this.onNameAlreadyInUse);
    this.setState({name: event.target.value});
  },

  showSession: function() {
    browserHistory.push('/session/maestro/' + encodeURI(this.state.name));
  },

  onNameAlreadyInUse: function(data){
    this.setState({nameAlreadyTaken: true});
  },

  handleSubmit: function(event) {
    event.preventDefault();
    if(!this.state.nameAlreadyTaken && this.state.name.length > 0){
      this.firebaseRefs.jammins.push({
        name: this.state.name,
        created_by: this.state.username,
        admin: [ this.state.uid ],
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
          {this.state.nameAlreadyTaken && this.state.name.length > 0 &&
            <p className="warning">Name already in use, please choose a different one</p>
          }
          <input type='submit' value="let's go" className="btn" disabled={this.state.nameAlreadyTaken}/>
        </form>
      </div>
    );
  }
});

export default Host;