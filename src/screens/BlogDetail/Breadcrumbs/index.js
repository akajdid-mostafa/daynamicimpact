import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Breadcrumbs.module.sass";

const Breadcrumbs = ({ blogData, loading }) => {

  const items = [
    {
      url: "/",
      text: "Accueil",
    },
    {
      url: "/blog",
      text: "Blog",
    },
    {
      text: loading ? "Chargement..." : (blogData?.title || "Article"),
    }
  ];

  const mainImage = blogData?.main_image || null;

  return (
    <>
    <div className={cn("container", styles.container)}>
    
    <div 
      className={styles.breadcrumbs}
      style={mainImage ? {
        backgroundImage: `url(${mainImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      } : {}
    }>
      <div className={styles.overlay}></div>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <h2 className={cn("h2", styles.title)}>
            {loading ? "Chargement de l'article..." : (blogData?.title || "Découvrez nos insights digitaux")}
          </h2>
          {/* <div className={styles.info}>
            {loading ? "Veuillez patienter..." : (blogData?.description || "Explorez nos articles sur la communication web et les solutions digitales innovantes")}
          </div> */}
          <div className={styles.list}>
            {items.map((x,index) => (
              <div className={styles.item} key={index}>
                {x.url ? (
                  <Link
                    className={styles.link}
                    to={x.url}
                  >
                    {x.text}
                  </Link>
                ) : (
                  <>
                    {x.text}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Breadcrumbs;
