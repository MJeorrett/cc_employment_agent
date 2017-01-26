export const SET_JOBS = 'SET_JOBS'
export const SET_FIELD_ON_JOB = 'SET_FIELD_ON_JOB'

export function setJobs( jobs ) {
  return {
    type: SET_JOBS,
    jobs
  }
}

export function setFieldOnJob( field, newValue, jobId ) {
  console.log(`field:${field}, newValue:${newValue}, jobId:${jobId}`);
  return {
    type: SET_FIELD_ON_JOB,
    field,
    newValue,
    jobId
  }
}
