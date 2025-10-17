import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const StructuredData = () => {
  const location = useLocation();

  useEffect(() => {
    const addStructuredData = () => {
      // Remove existing structured data
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach(script => script.remove());

      const path = location.pathname;

      // Base organization data
      const organizationData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Dynamic Impact",
        "alternateName": "Dynamic Impact - Agence Digitale",
        "url": "https://digital-impact-kappa.vercel.app",
        "logo": "https://digital-impact-kappa.vercel.app/images/LOGO_COLORS.webp",
        "description": "Agence digitale et de conseil à Casablanca spécialisée en transformation digitale, marketing digital, développement web et création de sites web.",
        "foundingDate": "2020",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Imm Corner Office, lotissement Florida lot N°5, 5ème Étage N°38",
          "addressLocality": "Casablanca",
          "addressCountry": "MA"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+212660434143",
          "contactType": "customer service",
          "email": "contact@dynamicimpact.ma",
          "availableLanguage": ["French", "Arabic", "English"]
        },
        "sameAs": [
          "https://www.facebook.com/dynamicimpact.ma",
          "https://www.instagram.com/dynamicimpact.ma",
          "https://www.linkedin.com/company/dynamicimpact",
          "https://twitter.com/Dynamicimpact"
        ],
        "areaServed": {
          "@type": "Country",
          "name": "Morocco"
        }
      };

      // Local business data
      const localBusinessData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Dynamic Impact",
        "image": "https://digital-impact-kappa.vercel.app/images/LOGO_COLORS.webp",
        "description": "Agence digitale et de conseil à Casablanca spécialisée en transformation digitale",
        "url": "https://digital-impact-kappa.vercel.app",
        "telephone": "+212660434143",
        "email": "contact@dynamicimpact.ma",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Imm Corner Office, lotissement Florida lot N°5, 5ème Étage N°38",
          "addressLocality": "Casablanca",
          "addressRegion": "Casablanca-Settat",
          "postalCode": "20000",
          "addressCountry": "MA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 33.5731,
          "longitude": -7.5898
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        },
        "priceRange": "$$",
        "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
        "currenciesAccepted": "MAD"
      };

      // WebSite data
      const websiteData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Dynamic Impact",
        "url": "https://digital-impact-kappa.vercel.app",
        "description": "Agence digitale et de conseil à Casablanca. Transformation digitale, audits stratégiques, solutions sur-mesure et accompagnement des entreprises vers la croissance.",
        "publisher": {
          "@type": "Organization",
          "name": "Dynamic Impact"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://digital-impact-kappa.vercel.app/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      };

      // Service-specific data
      const servicesData = {
        "/Nos-Solutions/strategie-transformation-digitale": {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Stratégie de Transformation Digitale",
          "description": "Nous concevons une stratégie digitale globale pour transformer vos défis en leviers de croissance durable.",
          "url": "https://digital-impact-kappa.vercel.app/Nos-Solutions/strategie-transformation-digitale",
          "provider": {
            "@type": "Organization",
            "name": "Dynamic Impact"
          },
          "areaServed": "Morocco",
          "category": "Digital Transformation"
        },
        "/Nos-Solutions/creation-site-web": {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Création Site Web & SEO Technique",
          "description": "Des sites modernes, ultra-rapides et optimisés pour les moteurs de recherche afin de maximiser votre visibilité en ligne.",
          "url": "https://digital-impact-kappa.vercel.app/Nos-Solutions/creation-site-web",
          "provider": {
            "@type": "Organization",
            "name": "Dynamic Impact"
          },
          "areaServed": "Morocco",
          "category": "Web Development"
        },
        "/Nos-Solutions/gestion-reseaux-sociaux": {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Gestion des Réseaux Sociaux",
          "description": "Nous transformons vos réseaux sociaux en un levier puissant de notoriété et de conversion grâce à des stratégies créatives et ciblées.",
          "url": "https://digital-impact-kappa.vercel.app/Nos-Solutions/gestion-reseaux-sociaux",
          "provider": {
            "@type": "Organization",
            "name": "Dynamic Impact"
          },
          "areaServed": "Morocco",
          "category": "Social Media Marketing"
        },
        "/Nos-Solutions/production-contenu-marque": {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Production Contenu de Marque",
          "description": "Production de contenu de marque de qualité : articles de blog, vidéos, infographies, newsletters.",
          "url": "https://digital-impact-kappa.vercel.app/Nos-Solutions/production-contenu-marque",
          "provider": {
            "@type": "Organization",
            "name": "Dynamic Impact"
          },
          "areaServed": "Morocco",
          "category": "Content Marketing"
        },
        "/Nos-Solutions/automatisation-processus": {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Automatisation Solutions Digitales Sur-Mesure",
          "description": "Automatisez vos processus métier avec nos solutions digitales sur mesure.",
          "url": "https://digital-impact-kappa.vercel.app/Nos-Solutions/automatisation-processus",
          "provider": {
            "@type": "Organization",
            "name": "Dynamic Impact"
          },
          "areaServed": "Morocco",
          "category": "Business Automation"
        },
        "/Nos-Solutions/formation-coaching-digital": {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Accompagnement Formation Digitale & Coaching",
          "description": "Formation et coaching digital pour votre équipe avec accompagnement personnalisé.",
          "url": "https://digital-impact-kappa.vercel.app/Nos-Solutions/formation-coaching-digital",
          "provider": {
            "@type": "Organization",
            "name": "Dynamic Impact"
          },
          "areaServed": "Morocco",
          "category": "Digital Training"
        }
      };

      // Add organization data to all pages
      const organizationScript = document.createElement('script');
      organizationScript.type = 'application/ld+json';
      organizationScript.textContent = JSON.stringify(organizationData);
      document.head.appendChild(organizationScript);

      // Add local business data to all pages
      const localBusinessScript = document.createElement('script');
      localBusinessScript.type = 'application/ld+json';
      localBusinessScript.textContent = JSON.stringify(localBusinessData);
      document.head.appendChild(localBusinessScript);

      // Add website data to all pages
      const websiteScript = document.createElement('script');
      websiteScript.type = 'application/ld+json';
      websiteScript.textContent = JSON.stringify(websiteData);
      document.head.appendChild(websiteScript);

      // Add service-specific data if on a service page
      if (servicesData[path]) {
        const serviceScript = document.createElement('script');
        serviceScript.type = 'application/ld+json';
        serviceScript.textContent = JSON.stringify(servicesData[path]);
        document.head.appendChild(serviceScript);
      }

      // Add breadcrumb data for service pages
      if (path.startsWith('/Nos-Solutions/') && path !== '/Nos-Solutions') {
        const breadcrumbData = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Accueil",
              "item": "https://digital-impact-kappa.vercel.app/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Nos Solutions",
              "item": "https://digital-impact-kappa.vercel.app/Nos-Solutions"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": servicesData[path]?.name || "Service",
              "item": `https://digital-impact-kappa.vercel.app${path}`
            }
          ]
        };

        const breadcrumbScript = document.createElement('script');
        breadcrumbScript.type = 'application/ld+json';
        breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
        document.head.appendChild(breadcrumbScript);
      }
    };

    addStructuredData();
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

export default StructuredData;
