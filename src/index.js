import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Home from './screens/Home';
import Host from './screens/Host';
import Join from './screens/Join';
import NoMatch from './screens/NoMatch';

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="session" component={Host}>
        <Route path="/session/create" component={Host}/>
        <Route path="/session/join/:id" component={Join}/>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
