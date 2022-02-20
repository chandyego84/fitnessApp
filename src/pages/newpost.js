
import NavBar from '../components/navbar.js';
import Card from 'react-bootstrap/Card'
import {Row, Col, Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import React from 'react';

function Text(){

  }


function NewPost(){
    return(
      <dir>
      <dir>
      <NavBar />
      </dir>
     <Card className="d-flex h-80" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Card.Body>
        <Form>
  <Form.Group className="mb-3" controlId="Title">
    <Form.Label>Title</Form.Label>
    <Form.Control type="Title" placeholder="Enter Post Title" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="Caption">
    <Form.Label>Caption</Form.Label>
    <Form.Control type="Caption" placeholder="Enter Post Caption" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check if you would like to be critiqued or looking for advice!" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </Card.Body>
      </Card>
      </dir>
    )   
}

export default NewPost;
