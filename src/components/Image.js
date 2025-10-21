import React from "react";
import useDarkMode from "use-dark-mode";

const Image = ({ 
  className, 
  src, 
  srcDark, 
  srcSet, 
  srcSetDark, 
  alt = "Image Dynamic Impact - Agence marketing digital et transformation digitale",
  ...props 
}) => {
  const darkMode = useDarkMode(false);

  // Use standard img tag for now to avoid loading issues
  return (
    <img
      className={className}
      srcSet={darkMode.value ? srcSetDark : srcSet}
      src={darkMode.value ? srcDark : src}
      alt={alt}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
};

export default Image;
