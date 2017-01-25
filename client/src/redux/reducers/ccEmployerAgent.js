import { combineReducers } from 'redux'

import user from './user'
import jobs from './jobs'
import employers from './employers'

const ccEmployerAgent = combineReducers({
  user,
  jobs,
  employers
})

export default ccEmployerAgent
