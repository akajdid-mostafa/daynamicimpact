import React, { useEffect } from "react";
import cn from "classnames";
import styles from "./Catalog.module.sass";
import Icon from "../../../components/Icon";
import Card from "../../../components/Card";
import Dropdown from "../../../components/Dropdown";
import { useBlog } from "../../../context/BlogContext";

// const navLinks = ["Communication & Marketing", "Design & Créativité", "Développement & Technologie", "SEO & Performance","Social Media","Transformation Digitale","Business & Inspiration"];

// const dateOptions = ["Newest", "Oldest"];
const blogOptions = ["Plus récent", "Plus ancien"];
const timeOptions = ["Toutes les catégories", "Communication & Marketing", "Design & Créativité", "Développement & Technologie", "SEO & Performance", "Social Media", "Transformation Digitale", "Business & Inspiration"];
// const difficultyOptions = ["Beginner", "Advanced", "Intermediate"];
// const levelOptions = ["Level", "Level 1", "Level 2"];

const Catalog = () => {
  const {
    blogs, loading, error, pagination,
    filters, setFilters,
    goToPage, fetchBlogs
  } = useBlog();
  
  const { sortOrder, category, search } = filters;

  // Initial fetch on component mount and whenever filters change through context
  useEffect(() => {
    // Initial fetch might be handled by context's internal useEffect, 
    // but we can trigger a fresh one here if needed, e.g., on mount to ensure latest data
    // For now, let's rely on the context's internal logic triggered by initial state
  }, []); 

  const handleSearchChange = (e) => {
    setFilters(prev => ({ ...prev, search: e.target.value }));
  };

  const handleSortOrderChange = (value) => {
    setFilters(prev => ({ ...prev, sortOrder: value }));
    // Manually trigger fetch with new sort order
    fetchBlogs({ ...filters, sortOrder: value }, pagination.limit, 0);
  };

  const handleCategoryChange = (value) => {
    setFilters(prev => ({ ...prev, category: value }));
    // Manually trigger fetch with new category
    fetchBlogs({ ...filters, category: value }, pagination.limit, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Search is debounced in context, so a direct fetchBlogs with current filters is sufficient
    fetchBlogs(filters, pagination.limit, 0); 
  };

  const handleRetry = () => {
    fetchBlogs(filters, pagination.limit, 0); 
  };

  const handleTestApi = () => {
    console.log('Testing API connection...');
    console.log('Current URL:', window.location.href);
    console.log('Current origin:', window.location.origin);
    fetch('https://blog-platform-ebon.vercel.app/api/blogs?limit=1') // Direct call to backend
      .then(response => {
        console.log('Test response status:', response.status);
        console.log('Test response headers:', Object.fromEntries(response.headers.entries()));
        return response.json();
      })
      .then(data => console.log('Test API data:', data))
      .catch(err => console.error('Test API error:', err));
  };

  return (
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <div className={styles.title}>Trouvez le blog qui vous inspire</div>
          <form
            className={styles.search}
            action=""
            onSubmit={handleSubmit}
          >
            <input
              className={styles.input}
              type="text"
              value={search}
              onChange={handleSearchChange}
              name="search"
              placeholder="Rechercher un article..."
              required={false}
            />
            <button className={styles.result} type="submit">
              <Icon name="search" size="16" />
            </button>
          </form>
        </div>
        <div className={styles.wrap}>
          <div className={styles.sorting}>
            <div className={styles.cell}>
              <div className={styles.label}>Trier par</div>
              <Dropdown
                className={styles.dropdown}
                value={sortOrder}
                setValue={handleSortOrderChange}
                options={blogOptions}
              />
            </div>
            <div className={styles.cell}>
              <div className={styles.label}>catégories</div>
              <Dropdown
                className={styles.dropdown}
                value={category}
                setValue={handleCategoryChange}
                options={timeOptions}
              />
            </div>
          </div>
        </div>
        <div className={styles.list}>
          {loading && blogs.length === 0 ? (
            // Initial loading state
            <div className={styles.loading}>
              <div className={styles.loadingSpinner}></div>
            </div>
          ) : error && blogs.length === 0 ? (
            // Error state
            <div className={styles.error}>
              <p>Erreur lors du chargement: {error}</p>
              <div className={styles.errorActions}>
                <button onClick={handleRetry}>Réessayer</button>
                <button onClick={handleTestApi}>Tester la connexion API</button>
              </div>
            </div>
          ) : blogs.length === 0 ? (
            // No results state
            <div className={styles.noResults}>
              <img 
                src="/images/Blog/vide.jpg" 
                alt="Aucun article trouvé" 
                className={styles.noResultsImage}
              />
              <p>
                {category === "Toutes les catégories" 
                  ? "Aucun article trouvé" 
                  : `Aucun article trouvé dans la catégorie "${category}"`
                }
              </p>
            </div>
          ) : (
            // Success state - render blogs
            blogs.map((blog) => (
              <Card className={styles.card} item={blog} key={blog.id} />
            ))
          )}
        </div>
        {/* Pagination Controls */}
        {pagination.totalPages > 1 && (
          <div className={styles.pagination}>
            <button 
              className={cn(styles.paginationBtn, { [styles.disabled]: pagination.currentPage === 1 })}
              onClick={() => goToPage(pagination.currentPage - 1)}
              disabled={pagination.currentPage === 1 || loading}
            >
              <Icon name="arrow-left" size="16" />
              Précédent
            </button>
            
            <div className={styles.paginationNumbers}>
              {/* Always show first page */}
              <button
                className={cn(styles.paginationNumber, {
                  [styles.active]: 1 === pagination.currentPage
                })}
                onClick={() => goToPage(1)}
                disabled={loading}
              >
                1
              </button>
              
              {/* Show ellipsis if current page is far from start */}
              {pagination.currentPage > 3 && (
                <span className={styles.ellipsis}>...</span>
              )}
              
              {/* Show pages around current page */}
              {Array.from({ length: pagination.totalPages }, (_, i) => i + 1)
                .filter(pageNum => {
                  // Show current page and 1 page before/after (but not first or last)
                  return pageNum > 1 && 
                         pageNum < pagination.totalPages && 
                         Math.abs(pageNum - pagination.currentPage) <= 1;
                })
                .map(pageNum => (
                <button
                  key={pageNum}
                  className={cn(styles.paginationNumber, {
                    [styles.active]: pageNum === pagination.currentPage
                  })}
                  onClick={() => goToPage(pageNum)}
                  disabled={loading}
                >
                  {pageNum}
                </button>
              ))}
              
              {/* Show ellipsis if current page is far from end */}
              {pagination.currentPage < pagination.totalPages - 2 && (
                <span className={styles.ellipsis}>...</span>
              )}
              
              {/* Always show last page (if more than 1 page) */}
              {pagination.totalPages > 1 && (
                <button
                  className={cn(styles.paginationNumber, {
                    [styles.active]: pagination.totalPages === pagination.currentPage
                  })}
                  onClick={() => goToPage(pagination.totalPages)}
                  disabled={loading}
                >
                  {pagination.totalPages}
                </button>
              )}
            </div>
            
            <button 
              className={cn(styles.paginationBtn, { [styles.disabled]: pagination.currentPage === pagination.totalPages })}
              onClick={() => goToPage(pagination.currentPage + 1)}
              disabled={pagination.currentPage === pagination.totalPages || loading}
            >
              Suivant
              <Icon name="arrow-right" size="16" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;