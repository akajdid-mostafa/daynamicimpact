import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Workouts.module.sass";
import Image from "../../Image";
// import ScrollParallax from "../../ScrollParallax";

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
      srcDark: "/images/content/offre/expertis.svg",
      alt: "Solutions digitales clé en main"
    },
    {
      src: "/images/content/ball-green-1.png",
      alt: "Croissance digitale"
    },
    {
      src: "/images/content/apple.png",
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
              src={finalImages[0]?.src}
              srcDark={finalImages[0]?.srcDark}
              alt={finalImages[0]?.alt}
            />
          </div>
          {/* <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              src={finalImages[1]?.src}
              alt={finalImages[1]?.alt}
            />
          </ScrollParallax> */}
          {/* <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              src={finalImages[2]?.src}
              alt={finalImages[2]?.alt}
            />
          </ScrollParallax> */}
        </div>
        <div className={styles.wrap}>
          <h1 className={cn("h3", styles.title)}>
            {title || "Transformez votre présence digitale"}
            <br />
            avec <span className={styles.highlight}>{highlight || "notre expertise"}</span>
          </h1>
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
            {/* <button className={cn("button-stroke", styles.button)}>
              {secondaryButtonText || "Voir nos réalisations"}
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalServices;