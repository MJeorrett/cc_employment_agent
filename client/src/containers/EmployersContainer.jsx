import React from 'react'
import { connect } from 'react-redux'

import { setEmployers, setSelectedEmployerId } from '../redux/actions/employers'

import EmployerLink from '../components/EmployerLink'
import ModalDialog from './ModalDialog'
import EmployerPreviewDetails from '../components/EmployerPreviewDetails'
import XmlHttpHelper from '../helpers/XmlHttpHelper'

class EmployersContainer extends React.Component {

  componentDidMount() {
    const url = "http://localhost:5000/api/employers"
    XmlHttpHelper.get( url, ( employers ) => {
      this.props.setEmployers( employers )
    })
  }

  render() {

    const all_employer_links = this.props.employers.map( (employer_data, index) => {
      return (
        <EmployerLink
          key={ index }
          employer={ employer_data }
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
    if ( this.props.selectedEmployer ) {
      modal = (
        <ModalDialog
          title={ this.props.selectedEmployer.company_name }
          onCloseClicked={ () => this.props.setSelectedEmployerId(null) }>
          <EmployerPreviewDetails employerData={ this.props.selectedEmployer } />
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

const mapStateToProps = state => {
  const selectedEmployer = state.employers.employers.find( (employer) => {
    return employer.id === state.employers.selectedEmployerId
  })
  return {
    employers: state.employers.employers,
    selectedEmployer: selectedEmployer
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setEmployers: employers => dispatch( setEmployers( employers ) ),
    setSelectedEmployerId: id => dispatch( setSelectedEmployerId( id ) )
  }
}

EmployersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployersContainer)

export default EmployersContainer
