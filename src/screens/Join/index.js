import React from 'react';
import './Join.css';

var Join = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
  },

  render: function() {
    return (
      <div className="Join">
        <form className='joinSessionForm' onSubmit={this.handleSubmit}>
          <h2><span>😎</span> it's time to jam</h2>
          <p>To join your team enter your name and the unique name for this session</p>
          <label>Your name:</label>
          <input type='text' placeholder='Your name' ref='author' />
          <label>Session name:</label>
          <input type='text' placeholder='Session name' ref='text' value={this.props.params.id} />
          <input type='submit' value="let's go" className="btn" />
        </form>
      </div>
    );
  }
});

export default Join;