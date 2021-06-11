import LandingImg from "./drawkit-grape-pack-illustration-2.svg";

import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="landing__header">
        <div className="landing__header__section">
          <h1 className="landing__header__title">
            Martin Meneghetti,
            <br />
            The man you need for <br />
            web development
          </h1>
          <p className="landing__header__sub-title">
            All the best projects that I made <br />
            during my journey as a programmer
            <br /> are here waiting for you
          </p>
          <a href="/" className="landing__header__cta">
            View Projects
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
    </div>
  );
};

export default LandingPage;
