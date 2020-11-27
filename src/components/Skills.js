import React from "react";

export default function Skills() {
  const skillset = [
    {
      title: "Programming Languages",
      value: ["Python", "MATLAB", "Java", "C/C++"],
    },
    {
      title: "Web and Mobile App Development Languages",
      value: [
        "JavaScript",
        "Android",
        "NodeJS",
        "ReactJS",
        "React Native",
        "PHP",
      ],
    },
    {
      title: "Framework/Libraries",
      value: [
        "PyTorch",
        "TensorFlow",
        "Keras",
        "Numpy",
        "Matplotlib",
        "Seaborn",
        "OpenCV",
        "Pillow",
        "Scipy",
        "Scikit-learn",
        "Scikit-image",
      ],
    },
    {
      title: "Others",
      value: ["Linux Shell Script (bash, zsh)", "LaTex", "SSH", "Tmux"],
    },
  ];

  const ListItems = (props) => {
    return props.item.map((it, key) => {
      return (
        <li className="mc-1 ml-0 btn btn-info spacing_ sml_" key={key}>
          {it}
        </li>
      );
    });
  };

  const skills = skillset.map((val, id) => {
    return (
      <div className="card" key={id}>
        <div className="card-header card_header_" id={"heading" + id}>
          <h3
            className="btn btn-link collapsed"
            data-toggle="collapse"
            data-target={"#collapse" + id}
            aria-expanded="false"
            aria-controls={"collapse" + id}
          >
            {val.title}
          </h3>
        </div>
        <div
          id={"collapse" + id}
          className="collapse"
          aria-labelledby={"heading" + id}
          data-parent="#accordion"
        >
          <div className="navbar-expand-lg card-body">
            <ul className="navbar-nav disp-blck">
              <ListItems item={val.value} />
            </ul>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="section_">
      <h2 className="header_">Skills</h2>
      <div className="pl-4 pr-4">
        <div id="accordion">{skills}</div>
      </div>
    </div>
  );
}
