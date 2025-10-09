import React from "react";
import cn from "classnames";
import styles from "./ValueProps.module.sass";
import ScrollParallax from "../../ScrollParallax";

const ValueProps = ({ 
  className, 
  stage, 
  title, 
  items 
}) => {
  // Default values for backward compatibility
  const defaultItems = [
    {
      title: "Référencement Naturel (SEO)",
      content:
        "Atteignez la première page de Google et attirez un trafic qualifié et durable. Nous optimisons chaque aspect de votre site pour dominer les résultats de recherche.",
      icon:
        '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#23262f" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>',
    },
    {
      title: "Publicité en Ligne (Google Ads)",
      content:
        "Obtenez des résultats immédiats. Nous créons et gérons des campagnes publicitaires rentables qui ciblent précisément vos futurs clients au moment où ils vous cherchent.",
      icon:
        '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#23262f" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>',
    },
    {
      title: "Création de Sites Web & Landing Pages",
      content:
        "Votre site est votre meilleur commercial. Nous concevons des sites web rapides, modernes et optimisés pour la conversion, offrant une expérience utilisateur parfaite.",
      icon:
        '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#23262f" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/><path d="M12 4.5L10.5 8.5 6.5 9.5l3 2.9-.7 4.1L12 14.5l3.2 2-.7-4.1 3-2.9-4-.5L12 4.5z"/></svg>',
    },
  ];

  const finalItems = items || defaultItems;

  return (
    <div className={cn(className, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <div className={cn("stage-small", styles.stage)}>
            {stage || "Solutions Marketing Digital Complètes"}
          </div>
          <div className={cn("h2", styles.title)}>
            {title || "Des Services Axés sur les Résultats pour Votre Croissance"}
          </div>
        </div>
        <div className={styles.list}>
          {finalItems.map((x, index) => (
            <ScrollParallax className={styles.item} key={index}>
              <div
                className={styles.icon}
                dangerouslySetInnerHTML={{ __html: x.icon }}
              ></div>
              <div className={styles.category}>{x.title}</div>
              <div className={styles.content}>{x.content}</div>
            </ScrollParallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValueProps;