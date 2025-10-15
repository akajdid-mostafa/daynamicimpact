import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./About.module.sass";
// import Icon from "../../../components/Icon";
import ScrollParallax from "../../../components/ScrollParallax";

// const items = [
//   {
//     title: "Notre Mission",
//     content:
//       "Accélérer la transformation digitale des entreprises grâce à des stratégies sur-mesure et des livrables orientés résultat  pas de beaux rapports laissés de côté, mais des systèmes adoptés par les équipes et qui produisent des KPI mesurables.",
//   },
//   {
//     title: "Notre Approche",
//     content:
//       "Combinaison d'expertise technique, de créativité et d'accompagnement personnalisé pour votre succès.",
//   },
//   {
//     title: "Nos Valeurs",
//     content:
//       "Transparence, innovation, et engagement total envers la réussite de vos projets digitaux.",
//   },
// ];

const item2 = [
  {
    title: "Notre Mission",
    color: "#45B26B",
    images: "/images/icon/mission.svg",
    alt: "branding",
    content:
      "Transformer la complexité en clarté pour que vos ambitions deviennent des résultats concrets. Nous vous accompagnons dans votre transformation stratégique pour un impact mesurable.",
  },
  {
    title: "Notre Vision",
    color: "#9757D7",
    images: "/images/icon/vision.svg",
    alt: "marketing",
    content:
      "Créer des modèles où la gouvernance, la technologie et les données se combinent pour servir vos ambitions. Chaque solution est un levier de croissance durable pour votre entreprise.",
  },
  {
    title: "Nos Valeurs",
    color: "#3772FF",
    images: "/images/icon/valeur.svg",
    alt: "code",
    content:
      "Transparence, innovation et engagement total envers la réussite de chaque projet. Votre succès est notre boussole. Nous construisons avec vous un partenariat de confiance.",
  },
];

const About = () => {
  return (
    <div className={cn("section-border-top", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={cn("stage", styles.stage)}>À PROPOS DE NOUS</div>
          </div>
          <div className={styles.col}>
            <h2 className={cn("h2", styles.title)}>
              Une Stratégie Ciblée, un Succès Garanti
            </h2>
            <div className={styles.info}>
              Dynamic Impact est une agence de marketing et de conseil
              stratégique et opérationnel basée à Casablanca. Nous aidons les
              entreprises à se transformer en alliant gouvernance, technologie
              et données pour créer des modèles performants et durables.
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.list}>
              {item2.map((x, index) => (
                <div className={styles.item} key={index}>
                  <div
                    className={styles.icon}
                    // style={{ backgroundColor: x.color }}
                  >
                    <img src={x.images} alt={x.alt} />
                  </div>
                  <div className={styles.details}>
                    <div className={styles.subtitle}>{x.title}</div>
                    <div className={styles.content}>{x.content}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link className={cn("button", styles.button)} to="/about">
              Découvrez Notre Méthode →
            </Link>
          </div>
          <div className={styles.col}>
            <div className={styles.bg}>
              <img
                srcSet="/images/content/about-pic.svg 2x"
                src="/images/content/about-pic.svg"
                alt="À propos de notre équipe"
              />
              <ScrollParallax className={styles.preview} animateIn="fadeInUp">
                <img
                  srcSet="/images/content/plate.svg 2x"
                  src="/images/content/plate.svg"
                  alt="Notre plateforme"
                />
              </ScrollParallax>
              {/* <button className={cn("play", styles.play)}>
                <Icon name="play" size="21" />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
