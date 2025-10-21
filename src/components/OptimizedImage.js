import React, { useState, useRef, useEffect } from 'react';
import useDarkMode from 'use-dark-mode';

const OptimizedImage = ({ 
  className, 
  src, 
  srcDark, 
  alt, 
  width,
  height,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
  quality = 85,
  placeholder = "blur",
  ...props 
}) => {
  const darkMode = useDarkMode(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Generate responsive srcset
  const generateSrcSet = (baseSrc) => {
    if (!baseSrc) return '';
    
    // For WebP images, create multiple sizes
    if (baseSrc.includes('.webp')) {
      const basePath = baseSrc.replace('.webp', '');
      return `${basePath}.webp 1x, ${basePath}@2x.webp 2x, ${basePath}@3x.webp 3x`;
    }
    
    // For other formats, create responsive sizes
    const basePath = baseSrc.replace(/\.[^/.]+$/, '');
    const extension = baseSrc.split('.').pop();
    
    return [
      `${basePath}@1x.${extension} 1x`,
      `${basePath}@2x.${extension} 2x`,
      `${basePath}@3x.${extension} 3x`
    ].join(', ');
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    console.warn(`Failed to load image: ${src}`);
  };

  // Generate optimized image URL
  const getOptimizedSrc = (originalSrc) => {
    if (!originalSrc) return '';
    
    // For WebP images, use the original
    if (originalSrc.includes('.webp')) {
      return originalSrc;
    }
    
    // For other formats, try to use WebP if available
    const basePath = originalSrc.replace(/\.[^/.]+$/, '');
    return `${basePath}.webp`;
  };

  const optimizedSrc = getOptimizedSrc(darkMode.value ? srcDark || src : src);
  const srcSet = generateSrcSet(optimizedSrc);

  return (
    <div 
      ref={imgRef}
      className={`optimized-image-container ${className || ''}`}
      style={{ 
        position: 'relative',
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : 'auto',
        overflow: 'hidden'
      }}
    >
      {isInView && (
        <img
          className={`optimized-image ${isLoaded ? 'loaded' : 'loading'}`}
          src={optimizedSrc}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 0.3s ease',
            opacity: isLoaded ? 1 : 0
          }}
          {...props}
        />
      )}
      
      {/* Loading placeholder - only show briefly */}
      {!isLoaded && isInView && (
        <div 
          className="image-placeholder"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'transparent',
            fontSize: '0px'
          }}
        >
          {/* Minimal loading indicator */}
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
