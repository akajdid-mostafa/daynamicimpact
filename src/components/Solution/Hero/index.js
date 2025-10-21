import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Hero.module.sass";
import Image from "../../Image";
import ScrollParallax from "../../ScrollParallax";

const Hero = ({ 
  stage,
  title,
  text,
  primaryButtonText,
  primaryButtonLink,
  mainImage,
  ballImage,
  ballBlackImage,
  scrollToRef 
}) => {
  return (
    <div className={styles.hero}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={cn("stage", styles.stage)}>
            {stage || "Solutions Digitales Complètes"}
          </div>
          <h1 className={cn("h3", styles.title)}>
            {title || "Agence Marketing Digital au Maroc"}
          </h1>
          <div className={styles.text}>
            {text || "Nous transformons votre présence en ligne en un moteur de croissance durable. SEO, Google Ads, création de sites web et stratégies marketing sur mesure."}
          </div>
          <div className={styles.btns}>
            <Link className={cn("button", styles.button)} to={primaryButtonLink || "/download"}>
              {primaryButtonText || "Audit Gratuit"}
            </Link>
          </div>
        </div>
        <div className={styles.gallery}>
          <div className={styles.preview}>
            <Image
              src={mainImage?.src || "/images/content/all-service.svg"}
              srcDark={mainImage?.srcDark || "/images/content/all-service.svg"}
              alt={mainImage?.alt || "Dynamic Impact - Agence Marketing Digital"}
            />
          </div>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={300}
          >
            <img
              src={ballImage?.src || "/images/content/ball.png"}
              alt={ballImage?.alt || "Solutions SEO"}
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={600}
          >
            <img
              src={ballBlackImage?.src || "/images/content/ball-black.png"}
              alt={ballBlackImage?.alt || "Marketing Digital"}
            />
          </ScrollParallax>
        </div>
      </div>
    </div>
  );
};

export default Hero;