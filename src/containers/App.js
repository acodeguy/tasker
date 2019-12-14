import React, { Component } from 'react'
import TodoList from '../components/TodoList'
import { Col, Container, Jumbotron, Row } from 'reactstrap'

class App extends Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        <Jumbotron>
                            <h3 className='text-center'>Tasker</h3>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col md='2'></Col>
                    <Col>
                        <TodoList />
                    </Col>
                    <Col md='2'></Col>
                </Row>
            </Container>
        )
    }
}

export default App;