import React, { useState, useEffect } from "react";
import styles from "./popup.module.sass";
import cn from "classnames";
import { Link } from "react-router-dom";
import Image from "../Image";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  
  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <button
          className={styles.closeBtn}
          onClick={closePopup}
          aria-label="Fermer le popup"
        >
          ×
        </button>
        <Image
            className={styles.pic}
            src="/images/logo-dynamicimpact.webp"
            srcDark="/images/logo-dynamicimpact-black.webp"
            alt="Dynamic Impact - Agence marketing digital et transformation"
          />

        <div className={styles.space32} />

        <div className={styles.heading2}>
          <h3>Évaluez la performance de votre entreprise en 3 minutes !</h3>
          <div className={styles.space8} />
          <h3 className={styles.arabicText}>تعرف على وضع شركتك الحقيقي في 3 دقايق</h3>
        </div>

        <div className={styles.space32} />
        <div className={styles.space32} />
        
        <div>
          <Link className={cn("button", styles.button)} to="/diagnostic">
            Commencer le Diagnostic Gratuit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Popup;