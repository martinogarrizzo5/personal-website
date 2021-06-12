import { Route } from "react-router-dom";

import Header from "./components/Header/Header";
import LandingPage from "./containers/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";

import "./App.scss";
import PortfolioPage from "./containers/Portfolio/Portfolio";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={LandingPage} />
      <Route path="/projects" exact component={PortfolioPage} />
      <Footer />
    </div>
  );
};

export default App;
