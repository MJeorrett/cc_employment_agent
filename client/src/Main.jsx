import React from 'react'
import { Link } from 'react-router'

class Main extends React.Component {

  render() {
    return (
      <div>
        <h1>CodeClan Employment Agent</h1>
        <Link to="/employers">Employers</Link>
        { this.props.children }
      </div>
    )
  }

}

export default Main
