import React from 'react'

class EmployerPreviewDetails extends React.Component {

  render() {
    const employerData = this.props.employerData
    return(
      <div>
        <p><b>Contact Details:</b> { employerData.contact_details }</p>
        <p><b>Type:</b> { employerData.type }</p>
        <p><b>Website:</b> <a href={ employerData.company_website }>{ employerData.company_website }</a></p>
        <p><b>Address:</b> { employerData.address }</p>
        <p><b>Number of Students Hired:</b> { employerData.no_previous_students_hired }</p>
        <p><b>Notes:</b> { employerData.notes }</p>
      </div>
    )
  }

}

export default EmployerPreviewDetails
