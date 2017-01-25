import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import main_reducer from './redux/reducers/main_reducer'

import Main from './Main'
import WelcomeContainer from './containers/WelcomeContainer'
import EmployersContainer from './containers/EmployersContainer'
import JobsContainer from './containers/JobsContainer'
import JobAddEditContainer from './containers/JobAddEditContainer'
import StudentsContainer from './containers/StudentsContainer'

let store = createStore( main_reducer )

window.onload = () => {
  ReactDOM.render(
    <div>
      <Provider store={ store }>
        <Router history={ hashHistory }>
          <Route path="/" component={ Main }>
            <IndexRoute component={ WelcomeContainer } />
            <Route path="employers" component={ EmployersContainer } />
            <Route path="jobs" component={ JobsContainer } />
            <Route path="students" component={ StudentsContainer } />
            <Route path="jobs/:id" component={ JobAddEditContainer } />
          </Route>
        </Router>
      </Provider>
    </div>,
    document.getElementById('app')
  );
}
