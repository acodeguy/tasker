import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import TodoList from '../components/TodoList'

configure({ adapter: new Adapter() })

describe('TodoList', () => {

  describe('when adding a new item', () => {

    const todoList = mount(<TodoList />)

    const newItem = 'Get my car serviced'
    todoList.find('input').first().simulate('change', { target : { value: newItem } })
    todoList.find('form').simulate('submit', { preventDefault: () => {} })

    it('it appears on the todo list', () => {
      expect(todoList.contains(newItem)).toBe(true)
    })
  })

  describe('when a todo is deleted', () => {

    const todoList = mount(<TodoList />)
    
    const newItem = 'Sell my Xbox One'
    todoList.find('input').first().simulate('change', { target : { value: newItem } })
    todoList.find('form').simulate('submit', { preventDefault: () => {} })

    todoList.setState({
      task: '',
      items: [],
      nextId: 2
    })
    
    it('no longer appears on the list', () => {
      expect(todoList.contains(newItem)).toBe(false)
    })
  })
})