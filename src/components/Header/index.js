import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.sass";
import DropdownMenu from "./DropdownMenu";
// import Icon from "../Icon";
import Image from "../Image";
import {
  FaSquareFacebook,
  FaSquareXTwitter,
  FaSquareInstagram,
  FaLinkedin,
} from "react-icons/fa6";

const navLinks = [
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
    content: {
      menu: [
        {
          
        },
      ],
      links: [
        {
          
        },
      ],
    },
  },
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
    url: "_https://x.com/dynamicimpactma",
  },
  {
    title: "Facebook",
    icon: FaSquareFacebook,
    url: "https://www.facebook.com/profile.php?id=61580942150486",
  },
  {
    title: "Instagram",
    icon: FaSquareInstagram,
    url: "https://www.instagram.com/dynamic.impact.advertising/",
  },
];

const contact = [
  {
    title: "Localisation",
    content: "Imm Corner Office, lotissement Florida lot N°5, 5ème Étage N°38, Casablanca, Morocco",
  },
  {
    title: "Email",
    content: "contact@dynamicimpact.ma",
  },
  {
    title: "Téléphone",
    content: "0660434143",
  },
];

const Headers = () => {
  const [visibleNav, setVisibleNav] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [clickedLink, setClickedLink] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const shouldFix = window.scrollY > 80;
      if (shouldFix !== isFixed) {
        setIsFixed(shouldFix);
      }

      // Set scrolled state based on scroll position
      const scrolled = window.scrollY > 50;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };

    const handleResize = () => {
      const mobile = window.innerWidth <= 1160; // Mobile, medium, and large screen breakpoint
      setIsMobile(mobile);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    
    handleScroll();
    handleResize(); // Initial check
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isFixed, isScrolled]);

  // Function to handle link click
  const handleLinkClick = (title) => {
    setClickedLink(title);
    setVisibleNav(false);

    // Reset clicked state after a short delay
    setTimeout(() => {
      setClickedLink(null);
    }, 1000);
  };

  return (
    <header className={cn(styles.header, { [styles.fixed]: isFixed })}>
      <div className={cn("container", styles.container)}>
        <Link
          className={styles.logo}
          to="/"
          onClick={() => setVisibleNav(false)}
        >
          <Image
            className={styles.pic}
            src="/images/logo-dynamicimpact.webp"
            srcDark="/images/logo-dynamicimpact-black.webp"
            alt="Dynamic Impact"
          />
        </Link>
        <div className={cn(styles.wrap, { [styles.active]: visibleNav })}>
          <nav className={styles.nav}>
            {navLinks.map((x, index) =>
              x.content && !isMobile ? (
                <DropdownMenu
                  className={styles.group}
                  item={x}
                  key={index}
                  setValue={setVisibleNav}
                  isScrolled={isScrolled}
                  clickedLink={clickedLink}
                  onLinkClick={handleLinkClick}
                />
              ) : (
                <NavLink
                  className={cn(styles.link, {
                    [styles.active]:
                      x.title === "Nos Solutions"
                        ? pathname.startsWith(x.url)
                        : pathname === x.url,
                    [styles.scrolled]: isScrolled,
                    [styles.clicked]: clickedLink === x.title,
                  })}
                  to={x.url}
                  key={index}
                  onClick={() => handleLinkClick(x.title)}
                >
                  {x.title}
                </NavLink>
              )
            )}
            <Link
              className={cn("button button-small", styles.mobileButton)}
              to="/contact"
              onClick={() => setVisibleNav(false)}
            >
              Contactez-nous
            </Link>
          </nav>
          <div className={styles.details}>
            <div className={styles.contact}>
              {contact.map((x, index) => (
                <div className={styles.element} key={index}>
                  <div className={styles.category}>{x.title}</div>
                  <div className={styles.text}>{x.content}</div>
                </div>
              ))}
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
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
            {/* <Link
              className={cn("button button-small", styles.button)}
              to="/contact"
            >
              Contactez-nous
            </Link> */}
          </div>
        </div>
        <Link
          className={cn("button button-small", styles.button)}
          to="/contact"
        >
          Contactez-nous
        </Link>
        <button
          className={cn(styles.burger, {
            [styles.active]: visibleNav,
          })}
          onClick={() => setVisibleNav(!visibleNav)}
        ></button>
      </div>
    </header>
  );
};

export default Headers;