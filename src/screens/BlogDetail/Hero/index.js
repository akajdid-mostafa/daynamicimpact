import React from "react";
import cn from "classnames";
import styles from "./Hero.module.sass";


const Hero = ({ blogData, loading, error }) => {

    // Loading state
    if (loading) {
        return (
            <div className={cn("section", styles.section)}>
                <div className={cn("container", styles.container)}>
                    <div className={styles.centered}>
                        <div className={styles.loading}>
                            <div className={styles.loadingSpinner}></div>
                            <p>Chargement de l'article...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className={cn("section", styles.section)}>
                <div className={cn("container", styles.container)}>
                    <div className={styles.centered}>
                        <div className={styles.error}>
                            <p>Erreur: {error}</p>
                            <button onClick={() => window.location.reload()}>Réessayer</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // No data state (only show if not loading and no error)
    if (!loading && !error && !blogData) {
        return (
            <div className={cn("section", styles.section)}>
                <div className={cn("container", styles.container)}>
                    <div className={styles.centered}>
                        <div className={styles.error}>
                            <p>Article non trouvé</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // If we have blogData, proceed with rendering
    if (!blogData) {
        return null; // Don't render anything if no data
    }

    // const mainImage = blogData.main_image || null;

    return (
        <div className={cn("section", styles.sectionn)}>
            <div className={cn("container", styles.container)}>
                <div className={styles.centered}>
                    {/* Image moved to Breadcrumbs as background */}
                </div>
            </div>
        </div>
    );
};

export default Hero;