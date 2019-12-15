import todoListReducer from '../../../redux/reducers/todoList.reducer'
import * as constants from '../../../redux/constants'

describe('TodoList reducer', () => {
  it('increments the ID counter', () => {
    const initialState = { nextID: 0 }
    const expectedState = { nextID: 1 }

    const action = {
      type: constants.INCREMENT_TODO_ID_COUNTER,
      payload: initialState
    }

    expect(todoListReducer(initialState, action)).toEqual(expectedState)
  })

  it('adds a todo item', () => {
    const task = 'Learn something new'

    const action = { 
      type: constants.ADD_TODO,
      payload: task
     }

    const initialState = {
      nextID: 0,
      items: []
    }

    const expectedState = {
      nextID: 1,
      items: [{
        id: 0,
        completed: false,
        task,
      }]
    }

    const actualState = todoListReducer(initialState, action)

    expect(actualState).toEqual(expectedState)
  })
})