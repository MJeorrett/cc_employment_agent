import React from 'react'
import XmlHttpHelper from '../helpers/XmlHttpHelper'
import { connect } from 'react-redux'

import Table from './Table'
import { setJobs } from '../redux/actions/jobs'

class JobsContainer extends React.Component {

  componentDidMount() {
    const url = 'http://localhost:5000/api/jobs'
    XmlHttpHelper.get( url, (jobsData) => {
      this.props.setJobs( jobsData )
    })
  }

  render() {
    const columnNames = [
      { company_name: "Company" },
      { job_title: "Job Title" },
      { salary_range: "Salary" },
      { application_closing_date: "Closing Date" },
      { application_process: "Process" }
    ]
    return (
      <Table
        data={ this.props.jobs }
        columnNamesData={ columnNames }
      />
    )
  }

}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => {
  return {
    setJobs: jobs => dispatch( setJobs( jobs ) )
  }
}

JobsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(JobsContainer)

export default JobsContainer
