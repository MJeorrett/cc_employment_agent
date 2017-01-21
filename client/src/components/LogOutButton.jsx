import React from 'react'

class SignOutButton extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind( this )
  }

  handleClick() {
    this.props.onLogOut( null )
  }

  render() {
    return (
      <button onClick={ this.handleClick }>Log Out</button>
    )
  }

}

export default SignOutButton
