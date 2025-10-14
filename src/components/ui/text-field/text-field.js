import React from "react";
import cn from "classnames";
import styles from "./text-field.module.css";

export default function TextField({ placeholder, className, ...props }) {
  return (
    <input
      type="text"
      className={cn("label-medium", styles.input, className)}
      placeholder={placeholder}
      {...props}
    />
  );
}
