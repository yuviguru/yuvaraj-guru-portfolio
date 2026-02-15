// components/BlogCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { calculateReadingTime, formatDate, truncateText } from '../utils/helper';
import blogDefaultImg from '../assets/images/blog-default-img.jpg';

const BlogCard = ({ post }) => {
    const readingTime = calculateReadingTime(post.content);
    const formattedDate = formatDate(post.date);

    // Create summary from content if not provided
    const summary = post.summary ||
        (post.content.introduction ?
            truncateText(post.content.introduction.paragraphs[0]) :
            'Read more about this topic...');

    return (
        <div className="mb-8">
            <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="h-full bg-surface rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-typography overflow-hidden group border border-borderLight hover:border-primary/30"
            >
                {/* Image Section */}
                <div className="rounded-t-xl cursor-pointer overflow-hidden border-b-2 border-primary/50">
                    <Link to={`/blog/${post.slug}`} className="block relative overflow-hidden">
                        <img
                            className="rounded-t-xl transition-transform duration-500 group-hover:scale-110 w-full h-48 object-cover"
                            src={post.image || blogDefaultImg}
                            alt={post.title}
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                    </Link>
                </div>

                {/* Content Section */}
                <div className="p-6">
                    {/* Meta Information */}
                    <div className="flex items-center text-sm opacity-70 mb-3">
                        <span className="text-typography">{formattedDate}</span>
                        <span className="mx-2 text-typography">·</span>
                        <span className="text-typography">{readingTime} min read</span>
                    </div>

                    {/* Title */}
                    <Link
                        to={`/blog/${post.slug}`}
                        className="leading-7 text-xl font-heading font-bold text-typography hover:text-primary transition-colors duration-300 block mb-4"
                    >
                        {post.title}
                    </Link>

                    {/* Summary */}
                    <p className="mb-4 text-sm text-typography opacity-80 line-clamp-3 leading-relaxed">
                        {summary}
                    </p>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 3).map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-2.5 py-0.5 bg-primary/15 text-primary text-xs rounded-full font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Author */}
                    {post.author && (
                        <div className="flex items-center pt-3 border-t border-borderLight">
                            <div className="w-7 h-7 bg-primary/20 rounded-full flex items-center justify-center mr-2.5">
                                <span className="text-primary font-bold text-xs">
                                    {post.author.name.charAt(0)}
                                </span>
                            </div>
                            <span className="text-sm text-typography-muted">By {post.author.name}</span>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default React.memo(BlogCard);
