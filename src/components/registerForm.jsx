import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import * as userService from "../services/userService";
import auth from "../services/authService";
class RegisterForm extends Form {
  state = { data: { username: "", password: "", name: "" }, errors: {} };

  schema = {
    username: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net", "pl"] },
      })
      .required()
      .label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = async () => {
    try {
      const { headers } = await userService.register(this.state.data);
      auth.loginWithJwt(headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className="w-25">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
