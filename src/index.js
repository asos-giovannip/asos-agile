import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Home from './screens/Home';
import Host from './screens/Host';
import Join from './screens/Join';
import Maestro from './screens/Maestro';
import Voice from './screens/Voice';
import NoMatch from './screens/NoMatch';

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="session/create" component={Host}/>
      <Route path="session/join" component={Join}>
        <Route path="/session/join/:id" component={Join}/>
      </Route>
      <Route path="/session/maestro/:id" component={Maestro}/>
      <Route path="/session/:id" component={Voice}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
