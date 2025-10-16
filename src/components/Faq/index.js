import React, { useState } from "react";
import cn from "classnames";
import styles from "./Faq.module.sass";
import Item from "./Item";

const items = [
  {
    title: "Qu'est-ce qui distingue Dynamic Impact des autres agences de conseil ?",
    answer:
      "Nous combinons le conseil stratégique et l'expertise en solutions digitales pour garantir une exécution alignée avec votre stratégie globale.",
  },
  {
    title:
      "Où est située l'agence Dynamic Impact ? ",
    answer:
      "Notre cabinet est basé à Casablanca, et nous accompagnons les entreprises et les dirigeants sur l'ensemble du territoire marocain.",
  },
  {
    title: "Quels types d'entreprises accompagnez-vous ? ",
    answer:
      "Nous travaillons avec des entreprises de toutes tailles, des PME aux grands comptes, qui cherchent à optimiser leur croissance, leur gouvernance et leur performance à l'ère du numérique.",
  },
  {
    title: "Comment débute un partenariat avec votre cabinet ? ",
    answer:
      "Tout commence par un diagnostic stratégique. Nous analysons vos défis et vos modèles actuels pour définir ensemble une feuille de route claire et sur mesure.",
  },
  {
    title: "Proposez-vous des solutions pour la transformation digitale ? ",
    answer:
      "Oui. Nous gérons la transformation digitale de A à Z, incluant l'intégration de systèmes (ERP/Data), l'optimisation des processus et la formation des équipes.",
  },
  {
    title:
      "Vos services incluent-ils la gestion des risques ? ",
    answer:
      "Absolument. Nous aidons à établir une gouvernance solide et proposons des services de management des risques et conformité pour sécuriser votre activité.",
  },
];

const FaqDigital = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  return (
    <div className={cn("section-border-top", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <div className={cn("stage-small", styles.stage)}>
            apprenez comment commencer
          </div>
          <h2 className={cn("h3", styles.title)}>
            Questions Fréquemment Posées
          </h2>
          <div className={styles.info}>
            Vous avez une question ou besoin d’assistance ? Consultez notre FAQ
            ou contactez notre équipe de support pour obtenir des réponses
            rapides et fiables.
            <a href="/contact">Contacter le support</a>
          </div>
        </div>
        <div className={styles.list}>
          {items.map((x, index) => (
            <Item
              item={x}
              key={index}
              isOpen={activeItemIndex === index}
              onToggle={() =>
                setActiveItemIndex((prev) => (prev === index ? null : index))
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqDigital;
