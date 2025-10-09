import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Hero.module.sass";
import Image from "../../../components/Image";

const Hero = ({ scrollToRef }) => {
  return (
    <div className={styles.hero}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={cn("stage", styles.stage)}>
            Build the system. See the growth.
          </div>
          <h1 className={cn("h2", styles.title)}>
            Nous alignons stratégie, tech et équipes pour
            <span className={styles.underlined}>accélérer </span> votre chiffre
            d’affaires.
          </h1>
          <div className={styles.text}>
            Dynamic Impact conçoit l&apos;univers complet qui fait performer votre
            entreprise : site efficace, flux CRM synchronisés, contenus qui
            convertissent et formation des équipes sur le terrain. Pas de jargon
             des actions mesurables, des process adoptés et des résultats que
            l&apos;on suit.
          </div>
          <div className={styles.btns}>
            <Link className={cn("button", styles.button)} to="/contact">
            Demander une étude 
            </Link>
            <Link
              className={cn("button-stroke", styles.button)}
              to="/nos-solutions"
            >
              Voir nos offres
            </Link>
          </div>
        </div>

        <div className={styles.gallery}>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/Hero/hero.webp 2x"
              srcSetDark="/images/content/Hero/hero.webp 2x"
              src="/images/content/Hero/hero.webp"
              srcDark="/images/content/Hero/hero.webp"
              alt="Watch"
            />
          </div>
          <div className={styles.preview}>
            <img
              srcSet="/images/content/Hero/hero1.webp 2x"
              src="/images/content/ball.png"
              alt="Ball"
            />
          </div>
          <div className={styles.preview}>
            <img
              srcSet="/images/content/Hero/hero2.webp 2x"
              src="/images/content/Hero/hero2.webp"
              alt="Bottle"
            />
          </div>
          <div className={styles.preview}>
            <img
              srcSet="/images/content/Hero/hero4.webp 2x"
              src="/images/content/ball-black.png"
              alt="Ball black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
