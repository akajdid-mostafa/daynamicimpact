import React from "react";
import cn from "classnames";
import styles from "./about.module.sass";
// import { Link } from "react-router-dom";
// import Image from "../../components/Image";
import Story from "../../components/Story";
import Hero from "../../components/Hero";
import ValueProps from "../../components/ValueProps";
// import Offer from "../../components/Offer";
import Advantages from "../../components/Advantages";
import Faq from "../../components/Faq";

const AboutPage = () => {
  return (
    <>
      <Hero
        stage="ON VOIT LA TRANSFORMATION AUTREMENT"
        title="Une stratégie pensée pour servir "
        titleHighlight="votre croissance"
        titleSuffix=" "
        description="Chez Dynamic Impact, la transformation n'est pas un projet isolé, c'est un levier de croissance. Nous concevons des systèmes clairs, efficaces et adaptés : plus de gouvernance, moins de risques, des équipes qui excellent. Envie de comprendre comment ? La suite vous montre notre vision, notre méthode et les résultats concrets obtenus sur le terrain."
        primaryButton={{
          text: "Notre stratégie",
          to: "/contact",
        }}
        gallery={[
          {
            srcSet: "/images/content/impact.webp 2x",
            srcSetDark: "/images/content/impact.webp 2x",
            src: "/images/content/impact.webp",
            srcDark: "/images/content/impact.webp",
            alt: "Équipe Dynamic Impact travaillant sur des projets de marketing digital et transformation digitale",
            isImage: false,
          },
          {
            srcSet: "/images/content/Hero/book1.webp 2x",
            src: "/images/content/Hero/book1.webp",
            alt: "Solutions marketing digital et publicité performante - Dynamic Impact accompagne votre croissance",
            isImage: true,
          },
          {
            srcSet: "/images/content/Hero/book2.webp 2x",
            src: "/images/content/Hero/book2.webp",
            alt: "Stratégie digitale et impact marketing - Dynamic Impact optimise votre présence en ligne",
            isImage: true,
          },
        ]}
      />
      <Story />
      <ValueProps 
        className="section"
        // stage="UN PARTENARIAT DURABLE REPOSE SUR DES VALEURS SIMPLES ET CONCRÈTES"
        title="Nos principes, Un cadre simple et efficace"
        items={[
          {
            title: "Impact durable",
            content: "Nous guidons chaque décision vers des résultats concrets, plutôt que de vagues promesses. L'objectif est de construire une performance qui s'inscrit dans le temps, créant ainsi une vraie valeur pour votre activité et votre image de marque.",
            icon: "/images/icon/mission.svg",
          },
          {
            title: "Vision globale",
            content: "Nous relions stratégie, gouvernance et digital dans une approche cohérente pour éviter les solutions fragmentées. Cette vision d'ensemble permet de fluidifier vos opérations et d'aligner tous les acteurs vers un même objectif.",
            icon: "/images/icon/vision.svg",
          },
          {
            title: "Autonomie forte",
            content: "Nous transmettons les savoirs et les méthodes nécessaires pour rendre vos équipes indépendantes. Notre rôle n'est pas seulement de livrer, mais de vous permettre de garder la maîtrise et d'évoluer en toute confiance.",
            icon: "/images/icon/valeurs.svg",
          },
        ]}
      />
      <Advantages />
      <Faq />
      {/* <Offer className="section" /> */}
      <div >
        <div className={cn("container", styles.container)}>
          

          {/* Hero Image Section */}
          {/* <div className={styles.heroImage}>
            <Image
              srcSet="/images/content/about-pic.svg 2x"
              srcSetDark="/images/content/about-pic.svg 2x"
              src="/images/content/about-pic.svg"
              srcDark="/images/content/about-pic.svg"
              alt="Photo de l'équipe Dynamic Impact - Experts en marketing digital et transformation digitale"
              className={styles.mainImage}
            />
          </div> */}

          <div className={styles.content}>
            {/* Notre Vision Section */}
            {/* <section className={styles.block}>
              <h2 className={cn("h2", styles.subtitle)}>Notre vision</h2>
              <div className={styles.visionContent}>
                <div className={styles.visionText}>
                  <p className={styles.text}>
                    Le digital n’est pas une fin en soi. Chez Dynamic Impact, le
                    digital devient un levier puissant uniquement lorsqu’il
                    s’insère dans un écosystème maîtrisé : outils, process,
                    équipes et KPIs alignés. Notre mission est de transformer la
                    présence digitale des entreprises en croissance mesurable,
                    fidélisation et performance opérationnelle.
                  </p>
                </div>
                <div className={styles.visionImage}>
                  <Image
                    srcSet="/images/content/advanced.svg 2x"
                    srcSetDark="/images/content/advanced.svg 2x"
                    src="/images/content/advanced.svg"
                    srcDark="/images/content/advanced.svg"
                    alt="Illustration de transformation digitale et solutions marketing avancées par Dynamic Impact"
                    className={styles.sideImage}
                  />
                </div>
              </div>
            </section> */}

            {/* Mission & Promesse Section */}
            {/* <section className={styles.block}>
              <h2 className={cn("h2", styles.subtitle)}>Mission & Promesse</h2>
              <div className={styles.promises}>
                <div className={styles.promise}>
                  <div className={styles.promiseIcon}>
                    <Image
                      srcSet="/images/content/service1.svg 2x"
                      srcSetDark="/images/content/service1.svg 2x"
                      src="/images/content/service1.svg"
                      srcDark="/images/content/service1.svg"
                      alt="Icône représentant la mission Dynamic Impact en marketing digital et impact"
                      className={styles.icon}
                    />
                  </div>
                  <h3 className={styles.promiseTitle}>Mission</h3>
                  <p className={styles.text}>
                    Fournir des solutions complètes (site, intégration ERP/CRM,
                    contenu, formation) et accompagner l’entreprise cliente à
                    chaque étape pour assurer une adoption réelle et un impact
                    mesurable.
                  </p>
                </div>
                <div className={styles.promise}>
                  <div className={styles.promiseIcon}>
                    <Image
                      srcSet="/images/content/goldlines.svg 2x"
                      srcSetDark="/images/content/goldlines.svg 2x"
                      src="/images/content/goldlines.svg"
                      srcDark="/images/content/goldlines.svg"
                      alt="Icône illustrant la promesse Dynamic Impact en digital marketing et advertising"
                      className={styles.icon}
                    />
                  </div>
                  <h3 className={styles.promiseTitle}>Promesse</h3>
                  <p className={styles.text}>
                    « Pas seulement digital — impact réel. » Nous livrons des
                    systèmes, pas des vitrines.
                  </p>
                </div>
              </div>
            </section> */}

            {/* Nos Valeurs Section */}
            {/* <section className={styles.block}>
              <h2 className={cn("h2", styles.subtitle)}>Nos valeurs</h2>
              <div className={styles.valuesContainer}>
                <ul className={styles.valuesList}>
                  <li className={styles.valueItem}>
                    Orientation résultat — décisions guidées par les KPI et le
                    ROI
                  </li>
                  <li className={styles.valueItem}>
                    Approche systémique — pensée produit/process/équipe plutôt
                    que canal isolé
                  </li>
                  <li className={styles.valueItem}>
                    Transfert de compétences — former et rendre autonome les
                    équipes clients
                  </li>
                  <li className={styles.valueItem}>
                    Qualité & transparence — livrables documentés, reporting
                    clair
                  </li>
                  <li className={styles.valueItem}>
                    Engagement opérationnel — présence sur le terrain pour les
                    phases critiques
                  </li>
                </ul>
                <div className={styles.valuesImage}>
                  <Image
                    srcSet="/images/content/all-service.svg 2x"
                    srcSetDark="/images/content/all-service.svg 2x"
                    src="/images/content/all-service.svg"
                    srcDark="/images/content/all-service.svg"
                    alt="Illustration des services complets Dynamic Impact en marketing digital et transformation"
                    className={styles.sideImage}
                  />
                </div>
              </div>
            </section> */}

            {/* Ce qui nous différencie Section */}
            {/* <section className={styles.block}>
              <h2 className={cn("h2", styles.subtitle)}>
                Ce qui nous différencie
              </h2>
              <div className={styles.differences}>
                <div className={styles.differenceItem}>
                  <h3 className={styles.differenceTitle}>
                    Écosystème vs. prestation isolée
                  </h3>
                  <p className={styles.text}>
                    Nous construisons des systèmes complets plutôt que des
                    solutions ponctuelles.
                  </p>
                </div>
                <div className={styles.differenceItem}>
                  <h3 className={styles.differenceTitle}>
                    Formation & SOP intégrées
                  </h3>
                  <p className={styles.text}>
                    L'adoption par les équipes est au cœur de notre approche.
                  </p>
                </div>
                <div className={styles.differenceItem}>
                  <h3 className={styles.differenceTitle}>
                    Accompagnement continu (retainer)
                  </h3>
                  <p className={styles.text}>
                    Nous restons vos partenaires à long terme pour
                    l'optimisation continue.
                  </p>
                </div>
                <div className={styles.differenceItem}>
                  <h3 className={styles.differenceTitle}>Focus secteurs</h3>
                  <p className={styles.text}>
                    Expertise approfondie dans l'immobilier, la restauration, la
                    mobilité et l'e-commerce.
                  </p>
                </div>
              </div>
            </section> */}

            {/* L'équipe Section */}
            {/* <section className={styles.block}>
              <h2 className={cn("h2", styles.subtitle)}>L’équipe</h2>
              <div className={styles.teamIntro}>
                <p className={styles.text}>
                  Notre équipe pluridisciplinaire combine expertise technique,
                  créativité et vision stratégique pour transformer votre
                  présence digitale en résultats concrets.
                </p>
              </div>
              <div className={styles.teamGrid}>
                <div className={styles.teamMember}>
                  <div className={styles.memberImage}>
                    <Image
                      srcSet="/images/content/trainer-pic.png 2x"
                      srcSetDark="/images/content/trainer-pic.png 2x"
                      src="/images/content/trainer-pic.png"
                      srcDark="/images/content/trainer-pic.png"
                      alt="Photo d'Anass IDRISSI, expert en marketing digital et transformation digitale chez Dynamic Impact"
                      className={styles.avatar}
                    />
                  </div>
                  <h3 className={styles.memberName}>Anass IDRISSI</h3>
                  <p className={styles.memberRole}>
                    Directeur Technique & Fondateur
                  </p>
                  <p className={styles.memberDesc}>
                    Expert en marketing digital et intégrations techniques.
                  </p>
                </div>
                <div className={styles.teamMember}>
                  <div className={styles.memberImage}>
                    <Image
                      srcSet="/images/content/avatar-1.png 2x"
                      srcSetDark="/images/content/avatar-1.png 2x"
                      src="/images/content/avatar-1.png"
                      srcDark="/images/content/avatar-1.png"
                      alt="Photos des membres de l'équipe Dynamic Impact, experts en marketing digital et advertising"
                      className={styles.avatar}
                    />
                  </div>
                  <h3 className={styles.memberName}>[Nom]</h3>
                  <p className={styles.memberRole}>Responsable Stratégie</p>
                  <p className={styles.memberDesc}>
                    Audit & blueprint écosystème.
                  </p>
                </div>
                <div className={styles.teamMember}>
                  <div className={styles.memberImage}>
                    <Image
                      srcSet="/images/content/avatar-2.png 2x"
                      srcSetDark="/images/content/avatar-2.png 2x"
                      src="/images/content/avatar-2.png"
                      srcDark="/images/content/avatar-2.png"
                      alt="Photos des membres de l'équipe Dynamic Impact, experts en marketing digital et advertising"
                      className={styles.avatar}
                    />
                  </div>
                  <h3 className={styles.memberName}>[Nom]</h3>
                  <p className={styles.memberRole}>Lead Création</p>
                  <p className={styles.memberDesc}>
                    Infographiste & photographe.
                  </p>
                </div>
                <div className={styles.teamMember}>
                  <div className={styles.memberImage}>
                    <Image
                      srcSet="/images/content/avatar-3.png 2x"
                      srcSetDark="/images/content/avatar-3.png 2x"
                      src="/images/content/avatar-3.png"
                      srcDark="/images/content/avatar-3.png"
                      alt="Photos des membres de l'équipe Dynamic Impact, experts en marketing digital et advertising"
                      className={styles.avatar}
                    />
                  </div>
                  <h3 className={styles.memberName}>[Nom]</h3>
                  <p className={styles.memberRole}>Lead Dev</p>
                  <p className={styles.memberDesc}>
                    Développeur senior full-stack.
                  </p>
                </div>
              </div>
            </section> */}

            {/* Notre méthode Section */}
            {/* <section className={styles.block}>
              <h2 className={cn("h2", styles.subtitle)}>
                Notre méthode en bref
              </h2>
              <div className={styles.method}>
                <div className={styles.step}>
                  <div className={styles.stepIcon}>
                    <div className={styles.stepNumber}>1</div>
                  </div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>Atelier découverte</h3>
                    <p className={styles.text}>
                      Compréhension approfondie de vos enjeux et objectifs.
                    </p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepIcon}>
                    <div className={styles.stepNumber}>2</div>
                  </div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>Blueprint</h3>
                    <p className={styles.text}>
                      Conception de l'architecture de votre écosystème digital.
                    </p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepIcon}>
                    <div className={styles.stepNumber}>3</div>
                  </div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>Implémentation</h3>
                    <p className={styles.text}>
                      Déploiement des solutions et intégrations techniques.
                    </p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepIcon}>
                    <div className={styles.stepNumber}>4</div>
                  </div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>Formation</h3>
                    <p className={styles.text}>
                      Transfert de compétences à vos équipes.
                    </p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepIcon}>
                    <div className={styles.stepNumber}>5</div>
                  </div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>Optimisation</h3>
                    <p className={styles.text}>
                      Suivi, analyse et amélioration continue.
                    </p>
                  </div>
                </div>
              </div>
            </section> */}

            {/* Chiffres Section */}
            {/* <section className={styles.block}>
              <h2 className={cn("h2", styles.subtitle)}>
                Chiffres & indicateurs
              </h2>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>+40%</div>
                  <div className={styles.statDesc}>
                    réservations directes — cas location de voitures
                  </div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>-25%</div>
                  <div className={styles.statDesc}>
                    de no-show — cas restaurant
                  </div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>85%</div>
                  <div className={styles.statDesc}>
                    taux d’adoption moyen après 2 mois de formation
                  </div>
                </div>
              </div>
            </section> */}

            {/* CTA Section */}
            {/* <section className={styles.block}>
              <div className={styles.ctaSection}>
                <h2 className={cn("h2", styles.ctaTitle)}>
                  Prêt à transformer votre présence digitale en système rentable
                  ?
                </h2>
                <div className={styles.buttons}>
                  <Link
                    to="/contact"
                    className={cn("button", styles.primaryBtn)}
                  >
                    Demander un audit écosystème
                  </Link>
                  <Link
                    to="/casestudies"
                    className={cn("button-stroke", styles.secondaryBtn)}
                  >
                    Voir nos études de cas
                  </Link>
                </div>
              </div>
            </section> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
