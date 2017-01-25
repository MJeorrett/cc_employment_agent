import { SET_EMPLOYERS, SET_SELECTED_EMPLOYER_ID } from '../actions/employers'

const defaultState = {
  employers: [],
  selectedEmployerId: undefined
}

function employers( state = defaultState, action ) {
  switch ( action.type ) {
    case SET_EMPLOYERS:
      return Object.assign( {}, state, {
        employers: action.employers
      })
    case SET_SELECTED_EMPLOYER_ID:
      return Object.assign( {}, state, {
        selectedEmployerId: action.id
      })
    default:
      return state
  }
}

export default employers
