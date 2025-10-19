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

const ProductionContenuMarque = () => {
  const scrollToRef = useRef(null);

  return (
    <>
      <Hero
        scrollToRef={scrollToRef}
        stage="Créativité & Impact"
        title="Production de Contenu"
        text="Nous créons des contenus puissants et mémorables qui renforcent votre image de marque et captivent votre audience."
        primaryButtonText="Demander un shooting"
        primaryButtonLink="/contact"
        secondaryButtonText="Voir nos réalisations"
        secondaryButtonLink="/projects"
        mainImage={{
          src: "/images/content/all-service.svg",
          srcSet: "/images/content/all-service.svg 2x",
          srcDark: "/images/content/all-service.svg",
          srcSetDark: "/images/content/all-service.svg 2x",
          alt: "Production de contenu digital",
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
        title="Des histoires qui marquent"
        text="Nous produisons des contenus visuels et textuels adaptés à votre identité, votre marché et vos objectifs marketing."
        buttonText="Créer votre contenu"
        buttonLink="/contact"
        image={{
          src: "/images/content/boost.svg",
          srcSet: "/images/content/boost.svg 2x",
          alt: "Storytelling et branding",
        }}
      />
      {/* <ValueProps className="section-pb" /> */}
      <ValueProps
        className="section-pb"
        stage="Nos Expertises"
        title="Ce que nous créons pour vous"
        items={[
          {
            title: "Photo & Vidéo",
            content:
              "Shooting professionnels, vidéos promotionnelles et interviews de marque.",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#23262f" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/><path d="M12 4.5L10.5 8.5 6.5 9.5l3 2.9-.7 4.1L12 14.5l3.2 2-.7-4.1 3-2.9-4-.5L12 4.5z"/></svg>',
          },
          {
            title: "Design & Graphisme",
            content:
              "Création de visuels percutants pour vos réseaux, sites web et campagnes.",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#23262f" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>',
          },
          {
            title: "Rédaction & Storytelling",
            content:
              "Articles, scripts et textes qui donnent vie à votre message.",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#23262f" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>',
          },
        ]}
      />
      {/* <Program /> */}
      {/* <About /> */}
      {/* <Review className="section-pb64" /> */}
      {/* <Clients /> */}
      <Workouts
        title="Renforcez votre image de marque"
        highlight="notre approche"
        info="Nous transformons vos idées en contenus engageants qui captivent et convertissent."
        items={[
          "Définition du concept créatif",
          "Shooting photo & tournage vidéo",
          "Montage et retouche professionnelle",
          "Rédaction et optimisation SEO",
          "Publication multicanale",
        ]}
        primaryButtonText="Commencer maintenant"
        secondaryButtonText="Voir notre portfolio"
        primaryButtonLink="/contact"
        images={[
          {
            src: "/images/content/offre/expertis.svg",
            srcSet: "/images/content/offre/expertis.svg 2x",
            srcDark: "/images/content/offre/expertis.svg",
            srcSetDark: "/images/content/offre/expertis.svg 2x",
            alt: "Équipe de production",
          },
          {
            src: "/images/content/ball-green-1.png",
            srcSet: "/images/content/offre/flesh.svg 2x",
            alt: "Studio créatif",
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
        stage="Séance Créative Gratuite - 30 min 🎥"
        title="Faites rayonner votre marque"
        text="Donnez vie à votre message avec des contenus visuels et éditoriaux de qualité professionnelle."
        buttonText="Planifier une séance"
        buttonLink="/contact"
      /> */}
    </>
  );
};

export default ProductionContenuMarque;
