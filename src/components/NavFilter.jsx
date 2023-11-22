import React from "react";
import { Container, Form, Navbar } from "react-bootstrap";
import StarRating from "./StarRating";

const NavFilter = ({ search, handleSearch, starrate, handleRating }) => {
  return (
    <div style={{ width: "100%" }}>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        style={{ width: "100%" }}
      >
        <Container fluid>
          <Navbar.Brand href="#">F.Movies</Navbar.Brand>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={handleSearch}
              />
            </Form>
            <StarRating rating={starrate} handleRating={handleRating} />
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavFilter;
