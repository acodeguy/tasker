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
      </div>
    )
  }
}

export default TodoList