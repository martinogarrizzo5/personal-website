import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

import "./Select.scss";

const Select = props => {
  // state
  const [selectedValue, changeSelectedValue] = useState("None");
  const [isDropdownShown, setDropdownShown] = useState(false);

  // function to close dropdown when clicking outside
  const handleClickOutside = e => {
    const targetClassName = e.target.className.toString();
    if (!targetClassName.includes("dropdown")) {
      setDropdownShown(false);
    }
  };

  useEffect(() => {
    // add the click listener when component is mounted
    document.addEventListener("click", handleClickOutside);

    // when component un-mount the click listener is removed
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // close and open dropdown
  const handleDropdown = () => {
    setDropdownShown(prevState => !prevState);
  };

  // change value of input field
  const handleSelectionChange = e => {
    const selection = e.target.innerHTML;
    changeSelectedValue(selection);
    setDropdownShown(false);
  };

  const selections = props.options;

  return (
    <div className="dropdown">
      <input
        type="text"
        style={{ display: "none" }}
        name={props.name}
        id={props.id}
        value={selectedValue}
        readOnly
      />

      <div className="dropdown__select" onClick={handleDropdown}>
        <span className="dropdown__text">{selectedValue}</span>
        <span className="dropdown__icon"></span>
      </div>
      {isDropdownShown ? (
        <div className="dropdown__list">
          {selections.map(selection => (
            <div
              className="dropdown__list__item"
              onClick={handleSelectionChange}
              key={uuid()}
            >
              {selection}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Select;
