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
                            <h2 className='text-center'>Tasker</h2>
                            <h6>Built using Behaviour-Driven Development with React, Jest and Enzyme | <a href='https://github.com/acodeguy/tasker'>Source code on GitHub</a></h6>
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
                <Row>
                    <Col>
                        
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App;