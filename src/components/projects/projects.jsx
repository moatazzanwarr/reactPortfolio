// Imports
import React from "react";
import "./projects.css";
import { Link } from "react-router-dom";
import pr_1 from "../../images/pr-1.png";
import Project from "./project";

function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <Project/>
      </div>
    </section>
  );
}

export default Projects;
