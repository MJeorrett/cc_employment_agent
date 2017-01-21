import React from 'react'

class EmployerPreviewDetails extends React.Component {

  render() {
    const employerData = this.props.employerData
    return(
      <div>
        <p>{ employerData.company_name }</p>
        <a href={ employerData.company_website }>Website</a>
        <p>Contact Details: { employerData.contact_details }</p>
      </div>
    )
  }

}

export default EmployerPreviewDetails
