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
    const data = this.props.employer_data
    const style = {
      backgroundImage: `url(${data.company_logo_url})`
    }

    return(
      <div
        className="employer-link"
        style={ style }
        onClick={ this.handleClick }
        title={ data.company_name }
      ></div>
    )
  }

}

export default EmployerLink
