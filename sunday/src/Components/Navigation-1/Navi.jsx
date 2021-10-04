import {Nav,Navbar,Container,NavDropdown} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import React from "react"

export const Navi=()=>{
    return(
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand to="/">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink to="/Menu">Menu</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item to="#">Menu</NavDropdown.Item>
          <NavDropdown.Item to="#">Contact</NavDropdown.Item>
          <NavDropdown.Item to="#">About</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}