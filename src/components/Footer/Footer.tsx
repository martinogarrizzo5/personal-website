import { FC } from "react";
import "./Footer.scss";
import LogoWhite from "./logo-white.png";

const Footer: FC = () => {
  return (
    <div className="footer">
      <div>
        <img src={LogoWhite} alt="logo-white" className="footer__logo" />
        <p className="footer__quote">Making Ourselves Better Every Day</p>
      </div>
      <div>&copy; Made with ❤️ by Martin Meneghetti</div>
    </div>
  );
};

export default Footer;
