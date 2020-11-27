import React, { Component } from "react";
import Skills from "./Skills";
import Interest from "./Interest";
import Publications from "./Publications";
import About from "./About";
import Sidebar from "./Sidebar";

export default class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3 bg-light pt-3 pb-3">
          {/* Sidebar */}
          <Sidebar />
        </div>
        <div className="col-md-9 bg-light pt-3 pb-3">
          {/* About */}
          <About/>

          {/* Publications */}
          <Publications/>

          {/* Skills */}
          <Skills/>   

          {/* Interests */}
          <Interest/>
          
        </div>
      </div>
    );
  }
}
