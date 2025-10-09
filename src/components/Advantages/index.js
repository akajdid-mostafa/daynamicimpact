import React from "react";
import cn from "classnames";
import styles from "./Advantages.module.sass";
import ScrollParallax from "../ScrollParallax";

const items = [
  {
    title: "Transparence",
    description:
      "livrables clairs, métriques partagées, communication régulière.",
    image: "/images/content/hand-grip-circlee.png",
    image2x: "/images/content/hand-grip-circlee.png",
  },
  {
    title: "Innovation",
    description:
      "technologie choisie pour résoudre un problème business concret.",
    image: "/images/content/hand-grip-circlee.png",
    image2x: "/images/content/hand-grip-circlee.png",
  },
  {
    title: "Engagement",
    description: "nous accompagnons jusqu’à la mise en main par vos équipes.",
    image: "/images/content/hand-grip-circlee.png",
    image2x: "/images/content/hand-grip-circlee.png",
  },
  {
    title: "Orientation",
    description:
      "chaque action est mesurée et priorisée selon son impact métier.",
    image: "/images/content/hand-grip-circlee.png",
    image2x: "/images/content/hand-grip-circlee.png",
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
            Nous ne livrons pas seulement des outils : nous construisons le
            contexte  process et formation  qui les rend réellement efficaces.
            Notre méthode est pragmatique : MVP rapides, preuves d&apos;impact et
            montée en charge maîtrisée. Nous assurons un accompagnement terrain
            avec formation et SOP incluses pour garantir l&apos;adoption et maximiser
            le ROI.
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
