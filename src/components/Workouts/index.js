import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Workouts.module.sass";
import Image from "../Image";
import ScrollParallax from "../ScrollParallax";

const items = [
  "Stratégie digitale sur-mesure",
  "Création d'identité visuelle",
  "Campagnes publicitaires performantes",
  "Optimisation SEO et trafic qualifié",
  "Analyse de données et reporting"
];

const DigitalServices = () => {
  return (
    <div className={styles.section}>
      <div className={cn("container", styles.container)}>
        <div className={styles.gallery}>
          {/* Images originales conservées avec alt text modifié */}
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/offre/expertis.svg 2x"
              srcSetDark="/images/content/offre/expertis.svg 2x"
              src="/images/content/offre/expertis.svg"
              srcDark="/images/content/offre/expertis.svg"
              alt="Solutions digitales clé en main"
            />
          </div>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              srcSet="/images/content/offre/flesh.svg 2x"
              src="/images/content/ball-green-1.png"
              alt="Croissance digitale"
            />
          </ScrollParallax>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              srcSet="/images/content/offre/analytique.svg 2x"
              src="/images/content/apple.png"
              alt="Performance marketing"
            />
          </ScrollParallax>
        </div>
        <div className={styles.wrap}>
          <h2 className={cn("h2", styles.title)}>
            Transformez votre présence digitale<br />
            avec <span className={styles.highlight}>notre expertise</span>
          </h2>
          <div className={styles.info}>
            Votre partenaire pour des stratégies digitales qui génèrent des résultats mesurables. 
            Nous combinons créativité et data pour maximiser votre ROI.
          </div>
          <ul className={styles.list}>
            {items.map((x, index) => (
              <li className={styles.item} key={index}>
                <span className={styles.checkIcon}></span> {x}
              </li>
            ))}
          </ul>
          <div className={styles.btns}>
            <Link className={cn("button", styles.button)} to="/contact">
              Audit gratuit
            </Link>
            <button className={cn("button-stroke", styles.button)}>
              Voir nos réalisations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalServices;