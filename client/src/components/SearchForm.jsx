import React from "react";
import { Form, Container, Button } from "react-bootstrap";

function SearchForm() {
  return (
    <Container>
      <Form className="d-flex flex-row justify-content-center my-5">
        <Form.Group className="d-flex flex-row align-items-center">
          <Form.Label className="d-none">
            Search for your favourite artists!{" "}
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Insert artist's name or group here.."
          />
        </Form.Group>
        <Button className=" " variant="primary" type="submit">
          Search
        </Button>
      </Form>
    </Container>
  );
}

export default SearchForm;
