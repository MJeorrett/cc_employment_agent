import { SET_JOBS } from '../actions/jobs'

function jobs( state = [], action ) {
  switch ( action.type ) {
    case SET_JOBS:
      return action.jobs
    default:
      return state
  }
}

export default jobs
