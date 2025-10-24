import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Services.module.sass";
import Icon from "../../../components/Icon";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Stratégie & Croissance ",
    image: "/images/content/solution1.webp",
    image2x: "/images/content/solution1.webp",
    content:
      "Accompagner votre organisation dans la définition et la mise en œuvre de sa vision stratégique pour une croissance durable.",
    points: [
      "Conseil stratégique et gouvernance",
      "Analyse et restructuration des modèles opérationnels",
      "Accompagnement à la levée de fonds et business plans",
    ],
    url: "/strategie-transformation-digitale",
  },
  {
    title: "Transformation & Digitalisation ",
    image: "/images/content/solution2.webp",
    image2x: "/images/content/solution2.webp",
    content:
      "Guider votre entreprise à travers la transformation et l'optimisation de ses processus à l'ère du numérique.",
    points: [
      "Transformation organisationnelle et performance",
      "Digitalisation et intégration des systèmes (ERP / Data)",
      "Diagnostic et optimisation des processus ",
    ],
    url: "/creation-site-web",
  },
  {
    title: "Performance & Mesure",
    image: "/images/content/solution3.webp",
    image2x: "/images/content/solution3.webp",
    content:
      "Mettre en place des outils et des indicateurs clairs pour piloter vos activités et garantir le succès de vos projets.",
    points: [
      "Mise en place de tableaux de bord et KPIs",
      "Audit et optimisation des performances",
      "Reporting stratégique et financier",
    ],
    url: "/gestion-reseaux-sociaux",
  },
  {
    title: "Gouvernance & Risques",
    image: "/images/content/solution4.webp",
    image2x: "/images/content/solution4.webp",
    content:
      "Établir une structure solide pour protéger votre organisation et assurer sa conformité réglementaire.",
    points: [
      "Management des risques et conformité",
      "Audit interne et contrôle de gestion",
      "Analyse de la chaîne de valeur",
    ],
    url: "/production-contenu-marque",
  },
  {
    title: "Communication & Impact ",
    image: "/images/content/solution5.webp",
    image2x: "/images/content/solution5.webp",
    content:
      "Construire une image de marque forte et une communication institutionnelle à fort impact pour renforcer votre réputation.",
    points: [
      "Communication institutionnelle et impact durable",
      "Stratégie de réputation et de marque employeur",
      "Gestion de la communication de crise ",
    ],
    url: "/Automatisation-Solutions-Digitales-Sur-Mesure",
  },
  {
    title: "Formation & Leadership",
    image: "/images/content/solution6.webp",
    image2x: "/images/content/solution6.webp",
    content:
      "Développer les compétences de vos équipes et de vos dirigeants pour une performance et une autonomie accrues.",
    points: [
      "Formation et accompagnement des dirigeants",
      "Transfert de compétences et gestion du changement",
      "Ateliers de renforcement des capacités ",
    ],
    url: "/automatisation-processus",
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className={cn("section-pb", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.head}>
            <div className={cn("stage-small", styles.stage)}>Nos Solutions</div>
            <h2 className={cn("h3", styles.title)}>
            Solutions Stratégiques Complètes
            </h2>
            <div className={styles.info}>
              Découvrez comment Dynamic Impact accompagne votre organisation à
              chaque étape de la réflexion stratégique à la mise en œuvre
              opérationnelle.
            </div>
            <Link className={cn("button ", styles.button)} to="/contact">
              <span>Demander un audit</span>
              <Icon name="arrow-right" size="10" />
            </Link>
          </div>
          <div className={styles.wrap}>
            {items.map((x, index) => (
              <ScrollParallax className={styles.item} key={index}>
                <div className={styles.row}>
                  <div className={styles.col}>
                    <br />
                    <br />
                    <br />
                    <img
                      srcSet={`${x.image2x} 2x`}
                      src={x.image}
                      alt="Solutions digitales Dynamic Impact - Marketing et transformation"
                    />
                  </div>
                  <div className={styles.col}>
                    <div className={styles.details}>
                      {/* <div className={styles.number}>0{index + 1}.</div> */}
                      <div className={styles.category}>{x.title}</div>
                      <div className={styles.content}>{x.content}</div>
                      <ul className={styles.points}>
                        {x.points.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className={styles.point}
                            style={{ animationDelay: `${pointIndex * 0.1}s` }}
                          >
                            <Icon
                              name="check"
                              size="16"
                              className={styles.checkIcon}
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      {/* <Link
                      className={cn("button-stroke button-small", styles.detailsButton)}
                      to={`/Nos-Solutions${x.url}`}
                    >
                      Voir les détails
                      <Icon name="arrow-right" size="10" />
                    </Link> */}
                    </div>
                  </div>
                </div>
              </ScrollParallax>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
