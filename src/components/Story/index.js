import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Story.module.sass";
import ScrollParallax from "../ScrollParallax";

const items = [
  {
    title: "Aujourd’hui",
    content:
      "Nous consolidons nos services, renforçons notre présence et construisons une équipe alignée sur nos valeurs.",
  },
  {
    title: "Demain",
    content:
      "Nous visons à devenir une référence au Maroc, puis à l’international, en offrant des solutions toujours plus claires, humaines et durables.",
  },
];

const Story = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.preview}>
              <img src="/images/content/story-pic.png" alt="Story Pic" />
            </div>
          </div>
          <div className={styles.col}>
            <div className={cn("stage-small", styles.stage)}>
              Notre raison d’avancer
            </div>
            <h2 className={cn("h3", styles.title)}>
              Une vision claire, un impact mesurable{" "}
            </h2>
            <div className={styles.info}>
              Votre transformation digitale doit devenir un levier de
              croissance, avec plus de clarté, d’autonomie et d’impact.C’est
              notre vision : créer des environnements où les outils servent vos
              ambitions, jamais l’inverse.Pour y parvenir, notre mission au
              quotidien est de vous écouter, de clarifier les priorités et
              d’accompagner vos équipes afin de rendre la transformation fluide,
              concrète et créatrice de valeur.
            </div>
            <div className={styles.list}>
              {items.map((x, index) => (
                <ScrollParallax className={styles.item} key={index}>
                  <div className={styles.category}>{x.title}</div>
                  <div className={styles.content}>{x.content}</div>
                </ScrollParallax>
              ))}
            </div>
            <Link className={cn("button-stroke", styles.button)} to="/class02">
              Rejoindre l’aventure
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
