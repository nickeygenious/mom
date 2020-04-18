import React, { Fragment, useState } from "react";
import { Modal, Button, Form, ButtonGroup } from "react-bootstrap";

const SignIn = () => {
  return (
    <Fragment>
      <Form.Label>Email address or Mobile No.</Form.Label>
      <Form.Control type="email" placeholder="Enter here" />
      <Form.Text className="text-muted">
        We'll never share your email or Mobile No. with anyone else.
      </Form.Text>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter here" />
      </Form.Group>
    </Fragment>
  );
};

const SignUp = () => {
  return (
    <Fragment>
      <Form.Label>Email ID </Form.Label>
      <Form.Control type="email" placeholder="Enter here" />
      <Form.Label>Email ID </Form.Label>
      <Form.Control type="email" placeholder="Enter here" />
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter your  password " />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Re-Password</Form.Label>
        <Form.Control type="password" placeholder="Enter your  password " />
      </Form.Group>
    </Fragment>
  );
};

export default function SignInModal(props) {
  const [formType, setFormType] = useState("signin");
  // this.state= {
  //   formType: "signin"
  // }
  // setState= (value ) => {

  //   this.setState({ formType: value })
  // }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="user-defined-modal"
    >
      {/* <Modal.Header>
          {/* <Modal.Title id="contained-modal-title-vcenter"> */}
      {/* <span onClick={() => alert("SignIn")}>SignIn </span>| <span onClick={() => alert("SignUp")}>Signup</span> */}
      {/* <ButtonGroup aria-label="Basic example">
    <Button variant="outline-success" className="btn-Signin">SIGN IN</Button>
    <Button variant="outline-success" className="btn-Signin">SIGN UP</Button>
  </ButtonGroup> */}
      {/* </Modal.Title> 
        </Modal.Header> */}

      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>
              <ButtonGroup aria-label="Basic example">
                <Button variant="outline-success" className="btn-Signin" onClick={() => setFormType("signin")}>
                  SIGN IN
                </Button>
                <Button variant="outline-success" className="btn-Signin" onClick={() => setFormType("signup")}>
                  SIGN UP
                </Button>
              </ButtonGroup>
            </Form.Label>
          </Form.Group>
         {formType === "signin" ? <SignIn /> : <SignUp />}
         {/* {formType === "signin" && <SignIn /> }
         {formType === "signup" && <SignUp /> } */}
          {/* <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group> */}
          <div className="submit-button">
            <Button variant="success" className="btn-submit" type="submit">
              Submit
            </Button>
          </div>
          <div className="fado">
            <center>OR</center>
          </div>

          <Button
            variant="outline-success"
            className="btn-submit"
            type="submit"
          >
            Request
          </Button>
          <center>
            New to MOM?Click on <Button variant="link">SIGN UP</Button>
          </center>
        </Form>
      </Modal.Body>
      {/* <Modal.Footer>
          <p>New to MOM?Click on SIGN UP</p>
          
          </Modal.Footer> */}
    </Modal>
  );
}
