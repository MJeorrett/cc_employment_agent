import React from 'react'
import { connect } from 'react-redux'

import { setCurrentUser } from '../redux/actions/user'
import XmlHttpHelper from '../helpers/XmlHttpHelper'

class SignOutButton extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind( this )
  }

  handleClick() {
    const url = this.props.url + 'users/sign_out.json'
    XmlHttpHelper.delete( url, (success) => {
      if (success) this.props.logOut()
    })
  }

  render() {
    return (
      <button id="log-out-button" onClick={ this.handleClick }>Log Out</button>
    )
  }

}

const mapStateToProps = state => state.config
const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch( setCurrentUser(null) ) 
  }
}

SignOutButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignOutButton)

export default SignOutButton
