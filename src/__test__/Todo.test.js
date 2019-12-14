import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Todo from '../components/Todo'

configure({ adapter: new Adapter() })

describe('Todo', () => {

  const newTodo = {
    task: 'Register for the Apple Developer Program',
    completed: false,
    id: 1
  }

  const deleteMock = jest.fn()

  const todo = shallow(<Todo todo={newTodo} delete={deleteMock} />)

  describe('when toggling the completion status', () => {
    it('sets the text style to line-through', () => {
      todo.find('.btn-toggle-item').simulate('click')

      const actualStyle = todo.find('.task-text').prop('style')
      const expectedStyle = { textDecoration: 'line-through', textTransform: 'uppercase' }
      expect(actualStyle).toEqual(expectedStyle)
    })

    it('sets the text style back to none', () => {
      todo.find('.btn-toggle-item').simulate('click')

      const actualStyle = todo.find('.task-text').prop('style')
      const expectedStyle = { textDecoration: 'none', textTransform: 'uppercase' }
      expect(actualStyle).toEqual(expectedStyle)
    })
  })

  describe('When clicking on the delete button of a todo', () => {
    it('calls the delete prop', () => {
      todo.find('.btn-delete-item').simulate('click')

      expect(deleteMock).toHaveBeenCalled()
    })
  })
})