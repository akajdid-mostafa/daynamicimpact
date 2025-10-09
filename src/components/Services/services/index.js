import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Services.module.sass";
import Slider from "react-slick";
import Icon from "../../Icon";
import ScrollParallax from "../../ScrollParallax";

const items = [
  {
    title: "Stratégie & Transformation Digitale",
    url: "/Nos-Solutions/strategie-transformation-digitale",
    color: "#45B26B",
    image: "/images/content/user.svg",
    alt: "user",
    content:
      "Analyse et conception de stratégies de croissance sur mesure.",
  },
  {
    title: "Création de Sites Web Performants & SEO Avancé",
    url: "/Nos-Solutions/creation-site-web",
    color: "#9757D7",
    image: "/images/content/medal-1.svg",
    alt: "medal",
    content:
      "Création de sites modernes, rapides et optimisés SEO.",
  },
  {
    title: "Gestion & Croissance des Réseaux Sociaux",
    url: "/Nos-Solutions/gestion-reseaux-sociaux",
    color: "#3772FF",
    image: "/images/content/lightning.svg",
    alt: "lightning",
    content:
      "Animation, gestion et croissance de votre présence en ligne.",
  },
  {
    title: "Production de Contenu de Marque Premium",
    url: "/Nos-Solutions/production-contenu-marque",
    color: "#45B26B",
    image: "/images/content/user.svg",
    alt: "user",
    content:
      "Création de contenus visuels et narratifs à fort impact.",
  },
  {
    title: "Automatisation & Solutions Digitales Sur-Mesure",
    url: "/Nos-Solutions/automatisation-processus",
    color: "#9757D7",
    image: "/images/content/medal-1.svg",
    alt: "medal",
    content:
      "Mise en place de CRM, ERP et outils automatisés.",
  },
  {
    title: "Accompagnement & Formation Digitale",
    url: "/Nos-Solutions/formation-coaching-digital",
    color: "#3772FF",
    image: "/images/content/lightning.svg",
    alt: "lightning",
    content: "Coaching et suivi stratégique pour des équipes autonomes.",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Services = ({ classNameTitle, title, classNameSection, scrollToRef }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 1200,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="14" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="14" />
      </SlickArrow>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={cn(classNameSection, styles.section)}>
      <div className={styles.anchor} ref={scrollToRef}></div>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <h3 className={cn("h4", styles.title)}>{title}</h3>
          <div className={styles.info}>
             Nous aidons
            <strong className={styles.purple}> les marques</strong> à se transformer, performer et croître grâce à des
            <strong className={styles.black}> stratégies digitales</strong> sur mesure
          </div>
        </div>
        <div className={styles.wrap}>
          <Slider className="programs-slider" {...settings}>
            {items.map((x, index) => (
              <ScrollParallax className={styles.slide} key={index}>
                <div className={cn("programs-item", styles.item)}>
                  <div
                    className={styles.icon}
                    style={{ backgroundColor: x.color }}
                  >
                    <img src={x.image} alt={x.alt} />
                  </div>
                  <div className={styles.subtitle}>{x.title}</div>
                  <div className={styles.content}>{x.content}</div>
                  <Link
                    className={cn("button-stroke", styles.button)}
                    to={x.url}
                  >
                    En savoir plus
                  </Link>
                </div>
              </ScrollParallax>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Services;