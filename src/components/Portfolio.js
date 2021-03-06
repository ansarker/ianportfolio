import React, { Component } from "react";
import Codes from "./Codes";
import Projects from "./Projects";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="row custom_pad">
        <div className="col-md-12">
          <Projects />

          <Codes />
        </div>
      </div>
    );
  }
}
