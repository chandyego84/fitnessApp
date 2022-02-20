import NavBar from '../components/navbar.js';
import ProfilePic from '../components/ppic.js';
import ProfileStats from '../components/profileStats.js';
import {Container, Row, Col} from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import React, {useState} from 'react'
import { useParams } from 'react-router-dom';

function DisplayProfile() {
    const [name, setName] = useState("Chandler");
    const [age, setAge] = useState("1");
    const [height, setHeight] = useState("5'10\"");
    const[weight, setWeight] = useState("170");
    return (
    <div>
        <NavBar />
        <Container style={{marginTop: 25}}>
            <Row>
                <Col><ProfilePic /></Col>
                <Col xs={9}>
                    <ProfileStats name={name} age={age} 
                    height={height} weight={weight}/>
                </Col>
            </Row>    
            <Table striped bordered hover size="sm">
        <thead>
            <tr>
            <th>#</th>
            <th>Day</th>
            <th>Compound Lift</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>Push</td>
            <td>Bench: 155</td>
            </tr>
            <tr>
            <td>2</td>
            <td>Pull</td>
            <td>Deadlift: 395</td>
            </tr>
            <tr>
            <td>3</td>
            <td>Legs</td>
            <td colSpan={2}>Squat: 315</td>
            </tr>
        </tbody>
        </Table>
        </Container>
    </div>
    );
}

export default DisplayProfile;