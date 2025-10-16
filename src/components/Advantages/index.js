import React from "react";
import cn from "classnames";
import styles from "./Advantages.module.sass";
import ScrollParallax from "../ScrollParallax";

const items = [
  {
    title: "Transparence",
    description:
      "livrables clairs, métriques partagées, communication régulière.",
    image: "/images/icon/transparence1.svg",
    image2x: "/images/icon/transparence1.svg",
  },
  {
    title: "Innovation",
    description:
      "technologie choisie pour résoudre un problème business concret.",
    image: "/images/icon/innovation.svg",
    image2x: "/images/icon/innovation.svg",
  },
  {
    title: "Engagement",
    description: "nous accompagnons jusqu’à la mise en main par vos équipes.",
    image: "/images/icon/engagement.svg",
    image2x: "/images/icon/engagement.svg",
  },
  {
    title: "Orientation",
    description:
      "chaque action est mesurée et priorisée selon son impact métier.",
    image: "/images/icon/orientation.svg",
    image2x: "/images/icon/orientation.svg",
  },
];

const Advantages = () => {
  return (
    <div className={cn("section-bg", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <span className={styles.stage}>NOS ATOUTS</span>
          <h2 className={styles.title}>Pourquoi nous choisir</h2>
          <p className={styles.info}>
            Nous ne livrons pas seulement des solutions : nous construisons un
            écosystème qui combine la stratégie, la gouvernance et le digital
            pour des résultats durables. Notre méthode est pragmatique : un
            audit stratégique rapide, un plan d&apos;action sur mesure et un
            accompagnement terrain pour garantir l&apos;adoption et maximiser votre
            performance.
          </p>
        </div>

        <div className={styles.list}>
          {items.map((x, index) => (
            <ScrollParallax className={styles.item} key={index}>
              <div className={styles.preview}>
                <img srcSet={`${x.image2x} 2x`} src={x.image} alt="Equipment" />
              </div>
              <h3 className={styles.subtitle}>{x.title}</h3>
              <p className={styles.description}>{x.description}</p>
              {x.keyword && <div className={styles.keyword}></div>}
            </ScrollParallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
