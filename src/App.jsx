import { Route } from "react-router-dom";

import Header from "./components/Header/Header";
import LandingPage from "./containers/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={LandingPage} />
      <Footer />
    </div>
  );
};

export default App;
