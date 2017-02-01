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
            <h2>We jammin'! <span>🎷</span></h2>
            <p>Minimal. Clean. Simple.</p>
            <ul className="Home-links">
                <li><Link className="btn secondry" to="/session/create">Create a new session</Link></li>
                <li><Link className="btn" to="/session/join">Join a session</Link></li>
            </ul>
            <RecentSessionsList/>
        </div>
    );
  }
});

export default Home;