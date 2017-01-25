import React from 'react'

import XmlHttpHelper from '../helpers/XmlHttpHelper'

class JobAddEditContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      jobData: {}
    }
    this.handleJobSpecSelected = this.handleJobSpecSelected.bind( this )
  }

  componentDidMount() {
    XmlHttpHelper.get( 'http://localhost:5000/api/jobs/' + this.props.params.id, ( jobData) => {
      jobData.application_closing_date = jobData.application_closing_date.substring(0, 10)
      this.setState({
        jobData: jobData
      })
    })
  }

  handleJobSpecSelected( ev ) {
    const reader = new FileReader()
    const file = ev.target.files[0]
    const filePath = ev.target.value
    const filename = filePath.substr( filePath.lastIndexOf( '\\' ) + 1 )
    console.log( "filename:", filename );

    reader.onload = ( upload ) => {
      console.log( "upload:", upload );
      const jobData = this.state.jobData
      jobData.job_spec = upload.target.result
      jobData.job_spec_filename = filename
      this.setState({
        jobData: jobData
      })
    }
    reader.readAsDataURL( file );
  }

  render() {
    return (
      <div>
        <label htmlFor="company-name">Company Name</label>
          <input id="company-name" type="text" value={ this.state.jobData.company_name } /><br />
        <label htmlFor="job-title">Job Title</label>
          <input id="job-title" type="text" value={ this.state.jobData.job_title } /><br />
        <label htmlFor="salary-range-min">Salary Range Min</label>
          <input id="salary-range-min" type="number" min="0" max="1000000" step="1" value={ this.state.jobData.salary_range_min } /><br />
        <label htmlFor="salary-range-max">Salary Range Max</label>
          <input id="salary-range-max" type="number" min="0" max="1000000" step="1" value={ this.state.jobData.salary_range_max } /><br />
        <label htmlFor="application-closing-date">Applcation Closing Date</label>
          <input id="application-closing-date" type="date" value={ this.state.jobData.application_closing_date } /><br />
        <label htmlFor="application-process">Application Process</label>
          <input id="application-process" type="text" value={ this.state.jobData.application_process} /><br />
        <label htmlFor="job-spec">Job Spec</label>
          <input id="job-spec" type="file" onChange={ this.handleJobSpecSelected } />
          <a href={ this.state.jobData.job_spec } download={ this.state.jobData.job_spec_filename }>Download: { this.state.jobData.job_spec_filename }</a>
      </div>
    )
  }

}

export default JobAddEditContainer
