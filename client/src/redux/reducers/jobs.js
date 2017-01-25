import { SET_JOBS, SET_SELECTED_JOB_ID, SET_JOB_SPEC_ON_JOB } from '../actions/jobs'

const defaultState = {
  jobs: [],
  selectedJobId: undefined
}

function jobs( state = defaultState, action ) {
  switch ( action.type ) {
    case SET_JOBS:
      console.log( "jobs:", action.jobs);
      return Object.assign( {}, state, {
        jobs: action.jobs
      })
    case SET_SELECTED_JOB_ID:
      console.log("setting job id to:", action.jobId);
      return Object.assign( {}, state, {
        selectedJobId: action.jobId
      })
    case SET_JOB_SPEC_ON_JOB:
      const job = state.jobs.find( job => {
        return job.id === action.jobId
      })
      const newJob = Object.assign( {}, job, {
        job_spec: action.jobSpec
      })
      const newJobsArray = state.jobs.filter( job => {
        return job.id !== action.jobId
      })
      return [ ...newJobsArray, newJob ]
    default:
      return state
  }
}

export default jobs
