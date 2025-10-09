import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./Join.module.sass";

// Background image served from public folder

const Join = ({ className }) => {
    const [isLargeDesktop, setIsLargeDesktop] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeDesktop(window.innerWidth > 1024);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <div className={cn(className, styles.section)}>
            <div className={cn("container", styles.container)}>
                <div 
                    className={styles.wrapper}
                    style={{backgroundImage: "url(/images/content/bg-join.svg)"}}
                >
                    <div className={styles.content}>
                        <h2 className={cn("h1", styles.title)}>
                            Boostez votre marque en ligne
                        </h2>
                        <p className={styles.subtitle}>
                            Stratégie, design et performance pour accélérer votre croissance en ligne.
                        </p>
                        <div className={styles.actions}>
                            <button 
                                className={cn("button", styles.button)}
                                aria-label="Demander un devis gratuit pour nos services de communication digitale"
                            >
                                Demander un devis gratuit
                            </button>
                        </div>
                    </div>
                    
                    {/* Main illustration - always visible */}
                    <div className={styles.illustration}>
                        <img
                            src="/images/content/join-pic.svg"
                            alt="Illustration agence de communication digitale"
                            className={styles.image}
                            loading="lazy"
                            onError={(e) => {
                                e.target.style.display = 'none';
                            }}
                        />
                    </div>
                    
                    {/* Secondary decorative elements - only visible on large desktop */}
                    {isLargeDesktop && (
                        <>
                            <div className={styles.illustration2}>
                                <img
                                    src="/images/content/chat.svg"
                                    alt="Icône de messagerie"
                                    className={styles.image2}
                                    loading="lazy"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                            <div className={styles.illustration3}>
                                <img
                                    src="/images/content/mouse2.svg"
                                    alt="Icône de souris"
                                    className={styles.image3}
                                    loading="lazy"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                        </>
                    )}
                    
                    {/* Decorative dots - only visible on large desktop */}
                    {isLargeDesktop && (
                        <>
                            <span className={cn(styles.dot, styles.dotOne)} />
                            <span className={cn(styles.dot, styles.dotTwo)} />
                            <span className={cn(styles.dot, styles.dotThree)} />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Join;