import React from "react";
import styles from "./socials.module.css";
import cn from "classnames";
import mock from "../../constants/mock";

export default function Socials({
  className,
  social_links = mock.social_links,
}) {
  return (
    <div className={cn(styles.socials, className)}>
      {social_links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.social}
        >
          {link.icon_stroke}
        </a>
      ))}
    </div>
  );
}
