import { FC } from "react";
import "./Spinner.scss";

interface SpinnerProps {
  className: string;
}

const Spinner: FC<SpinnerProps> = props => {
  return (
    <div className={`${props.className}`}>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
