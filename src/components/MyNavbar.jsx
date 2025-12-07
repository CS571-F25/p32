import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router";
import Icon from "./Icon";

export default function MyNavbar() {
  const location = useLocation();

  return (
    <Navbar className="custom-navbar" expand="lg" variant="dark" role="navigation" aria-label="Main navigation">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="navbar-brand-custom"
          aria-label="Recipe Finder Home"
        >
          <Icon name="recipe" style={{ fontSize: '1.8rem', marginRight: '8px' }} />
          Recipe Finder
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label="Toggle navigation" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" role="menubar">
            <Nav.Link 
              as={Link} 
              to="/" 
              className="nav-link-custom"
              active={location.pathname === "/"}
              role="menuitem"
            >
              <Icon name="search" style={{ marginRight: '6px' }} />
              Search
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/saved" 
              className="nav-link-custom"
              active={location.pathname === "/saved"}
              role="menuitem"
            >
              <Icon name="saved" style={{ marginRight: '6px' }} />
              Saved
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
