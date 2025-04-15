import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";
import {TypeAnimation} from "react-type-animation";

function NavbarTop({ darkMode }) {
  const [isOpen, isClosed] = useState(false);
  const [typingStatus, setTypingStatus] = useState("Initializing");

  return(
    <>
      <Navbar expand="lg" className={darkMode ? "navbar-custom-dark" : "navbar-custom-light"} fixed="top" data-bs-theme={darkMode ? "dark" : "light"}>
        <Container fluid>
          <Navbar.Brand
            style={{fontFamily:"Quicksand, sans-serif"}}
          >
            <TypeAnimation
              sequence={[
                2000,
                () => {
                  setTypingStatus('Typing...');
                },
                'Ryan Duong',
                () => {
                  setTypingStatus('Done Typing');
                },
                7000,
                () => {
                  setTypingStatus('Deleting...');
                },
                '',
                () => {
                  setTypingStatus('Done Deleting');
                },
              ]}
              repeat={Infinity}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{fontFamily:"Quicksand, sans-serif"}}>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about-me">About Me</Nav.Link>
              <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
              <NavDropdown title="Links" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://www.linkedin.com/in/ryan-duong-97b960328/">LinkedIn&nbsp;<i class="bi bi-linkedin"></i></NavDropdown.Item>
                <NavDropdown.Item href="https://github.com/RyanDuong0">GitHub&nbsp;<i class="bi bi-github"></i></NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarTop;
