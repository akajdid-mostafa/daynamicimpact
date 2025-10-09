import React, { useState } from "react";
import cn from "classnames";
import styles from "./Faq.module.sass";
import Item from "./Item";
import Dropdown from "../../../components/Dropdown";

const items = [
  {
    title: "Général",
    items: [
      {
        title: "Quels services propose votre agence de communication digitale ?",
        answer:
          "Notre agence de communication digitale accompagne les marques et entreprises dans leur présence en ligne : création de sites web modernes, gestion des réseaux sociaux, publicité digitale, référencement SEO/SEA, branding et production de contenus créatifs."
      },
      {
        title: "Travaillez-vous uniquement avec des entreprises locales ou aussi à l’international ?",
        answer:
          "Nous travaillons avec des clients aussi bien au niveau local qu’international. Peu importe votre localisation, nous pouvons collaborer à distance efficacement."
      },
      {
        title: "Puis-je demander un devis personnalisé pour mon projet ?",
        answer:
          "Bien sûr ! Chaque projet est unique. Contactez-nous et nous préparerons un devis clair et détaillé adapté à vos besoins et à votre budget."
      },
      {
        title: "Combien de temps faut-il pour lancer une campagne digitale ?",
        answer:
          "Le délai dépend de la complexité du projet. Généralement, une campagne peut être prête en quelques jours seulement. Nous vous guidons à chaque étape pour garantir un lancement rapide et efficace."
      },
    ],
  },
  {
    title: "Marketing Digital",
    items: [
      {
        title: "Proposez-vous la gestion des réseaux sociaux ?",
        answer:
          "Oui, nous créons du contenu attractif, planifions vos publications et interagissons avec votre communauté pour renforcer votre image de marque et accroître votre visibilité."
      },
      {
        title: "Pouvez-vous créer et gérer des campagnes publicitaires (Facebook, Google, Instagram) ?",
        answer:
          "Absolument ! Nous concevons des campagnes ciblées et optimisées pour générer des résultats concrets : plus de trafic, de prospects et de ventes."
      },
      {
        title: "Faites-vous du référencement SEO/SEA ?",
        answer:
          "Oui. Nous optimisons votre site web pour un meilleur classement naturel (SEO) et proposons aussi des campagnes sponsorisées (SEA) pour attirer immédiatement de nouveaux clients."
      },
      {
        title: "Accompagnez-vous les marques pour la stratégie digitale ?",
        answer:
          "Tout à fait. Nous analysons votre marché et construisons une stratégie digitale sur mesure afin de maximiser vos résultats et atteindre vos objectifs."
      },
    ],
  },
  {
    title: "Design & Développement",
    items: [
      {
        title: "Créez-vous des sites web vitrines et e-commerce ?",
        answer:
          "Oui, nous développons des sites vitrines modernes et des boutiques en ligne performantes, optimisées pour l’expérience utilisateur et le référencement Google."
      },
      {
        title: "Proposez-vous la création de contenu visuel (logos, vidéos, photos) ?",
        answer:
          "Nous créons des identités visuelles uniques : logos, visuels de réseaux sociaux, vidéos promotionnelles et photographies professionnelles pour mettre en valeur votre marque."
      },
      {
        title: "Est-ce que vous développez des applications mobiles ?",
        answer:
          "Oui, nous proposons le développement d’applications mobiles sur mesure (iOS & Android) pour accompagner vos projets digitaux les plus ambitieux."
      },
      {
        title: "Offrez-vous des services de maintenance après livraison du site ?",
        answer:
          "Bien entendu ! Nous assurons la maintenance, les mises à jour de sécurité et l’amélioration continue de votre site web."
      },
    ],
  },
  {
    title: "Collaboration",
    items: [
      {
        title: "Comment se déroule la collaboration avec votre équipe ?",
        answer:
          "Nous travaillons en toute transparence. Après un premier échange, nous définissons ensemble vos besoins, proposons une stratégie claire, et vous tenons informé à chaque étape du projet."
      },
      {
        title: "Proposez-vous des formations pour la gestion de réseaux sociaux ?",
        answer:
          "Oui, nous formons vos équipes pour qu’elles puissent gérer efficacement vos comptes et créer du contenu engageant."
      },
      {
        title: "Est-il possible de travailler à distance avec votre agence ?",
        answer:
          "Absolument ! Nos outils digitaux nous permettent de collaborer avec des clients partout dans le monde."
      },
      {
        title: "Comment puis-je contacter votre support ?",
        answer:
          "Vous pouvez nous contacter directement via notre formulaire en ligne, par email ou par téléphone. Nous sommes disponibles et réactifs pour répondre à toutes vos questions."
      },
    ],
  },
];

const FaqDigital = () => {
  const options = [];
  items.map((x) => options.push(x.title));

  const [category, setCategory] = useState(options[0]);
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  return (
    <div className={cn("section-border-top", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <div className={cn("stage-small", styles.stage)}>
            apprenez comment commencer
          </div>
          <h2 className={cn("h2", styles.title)}>Questions Fréquemment Posées</h2>
          <div className={styles.info}>
            Rejoignez notre communauté d'experts en communication digitale dès maintenant pour recevoir des mises à jour gratuites et accéder à de nombreuses ressources. <a href="/#">Contactez le support</a>
          </div>
          <div className={styles.nav}>
            {items.map((x, index) => (
              <button
                className={cn(styles.btn, {
                  [styles.active]: x.title === category,
                })}
                onClick={() => {
                  setCategory(x.title);
                  setActiveItemIndex(0);
                }}
                key={index}
              >
                {x.title}
              </button>
            ))}
          </div>
          <Dropdown
            className={styles.dropdown}
            value={category}
            setValue={(val) => {
              setCategory(val);
              setActiveItemIndex(0);
            }}
            options={options}
          />
        </div>
        <div className={styles.list}>
          {items
            .find((x) => x.title === category)
            .items.map((x, index) => (
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