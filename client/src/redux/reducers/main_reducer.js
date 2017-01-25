import { combineReducers } from 'redux'

import user from './user'
import jobs from './jobs'

const main_reducer = combineReducers({
  user,
  jobs
})

export default main_reducer
