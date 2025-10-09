import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./sucees.module.sass";
import ScrollParallax from "../ScrollParallax";

const items = [
  {
    title: "Optimisation Google Business Profile & SEO Local",
    content:
      "Nous optimisons chaque aspect de votre fiche Google (catégories, photos, avis) pour en faire un véritable aimant à clients et vous positionner en leader sur les recherches locales.",
  },
  {
    title: "Pages Locales Optimisées pour la Conversion",
    content:
      "Nous créons des pages locales rapides et ciblées, spécifiquement conçues pour convertir un maximum de visiteurs en réservations ou en prises de contact directes.",
  },
  {
    title: "Gestion de la Réputation et Confiance Client",
    content:
      "Nous bâtissons une e-réputation d'excellence en automatisant la collecte d'avis et en assurant des réponses rapides pour inspirer confiance et fidéliser durablement vos clients.",
  },
  {
    title: "Suivi et Croissance Pilotés par la Data",
    content:
      "Pas de croissance sans mesure. Grâce à un tracking précis, nous pilotons votre succès en suivant les indicateurs qui impactent directement votre chiffre d'affaires.",
  },
];

const Sucees = () => {
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
              NOS SOLUTIONS DIGITALES
            </div>
            <h2 className={cn("h3", styles.title)}>
              Transformez Votre Présence en Croissance Mesurable
            </h2>
            <div className={styles.info}>
              Pour les espaces multi-services (restaurants, stations, parkings,
              aires de jeux), être visible en ligne n'est que la première étape.
              Le véritable enjeu est de convertir cette visibilité en un flux
              constant de clients. Notre méthode connecte votre écosystème
              digital à vos opérations pour générer des visites, des
              réservations et des revenus tangibles.
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
            Demander un Diagnostic Gratuit →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sucees;
