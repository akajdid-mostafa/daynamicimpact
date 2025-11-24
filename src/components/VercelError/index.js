import React, { useMemo } from "react";
import styles from "./VercelError.module.sass";

const VercelError = () => {
  // Generate a unique ID similar to Vercel's format
  const errorId = useMemo(() => {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 8);
    const prefix = "cdg1::";
    return `${prefix}x8s8j-${timestamp}-${random}`;
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>404: NOT_FOUND</h1>
        
        <div className={styles.details}>
          <div className={styles.detailRow}>
            <span className={styles.label}>Code:</span>
            <span className={styles.highlight}>NOT_FOUND</span>
          </div>
          
          <div className={styles.detailRow}>
            <span className={styles.label}>ID:</span>
            <span className={styles.highlight}>{errorId}</span>
          </div>
        </div>
        
        <a 
          href="https://vercel.com/docs/errors" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.learnMore}
        >
          Click here to learn more about this error.
        </a>
      </div>
    </div>
  );
};

export default VercelError;


