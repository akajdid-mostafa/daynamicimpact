import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Story.module.sass";
import ScrollParallax from "../ScrollParallax";

const items = [
  {
    title: "Aujourd’hui",
    content:
      "Nous consolidons nos services de conseil et de marketing, renforçons notre présence à Casablanca et construisons une équipe alignée sur nos valeurs.",
  },
  {
    title: "Demain",
    content:
      "Nous visons à devenir une référence au Maroc, puis à l'international, en offrant des solutions toujours plus claires, humaines et durables.",
  },
];

const Story = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.preview}>
              <img src="/images/content/impact2.webp" alt="Story Pic" />
            </div>
          </div>
          <div className={styles.col}>
            <div className={cn("stage-small", styles.stage)}>
              NOTRE RAISON D&apos;AVANCER
            </div>
            <h2 className={cn("h3", styles.title)}>
              Une vision claire, un impact mesurable
            </h2>
            <div className={styles.info}>
              Votre transformation ne doit pas être un obstacle, mais un levier
              de croissance. C&apos;est notre vision : créer des environnements où la
              gouvernance, la technologie et les équipes servent vos ambitions,
              et non l'inverse. Pour y parvenir, notre mission est de vous
              écouter, de clarifier les priorités et de vous accompagner pour
              rendre votre transformation stratégique, concrète et créatrice de
              valeur.
            </div>
            <div className={styles.list}>
              {items.map((x, index) => (
                <ScrollParallax className={styles.item} key={index}>
                  <div className={styles.category}>{x.title}</div>
                  <div className={styles.content}>{x.content}</div>
                </ScrollParallax>
              ))}
            </div>
            <Link className={cn("button", styles.button)} to="/class02">
              Rejoindre l&apos;aventure
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
