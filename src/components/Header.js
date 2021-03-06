import React from "react";
import Image from "../img/iansarker.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa/index";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="bg-dark_ text-center">
      {/* <div className="img_">
        <img className="img-responsive img_res_" src={Image} alt="Anis" />
      </div> */}
      <div className="pt-4">
        <h1 className="mt-4 mb-2">
          <a href="/iansarker" className="heading_">
            Anis Sarker
          </a>
        </h1>
      </div>
      <div className="menu-a-container">
        <ul className="menu">
          <li className="menu-item">
            <a href="https://github.com/ansarker">
              <FaGithub />
            </a>
          </li>
          <li className="menu-item">
            <a href="https://linkedin.com/in/iansarker">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
      <Navbar />
    </div>
  );
}
