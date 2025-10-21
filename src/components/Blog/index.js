import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import Slider from "react-slick";
import Icon from "../Icon";
import ScrollParallax from "../ScrollParallax";
import styles from "./Comment.module.sass";
import { useBlog } from "../../context/BlogContext";
import { FaArrowRight } from "react-icons/fa";

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Blog = () => {
  const { blogs: allBlogs, loading, error, setFilters } = useBlog();

  const recentBlogs = allBlogs.slice(0, 6); // Take the first 6 blogs as recent

  useEffect(() => {
    // Only set filters if we're on the homepage
    // This prevents interference with the blog catalog page
    if (window.location.pathname === "/") {
      setFilters((prev) => ({
        sortOrder: "Plus récent",
        category: "Toutes les catégories", // Always use all categories for homepage
        search: "",
      }));
    }
  }, [setFilters]); // Include setFilters in dependencies

  // Don't render anything if not on homepage to prevent interference
  if (window.location.pathname !== "/") {
    return null;
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
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
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
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

  if (loading && recentBlogs.length === 0) {
    return (
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.wrapper}>
            <div className={styles.head}>
              <h2 className={cn("h2", styles.title)}>
                Chargement des articles...
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.wrapper}>
            <div className={styles.head}>
              <h2 className={cn("h2", styles.title)}>Erreur de chargement</h2>
              <p>{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (recentBlogs.length === 0) {
    return (
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.wrapper}>
            <div className={styles.head}>
              <h2 className={cn("h2", styles.title)}>
                Aucun article récent trouvé
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrapper}>
          <div className={styles.head}>
            <h4 className={cn("h4", styles.title)}>
              Dynamic Impact | Guides & études sur l&apos;écosystème marketing
            </h4>
            <div className={styles.info}>
              Conseils pratiques, études et guides pour construire des
              écosystèmes marketing et opérationnels. Actions mesurables et
              process adoptables.
            </div>
            <Link className={cn("button", styles.button)} to="/blog">
            Voir plus...
            </Link>
          </div>
          <div className={styles.wrap}>
            <Slider className="comment-slider" {...settings}>
              {recentBlogs.map((blog, index) => (
                <ScrollParallax className={styles.slide} key={blog.id || index}>
                  <Link
                    className={cn("comment-item", styles.item)}
                    to={blog.url || "/blog"}
                  >
                    <div className={styles.preview}>
                      <img
                        src={blog.image}
                        alt={`${blog.title} - Dynamic Impact marketing digital`}
                      />
                      <div className={styles.hoverIcon}>
                        <FaArrowRight size={14} />
                      </div>
                    </div>
                    <div className={styles.subtitle}>{blog.title}</div>
                    <div className={styles.content}>
                      {(blog.content &&
                        blog.content.split("\n")[0].substring(0, 70) + "...") ||
                        "Lire l'article"}
                    </div>
                    {blog.date && (
                      <div className={styles.date}>
                        {new Date(blog.date).toLocaleDateString("fr-FR", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
                      </div>
                    )}
                  </Link>
                </ScrollParallax>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
