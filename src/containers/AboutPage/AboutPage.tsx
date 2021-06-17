// libraries
import { FC } from "react";
import { v4 as uuid } from "uuid";

// components
import PageContainer from "../../utils/PageContainer";
import { IoMdPin, IoMdMail } from "react-icons/io";

// images
import skills from "./skills";
import manImg from "./man.jpg";

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
              Hi! I'm Martin Meneghetti. I started my journey as developer on
              December 2019 when I made my first website at school and after
              that I studied programming every day. I enjoy coding and I really
              like the power behind technologies.
            </p>
          </div>
          <div className="about__biography__description__section">
            <h3 className="about__biography__description__header">
              My Journey
            </h3>
            <p className="about__biography__description__text">
              Starting from HTML and exploring the world of web development I
              learnt so much about the core concepts of websites becoming a MERN
              developer. Learning Python made me clear a lot of aspects of
              algorithms and data structures thankfully to its simple sintax. In
              the last months I approached mobile app development with Flutter
              and I enjoyed it! I also participated in the Italian Computer
              Science Olympics 2021 arriving 179° over 1983 people.
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
