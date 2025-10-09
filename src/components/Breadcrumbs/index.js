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
    text: "Contactez-nous",
  }
];

const Breadcrumbs = () => {
  return (
    <div className={styles.breadcrumbs}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <h2 className={cn("h3", styles.title)}>Restons en contact</h2>
          {/* <div className={styles.info}>Pour toute demande commerciale, technique ou pour planifier un audit d'écosystème gratuit, contactez-nous via le formulaire ci-dessous, par téléphone ou WhatsApp. Nous répondons sous 24 heures ouvrées.</div> */}
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
