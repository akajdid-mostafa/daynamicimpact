import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styles from "./Services.module.sass";
import Icon from "../../../components/Icon";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Stratégie & Croissance ",
    image: "/images/content/service1.svg",
    image2x: "/images/content/service1.svg",
    content:
      "Accompagner votre organisation dans la définition et la mise en œuvre de sa vision stratégique pour une croissance durable.",
    points: [
      "Conseil stratégique et gouvernance",
      "Analyse et restructuration des modèles opérationnels",
      "Accompagnement à la levée de fonds et business plans"
    ],
    url: "/strategie-transformation-digitale",
  },
  {
    title: "Transformation & Digitalisation ",
    image: "/images/content/service2.svg",
    image2x: "/images/content/service2.svg",
    content:
      "Guider votre entreprise à travers la transformation et l'optimisation de ses processus à l'ère du numérique.",
    points: [
      "Transformation organisationnelle et performance",
      "Digitalisation et intégration des systèmes (ERP / Data)",
      "Diagnostic et optimisation des processus "
    ],
    url: "/creation-site-web",
  },
  {
    title: "Performance & Mesure",
    image: "/images/content/service3.svg",
    image2x: "/images/content/service3.svg",
    content:
      "Mettre en place des outils et des indicateurs clairs pour piloter vos activités et garantir le succès de vos projets.",
    points: [
      "Mise en place de tableaux de bord et KPIs",
      "Audit et optimisation des performances",
      "Reporting stratégique et financier"
    ],
    url: "/gestion-reseaux-sociaux",
  },
  {
    title: "Gouvernance & Risques",
    image: "/images/content/service3.svg",
    image2x: "/images/content/service3.svg",
    content:
      "Établir une structure solide pour protéger votre organisation et assurer sa conformité réglementaire.",
    points: [
      "Management des risques et conformité",
      "Audit interne et contrôle de gestion",
      "Analyse de la chaîne de valeur"
    ],
    url: "/production-contenu-marque",
  },
  {
    title: "Communication & Impact ",
    image: "/images/content/service3.svg",
    image2x: "/images/content/service3.svg",
    content:
      "Construire une image de marque forte et une communication institutionnelle à fort impact pour renforcer votre réputation.",
    points: [
      "Communication institutionnelle et impact durable",
      "Stratégie de réputation et de marque employeur",
      "Gestion de la communication de crise "
    ],
    url: "/Automatisation-Solutions-Digitales-Sur-Mesure",
  },
  {
    title: "Formation & Leadership",
    image: "/images/content/service3.svg",
    image2x: "/images/content/service3.svg",
    content:
      "Développer les compétences de vos équipes et de vos dirigeants pour une performance et une autonomie accrues.",
    points: [
      "Formation et accompagnement des dirigeants",
      "Transfert de compétences et gestion du changement",
      "Ateliers de renforcement des capacités "
    ],
    url: "/automatisation-processus",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Services = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
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
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 100000,
        settings: "unslick",
      },
    ],
  };

  return (
    <section id="services">
    <div  className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <div className={cn("stage-small", styles.stage)}>Nos Solutions</div>
          <h2 className={cn("h2", styles.title)}>Solutions Digitales Complètes</h2>
          <div className={styles.info}>
            Découvrez comment Dynamic Impact transforme votre présence en ligne en un moteur de croissance durable avec des résultats mesurables.
          </div>
          <Link
            className={cn("button-stroke", styles.button)}
            to="/contact"
          >
            <span>Demander un audit</span>
            <Icon name="arrow-right" size="10" />
          </Link>
        </div>
        <div className={styles.wrap}>
          <Slider
            className={cn("lifestyle-slider", styles.slider)}
            {...settings}
          >
            {items.map((x, index) => (
              <ScrollParallax className={styles.item} key={index}>
                <div className={styles.row}>
                  <div className={styles.col}>
                    <div className={styles.details}>
                      <div className={styles.number}>0{index + 1}.</div>
                      <div className={styles.category}>{x.title}</div>
                      <div className={styles.content}>{x.content}</div>
                      <ul className={styles.points}>
                        {x.points.map((point, pointIndex) => (
                          <li 
                            key={pointIndex} 
                            className={styles.point}
                            style={{ animationDelay: `${pointIndex * 0.1}s` }}
                          >
                            <Icon name="check" size="16" className={styles.checkIcon} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        className={cn("button-stroke button-small", styles.detailsButton)}
                        to={`/Nos-Solutions${x.url}`}
                      >
                        Voir les détails
                        <Icon name="arrow-right" size="10" />
                      </Link>
                    </div>
                  </div>
                  <div className={styles.col}>
                    <img
                      srcSet={`${x.image2x} 2x`}
                      src={x.image}
                      alt="Solutions Digitales"
                    />
                  </div>
                </div>
              </ScrollParallax>
            ))}
          </Slider>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Services;