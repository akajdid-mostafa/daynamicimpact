import React, { useRef } from "react";
// import styles from "./Home.module.sass";
import Hero from "./Hero";
// import Clients from "../../components/Clients";
import Steps from "./Steps";
// import Intro from "../../components/Intro";
import Book from "./Book";
import About from "./About";
import Advantages from "../../components/Advantages";
import Faq from "../../components/Faq";
// import History from "../../components/History/index";
// import Join from "./Join";
// import Whay from "../../components/whay";
// import Services from "../../components/services";
// import Programs from "../../components/Programs";
import Blog from "../../components/Blog";
import Services from "../../components/Services/services";
import Popuptest from "../../components/Popuptest"; 




const Home = () => {
  const scrollToRef = useRef(null);

  return (
    <>
      <Popuptest />
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
      <Blog/>
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
