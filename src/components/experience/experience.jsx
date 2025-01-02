// Imports
import React from "react";
import "./experience.css";
import icon_1 from "../../images/Group 2.png";
import icon_2 from "../../images/Group 1935.png";
import icon_3 from "../../images/Group 1938.png";
import icon_4 from "../../images/Icons.png";
import overlay from "../../images/Gradient.png";


function Experience() {
  return (
    <section className="experience">
      <h1>Work Experience</h1>
      <div className="cards">

        <div className="card">
          <div className="img">
            <img src={icon_1} alt="icon" />
          </div>
          <div className="text">
            <h2>CIB on the Mobile</h2>
            <p>
              Take your client onboard seamlessly by our amazing tool of digital
              onboard process.
            </p>
            <a href="#">LEARN MORE</a>
          </div>
        </div>

        <div className="card">
          <div className="img">
            <img src={icon_2} alt="icon" />
          </div>
          <div className="text">
            <h2>CIB on the Mobile</h2>
            <p>
              Take your client onboard seamlessly by our amazing tool of digital
              onboard process.
            </p>
            <a href="#">LEARN MORE</a>
          </div>
        </div>

        <div className="card">
          <div className="img">
            <img src={icon_3} alt="icon" />
          </div>
          <div className="text">
            <h2>CIB on the Mobile</h2>
            <p>
              Take your client onboard seamlessly by our amazing tool of digital
              onboard process.
            </p>
            <a href="#">LEARN MORE</a>
          </div>
        </div>

        <div className="card">
          <div className="img">
            <img src={icon_4} alt="icon" />
          </div>
          <div className="text">
            <h2>CIB on the Mobile</h2>
            <p>
              Take your client onboard seamlessly by our amazing tool of digital
              onboard process.
            </p>
            <a href="#">LEARN MORE</a>
          </div>
        </div>

        <div className="overlay">
            <img src={overlay} alt="overlay" />
        </div>

      </div>
    </section>
  );
}

export default Experience;
