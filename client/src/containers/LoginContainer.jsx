import React from 'react'
import XmlHttpHelper from '../helpers/XmlHttpHelper'

import { connect } from 'react-redux'
import { setCurrentUser, setUserEmail, setUserPassword } from '../redux/actions'

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
    const email = ev.target.value
    this.props.setUserEmail( email )
  }

  handlePasswordChange( ev ) {
    const password = ev.target.value
    this.props.setUserPassword( password )
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
      this.props.setCurrentUser( user )
    })
  }

  render() {
    return (
      <div>
        <h2>Log In</h2>
        <input
          type="text"
          onChange={ this.handleEmailChange }
          value={ this.props.email }
          placeholder="Email"
        />
        <input
          type="password"
          onChange={ this.handlePasswordChange }
          value={ this.props.password }
          placeholder="Password"
        />
        <button onClick={ this.handleLogInClicked }>Log In</button>
      </div>
    )
  }

}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: ( user ) => dispatch( setCurrentUser( user ) ),
    setUserEmail: ( email ) => dispatch( setUserEmail( email ) ),
    setUserPassword: ( password ) => dispatch( setUserPassword( password ) )
  }
}

LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)

export default LoginContainer
