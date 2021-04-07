import { combineReducers } from 'redux';

const example = (state = { test: '' }, { type, payload }) => {
  switch (type) {
    case 'EXAMPLE_ONE':
      return { ...state, test: payload }
    default:
      return state
  }
}
const reducer = combineReducers({ example })

export default reducer
