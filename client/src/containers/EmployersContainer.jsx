import React from 'react'

import employers_data from '../mock_data/employers_data'
import EmployerLink from '../components/EmployerLink'
import ModalDialog from './ModalDialog'
import EmployerPreviewDetails from '../components/EmployerPreviewDetails'

class EmployersContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      selectedEmployer: null
    }
    this.handleEmployerSelected = this.handleEmployerSelected.bind( this )
    this.clearSelectedEmployer = this.clearSelectedEmployer.bind( this )
  }

  handleEmployerSelected( employerData ) {
    this.setState({
      selectedEmployer: employerData
    })
  }

  clearSelectedEmployer() {
    this.setState({
      selectedEmployer: null
    })
  }

  render() {

    const all_employer_links = employers_data.map( (employer_data, index) => {
      return (
        <EmployerLink
          key={ index }
          employer_data={ employer_data }
          onEmployerSelected={ this.handleEmployerSelected }
        />
      )
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

    let modal = ""
    if ( this.state.selectedEmployer ) {
      modal = (
        <ModalDialog onCloseClicked={ this.clearSelectedEmployer }>
          <EmployerPreviewDetails employerData={ this.state.selectedEmployer } />
        </ModalDialog>
      )
    }

    return (
      <div id="employers-container">
        { columns }
        { modal }
      </div>
    )
  }

}

export default EmployersContainer
