import React from 'react'
import XmlHttpHelper from '../helpers/XmlHttpHelper'

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
    const url = this.props.baseUrl + 'users/sign_in.json'
    const payload = {
      user: {
        email: this.state.email,
        password: this.state.password
      }
    }
    XmlHttpHelper.post( url, payload, ( user ) => {
      console.log( "props:", this.props )
      this.props.onLogin( user )
    }, true )
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
