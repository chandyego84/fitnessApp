import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/button'

function AboutMe() { 
    return(
        <Card style={{marginTop: 30}}>
            <Card.Header as="h5">About Me</Card.Header>
            <Card.Body>
                <Card.Text>
                    Competitve powerlifter for 1 year.
                </Card.Text>
                <Card.Text>
                    Goals:
                </Card.Text>
                <Card.Text>
                    Increase squat to 415
                </Card.Text>
                <Card.Text>
                    Increase bench to 225
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default AboutMe;