import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
function MyNavbar() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to='/'  className='mr-10 no-underline text-white font-medium'>Home</NavLink>
            <NavLink to='/book/list' className='mr-10 no-underline text-white font-medium'>Add Listing</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
