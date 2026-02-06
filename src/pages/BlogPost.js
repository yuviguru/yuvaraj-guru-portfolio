// pages/BlogPost.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import FadeIn from '../components/motion/FadeIn';
import { calculateReadingTime, formatDate } from '../utils/helper';
import posts from '../data/posts';
import blogDefaultImg from '../assets/images/blog-default-img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faClock, faCalendar, faUser, faTag } from '@fortawesome/free-solid-svg-icons';

const BlogPost = () => {
    const { slug } = useParams();
    const post = posts.find(p => p.slug === slug);

    if (!post) {
        return (
            <PageTransition>
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-heading font-bold text-typography mb-4">Post Not Found</h1>
                    <p className="text-typography-muted mb-6">The blog post you're looking for doesn't exist.</p>
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-primary hover:text-primary-light transition-colors"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                        Back to Blog
                    </Link>
                </div>
            </div>
            </PageTransition>
        );
    }

    const readingTime = calculateReadingTime(post.content);
    const formattedDate = formatDate(post.date);

    return (
        <PageTransition>
        <PageLayout>
            <SEO
                title={`${post.title} - Yuvaraj Guru's Blog`}
                description={post.summary}
                keywords={post.tags.join(', ')}
                url={`https://yuvarajguru.dev/blog/${post.slug}`}
                type="article"
            />

            <div className="max-w-4xl mx-auto py-8 pb-20">
                {/* Back Button */}
                <FadeIn>
                <Link
                    to="/blog"
                    className="inline-flex items-center text-primary hover:text-primary-light transition-colors mb-8"
                >
                    <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                    Back to Blog
                </Link>
                </FadeIn>

                {/* Article Header */}
                <article className="prose prose-lg prose-invert max-w-none">
                    <FadeIn delay={0.1}>
                    <header className="mb-8">
                        <h1 className="text-4xl font-heading font-bold text-typography mb-6 leading-tight">
                            {post.title}
                        </h1>

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-6 text-typography opacity-70 mb-6">
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                                <span>{formattedDate}</span>
                            </div>
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faClock} className="mr-2" />
                                <span>{readingTime} min read</span>
                            </div>
                            {post.author && (
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                                    <span>By {post.author.name}</span>
                                </div>
                            )}
                        </div>

                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-6">
                                <FontAwesomeIcon icon={faTag} className="text-typography opacity-70 mt-1" />
                                {post.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full font-medium border border-primary/30"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Featured Image */}
                        <motion.div
                            className="mb-8 overflow-hidden rounded-xl"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <img
                                className="w-full h-64 sm:h-80 object-cover"
                                src={post.image || blogDefaultImg}
                                alt={post.title}
                            />
                        </motion.div>
                    </header>
                    </FadeIn>

                    {/* Article Content */}
                    <FadeIn delay={0.2}>
                    <div className="text-typography">
                        {/* Introduction */}
                        {post.content.introduction && (
                            <section className="mb-8">
                                <h2 className="text-2xl font-heading font-bold text-typography mb-4">
                                    {post.content.introduction.heading}
                                </h2>
                                {post.content.introduction.paragraphs.map((paragraph, index) => (
                                    <p key={index} className="mb-4 text-typography opacity-90 leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </section>
                        )}

                        {/* Sections */}
                        {post.content.sections && post.content.sections.map((section, index) => (
                            <section key={index} className="mb-8">
                                <h2 className="text-2xl font-heading font-bold text-typography mb-4">
                                    {section.heading}
                                </h2>
                                {section.paragraphs.map((paragraph, pIndex) => (
                                    <p key={pIndex} className="mb-4 text-typography opacity-90 leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}

                                {/* Code Example */}
                                {section.codeExample && (
                                    <div className="my-6">
                                        <div className="bg-surface border border-borderLight rounded-xl overflow-hidden">
                                            <div className="flex items-center justify-between px-4 py-2 bg-surface-hover border-b border-borderLight">
                                                <span className="text-xs font-mono text-typography-muted uppercase">{section.codeExample.language}</span>
                                            </div>
                                            <pre className="p-4 overflow-x-auto">
                                                <code className="text-primary text-sm font-mono">
                                                    {section.codeExample.content}
                                                </code>
                                            </pre>
                                        </div>
                                    </div>
                                )}
                            </section>
                        ))}

                        {/* Conclusion */}
                        {post.content.conclusion && (
                            <section className="mb-8">
                                <h2 className="text-2xl font-heading font-bold text-typography mb-4">
                                    {post.content.conclusion.heading}
                                </h2>
                                {post.content.conclusion.paragraphs.map((paragraph, index) => (
                                    <p key={index} className="mb-4 text-typography opacity-90 leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </section>
                        )}

                        {/* Call to Action */}
                        {post.content.cta && (
                            <section className="mb-8 p-6 bg-primary/10 rounded-xl border-l-4 border-primary">
                                <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                                    {post.content.cta.heading}
                                </h2>
                                {post.content.cta.paragraphs.map((paragraph, index) => (
                                    <p key={index} className="mb-4 text-typography opacity-90 leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </section>
                        )}
                    </div>
                    </FadeIn>
                </article>

                {/* Navigation */}
                <FadeIn delay={0.3}>
                <div className="mt-12 pt-8 border-t border-borderLight">
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-primary hover:text-primary-light transition-colors"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                        Back to All Posts
                    </Link>
                </div>
                </FadeIn>
            </div>
        </PageLayout>
        </PageTransition>
    );
};

export default BlogPost;
