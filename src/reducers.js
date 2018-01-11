import tasks from './components/home/reducer'

import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

export default combineReducers({
  form,
  tasks
});