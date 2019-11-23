import React, { Component } from 'react'

class TodoList extends Component {

  constructor() {
    
    super()

    this.state = {
      task: '',
      items: []
    }
  }

  handleChange = event => {

    this.setState({
      ...this.state,
      task: event.target.value
    })
  }

  handleCompletionToggle = index => {

    const allTodos = this.state.items
    const todoBeingToggled = allTodos[index]
    todoBeingToggled.completed = !todoBeingToggled.completed
    allTodos.splice(index, 1, todoBeingToggled)

    this.setState({
      ...this.state,
      items: allTodos
    })
  }

  handleDelete = index => {
    
    this.setState({
      ...this.state,
      items: this.state.items.filter((item, idx) => idx !== index)
    })
  }

  handleSubmit = event => {

    const allItems = this.state.items.slice()
    allItems.push({ task: this.state.task, completed: false })

    this.setState({
      task: '',
      items: allItems
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
            {this.state.items.map((item, index) => {

              const textStyle = item.completed === true ?
                { textDecoration: 'line-through' } :
                { textDecoration: 'none' }

              const toggleButtonText = item.completed === true ?
                'Mark as Incomplete' :
                'Mark as Completed'

              return <li className='todo-item' style={textStyle} key={index}>
                        {item.task}
                        <button className='btn-toggle-item' onClick={() => this.handleCompletionToggle(index)}>{toggleButtonText}</button>
                        <button className='btn-delete-item' onClick={() => this.handleDelete(index)}>Delete</button>
                    </li>                
              
            })}
          </ul>

        : null

        }
      </div>
    )
  }
}

export default TodoList