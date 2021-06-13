import "./Spinner.scss";

const Spinner = props => {
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
