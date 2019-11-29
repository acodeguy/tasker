import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Todo from '../components/Todo'

configure({ adapter: new Adapter() })

describe('Todo', () => {

  describe('when toggling the completion status', () => {

    const newTask = 'Register for the Apple Developer Program'
    const todo = mount(<Todo task={newTask} />)

    it('sets the item to be completed when clicked', () => {

      todo.find('.btn-toggle-item').simulate('click')

      const expectedItemState = {
        task: newTask,
        completed: true
      }

      expect(todo.state()).toEqual(expectedItemState)
    })

    it('sets the text style to line-through', () => {

      const actualStyle = todo.find('.todo-item').prop('style')
      const expectedStyle = { textDecoration: 'line-through' }
      expect(actualStyle).toEqual(expectedStyle)
    })

    it('sets the item to be incomplete when clicked again', () => {

      todo.find('.btn-toggle-item').simulate('click')

      const expectedItemState = {
        task: newTask,
        completed: false
      }

      expect(todo.state()).toEqual(expectedItemState)
    })

    it('sets the text style back to none', () => {

      const actualStyle = todo.find('.todo-item').prop('style')
      const expectedStyle = { textDecoration: 'none' }
      expect(actualStyle).toEqual(expectedStyle)
    })
  })
})