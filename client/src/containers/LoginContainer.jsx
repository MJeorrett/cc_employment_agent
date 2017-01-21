import React from 'react'

class LoginContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      email: "",
      password: ""
    }
    this.handleEmailChange = this.handleEmailChange.bind( this )
    this.handlePasswordChange = this.handlePasswordChange.bind( this )
    this.handleLogInClicked = this.handleLogInClicked.bind( this )
  }

  handleEmailChange( ev ) {
    this.setState({
      email: ev.target.value
    })
  }

  handlePasswordChange( ev ) {
    this.setState({
      password: ev.target.value
    })
  }

  handleLogInClicked() {
    this.props.onLogIn( this.state.email )
  }

  render() {
    return (
      <div>
        <h2>Log In</h2>
        <input
          type="text"
          onChange={ this.handleEmailChange }
          value={ this.state.email }
          placeholder="Email"
        />
        <input
          type="password"
          onChange={ this.handlePasswordChange }
          value={ this.state.password }
          placeholder="Password"
        />
        <button onClick={ this.handleLogInClicked }>Log In</button>
      </div>
    )
  }

}

export default LoginContainer
