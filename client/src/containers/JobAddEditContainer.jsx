import React from 'react'
import { connect } from 'react-redux'

import XmlHttpHelper from '../helpers/XmlHttpHelper'

import { setFieldOnJob } from '../redux/actions/jobs'
import SlackButton from '../components/SlackButton'

class JobAddEditContainer extends React.Component {

  constructor() {
    super()
    this.handleInputChange = this.handleInputChange.bind( this )
    this.handleJobSpecSelected = this.handleJobSpecSelected.bind( this )
  }

  handleInputChange( ev ) {
    this.props.setFieldOnJob( ev.target.id, ev.target.value, parseInt(this.props.params.id) )
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
          <label htmlFor="company_name">Company Name</label>
            <input
              id="company_name"
              type="text"
              value={ this.props.job.company_name }
              onChange={ this.handleInputChange }
            /><br />
          <label htmlFor="job_title">Job Title</label>
            <input
              id="job_title"
              type="text"
              value={ this.props.job.job_title }
              onChange={ this.handleInputChange }
            /><br />
          <label htmlFor="salary_range_min">Salary Range Min</label>
            <input
              id="salary_range_min"
              type="number"
              min="0"
              max="1000000"
              step="1"
              value={ this.props.job.salary_range_min }
              onChange={ this.handleInputChange }
            /><br />
          <label htmlFor="salary_range_max">Salary Range Max</label>
            <input
              id="salary_range_max"
              type="number"
              min="0"
              max="1000000"
              step="1"
              value={ this.props.job.salary_range_max }
              onChange={ this.handleInputChange }
            /><br />
          <label htmlFor="application_closing_date">Applcation Closing Date</label>
            <input
              id="application_closing_date"
              type="date"
              value={ this.props.job.application_closing_date }
              onChange={ this.handleInputChange }
            /><br />
          <label htmlFor="application_process">Application Process</label>
            <input
              id="application_process"
              type="text"
              value={ this.props.job.application_process}
              onChange={ this.handleInputChange }
            /><br />
          <label htmlFor="job_spec">Job Spec</label>
            <input
              id="job_spec"
              type="file"
              onChange={ this.handleJobSpecSelected }
            />
            <a
              href={ this.props.job.job_spec }
              download={ this.props.job.job_spec_filename }
            >
              Download: { this.props.job.job_spec_filename }
            </a>
            <SlackButton job={ this.props.job } />
        </div>
      )
    }
    else {
      return null
    }
  }

}

const mapStateToProps = (state, ownProps) => {
  const theJob = state.jobs.jobs.find( job => {
    return job.id.toString() === ownProps.params.id
  })
  return { job: theJob }
}
const mapDispatchToProps = dispatch => {
  return {
    setFieldOnJob: (field, newValue, jobId) => dispatch( setFieldOnJob( field, newValue, jobId ) )
  }
}

JobAddEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)( JobAddEditContainer )

export default JobAddEditContainer
