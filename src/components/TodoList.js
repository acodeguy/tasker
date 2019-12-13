import React, { Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {
  constructor() {
    super()

    this.state = {
      task: '',
      items: [],
      nextId: 1
    }
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      task: event.target.value
    })
  }

  handleDelete = id => {   
    this.setState({
      ...this.state,
      items: this.state.items.filter(item => item.id !== id)
    })
  }

  handleSubmit = event => {
    const allItems = this.state.items.slice()
    allItems.push({ 
      task: this.state.task, 
      completed: false,
      id: this.state.nextId
    })

    this.setState({
      task: '',
      items: allItems,
      nextId: this.state.nextId + 1
    })

    event.preventDefault()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input id='new-item-title' value={this.state.task} type='text' onChange={this.handleChange} required />
          <input type='submit' id='btn-add-item' value='Add' />
        </form>

        {this.state.items ?
          <ul>
            {this.state.items.map((item) => {

              return <Todo
                        key={item.id}
                        todo={item}
                        delete={this.handleDelete}
                      /> 
            })}
          </ul>
        : null
        }
      </div>
    )
  }
}

export default TodoList