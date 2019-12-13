import React, { Component } from 'react'

class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ...this.props.todo
    }
  }

  handleCompletionToggle = () => {
   const newCompletionStatus = !this.state.completed

    this.setState({
      ...this.state,
      completed: newCompletionStatus
    })
  }

  render() { 
    const { task, completed, id } = this.state

    const textStyle = completed === true ?
      { textDecoration: 'line-through' } :
      { textDecoration: 'none' }
    
    const toggleButtonText = completed === true ?
      'Mark as Incomplete' :
      'Mark as Completed'

    return(
      <li className='todo-item' style={textStyle} id={id}>
          &#35;{id}: {task}
          <button className='btn-toggle-item' onClick={this.handleCompletionToggle}>{toggleButtonText}</button>
          <button className='btn-delete-item' onClick={() => this.props.delete(id)}>Delete</button>
      </li>   
    )    
  }
}

export default Todo