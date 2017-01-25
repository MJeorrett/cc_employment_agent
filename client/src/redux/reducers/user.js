import { SET_CURRENT_USER, SET_USER_EMAIL, SET_USER_PASSWORD } from '../actions/user'

const defaultUserState = {
  currentUser: undefined,
  email: "",
  password: "",
}

function user( state = defaultUserState, action ) {
  switch ( action.type ) {
    case SET_CURRENT_USER:
      return Object.assign( {}, state, {
        currentUser: action.currentUser
      })
    case SET_USER_EMAIL:
      return Object.assign( {}, state, {
        email: action.email
      })
    case SET_USER_PASSWORD:
      return Object.assign( {}, state, {
        password: action.password
      })
    default:
      return state
  }
}

export default user
