import "./ProjectCard.scss";

const projectCard = props => {
  return (
    <div className="project-card">
      <div className="project-card__img-container">
        <img className="project-card__img" src={props.imageUrl} alt="project" />
      </div>
      <div className="project-card__description">
        <h3 className="project-card__title">{props.title}</h3>
        <p className="project-card__sub-title">{props.description}</p>
        <a className="project-card__link" href="/">
          See More
        </a>
      </div>
    </div>
  );
};

export default projectCard;
