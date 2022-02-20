import NavBar from '../components/navbar.js';
import '../App.css';
import ForumPost from '../components/ForumPost.js';
import SideInfo from '../components/sideinfo.js';
import CreatePost from '../components/CreatePost.js';
import QuoteOfDay from '../components/quote.js';
import {Container, Row, Col} from 'react-bootstrap';
import StickyBox from "react-sticky-box";
import {Link} from 'react-router-dom';
//import Counter from '../components/'

function DisplayForm() {
    return (
     <div className="App">
        <NavBar />
            <div>
  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
    <StickyBox>
        <Container>
            <CreatePost/>
            <QuoteOfDay/>
            <SideInfo/>
        </Container>
    </StickyBox>
    <div>
    {ForumPost('Squat Form', 'J_Kroon', 
    'Hey guys, I was hoping to get some general advice for how to improve my squats so that my knees dont hurt', '3',
    'chandy', '20', '5\'10\"', '170')}
    {ForumPost('Looking For Workout Partner', 'SpongebobBoy', 
    'Looking for a workout partner to go to Stephenson @3pm MWF', '0',
    'chandy', '20', '5\'10\"', '170')}
    {ForumPost('Strength Training Program', 'DouglasTK', 
    'Does anyone have tips for how to put together a strength training program?', '1',
    'chandy', '20', '5\'10\"', '170')}
    {ForumPost('Diet Tips', 'GRWorkouts', 
    'Trying to go vegan; does anyone have dieting advice for vegan powerlifters?', '5',
    'chandy', '20', '5\'10\"', '170'
    )}
    </div>
  </div>
</div>
</div>
    );
}

export default DisplayForm;