import { Container, Button, Card } from 'react-bootstrap'

function CreatePost(){
    return(
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Button 
                    variant="secondary"
                    type="button"
                    href="http://localhost:3000/newpost"
                    > <h5>Create New Post</h5>
                </Button>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default CreatePost;