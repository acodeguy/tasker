import React, { Component } from 'react'
import Todo from './Todo'
import { 
  Button,
  Form, 
  FormGroup, 
  Input, 
  Label,
  } from 'reactstrap'

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
    const listStyle = { listStyle: 'none' }

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for='new-item-title'>Task title:</Label>
            <Input id='new-item-title' value={this.state.task} type='text' onChange={this.handleChange} placeholder='i.e., Buy some milk' required />
            <Button color='primary' className='mt-2' size='lg' block type='submit' id='btn-add-item'>Add</Button>
          </FormGroup>
        </Form>

        {this.state.items ?
          <ul style={listStyle}>
            {this.state.items.map((item) => {

              return(
                <Todo
                    key={item.id}
                    todo={item}
                    delete={this.handleDelete}
                  /> 
              )
            })}
          </ul>
        : null
        }
      </div>
    )
  }
}

export default TodoList