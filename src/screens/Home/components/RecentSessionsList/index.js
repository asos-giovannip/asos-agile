import React from 'react';
import { Link } from 'react-router';
import ReactFireMixin from 'reactfire';
import './RecentSessionsList.css';

var RecentSessionsList = React.createClass({
  mixins: [ReactFireMixin],
  render: function() {
    return (
        <div className="RecentSessionsList">
            <p>Recent Sessions</p>
        </div>
    );
  }
});

export default RecentSessionsList;