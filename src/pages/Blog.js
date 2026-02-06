// pages/Blog.js
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTitle from '../components/PageTitle';
import PageLayout from '../components/PageLayout';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import FadeIn from '../components/motion/FadeIn';
import BlogCard from '../components/BlogCard';
import posts from '../data/posts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

const props = {
    title: "My",
    highlightTitle: "Blog",
    bgTitle: "Posts"
}

export default function Blog() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTag, setSelectedTag] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    // Get all unique tags
    const allTags = useMemo(() => {
        const tags = posts.flatMap(post => post.tags || []);
        return [...new Set(tags)].sort();
    }, []);

    // Filter posts based on search and tag
    const filteredPosts = useMemo(() => {
        return posts.filter(post => {
            const matchesSearch = !searchTerm ||
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));

            const matchesTag = !selectedTag || (post.tags && post.tags.includes(selectedTag));

            return matchesSearch && matchesTag;
        });
    }, [searchTerm, selectedTag]);

    // Pagination logic
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const paginatedPosts = useMemo(() => {
        const startIndex = (currentPage - 1) * postsPerPage;
        return filteredPosts.slice(startIndex, startIndex + postsPerPage);
    }, [filteredPosts, currentPage]);

    // Reset page when filters change
    React.useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, selectedTag]);

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedTag('');
    };

    return (
        <PageTransition>
        <PageLayout containerSize="wide">
            <SEO
                title="Blog - Yuvaraj Guru | UI Engineering & Creative Development Insights"
                description="Read Yuvaraj Guru's blog posts about React optimization, Vue.js best practices, Node.js development, and full-stack development insights from 10+ years of experience."
                keywords="Yuvaraj Guru Blog, React Performance, Vue.js Tips, Node.js Development, Full Stack Development Blog, JavaScript Best Practices, Web Development Insights"
                url="https://yuvarajguru.dev/blog"
                type="website"
            />
            <PageTitle {...props}></PageTitle>

            <div className="pb-20">
                {/* Search and Filter Section */}
                <FadeIn>
                <div className="mb-8 space-y-4">
                    {/* Search Bar */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FontAwesomeIcon icon={faSearch} className="text-typography opacity-50" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search blog posts..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-surface border border-borderLight rounded-lg text-typography placeholder-typography placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        />
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm('')}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-typography opacity-50 hover:text-typography hover:opacity-100"
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        )}
                    </div>

                    {/* Tag Filter */}
                    <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-typography font-medium text-sm">Filter:</span>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedTag('')}
                            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${!selectedTag
                                ? 'bg-primary text-white'
                                : 'bg-surface text-typography opacity-70 hover:opacity-100 border border-borderLight'
                                }`}
                        >
                            All
                        </motion.button>
                        {allTags.map(tag => (
                            <motion.button
                                key={tag}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedTag(tag)}
                                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${selectedTag === tag
                                    ? 'bg-primary text-white'
                                    : 'bg-surface text-typography opacity-70 hover:opacity-100 border border-borderLight'
                                    }`}
                            >
                                {tag}
                            </motion.button>
                        ))}
                    </div>

                    {/* Active Filters */}
                    <AnimatePresence>
                    {(searchTerm || selectedTag) && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex items-center gap-2 text-sm"
                        >
                            <span className="text-typography opacity-70">Active filters:</span>
                            {searchTerm && (
                                <span className="bg-primary/20 text-primary px-2 py-1 rounded border border-primary/30">
                                    Search: "{searchTerm}"
                                </span>
                            )}
                            {selectedTag && (
                                <span className="bg-primary/20 text-primary px-2 py-1 rounded border border-primary/30">
                                    Tag: {selectedTag}
                                </span>
                            )}
                            <button
                                onClick={clearFilters}
                                className="text-primary hover:text-primary hover:opacity-80 underline ml-2"
                            >
                                Clear all
                            </button>
                        </motion.div>
                    )}
                    </AnimatePresence>
                </div>
                </FadeIn>

                {/* Results Info */}
                <div className="mb-6">
                    <p className="text-typography opacity-70">
                        Showing {paginatedPosts.length} of {filteredPosts.length} posts
                        {filteredPosts.length !== posts.length && ` (filtered from ${posts.length} total)`}
                    </p>
                </div>

                {/* Blog Posts Grid */}
                {paginatedPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        <AnimatePresence mode="popLayout">
                        {paginatedPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <BlogCard post={post} />
                            </motion.div>
                        ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <p className="text-typography opacity-70 text-lg mb-4">
                            No blog posts found matching your criteria.
                        </p>
                        <button
                            onClick={clearFilters}
                            className="text-primary hover:text-primary hover:opacity-80 underline"
                        >
                            Clear filters to see all posts
                        </button>
                    </motion.div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <nav className="mt-12 pb-16">
                        <ul className="flex justify-center space-x-2">
                            <li>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${currentPage === 1
                                        ? 'bg-surface text-typography opacity-50 cursor-not-allowed'
                                        : 'bg-surface text-typography hover:bg-primary hover:text-white'
                                        }`}
                                >
                                    Previous
                                </motion.button>
                            </li>

                            {[...Array(totalPages)].map((_, index) => {
                                const page = index + 1;
                                return (
                                    <li key={page}>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => setCurrentPage(page)}
                                            className={`w-10 h-10 transition-all duration-300 text-center flex items-center justify-center rounded-full ${currentPage === page
                                                ? 'bg-primary text-white font-bold'
                                                : 'bg-surface text-typography hover:bg-primary hover:text-white'
                                                }`}
                                        >
                                            {page}
                                        </motion.button>
                                    </li>
                                );
                            })}

                            <li>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${currentPage === totalPages
                                        ? 'bg-surface text-typography opacity-50 cursor-not-allowed'
                                        : 'bg-surface text-typography hover:bg-primary hover:text-white'
                                        }`}
                                >
                                    Next
                                </motion.button>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </PageLayout>
        </PageTransition>
    );
}
