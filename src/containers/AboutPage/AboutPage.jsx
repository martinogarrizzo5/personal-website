import PageContainer from "../../utils/PageContainer";
import skills from "./skills";
import manImg from "./man.jpg";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <PageContainer className="about">
      <div className="about__biography">
        <figcaption className="about__biography__img-section">
          <img src={manImg} alt="my-self" className="about__biography__img" />
          <caption className="about__biography__img__caption">
            <p className="about__biography__img__caption__name is-title">
              Martin Meneghetti
            </p>
            <p className="about__biography__img__caption__job">
              High School Student
            </p>
          </caption>
        </figcaption>
        <div className="about__biography__description">
          <div className="about__biography__description__section">
            <h3 className="about__biography__description__header">
              Hey, It's me!
            </h3>
            <p className="about__biography__description__text">
              Hi! I'm Martin Meneghetti. I started my journey as developer on
              December 2019 when I made my first website at school and after
              that I studied programming every day.
            </p>
          </div>
          <div className="about__biography__description__section">
            <h3 className="about__biography__description__header">
              My Journey
            </h3>
            <p className="about__biography__description__text">
              Starting from html and exploring the world of web development I
              learnt so much about the core concepts of websites becoming a MERN
              developer. Learning Python made me clear a lot of aspects of
              algorithms and data structures thankfully to its simple sintax. In
              the last months I approached mobile app development with Flutter
              and I enjoyed it! I also participated in the Italian Computer
              Science Olympics arriving 179° over 1983 people
            </p>
          </div>
        </div>
      </div>
      <div className="about__skills">
        <h2 className="about__skills__header">Skills</h2>
        <div className="about__skills-grid">
          {skills.map(skill => (
            <div className="about__skills-grid__skill">
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
