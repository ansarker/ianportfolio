import React from "react";
import Image from "../img/iansarker.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa/index";

export default function Sidebar() {
  return (
    <div>
      <div className="img_">
        <img className="img-responsive img_res_" src={Image} alt="Anis" />
      </div>
      <div className="section_">
        <h1>Anis Sarker</h1>
        <p>
          Very enthusiastic team player and fond of cherishing new technology
        </p>
        <ul className="list_type_none">
          <li className="list_item_">
            <a className="centerize_" href="https://github.com/ansarker">
              <div className="block_">
                <FaGithub />
              </div>
            </a>
          </li>
          <li className="list_item_">
            <a
              className="centerize_"
              href="https://www.linkedin.com/in/iansarker/"
            >
              <div className="block_">
                <FaLinkedin />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
