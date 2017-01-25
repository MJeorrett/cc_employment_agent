import React from 'react'
import { connect } from 'react-redux'

import { setEmployers } from '../redux/actions/employers'

import EmployerLink from '../components/EmployerLink'
import ModalDialog from './ModalDialog'
import EmployerPreviewDetails from '../components/EmployerPreviewDetails'
import XmlHttpHelper from '../helpers/XmlHttpHelper'

class EmployersContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      selectedEmployer: null
    }
    this.handleEmployerSelected = this.handleEmployerSelected.bind( this )
    this.clearSelectedEmployer = this.clearSelectedEmployer.bind( this )
  }

  componentDidMount() {
    const url = "http://localhost:5000/api/employers"
    XmlHttpHelper.get( url, ( employers ) => {
      this.props.setEmployers( employers )
    })
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

    const all_employer_links = this.props.employers.map( (employer_data, index) => {
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
        <ModalDialog
          title={ this.state.selectedEmployer.company_name }
          onCloseClicked={ this.clearSelectedEmployer }>
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

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => {
  return {
    setEmployers: employers => dispatch( setEmployers( employers ) )
  }
}

EmployersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployersContainer)

export default EmployersContainer
