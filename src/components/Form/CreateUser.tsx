import * as React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Card } from "react-bootstrap";
function CreateUser() {
  const options = ["select team", "team 1", "team 2", "team 3", "team 4"];
  const cardStyle = {
    width: "500px",
    height: "500px",
    // display: 'flex',
    // justifyContent: 'center', // Horizontally center
    // alignItems: 'center', // Vertically center
    // minHeight: '100vh' // Set a minimum height to center vertically on the page
  }; 
  return (
    <>
      <Card>
        <Form style={cardStyle}>
          <FloatingLabel
            controlId="floatingInput"
            label="Person Id"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Person Id" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="First Name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="First Name" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="Email" />
          </FloatingLabel>

          <Form.Select className="mb-3" aria-label="Default select example">
            {options.map((options, key) => (
              <option value={key}>{options}</option>
            ))}
          </Form.Select>
          <FloatingLabel
            controlId="floatingInput"
            label="Date Of Birth"
            className="mb-3"
          >
            <Form.Control type="date" placeholder="Date Of Birth" />
          </FloatingLabel>

          {/*personId firstname email DateOfBirth teamName */}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
}

export default CreateUser;
