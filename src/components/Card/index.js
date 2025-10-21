import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Card.module.sass";
import Icon from "../Icon";
import ScrollParallax from "../ScrollParallax";

const Card = ({ className, item }) => {
  return (
    <ScrollParallax className={cn(styles.card, className)}>
      <Link className={styles.link} to={item.url}>
        <div className={styles.preview}>
          <img srcSet={`${item.image2x} 2x`} src={item.image} alt={`${item.title} - Dynamic Impact`} />
          <div
            className={styles.category}
          >
            {item.categoryText}
          </div>
          {item.play && (
            <button className={cn("play-small", styles.play)}>
              <Icon name="play" size="14" />
            </button>
          )}
        </div>
        <div className={styles.head}>
          <div className={styles.user}>
            {/* <div className={styles.avatar}>
              <img src={item.avatar} alt={`Photo de ${item.name} - Équipe Dynamic Impact`} />
            </div> */}
            <div className={styles.details}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.trainer}>{item.trainer}</div>
            </div>
          </div>
          <div className={styles.level}>
            {item.levelText}
          </div>
        </div>
        {/* <div className={styles.parameters}>
          <div className={styles.parameter}>
            <Icon name="button-play" size="18" />
            {item.counterVideo}
          </div>
          <div className={styles.parameter}>
            <Icon name="user" size="18" />
            {item.counterUser}
          </div>
        </div> */}
      </Link>
    </ScrollParallax>
  );
};

export default Card;