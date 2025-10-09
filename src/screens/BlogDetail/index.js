import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
// import Hero from "./Hero";
import Interesting from "./Interesting";
import Breadcrumbs from "./Breadcrumbs/index";
import Content from "./Content";

const BlogDetail = () => {
    const { slug } = useParams();
    const [blogData, setBlogData] = useState(null);
    const [loading, setLoading] = useState(true);
    

    // Function to fetch blog data once and share between components
    const fetchBlogData = useCallback(async (blogSlugOrId) => {
        try {
            setLoading(true);
            
            console.log('Fetching blog data for slug/id:', blogSlugOrId);
            const API_BASE_URL = 'https://blog-platform-ebon.vercel.app'; // Consistent with BlogContext
            const tryUrls = [
                `${API_BASE_URL}/api/blogs/slug/${encodeURIComponent(blogSlugOrId)}`,
                `${API_BASE_URL}/api/blogs/${encodeURIComponent(blogSlugOrId)}`
            ];

            let response = null;
            for (const url of tryUrls) {
                const r = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    mode: 'cors'
                });
                if (r.ok) {
                    response = r;
                    break;
                }
            }

            // Fallback: search blogs and match by slugified title
            if (!response) {
                // We expect API to return slugs, so we remove the local toSlug utility.
                // If for some reason the API doesn't return slug, and we need to slugify title,
                // we should re-introduce or import from a utility. For now, rely on API slugs.
                
                // Try API search endpoint first
                const searchUrl = `${API_BASE_URL}/api/blogs?limit=50&search=${encodeURIComponent(blogSlugOrId.replace(/-/g, ' '))}`;
                const searchResp = await fetch(searchUrl, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    mode: 'cors'
                });

                if (searchResp.ok) {
                    const listData = await searchResp.json();
                    const candidates = listData.blogs || [];
                    const matched = candidates.find(b => b.slug === blogSlugOrId); // Rely on API provided slug
                    if (matched) {
                        setBlogData(matched);
                        return;
                    }
                }

                // If still not found, try fetching a broader list and match locally
                const listResp = await fetch(`${API_BASE_URL}/api/blogs?limit=200`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    mode: 'cors'
                });
                if (listResp.ok) {
                    const listData = await listResp.json();
                    const candidates = listData.blogs || [];
                    const matched = candidates.find(b => b.slug === blogSlugOrId); // Rely on API provided slug
                    if (matched) {
                        setBlogData(matched);
                        return;
                    }
                }

                throw new Error(`Not found for slug/id: ${blogSlugOrId}`);
            }
            
            console.log('Response status:', response.status);
            console.log('Response ok:', response.ok);
            
            const data = await response.json();
            console.log('API response data:', data);
            setBlogData(data.blog || data);
        } catch (err) {
            console.error('Error fetching blog data:', err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        console.log('BlogDetail useEffect - slug:', slug);
        if (slug) {
            fetchBlogData(slug);
        }
    }, [slug, fetchBlogData]);

    return (
        <>
            <Breadcrumbs blogData={blogData} loading={loading} />
            {/* <Hero blogData={blogData} loading={loading} error={error} />  */}
            <Content blogData={blogData} />
            <Interesting />
        </>
    );
};

export default BlogDetail;