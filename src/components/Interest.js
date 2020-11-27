import React from "react";

export default function Interest() {
  const interests = [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Psychology",
    "Philosophy",
  ];

  const interestList = interests.map((it, key) => {
    return (
      <li className="list-group-item spacing_ sml_" key={key}>
        {it}
      </li>
    );
  });

  return (
    <div className="section_">
      <h2 className="header_">Interests</h2>
      <div className="pl-4 pr-4">
        <ul className="list-group">{interestList}</ul>
      </div>
    </div>
  );
}
