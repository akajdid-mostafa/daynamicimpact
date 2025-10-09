import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Breadcrumbs.module.sass";

const items = [
  {
    url: "/",
    text: "Accueil",
  },
  {
    text: "Blog",
  }
];

const Breadcrumbs = () => {
  return (
    <div className={styles.breadcrumbs}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <h2 className={cn("h3", styles.title)}>Insights & Guides — Le blog de Dynamic Impact</h2>
          <div className={styles.info}>Explorez nos articles sur la communication web et les solutions digitales innovantes</div>
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
  );
};

export default Breadcrumbs;
