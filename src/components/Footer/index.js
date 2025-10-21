import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Subscription from "../Subscription";
import Theme from "../Theme";
import Icon from "../Icon";
import Image from "../Image";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

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
  }
];

const socials = [
  
  {
    title: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/company/dynamic-impact-advisory/?viewAsMember=true",
  },
  {
    title: "X (Twitter)",
    icon: FaSquareXTwitter,
    url: "https://x.com/",
  },
  {
    title: "Facebook",
    icon: FaFacebookSquare,
    url: "https://www.facebook.com/profile.php?id=61580942150486",
  },
  {
    title: "Instagram",
    icon: FaInstagramSquare,
    url: "https://www.instagram.com/dynamic.impact.agency/",
  },
  
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
                  src="/images/logo-dynamicimpact.webp"
                  srcDark="/images/logo-dynamicimpact-black.webp"
                  alt="Dynamic Impact"
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
              
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <p>
                  <a href="mailto:contact@dynamicimpact.ma" className={styles.emailLink}>
                    contact@dynamicimpact.ma
                  </a>
                </p>
              </div>
              <div className={styles.contactItem}>
                <FaPhone className={styles.contactIcon} />
                <p>
                  <a href="tel:+212660434143" className={styles.phoneLink}>
                    0660434143
                  </a>
                </p>
              </div>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <p>
                  <a 
                    href="https://maps.app.goo.gl/VyAELKEnQyZBrGrf7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.mapLink}
                  >
                    Imm Corner Office, lotissement Florida lot N°5, 5ème Étage,Bureau N°38,
                    Casablanca, Morocco
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.category}>lettre d&apos;information</div>
            <div className={styles.info}>
              Abonnez-vous pour recevoir nos conseils stratégiques et insights sur la transformation digitale.
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
            Copyright © 2025.Dynamic Impact Advertising Tous droits réservés.
          </div>
          <div className={styles.socials}>
            {socials.map((x, index) => {
              const IconComponent = x.icon;
              return (
                <a
                  className={styles.social}
                  href={x.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  title={x.title}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
