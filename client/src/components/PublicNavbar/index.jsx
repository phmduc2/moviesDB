import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useState } from "react";
import "./style.css";
 
export default function PublicNavbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
 
  function handleSubmit(e){
        e.preventDefault();
        onSearch(query.trim());
    }
 
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <span className="brand-mark">M</span> movies<span className="accent">DB</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/popular">Popular</Nav.Link>
            <Nav.Link as={Link} to="/trending">Trending</Nav.Link>
            <Nav.Link as={Link} to="/toprated">Top Rated</Nav.Link>
            <Nav.Link as={Link} to="/nowplaying">Now Playing</Nav.Link>
            <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
          </Nav>
          <form className="d-flex" onSubmit={handleSubmit}>
            <input className="form-control me-2" value={query}
              onChange={(e) => setQuery(e.target.value)} placeholder="Search movies..." />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
