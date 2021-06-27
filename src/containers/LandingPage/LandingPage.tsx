import { FC } from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuid } from "uuid";
import PageContainer from "../../utils/PageContainer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import heroImg from "./hero.svg";
import projects from "../../projects/projects";
import "./LandingPage.scss";

const LandingPage: FC = () => {
  const mainProjects = projects.slice(0, 3);

  return (
    <PageContainer className="landing">
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
          <NavLink to="/projects" className="landing__header__cta">
            View Portfolio
          </NavLink>
        </div>
        <div className="landing__header__section landing__header__section-hero">
          <img
            src={heroImg}
            alt="me-at-work"
            className="landing__header__hero"
          />
        </div>
      </div>
      <div className="landing__projects">
        <h2 className="landing__projects__header is-title">
          All the best projects that I made during my journey as a programmer
          are here waiting for you!
        </h2>
        <div className="landing__projects__projects-grid">
          {mainProjects.map(project => (
            <ProjectCard {...project} key={uuid()} />
          ))}
        </div>
        <NavLink to="/projects" className="landing__projects__link">
          View All Projects &rarr;
        </NavLink>
      </div>
    </PageContainer>
  );
};

export default LandingPage;
