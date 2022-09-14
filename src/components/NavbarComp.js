import React from "react";
import { Navbar, Container, Button, Nav, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/ProductStyle.css"

const NavbarComp = () => {
  return (
    <div>
      <Navbar className="darkblue" expand="lg">
        <Container>
          <Navbar.Brand href="/">O L S H O P</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
            >
              <Nav.Link href="#action1">My Products</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
              >
                <Nav.Link href="/carts">Cart</Nav.Link>
                <Nav.Link href="#action1">Profile</Nav.Link>  
              </Nav>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
