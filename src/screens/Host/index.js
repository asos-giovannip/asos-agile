import React from 'react';
import ReactFireMixin from 'reactfire';
import './Host.css';

var Host = React.createClass({
  mixins: [ReactFireMixin],
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

export default Host;