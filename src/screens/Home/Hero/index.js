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
            CRÉER UN SYSTÈME. CONSTRUIRE L'AVENIR.
          </div>
          <h1 className={cn("h3", styles.title)}>
            Nous transformons votre entreprise en
            <span className={styles.underlined}>
              accélérant
            </span>{" "}
            votre croissance digitale
          </h1>
          <div className={styles.text}>
            Nous concevons l&apos;écosystème complet qui fait performer votre
            entreprise : audit stratégique, transformation des processus,
            solutions digitales et accompagnement des équipes.
          </div>
          <div className={styles.btns}>
            <Link className={cn("button", styles.button)} to="/contact">
              Demander une étude
            </Link>
            <Link
              className={cn("button-stroke", styles.button)}
              to="/nos-solutions"
            >
              Nos Services
            </Link>
          </div>
        </div>

        <div className={styles.gallery}>
          <div className={styles.preview}>
            <Image
              src="/images/content/Hero/hero1.webp"
              srcDark="/images/content/Hero/hero1.webp"
              alt="Hero 1"
            />
          </div>
          <div className={styles.preview}>
            <img
              srcSet="/images/content/Hero/hero2.webp 2x"
              alt="Bottle"
            />
          </div>
          <div className={styles.preview}>
            <img
              srcSet="/images/content/Hero/hero3.webp 2x"
              alt="Ball black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
