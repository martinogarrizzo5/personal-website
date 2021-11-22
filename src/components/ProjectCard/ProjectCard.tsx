import { FC } from "react";
import { IconType } from "react-icons";
import "./ProjectCard.scss";

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
  type: string;
  typeIcon: IconType;
  isComingSoon?: boolean;
}

const projectCard: FC<ProjectCardProps> = props => {
  const comingSoonButtom = (
    <a className="project-card__link btn btn__unavailable" href="#">
      Coming Soon!
    </a>
  );

  const button = (
    <a className="project-card__link btn" href={props.link}>
      See More
    </a>
  );

  return (
    <div className="project-card">
      <div className="project-card__img-container">
        <img className="project-card__img" src={props.imageUrl} alt="project" />
      </div>
      <div className="project-card__description">
        <p className="project-card__type">
          <props.typeIcon className="project-card__type__icon" />
          <span>{props.type}</span>
        </p>
        <h3 className="project-card__title">{props.title}</h3>
        <p className="project-card__sub-title">{props.description}</p>

        {props.isComingSoon ? comingSoonButtom : button}
      </div>
    </div>
  );
};

export default projectCard;
