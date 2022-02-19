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
        <Navbar.Brand href="/">CamusApp</Navbar.Brand>
        <Nav >
          <Nav.Link href="#home">Communities</Nav.Link>
          <Nav.Link href="#features">My Profile</Nav.Link>
          <Nav.Link href="#pricing">Settings</Nav.Link>
        </Nav>
    </Container>
  </Navbar>

  )
}

export default NavBar;
