import cn from "classnames";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styles from "./Lifestyle.module.sass";
import Icon from "../../../components/Icon";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Stratégie & Transformation Digitale",
    image: "/images/content/service1.svg",
    image2x: "/images/content/service1.svg",
    content:
      "Accompagner les marques dans leur transformation digitale et maximiser leur impact en ligne.",
    points: [
      "Audit complet de votre écosystème digital",
      "Définition d'une stratégie digitale sur-mesure",
      "Objectifs clairs et mesurables",
      "Roadmap d'implémentation"
    ]
  },
  {
    title: "Création de Sites Web Performants & SEO Avancé",
    image: "/images/content/service2.svg",
    image2x: "/images/content/service2.svg",
    content:
      "Offrir des plateformes digitales qui convertissent et renforcent l’image de marque.",
    points: [
      "Design responsive et expérience utilisateur optimale",
      "Développement sur mesure avec les dernières technologies",
      "Optimisation SEO avancée",
      "Intégration de fonctionnalités e-commerce"
    ]
  },
  {
    title: "Gestion & Croissance des Réseaux Sociaux",
    image: "/images/content/service3.svg",
    image2x: "/images/content/service3.svg",
    content:
      "Construire une communauté active et développer votre notoriété digitale.",
    points: [
      "Création de contenu engageant et viral",
      "Planification stratégique de publication",
      "Gestion de la communauté et interactions",
      "Analyses et reporting mensuel"
    ]
  },
  {
    title: "Production de Contenu de Marque Premium",
    image: "/images/content/service3.svg",
    image2x: "/images/content/service3.svg",
    content:
      "Créer des contenus à fort impact qui marquent les esprits et attirent vos clients idéaux.",
    points: [
      "Photos et vidéos professionnelles",
      "Rédaction de textes persuasifs",
      "Design graphique et infographies",
      "Contenu adapté à chaque plateforme"
    ]
  },
  {
    title: "Automatisation & Solutions Digitales Sur-Mesure",
    image: "/images/content/service3.svg",
    image2x: "/images/content/service3.svg",
    content:
      "Gagner du temps, réduire les coûts et scaler efficacement votre activité.",
    points: [
      "Intégration de CRM et outils de marketing",
      "Automatisation des processus répétitifs",
      "Solutions personnalisées selon vos besoins",
      "Formation et support technique"
    ]
  },
  {
    title: "Accompagnement & Formation Digitale",
    image: "/images/content/service3.svg",
    image2x: "/images/content/service3.svg",
    content:
      "Rendre vos équipes autonomes et garantir une croissance durable.",
    points: [
      "Formation sur mesure pour vos équipes",
      "Accompagnement personnalisé",
      "Support continu et réactif",
      "Transfert de compétences"
    ]
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Lifestyle = () => {
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
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <div className={cn("stage-small", styles.stage)}>Nos Solutions</div>
          <h2 className={cn("h2", styles.title)}>Solutions Digitales Complètes</h2>
          <div className={styles.info}>
            Découvrez comment Dynamic Impact transforme votre présence en ligne en un moteur de croissance durable avec des résultats mesurables.
          </div>
          <Link
            className={cn("button-stroke", styles.button)}
            to="/class02-details"
          >
            <span>Demander un audit gratuit</span>
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
  );
};

export default Lifestyle;