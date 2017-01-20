import React from 'react'

class LoginContainer extends React.Component {

  constructor() {
    super()
    this.handleLogInClicked = this.handleLogInClicked.bind( this )
  }

  handleLogInClicked() {
    this.props.onLogIn( "Matthew Jeorrett" )
  }

  render() {
    return (
      <div>
        <h2>Log In</h2>
        <button onClick={ this.handleLogInClicked }>Sign In</button>
      </div>
    )
  }

}

export default LoginContainer
