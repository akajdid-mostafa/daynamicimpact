import React from "react";
import cn from "classnames";
// import { Link } from "react-router-dom";
import styles from "./Multisites.module.sass";
// import Icon from "../Icon";
// import Image from "../Image";
// import ScrollParallax from "../ScrollParallax";

const items = [
  {
    title: "Optimisation Google Business Profile & SEO Local",
    color: "#45B26B",
    images: "/images/content/lightning.svg",
    alt: "branding",
    content:
      "Nous transformons votre fiche en un aimant à clients : choix stratégiques des catégories, ajout de photos professionnelles, gestion proactive des avis et publication régulière pour dominer les résultats de recherche locaux.",
  },
  {
    title: "Pages Locales Optimisées pour la Conversion",
    color: "#9757D7",
    images: "/images/content/lightning.svg",
    alt: "marketing",
    content:
      "Chaque service ou localisation mérite sa propre vitrine. Nous créons des pages uniques, rapides et conçues pour répondre précisément à l'intention des utilisateurs (et des moteurs de recherche), maximisant ainsi les prises de contact ou les réservations.",
  },
  {
    title: "Gestion de la Réputation et Confiance Client",
    color: "#3772FF",
    images: "/images/content/lightning.svg",
    alt: "code",
    content:
      "Une e-réputation d'excellence est votre meilleur atout commercial. Nous mettons en place une collecte automatisée d'avis, assurons des réponses rapides et construisons une image de marque qui inspire confiance et fidélité.",
  },
  {
    title: "Suivi et Croissance Pilotés par la Data",
    color: "#3772FF",
    images: "/images/content/lightning.svg",
    alt: "code",
    content:
      "Pas de croissance sans mesure. Grâce à un tracking précis (GA4, Dashboards), nous suivons les indicateurs qui comptent vraiment : réservations, appels, visites réelles et chiffre d'affaires.",
  },
];

const Multisites = () => {
  return (
    <div className={cn("section-bg", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.gallery}>
          {/* <div className={styles.preview}>
            <Image
              srcSet="/images/content/book.svg 2x"
              srcSetDark="/images/content/book.svg 2x"
              src="/images/content/book.svg"
              srcDark="/images/content/book.svg"
              alt="Book pic"
            />
          </div> */}
          {/* <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            offset={300}
          >
            <img
              srcSet="/images/content/base.svg 2x"
              src="/images/content/base.svg"
              alt="Ball"
            />
          </ScrollParallax> */}
          {/* <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            offset={300}
          >
            <img
              srcSet="/images/content/advanced.svg 2x"
              src="/images/content/advanced.svg"
              alt="Ball"
            />
          </ScrollParallax> */}
          {/* <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            offset={300}
          >
            <img
              srcSet="/images/content/dumbbells@2x.png 2x"
              src="/images/content/dumbbells.png"
              alt="Dumbbells"
            />
          </ScrollParallax> */}
        </div>
        <div className={styles.wrap}>
          <h2 className={cn("h4", styles.title)}>
            Transformez Votre Présence Digitale en Croissance Réelle et
            Mesurable
          </h2>

          <div className={styles.info}>
            Pour les espaces multi-services (restaurants, stations, parkings,
            aires de jeux), être visible en ligne n'est que la première étape.
            Le véritable enjeu est de convertir cette visibilité en un flux
            constant de clients. Notre méthode connecte votre écosystème digital
            à vos opérations pour générer des visites, des réservations et des
            revenus tangibles.
          </div>
          <div className={styles.list}>
            {items.map((x, index) => (
              <div className={styles.item} key={index}>
                <div
                  className={styles.icon}
                  style={{ backgroundColor: x.color }}
                >
                  <img src={x.images} alt={x.alt} />
                </div>
                <div className={styles.details}>
                  <div className={styles.subtitle}>{x.title}</div>
                  <div className={styles.content}>{x.content}</div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className={styles.note}>
            <strong className={styles.green}>Offre spéciale</strong> : -15% sur
            votre premier projet en{" "}
            <strong className={styles.black}>{new Date().getFullYear()}</strong>
          </div> */}

          {/* <div className={styles.btns}>
            <Link className={cn("button", styles.button)} to="/contact">
              <span>Demander un devis</span>
              <Icon name="arrow-right" size="10" />
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Multisites;
