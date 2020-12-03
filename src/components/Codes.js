import React, { Component, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import Markdown from "react-markdown";
import srccode from "../resources/sourcecodes";
import {
  darcula,
  lightfair,
  hybrid,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Button, Modal } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMoon } from "react-icons/hi";
import { IoIosMoon, IoMdSunny } from "react-icons/io";

import postList from "../resources/posts.json";

const ModalCodeView = (props) => {
  const [theme, setTheme] = useState(darcula);

  return (
    <Modal size="lg" show={props.show} onHide={props.handleModal_}>
      <Modal.Header>
        <div className="blog-title">
          <h2>{props.data.title}</h2>
          <h5 style={{ color: "#909090" }}>Post by {props.data.author}</h5>
        </div>
        <Button onClick={props.handleModal_} type="button" className="close">
          <span aria-hidden="true" className="text-dark">
            <AiOutlineClose />
          </span>
        </Button>
      </Modal.Header>

      <Modal.Body>
        <div className="blog-content">
          <Markdown source={props.data.content} />
        </div>
        <div className="card border-0">
          {props.data.codes ? (
            <div>
              <ul className="btn_theme_group_">
                <button
                  className="btn_theme_"
                  onClick={() => setTheme(darcula)}
                >
                  <HiOutlineMoon />
                </button>
                <button
                  className="btn_theme_"
                  onClick={() => setTheme(lightfair)}
                >
                  <IoMdSunny />
                </button>
                <button className="btn_theme_" onClick={() => setTheme(hybrid)}>
                  <IoIosMoon />
                </button>
              </ul>

              <SyntaxHighlighter
                language={props.data.language}
                showLineNumbers={true}
                style={theme}
              >
                {props.data.codes}
              </SyntaxHighlighter>

              <h5>
                Language: <a href="#">{props.data.language}</a>
              </h5>
            </div>
          ) : (
            ""
          )}
          <p><strong>Category:</strong>{" "}<i>{props.data.category}</i></p> 
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default class Codes extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      codes: postList,
      currProject: {},
    };
    this.openModalCodeView = this.openModalCodeView.bind(this);
    this.state.codes.forEach((element) => {
      console.log(element.codes.length);
    });
  }

  openModalCodeView() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const codeList = this.state.codes.map((item, id) => {
      return (
        <li className="list-group-item" key={id}>
          <a
            className=""
            role="button"
            onClick={() =>
              this.openModalCodeView(this.setState({ currProject: item }))
            }
          >
            <h3 className="lead">{item.title}</h3>
          </a>
        </li>
      );
    });

    return (
      <div className="section_">
        <h2 className="header_">Codes</h2>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-xs-12">
            <ul className="list-group">{codeList}</ul>
            <ModalCodeView
              show={this.state.showModal}
              handleModal_={this.openModalCodeView}
              data={this.state.currProject}
            />
          </div>
        </div>
      </div>
    );
  }
}
