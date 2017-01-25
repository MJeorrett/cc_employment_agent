export const SET_JOBS = 'SET_JOBS'
export const SET_SELECTED_JOB_ID = 'SET_SELECTED_JOB_ID'
export const SET_JOB_SPEC_ON_JOB = 'SET_JOB_SPEC_ON_JOB'

export function setJobs( jobs ) {
  return {
    type: SET_JOBS,
    jobs
  }
}

export function setSelectedJobId( id ) {
  return {
    type: SET_SELECTED_JOB_ID,
    id
  }
}

export function setJobSpecOnJob( jobSpec, jobId ) {
  return {
    type: SET_JOB_SPEC_ON_JOB,
    jobSpec,
    jobId
  }
}
