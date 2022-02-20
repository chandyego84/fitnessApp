import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import logo from '../logo.svg';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-top"
          >
          </img>
          </Navbar.Brand>
          <div style={{display: "flex",justifyContent:"center",alignItems: "center"}}>
        <Navbar.Brand href="/">Fitness Friends</Navbar.Brand>
        </div>
        <Nav >
          <Nav.Link href="/dispForm">Home</Nav.Link>
          <Nav.Link href="/dispProfile">My Profile</Nav.Link>
          <Nav.Link href="/Settings">Settings</Nav.Link>
        </Nav>
    </Container>
  </Navbar>

  )
}

export default NavBar;