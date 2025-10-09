import React from "react";
import cn from "classnames";
// import { Link } from "react-router-dom";
import styles from "./Succes.module.sass";
import Image from "../Image";
import ScrollParallax from "../ScrollParallax";

// const items = [
//   "Acquisition & Ventes : Nombre de réservations/commandes, coût d'acquisition client (CAC) et valeur vie client (LTV).",
//   "Création d'identité visuelle",
//   "Campagnes publicitaires performantes",
//   "Optimisation SEO et trafic qualifié",
//   "Analyse de données et reporting",
// ];
const item2 = [
  {
    title: "Optimisation Google Business Profile & SEO Local",
    color: "#45B26B",
    images: "/images/content/lightning.svg",
    alt: "branding",
    content:
      "Nous optimisons chaque aspect de votre fiche Google (catégories, photos, avis) pour en faire un véritable aimant à clients et vous positionner en leader sur les recherches locales.",
  },
  {
    title: "Pages Locales Optimisées pour la Conversion",
    color: "#9757D7",
    images: "/images/content/lightning.svg",
    alt: "marketing",
    content:
      "Nous créons des pages locales rapides et ciblées, spécifiquement conçues pour convertir un maximum de visiteurs en réservations ou en prises de contact directes.",
  },
  {
    title: "Gestion de la Réputation et Confiance Client",
    color: "#3772FF",
    images: "/images/content/lightning.svg",
    alt: "code",
    content:
      "Nous bâtissons une e-réputation d'excellence en automatisant la collecte d'avis et en assurant des réponses rapides pour inspirer confiance et fidéliser durablement vos clients.",
  },
  {
    title: "Suivi et Croissance Pilotés par la Data",
    color: "#3772FF",
    images: "/images/content/lightning.svg",
    alt: "code",
    content:
      "Pas de croissance sans mesure. Grâce à un tracking précis, nous pilotons votre succès en suivant les indicateurs qui impactent directement votre chiffre d'affaires.",
  },
];

const DigitalServices = () => {
  return (
    <div className={styles.section}>
      <div className={cn("container", styles.container)}>
        <div className={styles.gallery}>
          {/* Images originales conservées avec alt text modifié */}
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/offre/expertis.svg 2x"
              srcSetDark="/images/content/offre/expertis.svg 2x"
              src="/images/content/offre/expertis.svg"
              srcDark="/images/content/offre/expertis.svg"
              alt="Solutions digitales clé en main"
            />
          </div>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              srcSet="/images/content/offre/flesh.svg 2x"
              src="/images/content/ball-green-1.png"
              alt="Croissance digitale"
            />
          </ScrollParallax>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              srcSet="/images/content/offre/analytique.svg 2x"
              src="/images/content/apple.png"
              alt="Performance marketing"
            />
          </ScrollParallax>
        </div>
        <div className={styles.wrap}>
          <h2 className={cn("h3", styles.title)}>
            Transformez Votre Présence en Croissance Mesurable
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
            {item2.map((x, index) => (
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
          <div className={styles.btns}>
            {/* <Link className={cn("button", styles.button)} to="/contact">
              Audit gratuit
            </Link> */}
            <button className={cn("button-stroke", styles.button)}>
            Demander un Diagnostic Gratuit →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalServices;
