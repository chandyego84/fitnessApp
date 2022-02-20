import { Container, Button, Card } from 'react-bootstrap'
import profPic from '../media/profilePIC.jpeg'

 function ProfilePic() {
   return (
      <Card style={{ width: '15.10rem' }}>
      <Card.Img variant="top" src={profPic} style={{width: '15rem', height: '15rem'}}/>
      <Card.Body>
        <Card.Title>ChandyGo</Card.Title>
        <Card.Text>
          Gender: Male
        </Card.Text>
        <Card.Text>
          Experience: 1 Year
        </Card.Text>
      </Card.Body>
    </Card>
   );
 }

 export default ProfilePic;