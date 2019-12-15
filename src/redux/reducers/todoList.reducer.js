import * as constants from '../constants'

const todoList = (state = {}, action) => {
  switch(action.type) {
    case constants.INCREMENT_TODO_ID_COUNTER:
      return {
        nextID: state.nextID +1
      }

    case constants.ADD_TODO:
      return {
        nextID: state.nextID + 1,
        items: [
          {
            id: state.nextID,
            completed: false,
            task: action.payload
          }
        ]
      }

      default: 
      return state
  }
}

export default todoList