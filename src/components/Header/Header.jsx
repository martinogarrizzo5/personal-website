import { NavLink } from "react-router-dom";

import LogoImg from "./logo4.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={LogoImg} className="header__logo__img" alt="logo" />
        <NavLink to="/" className="header__logo__brand">
          MyPortfolio
        </NavLink>
      </div>
      <div className="header__nav">
        <NavLink
          to="/projects"
          className="header__nav__link"
          activeClassName="header__nav__link--active"
        >
          Projects
        </NavLink>
        <NavLink
          to="/about"
          className="header__nav__link"
          activeClassName="header__nav__link--active"
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className="header__nav__link"
          activeClassName="header__nav__link--active"
        >
          Contact
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
