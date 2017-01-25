export const SET_JOBS = 'SET_JOBS'
export const SET_SELECTED_JOB = 'SET_SELECTED_JOB'

export function setJobs( jobs ) {
  return {
    type: SET_JOBS,
    jobs
  }
}

export function setSelectedJob( job ) {
  return {
    type: SET_SELECTED_JOB,
    job
  }
}
