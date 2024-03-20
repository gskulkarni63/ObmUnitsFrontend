import React from "react";
import { Card, CardGroup, Form, Stack } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import { Button } from "react-bootstrap";
function UserLogin() {
  const cardStyle = {
    width: "1000px",
    height: "500px",
    display: 'flex',
    justifyContent: 'center', // Horizontally center
    // alignItems: 'center', // Vertically center
    // minHeight: '100vh' // Set a minimum height to center vertically on the page
  };

  return (
    <CardGroup>
      <Card></Card>
      <Card style={cardStyle}>
        <Form action="post">
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Email" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Password"
            className="mb-3"
          >
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </CardGroup>
  );
}

export default UserLogin;
