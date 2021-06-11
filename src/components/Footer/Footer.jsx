import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      &copy; Martin Meneghetti {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
