import React from "react";
import cn from "classnames";
import styles from "./Hero.module.sass";
import History from "../../Lifestyle/Hero/History/index";

const Hero = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <h2 className={cn("hero", styles.title)}>Lifestyle</h2>
        <div className={styles.info}>
          Track your workouts, get better results, and be the best version of
          you. Less thinking, more lifting.
        </div>
        <History />
      </div>
    </div>
  );
};

export default Hero;
