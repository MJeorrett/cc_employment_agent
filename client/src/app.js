import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Main from './Main'
import WelcomeContainer from './WelcomeContainer'
import EmployersContainer from './EmployersContainer'
import JobsContainer from './JobsContainer'
import StudentsContainer from './StudentsContainer'

window.onload = () => {
  ReactDOM.render(
    <div>
      <Router history={ hashHistory }>
        <Route path="/" component={ Main }>
          <IndexRoute component={ WelcomeContainer } />
          <Route path="employers" component={ EmployersContainer } />
          <Route path="jobs" component={ JobsContainer } />
          <Route path="students" component={ StudentsContainer } />
        </Route>
      </Router>
    </div>,
    document.getElementById('app')
  );
}
