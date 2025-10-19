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

const AccompagnementFormationDigitaleCoaching = () => {
  const scrollToRef = useRef(null);

  return (
    <>
      <Hero
        scrollToRef={scrollToRef}
        stage="Croissance & Autonomie"
  title="Accompagnement & Formation Digitale"
  text="Nous vous accompagnons dans votre transformation digitale et formons vos équipes pour qu’elles deviennent autonomes et performantes."
  primaryButtonText="Planifier un accompagnement"
  primaryButtonLink="/contact"
  secondaryButtonText="Découvrir nos formations"
  secondaryButtonLink="/projects"
        mainImage={{
          src: "/images/content/all-service.svg",
          srcSet: "/images/content/all-service.svg 2x",
          srcDark: "/images/content/all-service.svg",
          srcSetDark: "/images/content/all-service.svg 2x",
          alt: "Accompagnement et formation digitale",
        }}
        ballImage={{
          src: "/images/content/ball.png",
          srcSet: "/images/content/ball@2x.png 2x",
          alt: "Mentorat numérique",
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
        title="Faites évoluer vos compétences digitales"
  text="Nous créons des programmes personnalisés pour faire monter en compétence vos équipes sur les outils, les bonnes pratiques et les stratégies digitales."
  buttonText="Demander un programme"
  buttonLink="/contact"
        image={{
          src: "/images/content/boost.svg",
          srcSet: "/images/content/boost.svg 2x",
          alt: "Formation d'équipe au digital",
        }}
      />
      {/* <ValueProps className="section-pb" /> */}
      <ValueProps
        className="section-pb"
        stage="Nos Expertises"
  title="Ce que nous vous apportons"
  items={[
    {
      title: "Coaching Stratégique",
      content:
        "Accompagnement individuel ou en équipe pour construire votre vision digitale et vos plans d’action.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#23262f" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/><path d="M12 4.5L10.5 8.5 6.5 9.5l3 2.9-.7 4.1L12 14.5l3.2 2-.7-4.1 3-2.9-4-.5L12 4.5z"/></svg>',
          },
          {
            title: "Formations Pratiques",
      content:
        "Formations opérationnelles sur les outils marketing, réseaux sociaux, CRM, CMS et analytics.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#23262f" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>',
          },
          { title: "Suivi & Support Continu",
      content:
        "Suivi post-formation et assistance régulière pour garantir l’application concrète des acquis.",
     icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#23262f" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>',
          },
        ]}
      />
      {/* <Program /> */}
      {/* <About /> */}
      {/* <Review className="section-pb64" /> */}
      {/* <Clients /> */}
      <Workouts
        title="Devenez autonome dans votre stratégie digitale"
  highlight="Notre méthode"
  info="Nous vous transmettons notre savoir-faire et restons à vos côtés jusqu’à ce que vos équipes soient parfaitement autonomes."
  items={[
    "Évaluation de votre niveau actuel",
    "Création d’un parcours de formation personnalisé",
    "Sessions interactives et ateliers pratiques",
    "Mises en situation sur vos outils réels",
    "Suivi post-formation et support dédié",
  ]}
  primaryButtonText="Créer un parcours"
  secondaryButtonText="Découvrir nos programmes"
  primaryButtonLink="/contact"
        images={[
          {
            src: "/images/content/offre/expertis.svg",
            srcSet: "/images/content/offre/expertis.svg 2x",
            srcDark: "/images/content/offre/expertis.svg",
            srcSetDark: "/images/content/offre/expertis.svg 2x",
            alt: "Atelier de formation digitale",
          },
          {
            src: "/images/content/ball-green-1.png",
            srcSet: "/images/content/offre/flesh.svg 2x",
            alt: "Croissance digitale",
          },
          {
            src: "/images/content/apple.png",
            srcSet: "/images/content/offre/analytique.svg 2x",
            alt: "Performance marketing",
          },
        ]}
      />
      {/* <Lifestyle /> */}
      {/* <Advantages /> */}
      {/* <Offer className="section" /> */}
      <Faq />
      {/* <Offer
        stage="Audit Gratuit - 30 min 🚀"
        title="Agence Marketing Digital au Maroc - Résultats Garantis"
        text="Boostez votre visibilité en ligne avec Dynamic Impact. SEO, Google Ads et sites web performants pour votre croissance."
        buttonText="Audit gratuit"
        buttonLink="/download"
        className="section"
      /> */}
    </>
  );
};

export default AccompagnementFormationDigitaleCoaching;
