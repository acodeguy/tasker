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
})