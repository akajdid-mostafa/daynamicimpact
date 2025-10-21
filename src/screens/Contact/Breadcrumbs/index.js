import React from "react";
import cn from "classnames";
import styles from "./Breadcrumbs.module.sass";



const Breadcrumbs = () => {
  return (
    // <div className={cn("section")}>
    <div className={styles.breadcrumbs}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <img 
            src="/images/content/contact-hero.webp" 
            alt="Contact Dynamic Impact - Agence marketing digital et transformation" 
            className={styles.heroImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
