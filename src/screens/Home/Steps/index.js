import React from "react";
import cn from "classnames";
import styles from "./Steps.module.sass";
import Slider from "react-slick";
import ScrollParallax from "../../../components/ScrollParallax";
// import Icon from "../../../components/Icon";

const items = [
  {
    title: "Diagnostic ",
    // color: "#3772FF",
    images: "/images/icon/step1.svg",
    content:
      "Nous identifions vos défis, auditons votre gouvernance et vos processus, puis ciblons les opportunités de croissance.",
  },
  {
    title: "Planification",
    // color: "#9757D7",
    images: "/images/icon/step2.svg",
    content:
      "Nous concevons une stratégie sur mesure, élaborons des plans d'action détaillés, et définissons des indicateurs de succès concrets.",
  },
  {
    title: "Mise en œuvre ",
    // color: "#EF466F",
    images: "/images/icon/step3.svg",
    content:
      "Nous déployons les solutions, gérons votre projet de manière agile, et assurons une optimisation constante de vos opérations.",
  },
  {
    title: "Accompagnement",
    // color: "#45B26B",
    images: "/images/icon/step4.svg",
    content:
      "Nous formons vos équipes, transférons nos compétences, et mesurons les résultats pour un succès durable et mesurable.",
  },
];

// const SlickArrow = ({ children, ...props }) => (
//   <button {...props}>{children}</button>
// );

const Steps = ({ scrollToRef }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    // nextArrow: (
    //   <SlickArrow>
    //     <Icon name="arrow-next" size="14" />
    //   </SlickArrow>
    // ),
    // prevArrow: (
    //   <SlickArrow>
    //     <Icon name="arrow-prev" size="14" />
    //   </SlickArrow>
    // ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={cn("section", styles.section)} ref={scrollToRef}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h3", styles.title)}><span className={styles.underlined}>Notre méthode</span> </h2>
          <div className={styles.info}>
          Notre agence vous accompagne de l&apos;idée à la réalisation grâce à des solutions stratégiques et opérationnelles sur mesure.
          </div>
        </div>
        
        <div className={styles.wrap}>
          <Slider className="steps-slider" {...settings}>
            {items.map((x, index) => (
              <ScrollParallax className={styles.slide} key={index}>
                <div className={cn("steps-item", styles.item)}>
                  <div className={styles.preview}>
                    <img src={x.images} alt={`Step ${index}`} />
                  </div>
                  <div className={styles.number}>Etape {index + 1}</div>
                  <div className={styles.subtitle}>{x.title}</div>
                  <div className={styles.content}>{x.content}</div>
                </div>
              </ScrollParallax>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Steps;
