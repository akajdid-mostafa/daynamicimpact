import React, { useState, useEffect } from "react";
import styles from "./popup.module.sass";
import cn from "classnames";
import { Link } from "react-router-dom";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Charger le script Google Calendar quand le popup s'ouvre
  useEffect(() => {
    if (!isVisible) return;

    // Injecter le CSS Google Calendar
    const link = document.createElement('link');
    link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Injecter le script Google Calendar
    const script = document.createElement('script');
    script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
    script.async = true;
    
    script.onload = () => {
      // Initialiser le bouton après le chargement du script
      setTimeout(() => {
        if (window.calendar?.schedulingButton?.load) {
          const container = document.getElementById('google-calendar-button');
          if (container) {
            const targetScript = document.createElement('script');
            container.appendChild(targetScript);
            
            window.calendar.schedulingButton.load({
              url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3lCZhyCwRBwv1rbHL-WIRKhbKfAa6o3mwFNRbf96WA-HIb7MIR2FI_NB4a3i4TOqUYBTlkHshj?gv=true',
              color: '#039BE5',
              label: 'Réserver un rendez-vous',
              target: targetScript,
            });
          }
        }
      }, 100);
    };

    document.head.appendChild(script);

    return () => {
      // Nettoyage
      document.head.removeChild(link);
      document.head.removeChild(script);
    };
  }, [isVisible]);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <span
          className={styles.closeBtn}
          onClick={closePopup}
          role="button"
          tabIndex={0}
        >
          ×
        </span>

        <div className={styles.popupIcon}>
          <img src="/images/logo-dynamicimpact.webp" alt="Popup Logo" />
        </div>

        <div className={styles.space32} />

        <div className={styles.heading2}>
          <h3>Évaluez la performance de votre entreprise en 3 minutes !</h3>
          <div className={styles.space8} />
          <h3>تعرف  عل وضع شركتك الحقيقي في 3 دقايق</h3>
          
        </div>
        <div className={styles.space32} />
        <div className={styles.space32} />
        <div >

            <Link className={cn("button", styles.button)} to="/diagnostic">
            Commencer le Diagnostic Gratuit
            </Link>
          </div>
      </div>
    </div>
  );
};

export default Popup;