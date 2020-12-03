import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Button, Modal } from "react-bootstrap";
import Carousel from "./Carousel";

const Technologies = (props) => {
  return props.technologies.map((it, id)=> { return <mark className="d-flex text-sm" key={id}>{it}</mark>;})

}

const Modal_ = (props) => {
  return (
    <Modal size="lg" show={props.show} onHide={props.handleModal_}>
      <Modal.Header>
        <h5 className="modal-title text-danger" id={"exampleModal_" + props.key_ + "Label"}>
          {props.data.name}
        </h5>
        <Button onClick={props.handleModal_} type="button" className="close">
          <span aria-hidden="true" className="text-dark">
            <AiOutlineClose />
          </span>
        </Button>
      </Modal.Header>
      <Modal.Body>
        <div className="img-container_">
          {/* <img
                className="card-img-top"
                style={{ height: "100%", width: "auto" }}
                src={require("../projects/" + props.data.imgs[0].name)}
              /> */}
          <Carousel imgs={props.data.imgs} />
        </div>
        <div className="m-4">
          <p> {props.data.description} </p>
          <div className="text-left">
            <p className="">
              <strong>Technologies: </strong> {<Technologies technologies={props.data.technologies}/>}
            </p>
            <p className="">
              <strong>Category: </strong> {props.data.category}
            </p>
            <p className="">
              <strong>Year: </strong> {props.data.year}
            </p>
            <p className="">
              <strong>Source: </strong> <a href={props.data.src}>Link</a>
            </p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.handleModal_}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modal_;
