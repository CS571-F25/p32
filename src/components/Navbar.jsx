import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router";

export default function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Recipe Finder</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Search</Nav.Link>
            <Nav.Link as={Link} to="/saved">Saved</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}