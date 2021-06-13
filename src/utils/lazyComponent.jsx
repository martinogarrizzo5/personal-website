import { Suspense } from "react";
import Spinner from "../components/Spinner/Spinner";

const LazyComponent = props => {
  return (
    <Suspense fallback={<Spinner className="spinner--centered" />}>
      {props.item}
    </Suspense>
  );
};

export default LazyComponent;
