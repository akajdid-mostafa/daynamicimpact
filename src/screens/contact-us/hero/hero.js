import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.heading}>
          <div className={cn("hero", styles.title)}>Contact us</div>
          <div className={cn("paragraph-x-large", styles.subtitle)}>
            We're here to help. Reach out for support, feedback, or any
            questions you might have.
          </div>
        </div>
      </div>
    </div>
  );
}
