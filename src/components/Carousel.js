import React from 'react';
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const Carousel = (props) => {
  const oList = props.imgs.map((img) => {
    return (
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to={img.id}
        key={img.id}
        className={img.id === 1 ? "active" : ""}
      ></li>
    );
  });

  const imgList = props.imgs.map((img, id) => {
    return (
      <div
        className={
          img.id === 1
            ? "img-container__ carousel-item active"
            : "img-container__ carousel-item"
        }
        key={id}
      >
        <img
          className="card-img-top"
          style={{ height: "100%", width: "auto" }}
          src={require("../projects/" + img.name)}
          alt={img.name.split(".")}
        />
      </div>
    );
  });
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">{oList}</ol>
      <div className="carousel-inner">{imgList}</div>

      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <button className="btn" style={{position: 'absolute', left: '0', background: 'cadetblue'}}>
          <span>
            <GrLinkPrevious />
          </span>
        </button>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <button className="btn"  style={{position: 'absolute', right: '0', background: 'cadetblue'}}>
          <span>
            <GrLinkNext />
          </span>
        </button>
      </a>
    </div>
  );
};

export default Carousel;
