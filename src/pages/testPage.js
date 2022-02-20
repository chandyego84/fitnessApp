import '../App.css';
import NavBar from '../components/navbar.js';
import CreatePost from '../components/CreatePost.js';
import ProfilePic from '../components/ppic.js';
import ProfileStats from '../components/profileStats.js';
import ForumPost from '../components/ForumPost.js';
import SideInfo from '../components/sideinfo.js';
import AboutMe from '../components/aboutme.js';
import StickyBox from "react-sticky-box";

function TestPage() {
  return (
    <div>
        <NavBar />
        <ProfileStats />
        <ForumPost />
        <CreatePost />
        <ProfilePic />
        <SideInfo />
        <AboutMe />
    </div>
  );
}

export default TestPage;
