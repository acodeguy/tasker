import * as constants from '../../../redux/constants'
import * as actions from '../../../redux/actions/todoList.actions'

describe('TodoList action creator', () => {
  it('returns an action that creates a new todo item', () => {
      const task = 'Learn Italian cooking'

    const expectedAction = {
      type: constants.ADD_TODO,
      payload: task
    }

    expect(actions.addTodo(task)).toEqual(expectedAction)
  })
})