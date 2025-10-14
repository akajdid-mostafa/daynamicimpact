import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Offer.module.sass";

const Offer = ({ className }) => {
  return (
    <div className={cn(className, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={cn("stage", styles.stage)}>
          DEMANDE D'ANALYSE STRATÉGIQUE - 30 MIN
        </div>
        <h2 className={cn("h1", styles.title)}>
          Agence de Marketing et de Conseil Stratégique
        </h2>
        <div className={styles.text}>
          Optimisez votre gouvernance et votre performance avec notre expertise.
          Conseil stratégique, transformation digitale et accompagnement
          personnalisé pour votre succès.
        </div>
        <Link className={cn("button", styles.button)} to="/download">
        Demander un diagnostic
        </Link>
      </div>
    </div>
  );
};

export default Offer;
