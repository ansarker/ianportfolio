import React, { Component } from "react";
import projects from "../resources/projects";
import Modal_ from "./Modal";

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      currProject: {},
      projects: projects,
    };

    this.handleModal = this.handleModal.bind(this);
  }

  handleModal() {
    this.setState({ show: !this.state.show });
  }

  render() {
    const categories = this.state.projects.map((project, id) => {
      return (
        <li className="mc-1 ml-0 btn btn-info spacing_ sml_" key={id}>
          {project.category}
        </li>
      );
    });

    const porjects_ = this.state.projects.map((project, id) => {
      let i = project.description.lastIndexOf(" ", 30);
      let j = project.description.indexOf(" ", i + 1);
      return (
        <div className="col-sm-4 col-md-4 col-xs-4 text-center" key={id}>
          <div
            // onClick={this.handleModal}
            onClick={() =>
              this.handleModal(this.setState({ currProject: project }))
            }
            className="card"
            data-toggle="modal"
            data-target={"#exampleModal_" + id}
          >
            <div className="img-container">
              <img
                className="card-img-top"
                style={{ width: "100%" }}
                src={require("../projects/" + project.imgs[0].name)}
                alt={project.imgs[0].name}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{project.name}</h5>
              {/* <p className="card-text">
                {project.description.substring(0, i + j - i)}
              </p> */}
              {/* <a
                href="#"
                className="btn btn-primary"
                data-toggle="modal"
                data-target={"#exampleModal_" + id}
              >
                View
              </a> */}
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <header className="post-header">
          <h1 className="post-title">Portfolio</h1>
        </header>
        {/* <div className="pl-4 pr-4">
          <div className="navbar-expand-lg card-body text-center">
          <ul className="navbar-nav disp-blck">
          {categories}
          </ul>
          </div>
        </div> */}
        <div className="post-body">
          <div className="row">{porjects_}</div>
          <Modal_
            show={this.state.show}
            handleModal_={this.handleModal}
            data={this.state.currProject}
          />
        </div>
      </div>
    );
  }
}
