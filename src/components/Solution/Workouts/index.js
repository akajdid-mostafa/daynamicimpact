import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Workouts.module.sass";
import Image from "../../Image";
import ScrollParallax from "../../ScrollParallax";

const DigitalServices = ({ 
  title, 
  highlight, 
  info, 
  items, 
  primaryButtonText, 
  secondaryButtonText, 
  primaryButtonLink,
  images
}) => {
  // Default values for backward compatibility
  const defaultItems = [
    "Stratégie digitale sur-mesure",
    "Création d'identité visuelle",
    "Campagnes publicitaires performantes",
    "Optimisation SEO et trafic qualifié",
    "Analyse de données et reporting"
  ];

  const defaultImages = [
    {
      src: "/images/content/offre/expertis.svg",
      srcSet: "/images/content/offre/expertis.svg 2x",
      srcDark: "/images/content/offre/expertis.svg",
      srcSetDark: "/images/content/offre/expertis.svg 2x",
      alt: "Solutions digitales clé en main"
    },
    {
      src: "/images/content/ball-green-1.png",
      srcSet: "/images/content/offre/flesh.svg 2x",
      alt: "Croissance digitale"
    },
    {
      src: "/images/content/apple.png",
      srcSet: "/images/content/offre/analytique.svg 2x",
      alt: "Performance marketing"
    }
  ];

  const finalItems = items || defaultItems;
  const finalImages = images || defaultImages;

  return (
    <div className={styles.section}>
      <div className={cn("container", styles.container)}>
        <div className={styles.gallery}>
          {/* Images originales conservées avec alt text modifié */}
          <div className={styles.preview}>
            <Image
              srcSet={finalImages[0]?.srcSet}
              srcSetDark={finalImages[0]?.srcSetDark}
              src={finalImages[0]?.src}
              srcDark={finalImages[0]?.srcDark}
              alt={finalImages[0]?.alt}
            />
          </div>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              srcSet={finalImages[1]?.srcSet}
              src={finalImages[1]?.src}
              alt={finalImages[1]?.alt}
            />
          </ScrollParallax>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              srcSet={finalImages[2]?.srcSet}
              src={finalImages[2]?.src}
              alt={finalImages[2]?.alt}
            />
          </ScrollParallax>
        </div>
        <div className={styles.wrap}>
          <h2 className={cn("h2", styles.title)}>
            {title || "Transformez votre présence digitale"}
            <br />
            avec <span className={styles.highlight}>{highlight || "notre expertise"}</span>
          </h2>
          <div className={styles.info}>
            {info || "Votre partenaire pour des stratégies digitales qui génèrent des résultats mesurables. Nous combinons créativité et data pour maximiser votre ROI."}
          </div>
          <ul className={styles.list}>
            {finalItems.map((x, index) => (
              <li className={styles.item} key={index}>
                <span className={styles.checkIcon}></span> {x}
              </li>
            ))}
          </ul>
          <div className={styles.btns}>
            <Link className={cn("button", styles.button)} to={primaryButtonLink || "/contact"}>
              {primaryButtonText || "Audit gratuit"}
            </Link>
            <button className={cn("button-stroke", styles.button)}>
              {secondaryButtonText || "Voir nos réalisations"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalServices;