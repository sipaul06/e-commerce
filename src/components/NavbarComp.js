import React from "react";
import { Navbar, Container, Button, Nav, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/ProductStyle.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'

const NavbarComp = () => {
  return (
    <div>
      <Navbar className="darkblue" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="darkpink p-1"><FontAwesomeIcon icon={faBasketShopping} />O L S H O P</Navbar.Brand>
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
                placeholder="type product name..."
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success"><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
              >
                <Nav.Link href="/carts"><FontAwesomeIcon icon={faCartShopping} /></Nav.Link>
                <Nav.Link href="#action1"><FontAwesomeIcon icon={faUser} /></Nav.Link>  
              </Nav>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
