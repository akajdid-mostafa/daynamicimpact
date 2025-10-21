import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Intro.module.sass";
import ScrollParallax from "../ScrollParallax";

const Intro = ({ scrollToRef }) => {
  return (
    <div className={styles.section} ref={scrollToRef}>
      <div className={cn("container", styles.container)}>
        <div className={styles.gallery}>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              srcSet="/images/content/boost.svg 2x"
              src="/images/content/boost.svg"
              alt="Solutions créatives Dynamic Impact - Marketing digital et transformation"
            />
          </ScrollParallax>
          {/* <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              srcSet="/images/content/gloves@2x.png 2x"
              src="/images/content/gloves.png"
              alt="Stratégie digitale Dynamic Impact - Marketing et advertising"
            />
          </ScrollParallax> */}
          {/* <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              srcSet="/images/content/bottle-1@2x.png 2x"
              src="/images/content/bottle-1.png"
              alt="Croissance de marque Dynamic Impact - Digital marketing et impact"
            />
          </ScrollParallax> */}
        </div>
        <div className={styles.wrap}>
          <h2 className={cn("h1", styles.title)}>
            Boostez Votre Présence Digitale
          </h2>
          <div className={styles.text}>
            Nous créons des stratégies de communication digitale percutantes qui 
            connectent avec votre audience. Du branding aux campagnes en ligne, 
            nous vous aidons à vous démarquer dans le monde digital.
          </div>
          <Link className={cn("button", styles.button)} to="/contact">
            Commencez Aujourd&apos;hui
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;