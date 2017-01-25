import { SET_EMPLOYERS } from '../actions/employers'

function employers( state = [], action ) {
  switch ( action.type ) {
    case SET_EMPLOYERS:
      return action.employers
    default:
      return state
  }
}

export default employers
