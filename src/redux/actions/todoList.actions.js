import * as constants from '../constants'

export const addTodo = todo => {
  return {
    type: constants.ADD_TODO,
    payload: todo
  }
}

export const incrementTodoIDCounter = counter => {
  return {
    type: constants.INCREMENT_TODO_ID_COUNTER,
    payload: counter += 1
  }
}