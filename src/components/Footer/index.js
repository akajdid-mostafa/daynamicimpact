import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Subscription from "../Subscription";
import Theme from "../Theme";
import Icon from "../Icon";
import Image from "../Image";

const menu = [
  {
    title: "Accueil",
    url: "/",
  },
  {
    title: "Nos Solutions",
    url: "/Nos-Solutions",
  },
  {
    title: "Notre Impact",
    url: "/about",
  },
  {
    title: "Ressources",
    url: "/blog",
  },
  // {
  //     title: "Download",
  //     url: "/download",
  // },
];

const socials = [
  {
    title: "facebook",
    size: "16",
    url: "https://www.facebook.com",
  },
  {
    title: "x",
    size: "18",
    url: "https://x.com",
  },
  {
    title: "instagram",
    size: "16",
    url: "https://www.instagram.com",
  },
  {
    title: "linkedin",
    size: "16",
    url: "https://www.linkedin.com",
  },
  // {
  //   title: "dribbble",
  //   size: "16",
  //   url: "https://dribbble.com",
  // },
  // {
  //   title: "behance",
  //   size: "20",
  //   url: "https://www.behance.net",
  // },
];

const Footer = () => {
  const [visible, setVisible] = useState(false);

  const { pathname } = useLocation();

  return (
    <footer className={styles.footer}>
      <div className={styles.body}>
        <div className={cn("container", styles.container)}>
          <div className={styles.col}>
            <div className={styles.box}>
              <Link className={styles.logo} to="/">
                <Image
                  className={styles.pic}
                  src="/images/logo-dark-footer.svg"
                  srcDark="/images/Logo-white-footer.svg"
                  alt="Fitness Pro"
                />
              </Link>
              <Theme className={styles.theme} />
            </div>
            <div
              className={cn(styles.item, {
                [styles.active]: visible,
              })}
            >
              <div
                className={styles.category}
                onClick={() => setVisible(!visible)}
              >
                footer nav
                <Icon name="arrow-bottom" size="9" />
              </div>
              <div className={styles.menu}>
                {menu.map((x, index) => (
                  <NavLink
                    className={cn(styles.link, {
                      [styles.active]: pathname === x.url,
                    })}
                    to={x.url}
                    key={index}
                  >
                    {x.title}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.category}>contact</div>
            <div className={styles.info}>
              <p>Imm Corner Office, lotissement Florida lot N°5, 5ème Étage N°47, Casablanca, Morocco</p>
              {/* <p>Zackerychester</p> */}
              {/* <p>Bahamas</p> */}
              <p>+212 539-33-29-02</p>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.category}>lettre d&apos;information</div>
            <div className={styles.info}>
              Abonnez-vous à notre newsletter pour obtenir davantage de cours et
              de ressources gratuits sur le design.
            </div>
            <Subscription
              className={styles.subscription}
              placeholder="Entrez votre adresse e-mail"
            />
          </div>
        </div>
      </div>
      <div className={styles.foot}>
        <div className={cn("container", styles.container)}>
          <div className={styles.copyright}>
          Copyright © 2025.Dynamic Impact Tous droits réservés.
          </div>
          <div className={styles.socials}>
            {socials.map((x, index) => (
              <a
                className={styles.social}
                href={x.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <Icon name={x.title} size={x.size} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
