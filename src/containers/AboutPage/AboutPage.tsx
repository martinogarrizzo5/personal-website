// libraries
import { FC } from "react";
import { v4 as uuid } from "uuid";

// components
import PageContainer from "../../utils/PageContainer";
import { IoMdPin, IoMdMail } from "react-icons/io";

// images
import skills from "./skills";
import manImg from "./me.jpg";

// styles
import "./AboutPage.scss";

const AboutPage: FC = () => {
  return (
    <PageContainer className="about">
      <div className="about__biography">
        <figure className="about__biography__img-section">
          <img src={manImg} alt="my-self" className="about__biography__img" />
          <figcaption className="about__biography__img__caption">
            <p className="about__biography__img__caption__name is-title">
              Martin Meneghetti
            </p>
            <p className="about__biography__img__caption__job">
              High School Student
            </p>
          </figcaption>
        </figure>
        <div className="about__biography__description">
          <div className="about__biography__description__section">
            <h3 className="about__biography__description__header">
              Hey, It's me!
            </h3>
            <p className="about__biography__description__text">
              Welcome to my personal website, where I showcase my programming
              projects and passion for coding. My journey as a developer began
              in December 2019, when I created my first website in school. From
              that moment on, I dedicated myself to studying programming every
              day. I am constantly inspired by the endless possibilities and
              power that technology holds, and I am thrilled to share my work
              with you.
            </p>
          </div>
          <div className="about__biography__description__section">
            <h3 className="about__biography__description__header">
              My Journey
            </h3>
            <p className="about__biography__description__text">
              My adventure began with HTML, where I discovered the core concepts
              of websites and the endless possibilities they held. I then delved
              deeper into the world of Javascript, which allowed me to learn
              technologies like React and NodeJs. I also had the opportunity to
              showcase my skills by participating in the Italian Computer
              Science Olympics 2021, where I placed 121st. My passion for
              technology led me to explore new frontiers, and I discovered the
              future of app development with Flutter. I've used this powerful
              tool to create mobile and desktop apps for local companies like
              the Proloco of Castelfranco Veneto, who needed an app to encourage
              tourism in the city. Currently, I am working as a software
              developer for a startup in Milan and I am always looking for new
              challenges to improve my skills and create innovative solutions.
            </p>
          </div>
          <div className="about__biography__description__section about__biography__general-info">
            <div className="about__biography__general-info__others">
              <IoMdPin className="about__biography__general-info__others__icon" />
              <span className="about__biography__general-info__others__text">
                <a href="https://www.google.it/maps/place/31033+Castelfranco+Veneto+TV/@45.6737041,11.914747,14z/data=!3m1!4b1!4m5!3m4!1s0x4779294589009f9f:0x4e474375fd2eeb08!8m2!3d45.6716942!4d11.9282388">
                  Castelfranco Veneto, Italy
                </a>
              </span>
            </div>
            <div className="about__biography__general-info__others">
              <IoMdMail className="about__biography__general-info__others__icon" />
              <span className="about__biography__general-info__others__text">
                <a href="mailto:martinmeneghetti1@gmail.com">
                  martinmeneghetti1@gmail.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="about__skills">
        <h2 className="about__skills__header">Skills</h2>
        <div className="about__skills-grid">
          {skills.map(skill => (
            <div className="about__skills-grid__skill" key={uuid()}>
              <skill.icon className="about__skills-grid__skill__icon" />
              <h3 className="about__skills-grid__skill__title">
                {skill.language}
              </h3>
              <p className="about__skills-grid__skill__sub-title">
                {skill.technologies}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default AboutPage;
