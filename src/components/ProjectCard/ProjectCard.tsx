import { FC } from "react";
import { IconType } from "react-icons";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import "./ProjectCard.scss";

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
  type: string;
  typeIcon: IconType;
  isComingSoon?: boolean;
  sourceCodeLink?: string;
}

const projectCard: FC<ProjectCardProps> = props => {
  const button = (
    <a className="project-card__link btn" href={props.link}>
      <span>Visit Website</span>
    </a>
  );

  const privateCodeButton = (
    <a className="project-card__link btn btn__unavailable" href="#">
      <AiOutlineEyeInvisible className="project-card__link__icon" />
      <span>Private Code</span>
    </a>
  );

  const actions = () => {
    let component = button;

    if (props.isComingSoon) {
      component = (
        <div className="project-card__links">
          {privateCodeButton}
          <span className="project-card__divider"></span>
          <a className="project-card__link btn btn__unavailable" href="#">
            Coming Soon!
          </a>
        </div>
      );
    } else if (props.sourceCodeLink) {
      component = (
        <div className="project-card__links">
          <a
            className="project-card__link btn btn__source"
            href={props.sourceCodeLink}
          >
            <BiCodeAlt className="project-card__link__icon" />
            <span>Source Code</span>
          </a>
          <span className="project-card__divider"></span>
          {button}
        </div>
      );
    } else {
      component = (
        <div className="project-card__links">
          {privateCodeButton}
          <span className="project-card__divider"></span>
          {button}
        </div>
      );
    }

    return component;
  };

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
        {actions()}
      </div>
    </div>
  );
};

export default projectCard;
