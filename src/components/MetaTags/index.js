import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MetaTags = () => {
  const location = useLocation();

  useEffect(() => {
    const updateMetaTags = () => {
      const path = location.pathname;
      let metaData = {};

      // Define meta data for each page
      switch (path) {
        case '/':
          metaData = {
            title: 'Dynamic Impact - Agence Digitale & Conseil Casablanca | Transformation Digitale',
            description: 'Agence digitale et de conseil à Casablanca. Transformation digitale, audits stratégiques, solutions sur-mesure et accompagnement des entreprises vers la croissance. Découvrez nos services et demandez votre analyse gratuite.',
            keywords: 'agence digitale, conseil, Casablanca, transformation digitale, audit stratégique, solutions sur-mesure, accompagnement entreprise, croissance, mission, vision, valeurs, avantages concurrentiels, Maroc'
          };
          break;

        case '/about':
          metaData = {
            title: 'Notre Impact & À Propos - Dynamic Impact | Mission, Vision & Valeurs',
            description: 'Découvrez l\'ADN de Dynamic Impact : mission, vision, valeurs et approche centrée sur la transparence, l\'innovation et l\'engagement. Témoignages clients, études de cas et preuves d\'impact pour rassurer et inspirer confiance.',
            keywords: 'notre impact, à propos, mission, vision, valeurs, transparence, innovation, engagement, témoignages clients, études de cas, méthodes de travail, preuves d\'impact, confiance, Casablanca, Maroc'
          };
          break;

        case '/Nos-Solutions':
          metaData = {
            title: 'Nos Solutions - Dynamic Impact | Prestations Digitales Complètes',
            description: 'Présentation détaillée de nos prestations : audit stratégique, transformation digitale, intégration d\'outils (CRM, ERP, automatisations), marketing digital, développement web/app, performance et conformité. Solutions adaptées aux besoins des entreprises marocaines.',
            keywords: 'solutions, prestations, audit stratégique, transformation digitale, intégration outils, CRM, ERP, automatisations, marketing digital, développement web, développement app, performance, conformité, entreprises marocaines, valeur mesurable, Casablanca'
          };
          break;

        case '/Nos-Solutions/strategie-transformation-digitale':
          metaData = {
            title: 'Stratégie Transformation Digitale - Dynamic Impact | Accompagnement Expert',
            description: 'Transformez votre entreprise avec notre stratégie de transformation digitale personnalisée. Audit, conseil et accompagnement par nos experts à Casablanca.',
            keywords: 'transformation digitale, stratégie digitale, audit digital, conseil, accompagnement, entreprise, Casablanca, Maroc, innovation, technologie'
          };
          break;

        case '/Nos-Solutions/creation-site-web':
          metaData = {
            title: 'Création Site Web & SEO - Dynamic Impact | Sites Web Professionnels',
            description: 'Création de sites web professionnels avec optimisation SEO. Développement web sur mesure, design responsive et référencement naturel à Casablanca.',
            keywords: 'création site web, développement web, SEO, référencement, design web, site responsive, Casablanca, Maroc, agence web, développement sur mesure'
          };
          break;

        case '/Nos-Solutions/gestion-reseaux-sociaux':
          metaData = {
            title: 'Gestion Réseaux Sociaux & Social Media - Dynamic Impact',
            description: 'Gestion professionnelle de vos réseaux sociaux. Stratégie social media, création de contenu, community management et croissance de votre audience.',
            keywords: 'gestion réseaux sociaux, social media, community management, Facebook, Instagram, LinkedIn, Twitter, contenu, stratégie, audience, engagement'
          };
          break;

        case '/Nos-Solutions/production-contenu-marque':
          metaData = {
            title: 'Production Contenu de Marque - Dynamic Impact | Création de Contenu',
            description: 'Production de contenu de marque de qualité : articles de blog, vidéos, infographies, newsletters. Stratégie de contenu personnalisée pour votre marque.',
            keywords: 'production contenu, création contenu, contenu de marque, blog, vidéo, infographie, newsletter, stratégie contenu, marketing de contenu, Casablanca'
          };
          break;

        case '/Nos-Solutions/automatisation-processus':
          metaData = {
            title: 'Automatisation Solutions Digitales - Dynamic Impact | Processus Automatisés',
            description: 'Automatisez vos processus métier avec nos solutions digitales sur mesure. Workflow, intégrations, chatbots et outils d\'automatisation avancés.',
            keywords: 'automatisation, processus, workflow, intégrations, chatbots, solutions digitales, efficacité, productivité, Casablanca, Maroc, innovation'
          };
          break;

        case '/Nos-Solutions/formation-coaching-digital':
          metaData = {
            title: 'Formation & Coaching Digital - Dynamic Impact | Accompagnement Formation',
            description: 'Formation et coaching digital pour votre équipe. Accompagnement personnalisé, formation aux outils digitaux et développement des compétences numériques.',
            keywords: 'formation digitale, coaching digital, formation équipe, compétences numériques, outils digitaux, accompagnement, développement, Casablanca, Maroc'
          };
          break;

        case '/blog':
          metaData = {
            title: 'Ressources & Blog - Dynamic Impact | Hub de Contenus Éducatifs',
            description: 'Hub de contenus éducatifs : articles de blog, études, guides pratiques et FAQ sur la transformation digitale, le marketing et la croissance d\'entreprise. Pensé pour le SEO et asseoir l\'expertise de l\'agence.',
            keywords: 'ressources, blog, contenus éducatifs, articles, études, guides pratiques, FAQ, transformation digitale, marketing, croissance entreprise, SEO, expertise agence, Casablanca, Maroc'
          };
          break;

        

        case '/contact':
          metaData = {
            title: 'Contact - Dynamic Impact | Devis Gratuit & Consultation',
            description: 'Page incitant à la prise de contact rapide : formulaire, coordonnées, adresse, liens sociaux. Pour demande de devis, diagnostic ou consultation stratégique. Contactez-nous pour vos projets digitaux.',
            keywords: 'contact, devis gratuit, consultation, diagnostic, consultation stratégique, formulaire, coordonnées, adresse, liens sociaux, projet digital, Casablanca, Maroc'
          };
          break;

        default:
          // For blog detail pages
          if (path.startsWith('/blog/')) {
            metaData = {
              title: 'Article Blog - Dynamic Impact | Conseils Digitaux',
              description: 'Lisez nos conseils d\'experts en transformation digitale, marketing digital et développement web. Articles pratiques et actualités du secteur.',
              keywords: 'article blog, conseils digitaux, transformation digitale, marketing digital, développement web, experts, actualités, Casablanca'
            };
          } else {
            metaData = {
              title: 'Dynamic Impact - Agence Digitale Casablanca',
              description: 'Agence digitale à Casablanca spécialisée en transformation digitale, marketing digital et développement web.',
              keywords: 'agence digitale, Casablanca, transformation digitale, marketing digital, développement web, Maroc'
            };
          }
      }

      // Update document title
      document.title = metaData.title;

      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', metaData.description);
      }

      // Update meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', metaData.keywords);

      // Update Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', metaData.title);
      }

      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', metaData.description);
      }

      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute('content', `https://digital-impact-kappa.vercel.app${path}`);
      }

      // Update Twitter tags
      const twitterTitle = document.querySelector('meta[property="twitter:title"]');
      if (twitterTitle) {
        twitterTitle.setAttribute('content', metaData.title);
      }

      const twitterDescription = document.querySelector('meta[property="twitter:description"]');
      if (twitterDescription) {
        twitterDescription.setAttribute('content', metaData.description);
      }
    };

    updateMetaTags();
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

export default MetaTags;
