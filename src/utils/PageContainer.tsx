import { Fragment, FC } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";

interface PageContainerProps {
  className: string;
}

const PageContainer: FC<PageContainerProps> = props => {
  return (
    <Fragment>
      <motion.div
        className={props.className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {props.children}
      </motion.div>
      <Footer />
    </Fragment>
  );
};

export default PageContainer;
