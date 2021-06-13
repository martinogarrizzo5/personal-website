import { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header/Header";
import LandingPage from "./containers/LandingPage/LandingPage";
import LazyComponent from "./utils/lazyComponent";
import ScrollToTop from "./utils/scrollToTop";

import "./App.scss";

const PortfolioPage = lazy(() =>
  import("./containers/PortfolioPage/PortfolioPage")
);
const AboutPage = lazy(() => import("./containers/AboutPage/AboutPage"));
const ContactPage = lazy(() => import("./containers/ContactPage/ContactPage"));

// N.B! Footer already included in PageContainer
const App = () => {
  return (
    <ScrollToTop>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch key="alpha">
          <Route path="/" exact component={LandingPage} />
          <Route
            path="/projects"
            exact
            render={() => <LazyComponent item={<PortfolioPage />} />}
          />
          <Route
            path="/about"
            exact
            render={() => <LazyComponent item={<AboutPage />} />}
          />
          <Route
            path="/contact"
            exact
            render={() => <LazyComponent item={<ContactPage />} />}
          />
        </Switch>
      </AnimatePresence>
    </ScrollToTop>
  );
};

export default App;
