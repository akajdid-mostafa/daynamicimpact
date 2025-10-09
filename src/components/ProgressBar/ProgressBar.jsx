import React, { useEffect, useState } from "react";
import styles from "./ProgressBar.module.sass";

const ProgressBar = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const root = document.scrollingElement || document.documentElement;

    const update = () => {
      const scrollTop = root.scrollTop;
      const docHeight = root.scrollHeight - root.clientHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setWidth(pct);
    };

    // first paint
    update();

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          update();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className={styles.bar}>
      <div className={styles.fill} style={{ width: `${width}%` }} />
    </div>
  );
};

export default ProgressBar;
