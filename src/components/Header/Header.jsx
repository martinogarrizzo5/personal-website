import { useState, useEffect, useRef } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { CSSTransition } from "react-transition-group";

import LogoImg from "./logo4.png";
import "./Header.scss";

const Header = props => {
  const links = [
    { name: "Projects", route: "/projects" },
    { name: "About", route: "/about" },
    { name: "Contact", route: "/contact" },
  ];
  const [isMenuShown, setMenuShown] = useState(false);

  const handleMenuPress = () => {
    setMenuShown(prevState => !prevState);
  };

  const prevRouteRef = useRef(null);
  useEffect(() => {
    if (prevRouteRef.current == null) {
      prevRouteRef.current = props.location.pathname;
    } else {
      if (props.location.pathname !== prevRouteRef.current) {
        prevRouteRef.current = props.location.pathname;
        setMenuShown(false);
      }
    }
  }, [props.location]);

  return (
    <header className="header">
      <div className="header__logo">
        <img src={LogoImg} className="header__logo__img" alt="logo" />
        <NavLink to="/" className="header__logo__brand">
          MyPortfolio
        </NavLink>
      </div>
      <div className="header__nav">
        {links.map(link => (
          <NavLink
            to={link.route}
            className={`header__nav__link ${
              isMenuShown
                ? "header__nav__link__active"
                : "header__nav__link__inactive"
            }`}
            activeClassName="header__nav__link--active"
            key={uuid()}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
      <div
        className={`header__menu ${
          isMenuShown ? "header__menu__active" : "header__menu__inactive"
        }`}
        onClick={handleMenuPress}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <CSSTransition
        in={isMenuShown}
        timeout={600}
        classNames="header__back-screen"
        mountOnEnter
        unmountOnExit
      >
        <div className="header__back-screen-base">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </CSSTransition>
    </header>
  );
};

export default withRouter(Header);
