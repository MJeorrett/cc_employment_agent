import React from 'react'
import { connect } from 'react-redux'

import XmlHttpHelper from '../helpers/XmlHttpHelper'
import { setFieldOnJob } from '../redux/actions/jobs'

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
      console.log("this.props:", this.props);
      this.props.setSlackDataOnJob( JSON.stringify( response ), this.props.job.id )
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
const mapDispatchToProps = dispatch => {
  return {
    setSlackDataOnJob: (slackData, jobId) => {
      console.log("set slack data on job called");
      dispatch( setFieldOnJob( 'slack_data', slackData, jobId ) )
    }
  }
}

SlackButton = connect(
  mapStateToProps,
  mapDispatchToProps
)( SlackButton )

export default SlackButton
