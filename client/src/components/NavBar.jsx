import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { ReactComponent as MusifyLogo } from "../images/Musify.svg";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <MusifyLogo style={{ height: "2.2rem" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">About this project</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
