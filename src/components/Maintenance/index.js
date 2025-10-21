import React from "react";
// import cn from "classnames";
import styles from "./Maintenance.module.sass";

const Maintenance = () => {
  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src="/images/logo-dark.svg" alt="Dynamic Impact - Agence marketing digital et transformation" className={styles.logoImage} />
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        {/* <div className={styles.emoji}>🔧</div> */}
        
        <div className={styles.preTitle}>MAINTENANCE EN COURS</div>
        <h1 className={styles.title}>Site en maintenance.</h1>
        
        <div className={styles.description}>
          <p>Notre site est temporairement indisponible pour maintenance.</p>
          <p>Nous serons de retour très bientôt avec de nouvelles fonctionnalités !</p>
        </div>
        
        <a href="mailto:contact@dynamic-impact.com" className={styles.notifyButton}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Nous contacter</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* Decorative Elements */}
      {/* <div className={styles.decorativeLeft}></div> */}
      {/* <div className={styles.decorativeRight}></div> */}

      {/* Footer */}
      {/* <div className={styles.footer}>
        <div className={styles.socialIcons}>
          <div className={styles.socialIcon}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M2 12H22" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 2C14.5 4.5 16 8.5 16 12C16 15.5 14.5 19.5 12 22" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className={styles.socialIcon}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" stroke="currentColor" strokeWidth="2"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className={styles.socialIcon}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8A6 6 0 0 1 4 8C4 4 8 2 12 2C16 2 20 4 20 8C20 12 16 14 12 14C8 14 4 12 4 8Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 6V10L14 12" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Maintenance;