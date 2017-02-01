import React from 'react';
import RecentSessionsList from './components/RecentSessionsList';
import { Link } from 'react-router';
import './Home.css';

var Home = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
  },

  render: function() {
    return (
        <div className="Home">
            <ul className="Home-links">
                <li><Link className="secondry" to="/session/host">Create a new session</Link></li>
                <li><Link to="/session/join">Join a session</Link></li>
            </ul>
            <RecentSessionsList/>
        </div>
    );
  }
});

export default Home;