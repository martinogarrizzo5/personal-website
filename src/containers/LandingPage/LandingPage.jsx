import LandingImg from "./drawkit-grape-pack-illustration-2.svg";

import "./LandingPage.scss";
import projects from "../../projects/projects";

import ProjectCard from "../../components/ProjectCard/ProjectCard";

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="landing__header">
        <div className="landing__header__section landing__header__section-title">
          <h1 className="landing__header__title">
            Martin Meneghetti,
            <br />A Full-Stack Developer and Designer
          </h1>
          <p className="landing__header__sub-title">
            I design and code user interfaces and I love what I do. Programming
            is my real passion and I'll never stop coding
            <br />
          </p>
          <a href="/" className="landing__header__cta">
            View Portfolio
          </a>
        </div>
        <div className="landing__header__section landing__header__section-hero">
          <img
            src={LandingImg}
            alt="me-at-work"
            className="landing__header__hero"
          />
        </div>
      </div>
      <div className="landing__projects">
        <h2 className="landing__projects__header">
          All the best projects that I made during my journey as a programmer
          are here waiting for you!
        </h2>
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard {...project} />
          ))}
        </div>
        <a href="/" className="landing__projects__link">
          View All Projects &rarr;
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
