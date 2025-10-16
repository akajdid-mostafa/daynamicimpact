import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-WR0VT8P29F', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, []);

  useEffect(() => {
    // Track page views on route changes
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-WR0VT8P29F', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [location]);

  // Track custom events
  const trackEvent = (action, category, label, value) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  // Track page view manually
  const trackPageView = (page_title, page_location) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-WR0VT8P29F', {
        page_title: page_title,
        page_location: page_location,
      });
    }
  };

  // Expose tracking functions globally for use in other components
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.trackEvent = trackEvent;
      window.trackPageView = trackPageView;
    }
  }, []);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics;
