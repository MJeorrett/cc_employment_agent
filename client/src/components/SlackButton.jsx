import React from 'react'
import { connect } from 'react-redux'

import XmlHttpHelper from '../helpers/XmlHttpHelper'

class SlackButton extends React.Component {

  constructor() {
    super()
    this.sendToSlack = this.sendToSlack.bind( this )
  }

  sendToSlack() {
    const payload = {
      slack: this.props.job
    }
    console.log( 'payload:', payload );
    XmlHttpHelper.post( this.props.url, payload, ( response ) => {
      console.log( "received response from slack:", response );
    }, false )
  }

  render() {
    return (
      <button onClick={ this.sendToSlack }>Post to Slack</button>
    )
  }

}

const mapStateToProps = state => {
  return {
    url: state.config.url + 'api/slacks'
  }
}

SlackButton = connect(
  mapStateToProps
)( SlackButton )

export default SlackButton
