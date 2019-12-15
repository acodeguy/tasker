import * as constants from '../../../redux/constants'
import * as actions from '../../../redux/actions/todoList.actions'

describe('TodoList action creator', () => {
  it('returns an action that increments the ID counter', () => {
    const counter = 0
    const expectedAction = {
      type: constants.INCREMENT_TODO_ID_COUNTER,
      payload: counter + 1
    }

    expect(actions.incrementTodoIDCounter(counter)).toEqual(expectedAction)
  })

  it('returns an action that creates a new todo item', () => {
      const task = 'Learn Italian cooking'

    const expectedAction = {
      type: constants.ADD_TODO,
      payload: task
    }

    expect(actions.addTodo(task)).toEqual(expectedAction)
  })
})