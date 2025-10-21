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

const GestionCroissanceReseauxSociauxSocialMedia = () => {
  const scrollToRef = useRef(null);

  return (
    <>
      <Hero
        scrollToRef={scrollToRef}
        stage="GOUVERNANCE & RISQUES"
        title="Sécurisez votre croissance avec une gouvernance solide"
        text="Nous vous aidons à construire une structure de gouvernance claire et à maîtriser les risques pour assurer la conformité, la transparence et la pérennité de votre organisation."
        primaryButtonText="Demander un audit"
        primaryButtonLink="/contact"
        mainImage={{
          src: "/images/content/all-service.svg",
          srcDark: "/images/content/all-service.svg",
          alt: "Gestion de réseaux sociaux",
        }}
        ballImage={{
          src: "/images/content/ball.png",
          alt: "Solutions SEO",
        }}
        ballBlackImage={{
          src: "/images/content/ball-black.png",
          alt: "Marketing Digital",
        }}
      />
      {/* <Hero scrollToRef={scrollToRef} /> */}

      <Intro
        scrollToRef={scrollToRef}
        title="Protéger pour mieux performer"
        text="Nous analysons vos processus internes, évaluons vos risques opérationnels et mettons en place des cadres de gouvernance et de conformité adaptés à votre stratégie et à votre environnement réglementaire."
        buttonText="Discutons de votre projet"
        buttonLink="/contact"
        image={{
          src: "/images/content/boost.svg",
          alt: "Community management",
        }}
      />
      {/* <ValueProps className="section-pb" /> */}
      <ValueProps
        className="section-pb"
        stage="NOS EXPERTISES"
        title="Ce que nous faisons pour vous"
        items={[
          {
            title: "Management des risques & conformité",
            content:
              "Nous identifions, évaluons et maîtrisons les risques financiers, opérationnels et réglementaires pour garantir la stabilité de votre organisation.",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#23262f" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/><path d="M12 4.5L10.5 8.5 6.5 9.5l3 2.9-.7 4.1L12 14.5l3.2 2-.7-4.1 3-2.9-4-.5L12 4.5z"/></svg>',
          },
          {
            title: "Audit interne & contrôle de gestion",
            content:
              "Nous auditons vos processus et vos mécanismes de contrôle afin de renforcer la performance et la transparence.",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#23262f" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>',
          },
          {
            title: "Analyse de la chaîne de valeur",
            content:
              "Nous étudions vos activités clés pour identifier les zones de vulnérabilité et les leviers d’efficacité.",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#23262f" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>',
          },
        ]}
      />
      {/* <Program /> */}
      {/* <About /> */}
      {/* <Review className="section-pb64" /> */}
      {/* <Clients /> */}
      <Workouts
        title="Des leviers pour "
        highlight="une gouvernance durable"
        info="Une bonne gouvernance repose sur la rigueur, la transparence et la maîtrise du risque. Voici nos leviers pour renforcer votre résilience :"
        items={[
          "Évaluation et cartographie des risques",
          "Mise en place de politiques de conformité et de contrôle interne",
          "Audit interne et accompagnement à la gouvernance",
          "Optimisation de la chaîne de valeur et du contrôle de gestion",
          "Formation et sensibilisation aux bonnes pratiques de gouvernance",
        ]}
        primaryButtonText="Renforcez votre gouvernance"
        images={[
          {
            src: "/images/content/offre/expertis.svg",
            srcDark: "/images/content/offre/expertis.svg",
            alt: "Croissance réseaux sociaux",
          },
          {
            src: "/images/content/ball-green-1.png",
            alt: "Analyse des performances sociales",
          },
          {
            src: "/images/content/apple.png",
            alt: "Performance marketing",
          },
        ]}
      />
      {/* <Lifestyle /> */}
      {/* <Advantages /> */}
      {/* <Offer className="section" /> */}
      <Faq />
      {/* <Offer
        stage="Audit Social Gratuit - 30 min 📊"
        title="Boostez votre notoriété et vos ventes"
        text="Nous gérons vos réseaux sociaux pour transformer vos abonnés en clients fidèles."
        buttonText="Demander un audit"
        buttonLink="/contact"
      /> */}
    </>
  );
};

export default GestionCroissanceReseauxSociauxSocialMedia;
