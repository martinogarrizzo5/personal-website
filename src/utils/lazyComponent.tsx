import { Suspense, FC, ReactElement } from "react";
import Spinner from "../components/Spinner/Spinner";

interface LazyComponentProps {
  item: ReactElement;
}

const LazyComponent: FC<LazyComponentProps> = props => {
  return (
    <Suspense fallback={<Spinner className="spinner--centered" />}>
      {props.item}
    </Suspense>
  );
};

export default LazyComponent;
