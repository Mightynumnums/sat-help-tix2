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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const student = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email
    };
    this.props.addStudent(student)
    this.setState({ firstName: "", lastName: "", email: "" });
     //passing the props(look at main)
    //addStudent(student); //persist to the database// axios uses express put it in main
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value }); //this is how you dinamically change where the input value goes to( is it firstName? is it lastName? is it email?) This way you do not have to speciy each each field.
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
