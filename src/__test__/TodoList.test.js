import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import TodoList from '../components/TodoList'

configure({ adapter: new Adapter() })

describe('TodoList', () => {

  const todoList = mount(<TodoList />)

  describe('when adding a new item', () => {

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
})