import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { validateFields } from "../utils/common";
import { Link } from "react-router-dom";

class Register extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    cpassword: "",
    successMsg: "",
    errorMsg: {
      signin_error: ""
    },
    isSubmitted: false,
  };

  registerUser = (event) => {
    event.preventDefault();
    const { first_name, last_name, email, password, cpassword } = this.state;
    const fieldsToValidate = [
      { first_name },
      { last_name },
      { email },
      { password },
      { cpassword },
    ];

    const allFieldsEntered = validateFields(fieldsToValidate);
    console.log(allFieldsEntered);
    if (!allFieldsEntered) {
      this.setState({
        errorMsg: {
          signin_error: "Please enter all the fields."
        }
      });
      console.log(this.state);
    } else {
      // console.log("password: " + password);
      // console.log("cpassword: " + cpassword);
      if (password !== cpassword) {
        this.setState({
          errorMsg: {
            signin_error: "Password and confirm password do not match"
          }
        });
        console.log("don't match");
        console.log(this.state.errorMsg);
      } else {
        this.setState({
          errorMsg: {
            signin_error: "All g"
          }
        });
        console.log("match");
        console.log(this.state);
        // login successful
      }
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { successMsg, errorMsg, isSubmitted } = this.state;
    return (
      <div className="login-page">
        <h1>Register y'all</h1>
        <div className="login-form">
          <Form onSubmit={this.registerUser.bind(this)}>
            {errorMsg && errorMsg.signin_error ? (
              <p className="errorMsg centered-message">
                {errorMsg.signin_error}
              </p>
            ) : (
              isSubmitted && (
                <p className="successMsg centered-message">{successMsg}</p>
              )
            )}
            <Form.Group controlId="first_name">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="first_name"
                placeholder="Enter First Name"
                onChange={this.handleInputChange.bind(this)}
              ></Form.Control>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                placeholder="Enter Last Name"
                onChange={this.handleInputChange.bind(this)}
              ></Form.Control>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={this.handleInputChange.bind(this)}
              ></Form.Control>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={this.handleInputChange.bind(this)}
              ></Form.Control>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="cpassword"
                placeholder="Confirm Password"
                onChange={this.handleInputChange.bind(this)}
              ></Form.Control>
            </Form.Group>
            <div className="action-items">
              <Button variant="warning" type="submit">
                Register Baby
              </Button>
              <Link to="/" className="btn btn-danger">
                Login
              </Link>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default connect()(Register);
