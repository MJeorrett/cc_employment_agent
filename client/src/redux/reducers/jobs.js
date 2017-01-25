import { SET_JOBS, SET_SELECTED_JOB } from '../actions/jobs'

const defaultState = {
  jobs: [],
  selectedJob: undefined
}

function jobs( state = defaultState, action ) {
  switch ( action.type ) {
    case SET_JOBS:
      return Object.assign( {}, state, {
        jobs: action.jobs
      })
    case SET_SELECTED_JOB:
      return Object.assign( {}, state, {
        selectedJob: action.job
      })
    default:
      return state
  }
}

export default jobs
