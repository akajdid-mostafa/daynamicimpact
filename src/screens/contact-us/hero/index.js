import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.heading}>
          <h1 className={cn("h2", styles.title)}>Contactez-nous</h1>
          <div className={cn("paragraph-x-large", styles.subtitle)}>
            Besoin d&apos;un accompagnement digital personnalisé ? Notre équipe
            d&apos;experts en transformation digitale, marketing digital et
            développement web vous accompagne dans votre projet. Contactez-nous
            pour un devis gratuit et une consultation personnalisée.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
