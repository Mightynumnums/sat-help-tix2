import React, { Component } from "react";

export default class AddStudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form>
        <label>
          First Name:
          <input
            type="text"
            onChange={this.handleChange}
            name="firstName"
            value={this.state.firstName}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            onChange={this.handleChange}
            name="lastName"
            value={this.state.lastName}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            onChange={this.handleChange}
            name="email"
            value={this.state.email}
          />
        </label>
        <button type="submit">Submit New Student</button>
      </form>
    );
  }
}
