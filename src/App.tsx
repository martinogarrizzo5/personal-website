// libraries
import { lazy, FC } from "react";
import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// components
import Header from "./components/Header/Header";
import LazyComponent from "./utils/lazyComponent";
import ScrollToTop from "./utils/scrollToTop";

// styles
import "./App.scss";

// lazy components
const LandingPage = lazy(() => import("./containers/LandingPage/LandingPage"));
const PortfolioPage = lazy(
  () => import("./containers/PortfolioPage/PortfolioPage")
);
const AboutPage = lazy(() => import("./containers/AboutPage/AboutPage"));
const ContactPage = lazy(() => import("./containers/ContactPage/ContactPage"));

// N.B! Footer already included in PageContainer
const App: FC = () => {
  return (
    <ScrollToTop>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch key="alpha">
          <Route
            path="/"
            exact
            render={() => <LazyComponent item={<LandingPage />} />}
          />
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