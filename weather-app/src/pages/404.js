import React, { Component } from "react";
import Button from "../common/Button";
import { Link } from "react-router-dom";
export default class NotFound extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>404 Error Page </h1>
        <h2>You are really testing my app ! </h2>
        <h3>Nice Job!</h3>
        <Link to="/">
          <Button>Go Back </Button>
        </Link>
      </React.Fragment>
    );
  }
}
