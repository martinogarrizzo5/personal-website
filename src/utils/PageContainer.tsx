import { Fragment, FC } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";

interface PageContainerProps {
  className: string;
}

const PageContainer: FC<PageContainerProps> = props => {
  return (
    <Fragment>
      <motion.main
        className={props.className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {props.children}
      </motion.main>
      <Footer />
    </Fragment>
  );
};

export default PageContainer;
