import React from 'react'
import { connect } from 'react-redux'

import { setSelectedEmployerId } from '../redux/actions/employers'


class EmployerLink extends React.Component {

  render() {
    console.log(this.props.employer)
    const data = this.props.employer
    const style = {
      backgroundImage: `url(${data.company_logo_url})`
    }

    return(
      <div
        className="employer-link"
        style={ style }
        onClick={ () => this.props.setSelectedEmployerId( data.id ) }
        title={ data.company_name }
      ></div>
    )
  }

}

const mapStateToProps = ( state ) => {
  return state
}
const mapDispatchToProps = dispatch => {
  return {
    setSelectedEmployerId: id => dispatch( setSelectedEmployerId( id ) )
  }
}

EmployerLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployerLink)

export default EmployerLink
