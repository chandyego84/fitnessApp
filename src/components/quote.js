import {Container, Card, ListGroup} from 'react-bootstrap'

function QuoteOfDay(){
    return(
    <Container>
                <Card style={{ width: '18rem' }}>
                    <Card.Header><strong>Quote Of The Day!</strong></Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>¨A year from now you may wish you had started today.¨ – Karen Lamb</ListGroup.Item>
                    </ListGroup>
                </Card>
    </Container>
    )
}

export default QuoteOfDay;