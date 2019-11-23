import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import TodoList from '../components/TodoList'

configure({ adapter: new Adapter() })

describe('TodoList', () => {

  describe('when adding a new item', () => {

    const todoList = mount(<TodoList />)

    const newItem = 'Get my car serviced'
    todoList.find('#new-item-title').simulate('change', { target : { value: newItem } })
    todoList.find('#btn-add-item').simulate('submit', { preventDefault: () => {} })

    it('it is inserted into the items array in the state', () => {

      const expectedItems = [
        { task: newItem, completed: false }
      ]
      
      expect(todoList.state('items')).toEqual(expectedItems)
    })

    it('it appears on the todo list', () => {
    
      expect(todoList.children().find('li').exists()).toBe(true)
    })
  })

  describe('when deleting an existing item', () => {

    const todoList = mount(<TodoList />)

    const newItem = 'Sell my Xbox One'
    todoList.find('#new-item-title').simulate('change', { target : { value: newItem } })
    todoList.find('#btn-add-item').simulate('submit', { preventDefault: () => {} })

    todoList.find('.btn-delete-item').simulate('click')

    it('is deleted from the page', () => {

      expect(todoList.children().find('li').exists()).toBe(false)
    })
  })

  describe('when toggling the completion status', () => {

    const todoList = mount(<TodoList />)

    const newItem = 'Cancel my Apple Arcade subscription'
    todoList.find('#new-item-title').simulate('change', { target : { value: newItem } })
    todoList.find('#btn-add-item').simulate('submit', { preventDefault: () => {} })

    it('sets the item to be completed when clicked', () => {

      todoList.find('.btn-toggle-item').simulate('click')

      const expectedItemState = [{
        task: newItem,
        completed: true
      }]

      expect(todoList.state('items')).toEqual(expectedItemState)
    })

    it('sets the text style to line-through', () => {

      const actualStyle = todoList.find('.todo-item').prop('style')
      const expectedStyle = { textDecoration: 'line-through' }
      expect(actualStyle).toEqual(expectedStyle)
    })

    it('sets the item to be incomplete when clicked again', () => {

      todoList.find('.btn-toggle-item').simulate('click')

      const expectedItemState = [{
        task: newItem,
        completed: false
      }]

      expect(todoList.state('items')).toEqual(expectedItemState)
    })

    it('sets the text style back to none', () => {

      const actualStyle = todoList.find('.todo-item').prop('style')
      const expectedStyle = { textDecoration: 'none' }
      expect(actualStyle).toEqual(expectedStyle)
    })
  })
})