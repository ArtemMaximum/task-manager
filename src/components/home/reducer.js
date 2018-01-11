import {
  TASKS_RECEIVE_START,
  TASKS_RECEIVE_SUCCESS,
  TASKS_RECEIVE_FAILURE,
} from '../home/action-types'


const initialState = {
  isFetching: false,
  list: {},
  total: 0,
  ids: {},
  errorMessage: '',
}

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case TASKS_RECEIVE_START:
    case TASKS_RECEIVE_SUCCESS:
    case TASKS_RECEIVE_FAILURE:
      return fetchExamples(state, action)

    default:
      return state
  }
}

function fetchExamples(state, action) {
  switch (action.type) {
    case TASKS_RECEIVE_START:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case TASKS_RECEIVE_SUCCESS:
      return Object.assign({}, state, {
        list: action.data.tasks,
        total: parseInt(action.data.total_task_count, 10),
        isFetching: false,
      })
    case TASKS_RECEIVE_FAILURE:
      return Object.assign({}, state, {
        errorMessage: action.error,
        isFetching: false,
      })
    default:
      return state
  }
}