var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Main from './Main'
import WelcomeContainer from './WelcomeContainer'
import EmployersContainer from './EmployersContainer'
import JobsContainer from './JobsContainer'

window.onload = function(){
  ReactDOM.render(
    <div>
      <Router history={ hashHistory }>
        <Route path="/" component={ Main }>
          <IndexRoute component={ WelcomeContainer } />
          <Route path="employers" component={ EmployersContainer } />
          <Route path="jobs" component={ JobsContainer } />
        </Route>
      </Router>
    </div>,
    document.getElementById('app')
  );
}
