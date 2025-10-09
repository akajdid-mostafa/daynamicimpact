import React, { useState } from "react";
import cn from "classnames";
import styles from "./Faq.module.sass";
import Item from "./Item";

const items = [
  {
    title: "Quels services propose Dynamic Impact ?",
    answer:
      "Nous concevons et déployons des écosystèmes marketing & opérationnels : audit, stratégie, site web & e-commerce, intégration CRM/ERP, automatisations, production photo/vidéo, formation d’équipes et gestion marketing continue (retainer).",
  },
  {
    title:
      "Combien de temps faut-il pour voir des résultats ?",
    answer:
      "Les « quick wins » apparaissent souvent en 2–6 semaines (optimisation GMB, landing conversion, campagnes locales). Les résultats durables (SEO, adoption CRM, hausse du LTV) se mesurent sur 3–6 mois selon le périmètre.",
  },
  {
    title: "Qu’est-ce que contient l’audit initial ? Est-il payant ?",
    answer:
      "L’audit (phase Discovery) inclut workshop, collecte d’accès, diagnostic technique & opérationnel et roadmap 90 jours. Il est payant et permet d’obtenir un chiffrage ferme et une feuille de route priorisée.",
  },
  {
    title: "Combien de temps dure un contrat retainer ?",
    answer:
      "Nous recommandons un engagement minimum de 6 mois pour permettre l’adoption, l’optimisation et la mesure réelle des résultats. Les conditions sont négociables selon le scope.",
  },
  {
    title: "Pouvez-vous intégrer nos outils existants (POS, ERP, caisse) ?",
    answer:
      "Oui, nous nous connectons aux systèmes via API, webhooks ou outils d’automatisation (Make / Zapier). La complexité dépendra des accès et de la documentation des systèmes ; la phase de diagnostic permet d’évaluer précisément l’effort.",
  },
  {
    title:
      "Qui possède les livrables (photos, code, contenus) ?",
    answer:
      "Après paiement intégral, les livrables (images, vidéos, textes, code source) sont cédés au client selon les modalités du contrat. Certaines licences tierces (musique, plugins payants) restent gérées séparément.",
  },
  {
    title:
      "Comment mesurez-vous le succès d'un projet ?",
    answer:
      "Nous définissons 3 KPIs prioritaires au démarrage (ex : réservations directes, taux conversion, CAC) et suivons via GA4, CRM et dashboards partagés. Reporting mensuel et points d'optimisation réguliers.",
  },
  {
    title:
      "Quel est votre délai moyen pour une landing / MVP ?",
    answer:
      "Pour une landing optimisée + intégration basique CRM : 2–4 semaines selon validations client et fourniture des contenus.",
  },
  {
    title:
      "Offrez-vous une garantie de résultats ?",
    answer:
      "Nous garantissons la qualité de la livraison. Les résultats commerciaux dépendent aussi de facteurs externes ; nous préférons fixer des objectifs mesurables et des paliers de performance dans le contrat.",
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
          <h2 className={cn("h2", styles.title)}>
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
