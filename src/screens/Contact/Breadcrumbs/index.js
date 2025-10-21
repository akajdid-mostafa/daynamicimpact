import React from "react";
import cn from "classnames";
import styles from "./Breadcrumbs.module.sass";



const Breadcrumbs = () => {
  return (
    <div className={styles.breadcrumbs}>
      <div className={cn("container", styles.container)}>
        <div 
          className={styles.wrap}
          style={{
            backgroundImage: "url('/images/content/contact-hero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <h2 className={cn("h3", styles.title)}>Restons en contact</h2>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
