import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Offer.module.sass";

const Offer = ({ 
  className, 
  stage, 
  title, 
  text, 
  buttonText, 
  buttonLink 
}) => {
  return (
    <div className={cn(className, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={cn("stage", styles.stage)}>
          {stage || "Audit Gratuit - 30 min 🚀"}
        </div>
        <h2 className={cn("h1", styles.title)}>
          {title || "Agence Marketing Digital au Maroc - Résultats Garantis"}
        </h2>
        <div className={styles.text}>
          {text || "Boostez votre visibilité en ligne avec Dynamic Impact. SEO, Google Ads et sites web performants pour votre croissance."}
        </div>
        <Link className={cn("button", styles.button)} to={buttonLink || "/download"}>
          {buttonText || "Audit gratuit"}
        </Link>
      </div>
    </div>
  );
};

export default Offer;