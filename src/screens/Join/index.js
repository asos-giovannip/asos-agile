import React from 'react';
import './Join.css';

var Join = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
  },

  render: function() {
    return (
      <form className='commentForm' onSubmit={this.handleSubmit}>
        <input type='text' placeholder='Your name' ref='author' />
        <input type='text' placeholder='Say something...' ref='text' />
        <input type='submit' value='Post' />
      </form>
    );
  }
});

export default Join;