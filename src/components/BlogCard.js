// components/BlogCard.js
import React from 'react';
import { Link } from 'react-router-dom';
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
            <div className="h-full bg-bgLight rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-typography overflow-hidden group">
                {/* Image Section */}
                <div className="rounded-t-lg cursor-pointer overflow-hidden border-b-4 border-solid border-primary">
                    <Link to={`/blog/${post.slug}`} className="block relative overflow-hidden">
                        <img
                            className="rounded-t-lg transition-transform duration-300 group-hover:scale-110 w-full h-48 object-cover"
                            src={post.image || blogDefaultImg}
                            alt={post.title}
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    </Link>
                </div>

                {/* Content Section */}
                <div className="p-6">
                    {/* Meta Information */}
                    <div className="flex items-center text-sm opacity-70 mb-3">
                        <span className="text-typography">{formattedDate}</span>
                        <span className="mx-2 text-typography">•</span>
                        <span className="text-typography">{readingTime} min read</span>
                    </div>

                    {/* Title */}
                    <Link
                        to={`/blog/${post.slug}`}
                        className="leading-7 text-xl font-bold text-typography hover:text-primary transition-colors duration-300 block mb-4"
                    >
                        {post.title}
                    </Link>

                    {/* Summary */}
                    <p className="mb-4 font-sans text-sm sm:text-base text-typography opacity-80 line-clamp-3">
                        {summary}
                    </p>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 3).map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium border border-primary/30"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Author */}
                    {post.author && (
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                                <span className="text-background font-bold text-sm">
                                    {post.author.name.charAt(0)}
                                </span>
                            </div>
                            <span className="text-sm text-typography opacity-70">By {post.author.name}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
