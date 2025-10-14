import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Services.module.sass";
import Slider from "react-slick";
import Icon from "../../Icon";
import ScrollParallax from "../../ScrollParallax";

const items = [
  {
    title: "Stratégie & Conseil",
    url: "/Nos-Solutions/strategie-transformation-digitale",
    // color: "#45B26B",
    image: "/images/icon/strategie-conseil.svg",
    alt: "user",
    content:
      "Aligner votre vision et planifier votre croissance durable.",
  },
  {
    title: "Transformation & Digitalisation",
    url: "/Nos-Solutions/creation-site-web",
    // color: "#9757D7",
    image: "/images/icon/transformation-digitalisation.svg",
    alt: "medal",
    content:
      "Optimiser vos processus et intégrer des solutions digitales.",
  },
  {
    title: "Performance & Outils",
    url: "/Nos-Solutions/gestion-reseaux-sociaux",
    // color: "#3772FF",
    image: "/images/icon/performance.svg",
    alt: "lightning",
    content:
      "Mettre en place des outils pour mesurer et améliorer.",
  },
  {
    title: "Risques & Conformité",
    url: "/Nos-Solutions/production-contenu-marque",
    // color: "#45B26B",
    image: "/images/icon/gestion-risque.svg",
    alt: "user",
    content:
      "Protéger votre entreprise et garantir la conformité.",
  },
  {
    title: "Communication & Impact",
    url: "/Nos-Solutions/automatisation-processus",
    // color: "#9757D7",
    image: "/images/icon/communcation.svg",
    alt: "medal",
    content:
      "Bâtir une réputation et un impact institutionnel fort.",
  },
  {
    title: "Accompagnement & Formation",
    url: "/Nos-Solutions/formation-coaching-digital",
    // color: "#3772FF",
    image: "/images/icon/accompagnement-formation.svg",
    alt: "lightning",
    content: "Développer les compétences et l'autonomie de vos équipes.",
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
                    to="/nos-solutions"
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