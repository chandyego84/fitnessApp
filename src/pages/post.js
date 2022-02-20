import NavBar from '../components/navbar.js'
import { Container, Button, Card, Row, Col } from 'react-bootstrap'
import React, { useState } from "react";

function Post(props) {
    const [counter, setCounter] = useState(0);
    //increase counter
    const increase = () => {
        setCounter(count => count + 1);
    };
    
    console.log(props)
    return (
        <div>
            <NavBar />
            <Container>
                    <Card style={{width: '80rem', marginBottom: 30}}>
                    <Card.Header><h1><strong>{props.location.state.title}</strong></h1></Card.Header>
                    <Card.Title>User: {props.location.state.user}</Card.Title>
                    <Card.Body>
                        {props.location.state.body}
                    </Card.Body>
                        <Container>
                            <Row>
                                <Col>
                                </Col>
                                <p>Likes: {props.location.state.likes}</p>
                                <Col>
                                <p1>Comments</p1>
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                </Container>
        </div>
    )
}
export default Post;