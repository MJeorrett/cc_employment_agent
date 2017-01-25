import { combineReducers } from 'redux'

import user from './user'
import jobs from './jobs'

const ccEmployerAgent = combineReducers({
  user,
  jobs
})

export default ccEmployerAgent
