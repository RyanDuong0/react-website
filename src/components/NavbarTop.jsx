import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarTop() {
  const [isOpen, isClosed] = useState(false);

  return(
  <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
    <Container fluid>
      <Navbar.Brand href="#home">Ryan Duong</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About Me</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <NavDropdown title="Links" id="basic-nav-dropdown">
            <NavDropdown.Item href="https://www.linkedin.com/in/ryan-duong-97b960328/">LinkedIn&nbsp;<i class="bi bi-linkedin"></i></NavDropdown.Item>
            <NavDropdown.Item href="https://github.com/RyanDuong0">GitHub&nbsp;<i class="bi bi-github"></i></NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavbarTop;
