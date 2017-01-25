import { combineReducers } from 'redux'

import user from './user'
import jobs from './jobs'
import employers from './employers'
import config from './config'

const ccEmployerAgent = combineReducers({
  user,
  jobs,
  employers,
  config
})

export default ccEmployerAgent
