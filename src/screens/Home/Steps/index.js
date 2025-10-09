import React from "react";
import cn from "classnames";
import styles from "./Steps.module.sass";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Conception & Stratégie",
    color: "#3772FF",
    images: "/images/content/download.svg",
    content:
      "Définition des objectifs SMART, élaboration du parcours client et priorisation des fonctionnalités clés. Nous créons ensuite le plan produit/marketing détaillé et la roadmap claire pour le lancement de votre MVP.",
  },
  {
    title: "Architecture & Blueprint technique",
    color: "#9757D7",
    images: "/images/content/whistle.svg",
    content:
      "Conception du blueprint technique : flux de données, choix technologiques (site, CRM, ERP), et architecture API. Spécification des points de synchronisation et des contraintes de sécurité pour une base solide.",
  },
  {
    title: "Implémentation du MVP & Livraison rapide",
    color: "#EF466F",
    images: "/images/content/medal.svg",
    content:
      "Développement du MVP (site/landing page + intégration CRM), tests essentiels et déploiement en pré-production. L'objectif est de livrer rapidement une première version fonctionnelle et de mesurer sa valeur.",
  },
  {
    title: "Adoption, Formation & Optimisation continue",
    color: "#45B26B",
    images: "/images/content/stopwatch.svg",
    content:
      "Formation des équipes (SOP, scripts, playbooks) et déploiement d'automatisations (confirmation, rappels). Nous optimisons les cycles via les KPIs pour assurer la transition du projet vers une opération pérenne.",
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
              <div className={styles.number}>Step {index + 1}</div>
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
