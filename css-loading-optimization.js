
// CSS Loading Optimization Script
(function() {
  'use strict';
  
  // Function to load CSS asynchronously
  function loadCSS(href, media = 'all') {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = media;
    link.onload = function() {
      this.onload = null;
      this.rel = 'stylesheet';
    };
    document.head.appendChild(link);
  }
  
  // Function to preload CSS
  function preloadCSS(href) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    link.onload = function() {
      this.onload = null;
      this.rel = 'stylesheet';
    };
    document.head.appendChild(link);
  }
  
  // Load non-critical CSS after page load
  window.addEventListener('load', function() {
    // Load additional CSS files
    loadCSS('/static/css/main.dd0d775e.css');
  });
  
  // Preload critical CSS
  preloadCSS('/static/css/main.dd0d775e.css');
})();
