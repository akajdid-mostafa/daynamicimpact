import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./ScrollButton.module.sass";
import Icon from "../Icon";

const ScrollButton = ({ className, onScroll }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const root = document.scrollingElement || document.documentElement;

    const handleScroll = () => {
      const scrollTop = root.scrollTop;
      const docHeight = root.scrollHeight - root.clientHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setProgress(pct);
      setIsVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (onScroll) {
      onScroll();
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 28; 
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <button
      className={cn(
        styles.scroll,
        styles.fixed,
        { [styles.visible]: isVisible },
        className
      )}
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      <svg className={styles.progressCircle} width="64" height="64">
        <defs>
          <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C294EA" />
            <stop offset="100%" stopColor="#20068E" />
          </linearGradient>
        </defs>
        <circle className={styles.bg} strokeWidth="4" r="28" cx="32" cy="32" />

        {/* Progress circle */}
        <circle
          className={styles.progress}
          strokeWidth="4"
          r="28"
          cx="32"
          cy="32"
          stroke="url(#scrollGradient)"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>

      <div className={styles.line}>
        <Icon className={styles.upIcon} name="arrow-down" size="14" />
        <Icon className={styles.upIcon} name="arrow-down" size="14" />
      </div>
    </button>
  );
};

export default ScrollButton;
