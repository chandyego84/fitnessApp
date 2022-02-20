import React from "react";
import StickyBox from "react-sticky-box";
import { Container, Button, Card } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'
import gympic from '../media/wsuREC.png'

const SideInfo = () => (
    
    <Container>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={gympic}/>
                    <Card.Header><strong>Community Events</strong></Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Stephenson Max Day: March 6 10am</ListGroup.Item>
                        <ListGroup.Item>Crossfit Group Session -Chinook 203- March 13 1pm</ListGroup.Item>
                        <ListGroup.Item>Squat Workshop -UREC- March 14 8am</ListGroup.Item>
                    </ListGroup>
                </Card>
    </Container>
);
    
    export default SideInfo;