import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import Slider from "react-slick";
import styles from "./History.module.sass";

const items = [
  {
    url: "/article",
    title: "Comment une startup a triplé son trafic en 3 mois",
    content:
      "Grâce à notre stratégie SEO et campagnes social media, cette jeune marque a multiplié sa visibilité et ses conversions.",
    image: "url('/images/content/history-pic.png')",
    status: "pink",
    statusContent: "étude",
  },
  {
    url: "/article",
    title: "Lancement réussi d’une marque e-commerce",
    content:
      "De l’identité visuelle à la publicité en ligne, nous avons accompagné chaque étape pour un lancement impactant.",
    image: "url('/images/content/history-pic.png')",
    status: "green",
    statusContent: "branding",
  },
  {
    url: "/article",
    title: "Transformation digitale d’une PME locale",
    content:
      "Mise en place d’un site moderne, automatisation marketing et accompagnement stratégique sur mesure.",
    image: "url('/images/content/history-pic.png')",
    status: "pink",
    statusContent: "digital",
  },
  {
    url: "/article",
    title: "Croissance rapide grâce aux campagnes Meta Ads",
    content:
      "En optimisant les campagnes, nous avons généré +220% de ROI en moins de 6 semaines pour ce client.",
    image: "url('/images/content/history-pic.png')",
    status: "green",
    statusContent: "ads",
  },
];

const History = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <h4 className={cn("hero", styles.title)}>Histoires de Réussite</h4>
        <div className={styles.info}>
          Découvrez comment nos clients ont transformé leur présence digitale
          et atteint de nouveaux sommets grâce à nos solutions sur mesure.
        </div>
        <div className={styles.history}>
          <div className={styles.wrap}>
            <Slider className="history-slider" {...settings}>
              {items.map((x, index) => (
                <div className={styles.slide} key={index}>
                  <div className={cn("history-item", styles.item)}>
                    <div
                      className={styles.preview}
                      style={{ backgroundImage: x.image }}
                    ></div>
                    <div className={styles.details}>
                      <div
                        className={cn(
                          { "status-pink": x.status === "pink" },
                          { "status-green": x.status === "green" },
                          styles.status
                        )}
                      >
                        {x.statusContent}
                      </div>
                      <div className={styles.title}>{x.title}</div>
                      <div className={styles.content}>{x.content}</div>
                      <Link
                        to={x.url}
                        className={cn("button-small", styles.button)}
                      >
                        Lire l’étude complète
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
