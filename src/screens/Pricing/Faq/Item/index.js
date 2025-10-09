import React from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import Icon from "../../../../components/Icon";
import ScrollParallax from "../../../../components/ScrollParallax";

const Item = ({ item, isOpen, onToggle }) => {

    return (
        <ScrollParallax className={styles.item}>
            <div
                className={cn(styles.head, { [styles.active]: isOpen })}
                onClick={onToggle}
            >
                <div className={styles.title}>{item.title}</div>
                <div className={styles.arrow}>
                    <Icon name="arrow-bottom" size="10" />
                </div>
            </div>
            <div className={cn(styles.body, { [styles.visible]: isOpen })}>
                <div className={styles.row}>
                    {/* <div className={styles.col}>
                        <div className={styles.preview}>
                            <img
                                srcSet="/images/content/faq-pic.svg 2x"
                                src="/images/content/faq-pic.svg"
                                alt="About pic"
                            />
                            <button className={cn("play-small", styles.play)}>
                                <Icon name="play" size="14" />
                            </button>
                        </div>
                    </div> */}
                    <div className={styles.col}>
                        {/* <div className={styles.info}>
                        Vous n&apos;avez rien d&apos;autre à faire.
                        </div> */}
                        <div className={styles.content}>
                            <p >
                            {item.answer ? item.answer : "Aucune réponse disponible."}
                            </p>
                            {/* <p>
                                Or hit the ground running with 10 pre-built
                                templates, all in light or dark mode."{" "}
                            </p> */}
                        </div>
                        {/* <button
                            className={cn(
                                "button-stroke button-small",
                                styles.button
                            )}
                        >
                            En savoir plus
                        </button> */}
                    </div>
                </div>
            </div>
        </ScrollParallax>
    );
};

export default Item;
