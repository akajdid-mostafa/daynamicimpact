import React from "react";
import cn from "classnames";
import styles from "./Content.module.sass";

const Content = ({ blogData }) => {
    if (!blogData || !blogData.content) {
        return null;
    }

    // Function to clean and format HTML content
    const formatContent = (htmlContent) => {
        if (!htmlContent) return '';
        
        // Clean up the HTML content
        let cleanedContent = htmlContent
            // Fix common HTML entities
            .replace(/&agrave;/g, 'à')
            .replace(/&egrave;/g, 'è')
            .replace(/&eacute;/g, 'é')
            .replace(/&ccedil;/g, 'ç')
            .replace(/&rsquo;/g, '\'')
            .replace(/&nbsp;/g, ' ')
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            // Remove empty paragraphs
            .replace(/<p[^>]*>\s*&nbsp;\s*<\/p>/g, '')
            .replace(/<p[^>]*>\s*<\/p>/g, '');
        
        return cleanedContent;
    };

    return (
        <div className={cn("section-pb", styles.section)}>
            <div className={cn("container", styles.container)}>
                <div className={styles.wrapper}>
                    <div className={styles.meta}>
                        <div className={styles.author}>
                            <span className={styles.label}>Auteur:</span>
                            <span className={styles.value}>{blogData.author || "Anonyme"}</span>
                        </div>
                        <div className={styles.date}>
                            <span className={styles.label}>Publié le:</span>
                            <span className={styles.value}>
                                {new Date(blogData.created_at).toLocaleDateString('fr-FR', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                        </div>
                        <div className={styles.category}>
                            <span className={styles.label}>Catégorie:</span>
                            <span className={styles.value}>{blogData.type || "Général"}</span>
                        </div>
                    </div>
                    
                    <div className={styles.contentWrapper}>
                        <div 
                            className={styles.content}
                            dangerouslySetInnerHTML={{ __html: formatContent(blogData.content) }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
