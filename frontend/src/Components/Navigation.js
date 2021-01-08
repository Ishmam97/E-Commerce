import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import './css/navbar.css';

function Navigation() {
  return (
    <Navbar expand="lg" variant="dark" id="navbar" >
    <Navbar.Brand href="#" className="text-danger">E-Commerce</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto " id="navigation">
        <Nav.Link href="#home" className="text-white">Home</Nav.Link>
        
        <NavDropdown title={
        <span className="text-white my-auto">Categories</span>
    } id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Food</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            water
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">groceries</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            clothing
          </NavDropdown.Item>
        </NavDropdown>

        <Nav.Link href="#link" className="text-white">Cart</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Navigation;
