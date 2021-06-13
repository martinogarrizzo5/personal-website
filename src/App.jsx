import { Route } from "react-router-dom";

import Header from "./components/Header/Header";
import LandingPage from "./containers/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";

import "./App.scss";
import PortfolioPage from "./containers/PortfolioPage/PortfolioPage";
import AboutPage from "./containers/AboutPage/AboutPage";
import ContactPage from "./containers/ContactPage/ContactPage";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={LandingPage} />
      <Route path="/projects" exact component={PortfolioPage} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/contact" exact component={ContactPage} />
      <Footer />
    </div>
  );
};

export default App;
