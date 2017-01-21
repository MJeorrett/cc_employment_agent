import React from 'react'

import employers_data from './mock_data/employers_data'
import EmployerLink from './components/EmployerLink'

class EmployersContainer extends React.Component {

  render() {

    const all_employer_links = employers_data.map( (employer_data, index) => {
      return <EmployerLink key={ index } employer_data={ employer_data } />
    })

    const columns = []
    const noCols = 3
    const noLinks = all_employer_links.length
    for ( let col = 0; col < noCols; col++ ) {
      const columnLinks = []
      for ( let i = col; i < noLinks; i += noCols ) {
        columnLinks.push( all_employer_links[i] )
      }
      columns.push(
        <div key={ col } className="employers-column">
          { columnLinks }
        </div>
      )
    }

    return (
      <div id="employers-container">
        { columns }
      </div>
    )
  }

}

export default EmployersContainer
