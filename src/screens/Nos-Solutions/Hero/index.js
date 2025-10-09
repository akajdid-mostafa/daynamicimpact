import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Hero.module.sass";
import Image from "../../../components/Image";
import ScrollParallax from "../../../components/ScrollParallax";

const Hero = ({ scrollToRef }) => {
  return (
    <div className={styles.hero}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={cn("stage", styles.stage)}>
            Solutions Digitales Complètes
          </div>
          <h1 className={cn("h1", styles.title)}>
            Agence Marketing Digital au Maroc
          </h1>
          <div className={styles.text}>
            Nous transformons votre présence en ligne en un moteur de croissance durable. 
            SEO, Google Ads, création de sites web et stratégies marketing sur mesure.
          </div>
          <div className={styles.btns}>
            <Link className={cn("button", styles.button)} to="/contact">
              Audit Gratuit
            </Link>
            <Link
              className={cn("button-stroke", styles.button)}
              to="/nos-solutions/#services"
            >
              Nos Services
            </Link>
          </div>
        </div>
        <div className={styles.gallery}>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/all-service.svg 2x"
              srcSetDark="/images/content/all-service.svg 2x"
              src="/images/content/all-service.svg"
              srcDark="/images/content/all-service.svg"
              alt="Dynamic Impact - Agence Marketing Digital"
            />
          </div>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={300}
          >
            <img
              srcSet="/images/content/ball@2x.png 2x"
              src="/images/content/ball.png"
              alt="Solutions SEO"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={600}
          >
            <img
              srcSet="/images/content/ball-black@2x.png 2x"
              src="/images/content/ball-black.png"
              alt="Marketing Digital"
            />
          </ScrollParallax>
        </div>
      </div>
    </div>
  );
};

export default Hero;
