// Imports
import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Hero from "../hero/hero";
import About from "../about/about";
import Experience from "../experience/experience";
import Skills from "../skills/skills";
import Projects from "../projects/projects";
import Contact from "../contact/contsct";
import Footer from "../footer/footer";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <div className="btn">
        <Link to="/projects">More</Link>
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
