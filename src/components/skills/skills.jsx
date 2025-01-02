// Imports
import React from "react";
import "./skills.css";
import skills from "../../images/skills.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import react from "../../images/react.png";
import next from "../../images/next.png";
import figma from "../../images/figma.png";
import ai from "../../images/ai.png";

function Skills() {
  return (
    <section className="pr-skills">
        <p>
            I'm currently looking to join a <span>cross-functional</span> team that values
            improving people's lives through accessible design
        </p>

        <div className="skills">
            <div><img src={css} alt="css" /></div>
            <div><img src={js} alt="js" /></div>
            <div><img src={react} alt="react" /></div>
            <div><img src={next} alt="next" /></div>
            <div><img src={figma} alt="figma" /></div>
            <div><img src={ai} alt="ai" /></div>
        </div>

        <div className="img">
            <img src={skills} alt="skills" />
        </div>

    </section>
  );
}

export default Skills;
