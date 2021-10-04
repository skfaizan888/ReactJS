import {Navbar ,Nav ,NavbarBrand} from "react-Bootstrap"
import {  NavLink } from "react-router-dom"


export const NaviTwo=()=>{
    return(
        <Navbar bg="light" expand="lg">
  <Container>
    <NavbarBrand to="/">React-Bootstrap</NavbarBrand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink to="Service">Service</NavLink>
        <NavLink to="Contact">Contact</NavLink>
        <NavLink to="About">About </NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}