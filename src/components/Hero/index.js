import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Hero.module.sass";
import Image from "../Image";

const Hero = ({ 
  stage = "Votre marque, irrésistible en ligne",
  title = "Dynamic Impact",
  titleHighlight = "Agence marketing",
  titleSuffix = "& écosystèmes opérationnels",
  description = "Dynamic Impact conçoit et déploie des écosystèmes marketing et opérationnels complets : site web SEO, CRM/ERP, création de contenu et formation d'équipes. Résultat : conversion, fidélisation et croissance mesurable.",
  primaryButton = {
    text: "Demander un audit offert",
    to: "/contact"
  },
  gallery = [
    {
      srcSet: "/images/content/Hero/hero1.webp 2x",
      srcSetDark: "/images/content/Hero/hero1.webp 2x",
      src: "/images/content/Hero/hero1.webp",
      srcDark: "/images/content/Hero/hero1.webp",
      alt: "Image principale Dynamic Impact - Agence marketing digital et transformation digitale",
      isImage: false
    },
    // {
    //   srcSet: "/images/content/Hero/hero.webp 2x",
    //   src: "/images/content/hero.webp",
    //   alt: "Ball",
    //   isImage: true
    // },
    {
      srcSet: "/images/content/Hero/hero2.webp 2x",
      src: "/images/content/Hero/hero2.webp",
      alt: "Illustration des solutions marketing digital et publicité performante par Dynamic Impact",
      isImage: true
    },
    {
      srcSet: "/images/content/Hero/hero3.webp 2x",
      src: "/images/content/Hero/hero3.webp",
      srcDark: "/images/content/Hero/hero3.webp",
      alt: "Représentation de la stratégie digitale et impact marketing Dynamic Impact",
      isImage: true
    }
  ]
}) => {
  return (
    <div className={styles.hero}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={cn("stage", styles.stage)}>
            {stage}
          </div>
          <h1 className={cn("h3", styles.title)}>
            {title}
            <span className={styles.underlined}>{titleHighlight}</span> {titleSuffix}
          </h1>
          <div className={styles.text}>
            {description}
          </div>
          <div className={styles.btns}>
            <Link className={cn("button", styles.button)} to={primaryButton.to}>
              {primaryButton.text}
            </Link>
          </div>
        </div>

        <div className={styles.gallery}>
          {gallery.map((item, index) => (
            <div key={index} className={styles.preview}>
              {item.isImage ? (
                <img
                  srcSet={item.srcSet}
                  src={item.src}
                  alt={item.alt}
                />
              ) : (
                <Image
                  srcSet={item.srcSet}
                  srcSetDark={item.srcSetDark}
                  src={item.src}
                  srcDark={item.srcDark}
                  alt={item.alt}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
