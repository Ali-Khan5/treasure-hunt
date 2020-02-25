import React from "react";
import { Link } from "react-router-dom"
import { Navbar, Nav,  } from "react-bootstrap";
const MyNav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">AI for Web Developers Demo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link>
         <Link to="/"> 
        
           Home
         </Link>
           </Nav.Link>
          
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
  );
};
export default MyNav;
