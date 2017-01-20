import React from 'react'
import { Link } from 'react-router'

import LoginContainer from './LoginContainer'

class Main extends React.Component {

  constructor() {
    super()
    this.state = {
      currentUser: null
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
          <span>CodeClan Employment Agent</span>
          <Link to="/employers">Employers</Link>
          <span>{ this.state.currentUser }</span>
          {this.props.children }
        </div>
      )
    }
    else {
      content = <LoginContainer onLogIn={ this.setCurrentUser } />
    }

    return (
      <div>
        { content }
      </div>
    )
  }

}

export default Main
