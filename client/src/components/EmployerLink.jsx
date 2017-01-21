import React from 'react'

class EmployerLink extends React.Component {

  render() {
    const style = {
      backgroundImage: `url(${this.props.employer_data.company_logo_url})`
    }

    return(
      <div className="employer-link" style={ style }></div>
    )
  }

}

export default EmployerLink
