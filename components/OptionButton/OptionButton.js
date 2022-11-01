import React, { useEffect, useState } from "react";
import styles from "../OptionButton/OptionButton.module.scss";
import clsx from "clsx";
const Option = ({ text, value, onSelect, selected}) => {
  return (

    <div
      className={clsx(styles.option,{[styles.selected] : selected})}
      onClick={() => onSelect(value)}
    >
        
      {text}
    </div>

  );
};


const Select = ({ options, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    if (onChange) {
      onChange(selectedOptions);
    }
  }, [selectedOptions, onChange]);

  return (
    <>
      {options.map(({ text, value }) => (
        <Option
          key={`select-option-${value}`}
          text={text}
          value={value}
          selected={selectedOptions.includes(value)}
          onSelect={(val) => {
            if (selectedOptions.includes(value)) {
              setSelectedOptions(selectedOptions.filter((it) => it !== val));
            } else {
              setSelectedOptions([...selectedOptions, val]);
            }
          }}
        />
      ))}
    </>
  );
};

export default Select;