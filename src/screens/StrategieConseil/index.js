import React, { useRef } from "react";
// import styles from "./Features.module.sass";
import Hero from "../../components/Solution/Hero/index";
import Intro from "../../components/Solution/Intro/index";
import ValueProps from "../../components/Solution/ValueProps/index";
// import Program from "./Program";
// import About from "./About";
// import Review from "../../components/Review";
// import Clients from "../../components/Clients";
import Workouts from "../../components/Solution/Workouts/index";
// import Advantages from "../../components/Advantages";
// import Offer from "../../components/Solution/Offer/index";
// import Lifestyle from "./Lifestyle";
import Faq from "../../components/Faq";

const CreationSiteWebSEO = () => {
  const scrollToRef = useRef(null);

  return (
    <>
      <Hero
        scrollToRef={scrollToRef}
        stage="STRATÉGIE & VISION"
        title="Stratégie de Croissance & Gouvernance"
        text="Nous concevons une stratégie de croissance globale pour transformer vos ambitions en leviers de performance durable."
        primaryButtonText="Demander un audit"
        primaryButtonLink="/contact"
        // secondaryButtonText="Voir nos réalisations"
        // secondaryButtonLink="/projects"
        mainImage={{
          src: "/images/content/all-service.svg",
          srcSet: "/images/content/all-service.svg 2x",
          srcDark: "/images/content/all-service.svg",
          srcSetDark: "/images/content/all-service.svg 2x",
          alt: "Sites web performants et SEO",
        }}
        ballImage={{
          src: "/images/content/ball.png",
          srcSet: "/images/content/ball@2x.png 2x",
          alt: "Solutions SEO",
        }}
        ballBlackImage={{
          src: "/images/content/ball-black.png",
          srcSet: "/images/content/ball-black@2x.png 2x",
          alt: "Marketing Digital",
        }}
      />
      {/* <Hero scrollToRef={scrollToRef} /> */}

      <Intro
        scrollToRef={scrollToRef}
        title="Bâtissez votre succès durable"
        text="Nous analysons vos défis, définissons une feuille de route claire et alignons votre stratégie, votre gouvernance et vos opérations pour atteindre vos objectifs business."
        buttonText="Discutons de votre projet"
        buttonLink="/contact"
        image={{
          src: "/images/content/boost.svg",
          srcSet: "/images/content/boost.svg 2x",
          alt: "UX / UI Design",
        }}
      />
      {/* <ValueProps className="section-pb" /> */}
      <ValueProps
        className="section-pb"
        stage="NOS EXPERTISES"
        title="Ce que nous faisons pour vous"
        items={[
          {
            title: "Audit complet",
            content:
              "Nous analysons votre gouvernance, vos processus opérationnels et votre modèle économique pour identifier les leviers de croissance.",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#23262f" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/><path d="M12 4.5L10.5 8.5 6.5 9.5l3 2.9-.7 4.1L12 14.5l3.2 2-.7-4.1 3-2.9-4-.5L12 4.5z"/></svg>',
          },
          {
            title: "Feuille de route stratégique",
            content:
              "Nous élaborons une vision claire, des objectifs mesurables et des étapes concrètes pour la restructuration et la levée de fonds.",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#23262f" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>',
          },
          {
            title: "Pilotage & Accompagnement",
            content:
              "Nous assurons un suivi continu pour garantir la mise en œuvre et l'atteinte de vos objectifs de croissance et de performance.",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#23262f" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>',
          },
        ]}
      />
      {/* <Program /> */}
      {/* <About /> */}
      {/* <Review className="section-pb64" /> */}
      {/* <Clients /> */}
      <Workouts
        title="Des actions "
        highlight="concrètes avec nos leviers"
        info="Une stratégie sans exécution n'a aucun impact. Voici ce que nous mettons en place pour votre succès :"
        items={[
          "Audit stratégique et de gouvernance",
          "Analyse et restructuration des modèles opérationnels",
          "Accompagnement à la levée de fonds et business plans",
          "Définition de la vision, de la mission et des objectifs à long terme",
          "Évaluation et optimisation de la chaîne de valeur",
        ]}
        primaryButtonText="Démarrer votre stratégie"
        secondaryButtonText="Voir nos études de cas"
        primaryButtonLink="/contact"
        images={[
          {
            src: "/images/content/offre/expertis.svg",
            srcSet: "/images/content/offre/expertis.svg 2x",
            srcDark: "/images/content/offre/expertis.svg",
            srcSetDark: "/images/content/offre/expertis.svg 2x",
            alt: "Développement web",
          },
          {
            src: "/images/content/ball-green-1.png",
            srcSet: "/images/content/offre/flesh.svg 2x",
            alt: "SEO Performance",
          },
          {
            src: "/images/content/apple.png",
            srcSet: "/images/content/offre/analytique.svg 2x",
            alt: "SEO Performance",
          },
        ]}
      />
      {/* <Lifestyle /> */}
      {/* <Advantages /> */}
      {/* <Offer className="section" /> */}
      <Faq />
      {/* <Offer
        stage="Devis personnalisé en 24h"
        title="Votre site, votre succès"
        text="Un site rapide, esthétique et bien référencé : la base de votre visibilité en ligne."
        buttonText="Demander un devis"
        buttonLink="/contact"
        className="section"
      /> */}
    </>
  );
};

export default CreationSiteWebSEO;
