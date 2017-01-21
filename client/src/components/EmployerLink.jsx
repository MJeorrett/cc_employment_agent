import React from 'react'

class EmployerLink extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind( this )
  }

  handleClick() {
    this.props.onEmployerSelected( this.props.employer_data )
  }

  render() {
    const style = {
      backgroundImage: `url(${this.props.employer_data.company_logo_url})`
    }

    return(
      <div
        className="employer-link"
        style={ style }
        onClick={ this.handleClick }
      ></div>
    )
  }

}

export default EmployerLink
