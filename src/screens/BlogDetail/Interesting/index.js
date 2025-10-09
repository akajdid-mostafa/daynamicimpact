import React, { useState, useEffect } from "react";
import cn from "classnames";
import Slider from "react-slick";
import styles from "./Interesting.module.sass";
import Icon from "../../../components/Icon";
import Card from "../../../components/Card";

// API configuration - Using proxy to avoid CORS issues
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Interesting = () => {
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch related blog posts
  const fetchRelatedBlogs = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch recent blogs (limit to 6 for the slider)
      const response = await fetch(`${API_BASE_URL}/api/blogs?limit=6&sortBy=date&sortOrder=desc`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors'
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Related blogs data:', data);
      
      // Transform API data to match card component format
      const toSlug = (title) =>
        (title || "")
          .toString()
          .normalize('NFD')
          .replace(/\p{Diacritic}+/gu, '')
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '')
          .trim()
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-');

      const transformedBlogs = data.blogs.map(blog => ({
        id: blog.id,
        title: blog.title,
        url: `/blog/${blog.slug || toSlug(blog.title)}`,
        image: blog.main_image,
        image2x: blog.main_image,
        category: blog.type?.toLowerCase() || 'general',
        categoryText: blog.type || 'Blog',
        avatar: '/images/default-avatar.png',
        trainer: blog.author || 'Anonymous',
        level: 'normal',
        levelText: new Date(blog.created_at).toLocaleDateString('fr-FR'),
        play: false,
        created_at: blog.created_at
      }));
      
      setRelatedBlogs(transformedBlogs);
    } catch (err) {
      console.error('Error fetching related blogs:', err);
      setError(`Erreur de connexion: ${err.message}`);
      // Fallback to empty array
      setRelatedBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch related blogs on component mount
  useEffect(() => {
    fetchRelatedBlogs();
  }, []);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="14" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="14" />
      </SlickArrow>
    ),
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrapper}>
          <h2 className={cn("h2", styles.title)}>Articles qui pourraient vous intéresser</h2>
          {loading ? (
            <div className={styles.loading}>
              <div className={styles.loadingSpinner}></div>
              <p>Chargement des articles...</p>
            </div>
          ) : error ? (
            <div className={styles.error}>
              <p>Erreur: {error}</p>
              <button onClick={fetchRelatedBlogs}>Réessayer</button>
            </div>
          ) : relatedBlogs.length === 0 ? (
            <div className={styles.noResults}>
              <p>Aucun article trouvé</p>
            </div>
          ) : (
            <>
              <div className={styles.wrap}>
                <Slider className="interesting-slider" {...settings}>
                  {relatedBlogs.map((blog, index) => (
                    <div className={styles.slide} key={blog.id}>
                      <Card className={styles.card} item={blog} />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className={styles.btns}>
                <a href="/blog" className={cn("button-stroke", styles.button)}>
                  Voir plus d'articles
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Interesting;
