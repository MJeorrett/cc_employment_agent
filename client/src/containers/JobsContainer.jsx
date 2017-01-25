import React from 'react'

import Table from './Table'

class JobsContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      jobsData = []
    }
  }

  componentDidMount() {
    const url = 'http://localhost:5000/api/jobs'
    XmlHttpHelper.get( url, (jobsData) => {
      this.setState({
        jobsData: jobsData
      })
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
        data={ this.state.jobsData }
        columnNamesData={ columnNames }
      />
    )
  }

}

export default JobsContainer
