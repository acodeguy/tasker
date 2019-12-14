import React, { Component } from 'react'
import { 
  Button,
  ListGroupItem } 
  from 'reactstrap'

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

    const taskTextClasses = completed === true ?
      'task-text text-success' :
      'task-text text-dark-50'

    const textStyle = completed === true ?
      { textDecoration: 'line-through', textTransform: 'uppercase' } :
      { textDecoration: 'none', textTransform: 'uppercase' }
    
    const toggleButtonText = completed === true ?
      'Mark as Not Done' :
      'Mark as Done'

    const taskCompletionStatus = completed === true ?
      '✅' :
      '❌'

    const toggleButtonColour = completed === true ?
      'primary' :
      'success'

    return(
      <ListGroupItem className='todo-item m-2 p-2' id={id}>
        <span>{taskCompletionStatus} &#35;{id}: <span className={taskTextClasses} style={textStyle}>{task}</span></span>
        <Button color={toggleButtonColour} className='btn-toggle-item mr-1 ml-4' onClick={this.handleCompletionToggle}>{toggleButtonText}</Button>
        <Button color='danger' className='btn-delete-item' onClick={() => this.props.delete(id)}>Delete</Button>
      </ListGroupItem>   
    )    
  }
}

export default Todo