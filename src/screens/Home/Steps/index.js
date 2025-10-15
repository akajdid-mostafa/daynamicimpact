import React from "react";
import cn from "classnames";
import styles from "./Steps.module.sass";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Conception & Stratégie",
    // color: "#3772FF",
    images: "/images/icon/1.svg",
    content:
      "Définition des objectifs SMART, élaboration du parcours client et priorisation des fonctionnalités clés.",
  },
  {
    title: "Architecture & Blueprint",
    // color: "#9757D7",
    images: "/images/icon/2.svg",
    content:
      "Conception du blueprint technique : flux de données, choix technologiques (site, CRM, ERP), et architecture API.",
  },
  {
    title: "Implémentation MVP",
    // color: "#EF466F",
    images: "/images/icon/3.svg",
    content:
      "Développement du MVP (site/landing page + intégration CRM), tests essentiels et déploiement en pré-production.",
  },
  {
    title: "Adoption et Formation",
    // color: "#45B26B",
    images: "/images/icon/4.svg",
    content:
      "Formation des équipes (SOP, scripts, playbooks) et déploiement d'automatisations (confirmation, rappels).",
  },
];

const Steps = ({ scrollToRef }) => {
  return (
    <div className={cn("section", styles.section)} ref={scrollToRef}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}><span className={styles.underlined}>Notre méthode</span> </h2>
          <div className={styles.info}>
          Notre agence vous accompagne de l&apos;idée à la réalisation grâce à des solutions digitales innovantes et sur mesure.
          </div>
        </div>
        <div className={styles.list}>
          {items.map((x, index) => (
            <ScrollParallax className={styles.item} key={index}>
              <div
                className={styles.preview}
                style={{ backgroundColor: x.color }}
              >
                <img src={x.images} alt={`Step ${index}`} />
              </div>
              <div className={styles.number}>Etape {index + 1}</div>
              <div className={styles.subtitle}>{x.title}</div>
              <div className={styles.content}>{x.content}</div>
            </ScrollParallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
