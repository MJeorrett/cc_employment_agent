import React from 'react'
import { Link } from 'react-router'

import LoginContainer from './containers/LoginContainer'
import LogOutButton from './components/LogOutButton'
import XmlHttpHelper from './helpers/XmlHttpHelper'

class Main extends React.Component {

  constructor() {
    super()
    this.state = {
      currentUser: null,
      baseUrl: "http://localhost:5000/"
    }
    this.setCurrentUser = this.setCurrentUser.bind( this )
  }

  componentDidMount() {
    const url = this.state.baseUrl + 'users.json'
    XmlHttpHelper.get( url, (user, status) => {
      if ( status === 200 ) {
        this.setCurrentUser( user )
      } else {
        this.setCurrentUser( null )
      }
    }, true )
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
            <span id="user-name">{ this.state.currentUser.user_name }</span>
            <LogOutButton onLogOut={ this.setCurrentUser } />
          </nav>
          <div id="content-container">
            {this.props.children }
          </div>
        </div>
      )
    }
    else {
      content = <LoginContainer baseUrl={ this.state.baseUrl } onLogin={ this.setCurrentUser } />
    }

    return (
      <div >
        { content }
      </div>
    )
  }

}

export default Main
