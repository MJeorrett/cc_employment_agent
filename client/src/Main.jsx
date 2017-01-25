import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { setCurrentUser } from './redux/actions'

import LoginContainer from './containers/LoginContainer'
import LogOutButton from './components/LogOutButton'
import XmlHttpHelper from './helpers/XmlHttpHelper'

class Main extends React.Component {

  constructor() {
    super()
    this.state = {
      currentUser: null,
      baseUrl: "http://localhost:5000/"
    }
  }

  componentDidMount() {
    const url = this.state.baseUrl + 'users.json'
    XmlHttpHelper.get( url, (user, status) => {
      if ( status === 200 ) {
        console.log("found user");
        this.props.setCurrentUser( user )
      } else {
        this.props.setCurrentUser( null )
      }
    })
  }

  render() {
    console.log(this.props);
    let content = null

    if ( this.props.currentUser ) {
      content = (
        <div>
          <nav>
            <span className="logo">CC Employment Agent</span>
            <div className="nav-padding"></div>
            <Link className="button" activeClassName="active-link" to="/employers">Employers</Link>
            <Link className="button" activeClassName="active-link" to="/jobs">Jobs</Link>
            <Link className="button" activeClassName="active-link" to="/students">Students</Link>
            <span id="user-name">{ this.props.currentUser.user_name }</span>
            <LogOutButton onLogOut={ () => this.props.setCurrentUser(null) } />
          </nav>
          <div id="content-container">
            {this.props.children }
          </div>
        </div>
      )
    }
    else {
      content = <LoginContainer baseUrl={ this.state.baseUrl } />
    }

    return (
      <div >
        { content }
      </div>
    )
  }

}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: ( user ) => {
      console.log("user:", user );
      return dispatch( setCurrentUser( user ) )
    }
  }
}

Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

export default Main
