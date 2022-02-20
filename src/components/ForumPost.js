import { Container, Button, Card, Row, Col } from 'react-bootstrap'
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function ForumPost(title, user, body, numCom, name, age, height, weight){
    const [counter, setCounter] = useState(0);
    //increase counter
    const increase = () => {
        setCounter(count => count + 1);
  };
  const history = useHistory()

  function nav() {
    history.push({
      pathname: "/post",
      state: {
        title: title,
        user: user,
        body: body,
        likes: counter,
        numCom: numCom}
    });
  } 

  return(
        <Container>
            <Card style={{width: '50rem', marginBottom: 30}}>
            <Card.Header onClick={nav}><h1><strong>{title}</strong></h1></Card.Header>
            <Link to="/dispProfile" params={{ name: {name}, age: {age}, 
                                    height: {height}, weight: {weight} }}>
                <Card.Title>User: {user} </Card.Title>
            </Link>
            <Card.Body>
                {body}
            </Card.Body>
                <Container>
                    <Row>
                        <Col>
                            <Button onClick={increase} variant="danger" size="lg">
                                Like
                            </Button>{' '}
                        </Col>
                        <p>Likes: {counter}</p>
                        <Col>
                            <Card>
                                <Card.Link onClick={nav}>Comments ({numCom})</Card.Link>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </Container>
    
    
    )
  }

export default ForumPost;

      