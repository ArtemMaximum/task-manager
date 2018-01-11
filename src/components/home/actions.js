import api from '../../api'
import {
  TASKS_RECEIVE_START,
  TASKS_RECEIVE_SUCCESS,
  TASKS_RECEIVE_FAILURE,
} from './action-types'


export const receiveTasksList = options => (dispatch) => {
  dispatch({ type: TASKS_RECEIVE_START })
  
  try {
    api.get('', options).then(({ data }) => {
      
      if (data.status === 'ok') {
        dispatch({ type: TASKS_RECEIVE_SUCCESS, data: data.message })
      } else {
        dispatch({ type: TASKS_RECEIVE_FAILURE, error: data.message })
      }
    }).catch((error) => {
      dispatch({ type: TASKS_RECEIVE_FAILURE, error })
    })
  }
  catch (error) {
    dispatch({ type: TASKS_RECEIVE_FAILURE, error })
    throw error
  }
}
