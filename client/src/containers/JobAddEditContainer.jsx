import React from 'react'
import { connect } from 'react-redux'

import XmlHttpHelper from '../helpers/XmlHttpHelper'

import { setSelectedJobId, setFieldOnJob } from '../redux/actions/jobs'

class JobAddEditContainer extends React.Component {

  constructor() {
    super()
    this.handleJobSpecSelected = this.handleJobSpecSelected.bind( this )
  }

  handleJobSpecSelected( ev ) {
    const reader = new FileReader()
    const file = ev.target.files[0]
    // const filePath = ev.target.value
    // const filename = filePath.substr( filePath.lastIndexOf( '\\' ) + 1 )
    // console.log( "filename:", filename );

    reader.onload = ( upload ) => {
      console.log( "upload:", upload );
      this.props.setJobSpecOnJob( upload.target.result, this.props.job.id )
    }
    reader.readAsDataURL( file );
  }

  render() {
    if ( this.props.job ) {
      return (
        <div>
          <label htmlFor="company-name">Company Name</label>
            <input id="company-name" type="text" value={ this.props.job.company_name } /><br />
          <label htmlFor="job-title">Job Title</label>
            <input id="job-title" type="text" value={ this.props.job.job_title } /><br />
          <label htmlFor="salary-range-min">Salary Range Min</label>
            <input id="salary-range-min" type="number" min="0" max="1000000" step="1" value={ this.props.job.salary_range_min } /><br />
          <label htmlFor="salary-range-max">Salary Range Max</label>
            <input id="salary-range-max" type="number" min="0" max="1000000" step="1" value={ this.props.job.salary_range_max } /><br />
          <label htmlFor="application-closing-date">Applcation Closing Date</label>
            <input id="application-closing-date" type="date" value={ this.props.job.application_closing_date } /><br />
          <label htmlFor="application-process">Application Process</label>
            <input id="application-process" type="text" value={ this.props.job.application_process} /><br />
          <label htmlFor="job-spec">Job Spec</label>
            <input id="job-spec" type="file" onChange={ this.handleJobSpecSelected } />
            <a href={ this.props.job.job_spec } download={ this.props.job.job_spec_filename }>Download: { this.props.job.job_spec_filename }</a>
        </div>
      )
    }
    else {
      return null
    }
  }

}

const mapStateToProps = (state, ownProps) => {
  console.log("state.jobs:", state.jobs);
  const theJob = state.jobs.jobs.find( job => {
    return job.id.toString() === ownProps.params.id
  })
  return { job: theJob }
}
const mapDispatchToProps = dispatch => {
  return {
    setSelectedJobId: id => {
      console.log("setting id to:", id );
      dispatch( setSelectedJobId( id ) )
    },
    setJobSpecOnJob: (jobSpec, jobId) => dispatch( setFieldOnJob( 'job_spec', jobSpec, jobId ) )
  }
}

JobAddEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)( JobAddEditContainer )

export default JobAddEditContainer
