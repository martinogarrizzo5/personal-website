import { v4 as uuid } from "uuid";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import PageContainer from "../../utils/PageContainer";
import "./PortfolioPage.scss";
import projects from "../../projects/projects";

const PortfolioPage = () => {
  return (
    <PageContainer className="portfolio">
      <h1 className="portfolio__header is-title">
        These are the most exciting websites I've been working on!
      </h1>
      <div className="portfolio__grid">
        {projects.map(project => (
          <ProjectCard {...project} key={uuid()} />
        ))}
      </div>
      <div className="portfolio__coming-soon">
        <h2 className="is-title portfolio__coming-soon__text">
          New Projects Coming Soon
        </h2>
      </div>
    </PageContainer>
  );
};

export default PortfolioPage;
