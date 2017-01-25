import { SET_JOBS, SET_FIELD_ON_JOB } from '../actions/jobs'

const defaultState = {
  jobs: [],
  selectedJobId: undefined
}

function updateJobField( jobs, jobId, field, newValue ) {
  const job = jobs.find( job => {
    return job.id === jobId
  })
  const newJob = Object.assign( {}, job )
  newJob[field] = newValue
  const newJobsArray = jobs.filter( job => {
    return job.id !== jobId
  })
  console.log( "update:", [ ...newJobsArray, newJob ] )
  return [ ...newJobsArray, newJob ]
}

function jobs( state = defaultState, action ) {
  switch ( action.type ) {
    case SET_JOBS:
      console.log( "jobs:", action.jobs);
      return Object.assign( {}, state, {
        jobs: action.jobs
      })
    case SET_FIELD_ON_JOB:
      return {
        jobs: updateJobField( state.jobs, action.jobId, action.field, action.jobSpec ),
        selectedJobId: state.selectedJobId
      }
    default:
      return state
  }
}

export default jobs
