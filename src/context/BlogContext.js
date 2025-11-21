import React, { createContext, useState, useEffect, useCallback, useContext } from 'react';

const BlogContext = createContext(undefined);

const API_BASE_URL = 'https://blog-platform-ebon.vercel.app';

// Utility to strip HTML tags from a string
const stripHtmlTags = (htmlString) => {
  const doc = new DOMParser().parseFromString(htmlString, 'text/html');
  return doc.body.textContent || "";
};

// Utility to create a URL-friendly slug from title (moved here for consistency)
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

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    total: 0,
    limit: 12,
    offset: 0,
    hasMore: false,
    currentPage: 1,
    totalPages: 1
  });
  
  // Filter states managed by context
  const [filters, setFilters] = useState({
    sortOrder: "Plus récent", // "Plus récent" or "Plus ancien"
    category: "Toutes les catégories", // e.g., "Communication & Marketing"
    search: ""
  });

  // Removed unused refs since we simplified the useEffect logic

  const fetchBlogs = useCallback(async (
    currentFilters = filters, 
    currentLimit = pagination.limit, 
    currentOffset = pagination.offset
  ) => {
    try {
      setLoading(true);
      setError(null);
      
      const params = new URLSearchParams();
      params.append('limit', currentLimit.toString());
      params.append('offset', currentOffset.toString());

      // Category filter
      if (currentFilters.category && currentFilters.category !== "Toutes les catégories") {
        params.append('type', currentFilters.category);
      }
      // Search query
      if (currentFilters.search) {
        params.append('search', currentFilters.search);
      }
      
      // Note: Backend sorting is not working properly, so we'll do client-side sorting instead
      // Keeping this commented out in case backend gets fixed later
      // if (currentFilters.sortOrder === "Plus récent") {
      //   params.append('sortBy', 'date');
      //   params.append('sortOrder', 'desc');
      // } else if (currentFilters.sortOrder === "Plus ancien") {
      //   params.append('sortBy', 'date');
      //   params.append('sortOrder', 'asc');
      // }
      
      const apiUrl = `${API_BASE_URL}/api/blog/dynamic?${params.toString()}`;
      
      console.log('Fetching blogs with URL:', apiUrl);
      console.log('Current filters:', currentFilters);
      
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        mode: 'cors',
        credentials: 'omit'
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
      }
      
      const data = await response.json();
      
      console.log('API Response data:', data);
      console.log('Blogs received:', data.blogs?.length || 0);
      console.log('First blog date:', data.blogs?.[0]?.created_at);
      console.log('Last blog date:', data.blogs?.[data.blogs?.length - 1]?.created_at);
      
      let transformedBlogs = (data.blogs || []).map(blog => ({
        id: blog.id,
        title: blog.title,
        url: `/blog/${blog.slug || toSlug(blog.title)}`,
        image: blog.main_image || "/images/content/placeholder.png",
        image2x: blog.main_image || "/images/content/placeholder.png",
        category: blog.type?.toLowerCase() || 'general',
        categoryText: blog.type || 'Blog',
        avatar: '/images/default-avatar.png',
        trainer: blog.author || 'Anonymous',
        level: 'normal',
        levelText: new Date(blog.created_at).toLocaleDateString('fr-FR'),
        play: false,
        created_at: blog.created_at,
        content: stripHtmlTags(blog.content || '') // Strip HTML tags here
      }));

      // Client-side sorting since backend doesn't support it properly
      if (currentFilters.sortOrder === "Plus récent") {
        transformedBlogs.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        console.log('Sorted by newest first:', transformedBlogs.map(b => ({ id: b.id, date: b.created_at })));
      } else if (currentFilters.sortOrder === "Plus ancien") {
        transformedBlogs.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
        console.log('Sorted by oldest first:', transformedBlogs.map(b => ({ id: b.id, date: b.created_at })));
      }
      
      // Always replace blogs array for pagination (don't append)
      console.log('Setting blogs for page:', Math.floor(currentOffset / currentLimit) + 1, 'with', transformedBlogs.length, 'items');
      console.log('Current category filter:', currentFilters.category);
      setBlogs(transformedBlogs);
      
      const totalPages = Math.ceil(data.pagination.total / data.pagination.limit);
      const currentPage = Math.floor(data.pagination.offset / data.pagination.limit) + 1;
      
      console.log('Updating pagination state:');
      console.log('- Total items:', data.pagination.total);
      console.log('- Limit:', data.pagination.limit);
      console.log('- Offset:', data.pagination.offset);
      console.log('- Calculated currentPage:', currentPage);
      console.log('- Calculated totalPages:', totalPages);
      
      setPagination({
        ...data.pagination,
        currentPage,
        totalPages
      });
    } catch (err) {
      console.error('Error fetching blogs:', err);
      setError(`Erreur lors du chargement: ${err.message}`);
      if (currentOffset === 0) {
        setBlogs([]);
        setPagination({ 
          total: 0, limit: 12, offset: 0, hasMore: false, currentPage: 1, totalPages: 0
        });
      }
    } finally {
      setLoading(false);
    }
  }, [filters, pagination.limit, pagination.offset]);

  // Initial fetch on mount only
  useEffect(() => {
    fetchBlogs(filters, pagination.limit, 0);
  }, [fetchBlogs, filters, pagination.limit]); // Include all dependencies


  const goToPage = (page) => {
    console.log('goToPage called with:', page);
    console.log('Current pagination:', pagination);
    console.log('Loading state:', loading);
    
    if (page >= 1 && page <= pagination.totalPages && !loading) {
      const newOffset = (page - 1) * pagination.limit;
      console.log('Navigating to page:', page, 'with offset:', newOffset);
      fetchBlogs(filters, pagination.limit, newOffset);
    } else {
      console.log('Navigation blocked - invalid page or loading');
    }
  };

  return (
    <BlogContext.Provider value={{ 
      blogs, loading, error, pagination, 
      filters, setFilters, 
      goToPage, fetchBlogs // Expose fetchBlogs for manual refresh or specific calls
    }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};
