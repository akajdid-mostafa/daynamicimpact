import React from "react";
import cn from "classnames";
import styles from "./Whay.module.sass";

const Whay = ({ scrollToRef }) => {
  return (
    <section className={cn("section", styles.section)} ref={scrollToRef}>
      <div  className={cn("container", styles.container)}>
      <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}><span className={styles.underlined}>Pourquoi nous choisir          </span> </h2>
          <div className={styles.info}>
          Notre agence vous accompagne de l&apos;idée à la réalisation grâce à des solutions digitales innovantes et sur mesure.
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={cn(styles.iconWrap, styles.iconWrapBlue)}>
              <svg
                className={cn(styles.icon, styles.iconBlue)}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className={styles.title}>Approche systémique</h3>
            <p className={styles.text}>
              Nous construisons l&apos;écosystème complet — outils, process, équipe —
              pas seulement des canaux.
            </p>
          </div>

          <div className={styles.card}>
            <div className={cn(styles.iconWrap, styles.iconWrapGreen)}>
              <svg
                className={cn(styles.icon, styles.iconGreen)}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7m-7-7v18"
                />
              </svg>
            </div>
            <h3 className={styles.title}>Résultats mesurables</h3>
            <p className={styles.text}>
            KPI clairs, suivi, tests A/B et optimisation continue pour maximiser le ROI.
            </p>
          </div>

          <div className={styles.card}>
            <div className={cn(styles.iconWrap, styles.iconWrapPurple)}>
              <svg
                className={cn(styles.icon, styles.iconPurple)}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <h3 className={styles.title}>Transfert de compétences</h3>
            <p className={styles.text}>
            Formation des équipes clients et documentation SOP pour garantir l’autonomie et l&apos;adoption.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whay;
