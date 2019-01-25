import * as C from '../constants';

const defaultState = []

export default (state = defaultState, action) => {
  const {type, payload} = action
  switch (type) {
    case C.ADD_TASK: return [payload, ...state]
    case C.DELETE_TASK: return state.filter(item => item.id !== payload)
    case C.DATA_STORAGE: return state = payload
  }

  return state
}
