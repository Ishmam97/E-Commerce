import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { faStore, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "./helpers/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinkContainer } from 'react-router-bootstrap';
import './css/navbar.css';

function Navigation() {
  const navigate = useNavigate();

  const handleLogout = (evt) => {
    logout(() => {
      console.log("Logged OUT");
      navigate("/signin");
    });
  };

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <span className="brand-name">
            <FontAwesomeIcon icon={faStore} /> C L O
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <LinkContainer to="/category1">
                <NavDropdown.Item>Category 1</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category2">
                <NavDropdown.Item>Category 2</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/all-categories">
                <NavDropdown.Item>All Categories</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/cart">
              <Nav.Link>Cart</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            {!isAuthenticated() && (
              <LinkContainer to="/signin">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            )}

            {isAuthenticated() && (
              <NavDropdown title={<span><FontAwesomeIcon icon={faUser}/>  {isAuthenticated().uName}</span>} id="user-nav-dropdown">
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                <NavDropdown.Item onClick={() => {
                  if (isAuthenticated.role === 1){
                    navigate("/admin/dash")
                  }
                  else{
                    navigate("/user/dash")
                  }
                }}>Dashboard</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
