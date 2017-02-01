import React from 'react';
import { Link } from 'react-router';
import ReactFireMixin from 'reactfire';
import './RecentSessionsList.css';

var RecentSessionsList = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function() {
    return {
      jammins: {},
      username: ''
    };
  },

  componentWillMount: function() {
    this.firebaseRef = window.firebase.database().ref('jammins');
    this.bindAsArray(this.firebaseRef.limitToLast(10), 'jammins');
  },

  componentWillUnmount: function() {
    this.firebaseRef.off();
  },

  render: function() {
    var _this = this;
    var createItem = function(jam, index) {
      return (
        <li key={ index }>
          <Link to={"/session/join/" + jam.name}>{ jam.name }</Link>
        </li>
      );
    };
    return (
        <div className="RecentSessionsList">
            <h3>Recent Sessions</h3>
            <ul>{ this.state.jammins.map(createItem) }</ul>
        </div>
    );
  }
});

export default RecentSessionsList;