import React from "react";
import cn from "classnames";
import styles from "./ValueProps.module.sass";
import ScrollParallax from "../ScrollParallax";
import Image from "../Image";

// Default data for ValueProps component
const defaultValuePropsData = {
  // stage: "CONSEIL STRATÉGIQUE & OPÉRATIONNEL",
  title: "Des Services Axés sur les Résultats pour Votre Croissance",
  items: [
    {
      title: "Stratégie & Conseil",
      content:
        "Nous aidons à la prise de décision stratégique, à l'analyse des modèles opérationnels et à la préparation des plans de financement pour assurer une croissance durable.",
      icon: "/images/icon/strategie-conseil.svg",
    },
    {
      title: "Transformation & Digitalisation",
      content:
        "Nous accompagnons le changement au sein de l'organisation, optimisons les processus et mettons en place les systèmes digitaux (ERP/Data) adaptés à vos besoins.",
      icon: "/images/icon/transformation-digitalisation.svg",
    },
    {
      title: "Performance & Mesure",
      content:
        "Nous concevons et mettons en place des tableaux de bord et des indicateurs de performance clés (KPIs) pour vous aider à mesurer votre impact et votre efficacité.",
      icon: "/images/icon/performance.svg",
    },
  ]
};

const ValueProps = ({ 
  className,
  stage = defaultValuePropsData.stage,
  title = defaultValuePropsData.title,
  items = defaultValuePropsData.items
}) => {
  return (
    <div className={cn(className, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          {/* <div className={cn("stage-small", styles.stage)}>
            {stage}
          </div> */}
          <div className={cn("h2", styles.title)}>
            {title}
          </div>
        </div>
        <div className={styles.list}>
          {items.map((x, index) => (
            <ScrollParallax className={styles.item} key={index}>
              <div className={styles.icon}>
                <Image
                  src={x.icon}
                  srcDark={x.icon}
                  alt={`${x.title} - Dynamic Impact marketing digital`}
                />
              </div>
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
