import React from 'react'

import jobsData from '../mock_data/jobs_data'
import Table from './Table'

class JobsContainer extends React.Component {

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
        data={ jobsData }
        columnNamesData={ columnNames }
      />
    )
  }

}

export default JobsContainer
