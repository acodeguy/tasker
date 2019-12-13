import React, { Component } from 'react'
import Todo from './Todo'

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

  handleDelete = index => { console.log('index', index)
    
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

              return <Todo
                        key={index}
                        id={index}
                        task={item.task}
                        completed={item.completed}
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