import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Book.module.sass";
import Icon from "../../../components/Icon";
import Image from "../../../components/Image";
// import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Identité Visuelle",
    // color: "#45B26B",
    images: "/images/icon/identite-visuel.svg",
    alt: "branding",
    content: "Création de logos, chartes graphiques et univers visuels uniques",
  },
  {
    title: "Marketing Digital",
    // color: "#9757D7",
    images: "/images/icon/marketing-digital.svg",
    alt: "marketing",
    content:
      "Stratégies social media, publicité en ligne et génération de leads",
  },
  {
    title: "Développement Web & App",
    // color: "#3772FF",
    images: "/images/icon/developpement.svg",
    alt: "code",
    content: "Sites vitrines, e-commerce et applications sur mesure",
  },
];

const Book = () => {
  return (
    <div className={cn("section-bg", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.gallery}>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/book.webp 2x"
              srcSetDark="/images/content/book.webp 2x"
              src="/images/content/book.webp"
              srcDark="/images/content/book.webp"
              alt="Book pic"
            />
          </div>
          {/* <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            offset={300}
          >
            <img
              srcSet="/images/content/book2.webp 2x"
              src="/images/content/book2.webp"
              alt="Ball"
            />
          </ScrollParallax> */}
          {/* <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            offset={300}
          >
            <img
              srcSet="/images/content/advanced.svg 2x"
              src="/images/content/advanced.svg"
              alt="Ball"
            />
          </ScrollParallax> */}
          {/* <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            offset={300}
          >
            <img
              srcSet="/images/content/dumbbells@2x.png 2x"
              src="/images/content/dumbbells.png"
              alt="Dumbbells"
            />
          </ScrollParallax> */}
        </div>
        <div className={styles.wrap}>
          <h2 className={cn("h4", styles.title)}>
            Développer votre marque avec nos solutions digitales
          </h2>

          <div className={styles.info}>
            De la conception de votre identité à la création de vos plateformes
            digitales, nous vous accompagnons à chaque étape pour renforcer
            votre visibilité et accélérer votre croissance en ligne.
          </div>
          <div className={styles.list}>
            {items.map((x, index) => (
              <div className={styles.item} key={index}>
                <div
                  className={styles.icon}
                  style={{ backgroundColor: x.color }}
                >
                  <img src={x.images} alt={x.alt} />
                </div>
                <div className={styles.details}>
                  <div className={styles.subtitle}>{x.title}</div>
                  <div className={styles.content}>{x.content}</div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className={styles.note}>
            <strong className={styles.green}>Offre spéciale</strong> : -15% sur
            votre premier projet en{" "}
            <strong className={styles.black}>{new Date().getFullYear()}</strong>
          </div> */}

          <div className={styles.btns}>
            <Link className={cn("button", styles.button)} to="/contact">
              <span>Demander un devis</span>
              <Icon name="arrow-right" size="10" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
