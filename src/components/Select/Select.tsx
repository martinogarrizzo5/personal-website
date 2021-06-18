import { FC } from "react";
import { useState, useEffect, useCallback } from "react";
import { v4 as uuid } from "uuid";

import "./Select.scss";

interface SelectProps {
  name: string;
  onChange: (event: any) => void;
  options: string[];
  id: string;
}

const Select: FC<SelectProps> = props => {
  // state
  const [selectedValue, changeSelectedValue] = useState<string>("None");
  const [isDropdownShown, setDropdownShown] = useState<boolean>(false);

  // function to close dropdown when clicking outside
  const handleClickOutside = useCallback((e: any) => {
    const targetClassName = e.target.className.toString();
    if (!targetClassName.includes("dropdown")) {
      setDropdownShown(false);
    }
  }, []);
  useEffect(() => {
    // add the click listener when component is mounted
    document.addEventListener("click", e => handleClickOutside(e));
    console.log("click listener added");
    // when component un-mount the click listener is removed
    return () => {
      document.removeEventListener("click", e => handleClickOutside(e));
    };
  }, [handleClickOutside]);
  useEffect(() => {
    const event = { target: { name: props.name, value: selectedValue } };
    props.onChange(event);
  }, [selectedValue]);

  // close and open dropdown
  const handleDropdown = useCallback(() => {
    setDropdownShown(prevState => !prevState);
  }, []);

  // change value of input field
  const handleSelectionChange = (e: any) => {
    const selection = e.target.innerHTML;
    changeSelectedValue(selection);
    setDropdownShown(false);
  };

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
          {props.options.map((option: any) => (
            <div
              className="dropdown__list__item"
              onClick={handleSelectionChange}
              key={uuid()}
            >
              {option}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Select;
