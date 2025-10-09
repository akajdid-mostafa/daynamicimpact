import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./DropdownMenu.module.sass";
import Icon from "../../Icon";
import { useBlog } from "../../../context/BlogContext";

const DropdownMenu = ({ item, className, setValue, isScrolled, clickedLink, onLinkClick }) => {
    const [visible, setVisible] = useState(false);
    const dropdownCloseTimer = useRef(null);

    const { pathname } = useLocation();
    const { blogs, loading, error, setFilters, fetchBlogs } = useBlog();

    // Filter and slice blogs to get the latest 4 for the dropdown (1 large + 3 small)
    const latestBlogs = blogs.slice(0, 4);

    useEffect(() => {
        // Ensure context fetches latest blogs if not already loaded
        if (blogs.length === 0 && !loading && !error) {
            setFilters(prev => ({ ...prev, sortOrder: "Plus récent", category: "Toutes les catégories", search: "" }));
            fetchBlogs(); // Manually trigger fetch if needed
        }
    }, [blogs.length, loading, error, setFilters, fetchBlogs]);

    const handleClick = () => {
        setValue(false);
        setVisible(false);
        if (onLinkClick) {
            onLinkClick(item.title);
        }
    };

    // Function to handle mouse enter (show dropdown)
    const handleMouseEnter = () => {
        if (dropdownCloseTimer.current) {
            clearTimeout(dropdownCloseTimer.current);
            dropdownCloseTimer.current = null;
        }
        setVisible(true);
    };

    // Function to handle mouse leave (hide dropdown with a delay)
    const handleMouseLeave = () => {
        dropdownCloseTimer.current = setTimeout(() => {
        setVisible(false);
        }, 200); // 200ms delay before closing
    };

    // Determine if this dropdown menu is active
    const isActive = () => {
        if (item.title === "Ressources") {
            return pathname.startsWith("/blog");
        }
        if (item.title === "Nos Solutions") {
            return pathname.startsWith("/Nos-Solutions");
        }
        return pathname.startsWith("/class");
    };

    return (
        <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
            <div 
                className={cn(styles.group, className)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <NavLink
                    className={cn(
                        styles.head,
                        { [styles.open]: visible },
                        { [styles.active]: isActive() },
                        { [styles.scrolled]: isScrolled },
                        { [styles.clicked]: clickedLink === item.title }
                    )}
                    to={item.url}
                    onClick={handleClick}
                >
                    {item.title}
                    <Icon name="arrow-bottom" size="9" />
                </NavLink>
                {visible && (
                    <div className={styles.body}>
                        <div className={styles.inner}>
                                <div className={styles.col}>
                                    <div className={styles.line}>
                                        <div className={styles.cell}>
                                            {loading && <p>Chargement...</p>}
                                            {error && <p className={styles.error}>{error}</p>}
                                            {!loading && !error && latestBlogs.length === 0 && <p>Aucun article récent.</p>}
                                            {!loading && !error && latestBlogs.length > 0 && (
                                                        <Link
                                                    className={styles.card}
                                                    to={latestBlogs[0].url}
                                                    key={latestBlogs[0].id}
                                                    onClick={handleClick}
                                                >
                                                    <div className={styles.photo}>
                                                        <img
                                                            srcSet={`${latestBlogs[0].image2x} 2x`}
                                                            src={latestBlogs[0].image}
                                                            alt={latestBlogs[0].title}
                                                                />
                                                                <div
                                                                    className={cn(
                                                                styles.category,
                                                            )}
                                                        >
                                                            {latestBlogs[0].categoryText}
                                                        </div>
                                                    </div>
                                                    <div className={styles.top}>
                                                        <div className={styles.user}>
                                                            <div className={styles.details}>
                                                                <div className={styles.title}>
                                                                    {latestBlogs[0].title}
                                                                </div>
                                                                <div className={styles.trainer}>
                                                                    {(latestBlogs[0].content && (latestBlogs[0].content.substring(0, 100) + '...')) || 'En savoir plus'}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className={cn(
                                                                styles.level,
                                                                { [styles.statusStrokeGreen]: latestBlogs[0].level === "green" },
                                                            )}
                                                        >
                                                            {latestBlogs[0].levelText}
                                                                </div>
                                                            </div>
                                                    <div className={styles.content}>
                                                        Lire l'article
                                                            </div>
                                                        </Link>
                                            )}
                                        </div>
                                        <div className={styles.cell}>
                                            {!loading && !error && latestBlogs.slice(1).map(
                                                (blog, index) => (
                                                        <Link
                                                        className={styles.item}
                                                        to={blog.url}
                                                        key={blog.id || index}
                                                        onClick={handleClick}
                                                    >
                                                        <div className={styles.photo}>
                                                            <img
                                                                srcSet={`${blog.image2x} 2x`}
                                                                src={blog.image}
                                                                alt={blog.title}
                                                            />
                                                        </div>
                                                        <div className={styles.description}>
                                                            <div
                                                                className={cn(
                                                                    styles.category,
                                                                )}
                                                            >
                                                                {blog.categoryText}
                                                            </div>
                                                            <div className={styles.user}>
                                                                <div className={styles.details}>
                                                                    <div className={styles.title}>
                                                                        {blog.title}
                                                                </div>
                                                                    <div className={styles.trainer}>
                                                                        {(blog.content && (blog.content.substring(0, 70) + '...')) || 'Lire l\'article'}
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    )
                                            )}
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                )}
            </div>
        </OutsideClickHandler>
    );
};

export default DropdownMenu;