import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'

const MyNavbar = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Home</Navbar.Brand>
          </LinkContainer>
        <Nav className="me-auto">
          <LinkContainer to='/form'>
            <Nav.Link>Form</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/process'>
            <Nav.Link>Process</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/tpp'>
            <Nav.Link>TPP</Nav.Link>
          </LinkContainer>
        </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar