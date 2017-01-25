import { SET_JOBS } from '../actions'

function jobs( state = [], action ) {
  switch ( action.type ) {
    case SET_JOBS:
      return action.jobs
    default:
      return state
  }
}

export default jobs
