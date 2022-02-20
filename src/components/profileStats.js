import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Row, Col, Container } from 'react-bootstrap'
import AboutMe from '../components/aboutme.js'
import React, { Component } from 'react'

function ProfileStats({name, age, height, weight}) {
    return (
        <Container>
            <Card className="text-center">
            <Card.Header>Stats</Card.Header>
            <Card.Body>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        <Card.Text>
                            <bold>Name: {name}</bold>
                        </Card.Text>
                    </Col>
                    <Col xs lg="2">
                        <Card.Text>
                            <bold>Age: {age}</bold>
                        </Card.Text>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        <Card.Text>
                            <bold>Height: {height}</bold>
                        </Card.Text>
                    </Col>
                    <Col xs lg="3">
                        <Card.Text>
                            <bold>Weight: {weight} pounds</bold>
                        </Card.Text>
                    </Col>
                </Row>
            <Row className="justify-content-md-center" >
                <AboutMe />
            </Row>
            </Card.Body>
            </Card>    
        </Container>
    );
}

export default ProfileStats;