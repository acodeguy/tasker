import * as constants from '../constants'

export const addTodo = todo => {
  return {
    type: constants.ADD_TODO,
    payload: todo
  }
}