import React, { useRef } from "react";
// import styles from "./Home.module.sass";
import Hero from "./Hero";
// import Clients from "../../components/Clients";
import Steps from "./Steps";
// import Intro from "../../components/Intro";
import Book from "./Book";
// import ValueProps from "../../components/ValueProps";
import About from "./About";
// import Team from "./Team";
// import Review from "../../components/Review";
// import Quality from "./Quality";
import Advantages from "../../components/Advantages";
// import Workouts from "../../components/Workouts";
// import Offer from "../../components/Offer";
import Faq from "../../components/Faq";
// import History from "../../components/History/index";
// import Join from "./Join";
// import Whay from "../../components/whay";
// import Services from "../../components/services";
// import Programs from "../../components/Programs";
// import Blog from "../../components/Blog";
import Services from "../../components/Services/services";
// import Offer from "../../components/Offer";
// import Multisites from "../../components/Multisites";
// import Succes from "../../components/Succes";
// import Sucees from "../../components/sucees";



const Home = () => {
  const scrollToRef = useRef(null);

  return (
    <>
    {/* Hero */}
      <Hero scrollToRef={scrollToRef} />
      {/* About */}
      <About />
      {/* Pourquoi choisir Dynamic Impact */}
      <Advantages />
      {/* Nos offres principales (aperçu) */}
      <Services title="Nos Solutions Digitales à Haute Valeur"/>
      {/* Processus en 4 étapes (visuel + texte) */}
      <Steps scrollToRef={scrollToRef} />
      {/* Intro */}
      {/* <Intro /> */}
      {/* Multisites */}
      {/* <Multisites /> */}
      {/* Succes */}
      {/* <Succes />   */}
      {/* Sucees */}
      {/* <Sucees /> */}
      {/* Book */}
      <Book />
      {/* Workouts */}
      {/* <Workouts /> */}
      {/* Blog / Ressources (SEO + content marketing) */}
      {/* <Blog/> */}
      {/* Foire aux Questions (FAQ)  */}
      <Faq />
      {/* <Work /> */}
      {/* <Clients /> */}
      {/* <Whay scrollToRef={scrollToRef} /> */}
      {/* <Programs
                title="Nos Programmes Digitaux Spécialisés"
            /> */}
      {/* <ValueProps className="section" /> */}
      
     
      {/* <Team /> */}
      {/* <Review className="section" /> */}
      {/* <Quality /> */}
      
      {/* <History/> */}
      {/* <Join /> */}
      {/* <Offer className="section-border-top" /> */}

    </>
  );
};

export default Home;
