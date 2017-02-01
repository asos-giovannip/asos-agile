import React from 'react';
import './NoMatch.css';

var NoMatch = React.createClass({
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

export default NoMatch;