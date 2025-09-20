// pages/BlogPost.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { calculateReadingTime, formatDate } from '../utils/helper';
import blogDefaultImg from '../assets/images/blog-default-img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faClock, faCalendar, faUser, faTag } from '@fortawesome/free-solid-svg-icons';

// Import posts data (in real app, this would come from an API or context)
const posts = [
    {
        "id": 1,
        "title": "Optimizing React Apps for Speed and Performance",
        "slug": "optimizing-react-speed-performance",
        "summary": "A comprehensive guide on optimizing React apps for speed and performance, with techniques like memoization, code-splitting, and lazy loading.",
        "tags": ["React", "Performance", "Web Development", "Optimization"],
        "author": {
            "name": "Yuvaraj",
            "profileImage": "author-yuvaraj.jpg"
        },
        "date": "2024-10-09",
        "content": {
            "introduction": {
                "heading": "Introduction",
                "paragraphs": [
                    "When building web applications, speed and performance are paramount to providing a seamless user experience. With React, while we get an efficient way to create dynamic, complex user interfaces, it's easy to overlook performance optimizations as the app scales.",
                    "A well-optimized React app loads faster, is more responsive, and ultimately leads to higher user satisfaction and engagement. In this guide, we'll dive into several effective techniques to optimize your React apps for peak performance."
                ]
            },
            "sections": [
                {
                    "heading": "Why Optimization Matters in React Apps",
                    "paragraphs": [
                        "The performance of a web app has a direct effect on user experience and SEO. Users expect fast and responsive applications, and Google uses page speed as a ranking factor, meaning performance issues could hurt discoverability.",
                        "According to research, 53% of users abandon a site that takes longer than 3 seconds to load, which means every millisecond counts."
                    ]
                },
                {
                    "heading": "Using React.memo to Prevent Unnecessary Component Re-renders",
                    "paragraphs": [
                        "In React, re-rendering occurs when a component's state or props change, but some components might not need to re-render every time, especially if their props haven't changed.",
                        "`React.memo` is a higher-order component that can be used to wrap functional components to memoize them, effectively preventing unnecessary re-renders."
                    ],
                    "codeExample": {
                        "language": "jsx",
                        "content": "import React from 'react';\n\nconst ExpensiveComponent = React.memo(({ data }) => {\n    console.log('Rendering ExpensiveComponent');\n    return <div>{data}</div>;\n});\n\nconst ParentComponent = () => {\n    const [counter, setCounter] = React.useState(0);\n\n    return (\n        <div>\n            <ExpensiveComponent data=\"I won't re-render unless props change!\" />\n            <button onClick={() => setCounter(counter + 1)}>Increment</button>\n        </div>\n    );\n};"
                    }
                },
                {
                    "heading": "Optimizing with useCallback and useMemo",
                    "paragraphs": [
                        "The hooks `useCallback` and `useMemo` are invaluable for optimizing performance by memoizing functions and computed values, respectively.",
                        "`useCallback` prevents function re-creations on every render, while `useMemo` memoizes expensive calculations, preventing unnecessary recalculations."
                    ],
                    "codeExample": {
                        "language": "jsx",
                        "content": "import React, { useState, useCallback, useMemo } from 'react';\n\nconst ExpensiveCalculationComponent = ({ count }) => {\n    const calculateValue = useMemo(() => {\n        console.log('Calculating value...');\n        return count * 1000;\n    }, [count]);\n\n    return <div>Calculated Value: {calculateValue}</div>;\n};"
                    }
                }
            ],
            "conclusion": {
                "heading": "Conclusion",
                "paragraphs": [
                    "Optimizing React apps for performance is a blend of careful planning and technical expertise. By implementing these techniques—using `React.memo`, `useCallback`, `useMemo`, lazy loading, tree shaking, and optimizing API calls—you can create fast, responsive applications that keep users engaged and coming back for more."
                ]
            },
            "cta": {
                "heading": "Call to Action",
                "paragraphs": [
                    "Ready to supercharge your React app's performance? Try implementing some of these techniques, and let us know what improvements you notice. Have any questions or unique tips of your own? Share them in the comments below!"
                ]
            }
        }
    }
];

const BlogPost = () => {
    const { slug } = useParams();
    const post = posts.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-typography mb-4">Post Not Found</h1>
                    <p className="text-gray-400 mb-6">The blog post you're looking for doesn't exist.</p>
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-primary hover:text-primary hover:opacity-80 transition-opacity"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                        Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    const readingTime = calculateReadingTime(post.content);
    const formattedDate = formatDate(post.date);

    return (
        <>
            <SEO
                title={`${post.title} - Yuvaraj Guru's Blog`}
                description={post.summary}
                keywords={post.tags.join(', ')}
                url={`https://yuvarajguru.dev/blog/${post.slug}`}
                type="article"
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Back Button */}
                <Link
                    to="/blog"
                    className="inline-flex items-center text-primary hover:text-primary hover:opacity-80 transition-opacity mb-8"
                >
                    <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                    Back to Blog
                </Link>

                {/* Article Header */}
                <article className="prose prose-lg prose-invert max-w-none">
                    <header className="mb-8">
                        <h1 className="text-4xl font-bold text-typography mb-6 leading-tight">
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
                        <div className="mb-8">
                            <img
                                className="w-full h-64 sm:h-80 object-cover rounded-lg"
                                src={post.image || blogDefaultImg}
                                alt={post.title}
                            />
                        </div>
                    </header>

                    {/* Article Content */}
                    <div className="text-typography">
                        {/* Introduction */}
                        {post.content.introduction && (
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-typography mb-4">
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
                                <h2 className="text-2xl font-bold text-typography mb-4">
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
                                        <pre className="bg-bgLight border border-borderLight p-4 rounded-lg overflow-x-auto">
                                            <code className="text-primary text-sm">
                                                {section.codeExample.content}
                                            </code>
                                        </pre>
                                    </div>
                                )}
                            </section>
                        ))}

                        {/* Conclusion */}
                        {post.content.conclusion && (
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-typography mb-4">
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
                            <section className="mb-8 p-6 bg-primary/10 rounded-lg border-l-4 border-primary">
                                <h2 className="text-2xl font-bold text-primary mb-4">
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
                </article>

                {/* Navigation */}
                <div className="mt-12 pt-8 border-t border-borderLight">
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-primary hover:text-primary hover:opacity-80 transition-opacity"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                        Back to All Posts
                    </Link>
                </div>
            </div>
        </>
    );
};

export default BlogPost;
