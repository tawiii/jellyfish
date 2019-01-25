import * as C from '../constants';

export function valueTextarea(state) {
  return {
    type: C.ADD_TASK,
    payload: state
  }
}

export function deleteTask(id) {
  return {
    type: C.DELETE_TASK,
    payload: id
  }
}

export function dataStorage(arr) {
  return {
    type: C.DATA_STORAGE,
    payload: arr
  }
}
