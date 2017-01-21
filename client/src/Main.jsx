import React from 'react'
import { Link } from 'react-router'

import LoginContainer from './containers/LoginContainer'
import LogOutButton from './components/LogOutButton'

class Main extends React.Component {

  constructor() {
    super()
    this.state = {
      currentUser: "Matthew"
    }
    this.setCurrentUser = this.setCurrentUser.bind( this )
  }

  setCurrentUser( user ) {
    this.setState({
      currentUser: user
    })
  }

  render() {
    let content = null

    if ( this.state.currentUser ) {
      content = (
        <div>
          <nav>
            <span className="logo">CC Employment Agent</span>
            <div className="nav-padding"></div>
            <Link className="button" activeClassName="active-link" to="/employers">Employers</Link>
            <Link className="button" activeClassName="active-link" to="/jobs">Jobs</Link>
            <Link className="button" activeClassName="active-link" to="/students">Students</Link>
            <span id="user-name">{ this.state.currentUser }</span>
            <LogOutButton onLogOut={ this.setCurrentUser } />
          </nav>
          <div id="content-container">
            {this.props.children }
          </div>
        </div>
      )
    }
    else {
      content = <LoginContainer onLogIn={ this.setCurrentUser } />
    }

    return (
      <div >
        { content }
      </div>
    )
  }

}

export default Main
