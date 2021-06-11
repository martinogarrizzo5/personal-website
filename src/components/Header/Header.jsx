import { NavLink } from "react-router-dom";

import LogoImg from "./logo4.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={LogoImg} className="header__logo__img" alt="logo" />
        <span className="header__logo__brand">MyPortfolio</span>
      </div>
      <div className="header__nav">
        <a href="/" className="header__nav__link">
          Projects
        </a>
        <a href="/" className="header__nav__link">
          About
        </a>
        <a href="/" className="header__nav__link">
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
