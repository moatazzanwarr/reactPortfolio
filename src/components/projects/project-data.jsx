// Imports
import React from "react";

function Data({ title, prag, src }) {
  return (
    <div className="project">
      <div className="text">
        <h3>{title}</h3>
        <p>{prag}</p>
      </div>
      <div className="img">
        <img src={src} alt="project" />
      </div>
    </div>
  );
}

export default Data;
