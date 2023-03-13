import React, { useEffect, useState } from "react";
import styles from "../OptionButton/OptionButton.module.scss";
import clsx from "clsx";

const Option = ({ text, value, onSelect, selected }) => {
  return (
    <div
      className={clsx(styles.option, { [styles.selected]: selected })}
      onClick={() => onSelect(value)}
    >
      {text}
    </div>
  );
};

const Select = ({ options, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedAll, setSelectedAll] = useState(false);

  useEffect(() => {
    if (onChange) {
      onChange(selectedOptions);
    }

    setSelectedAll(
      options.filter(({ value }) => !selectedOptions.includes(value)).length ===
        0

    );
  }, [selectedOptions, onChange, options]);

  if (!options.length) {
    return null;
  }
  return (
    <>
      <Option
        key={"select-option-all"}
        text="Select all"
        selected={selectedAll}
        onSelect={() => {
          
          setSelectedOptions(
            selectedAll ? [] : options.map(({ value }) => value)
          
          );
          
        }}
      />
      {options.map(({ text, value , maxPointsToGet }) => (
        <Option
          key={`select-option-${value}`}
          text={text}
          value={value}
          maxPointsToGet = {maxPointsToGet}
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
