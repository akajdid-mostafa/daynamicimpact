"use client";

import React from "react";
import cn from "classnames";
import styles from "./dropdown.module.css";
import icons from "../../../constants/icons";

export default function Dropdown({ placeholder, options, className }) {
  const [open, setOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(null);
  const dropdownRef = React.useRef(null);

  const toggleDropdown = () => setOpen(!open);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <button
      ref={dropdownRef}
      type="button"
      className={cn(styles.container, className)}
      onClick={toggleDropdown}
    >
      <div className={styles.heading}>
        <div className={cn("label-medium", styles.title)}>
          {selectedOption ? selectedOption.label : placeholder}
        </div>

        {icons.ChevronDown}
      </div>

      <ul
        className={cn(styles.dropdown, {
          [styles.open]: open,
        })}
      >
        {options.map((option) => (
          <li
            key={option.value}
            className={cn("label-medium", styles.item, {
              [styles.active]: selectedOption?.value === option.value,
            })}
            onClick={() => handleSelectOption(option)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </button>
  );
}
