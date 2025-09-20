// pages/Blog.js
import React, { useState, useMemo } from 'react';
import PageTitle from '../components/PageTitle';
import SEO from '../components/SEO';
import BlogCard from '../components/BlogCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

const props = {
    title: "My",
    highlightTitle: "Blog",
    bgTitle: "Posts"
}

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
                    "When building web applications, speed and performance are paramount to providing a seamless user experience. With React, while we get an efficient way to create dynamic, complex user interfaces, it’s easy to overlook performance optimizations as the app scales.",
                    "A well-optimized React app loads faster, is more responsive, and ultimately leads to higher user satisfaction and engagement. In this guide, we’ll dive into several effective techniques to optimize your React apps for peak performance."
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
                        "In React, re-rendering occurs when a component’s state or props change, but some components might not need to re-render every time, especially if their props haven’t changed.",
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
                // Additional sections as necessary
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
    },
    {
        "id": 2,
        "title": "Building Scalable Vue.js Applications",
        "slug": "building-scalable-vuejs-applications",
        "summary": "Learn how to structure and build Vue.js applications that can scale from small projects to enterprise-level solutions.",
        "tags": ["Vue.js", "JavaScript", "Web Development", "Architecture"],
        "author": {
            "name": "Yuvaraj",
            "profileImage": "author-yuvaraj.jpg"
        },
        "date": "2024-09-15",
        "content": {
            "introduction": {
                "heading": "Introduction",
                "paragraphs": [
                    "Vue.js has gained immense popularity for its simplicity and flexibility, but building scalable applications requires careful planning and architecture decisions.",
                    "In this comprehensive guide, we'll explore best practices for structuring Vue.js applications that can grow from simple prototypes to complex enterprise solutions."
                ]
            },
            "sections": [
                {
                    "heading": "Component Architecture",
                    "paragraphs": [
                        "A well-structured component hierarchy is the foundation of any scalable Vue.js application.",
                        "Start with a clear separation of concerns and follow the single responsibility principle for each component."
                    ]
                }
            ],
            "conclusion": {
                "heading": "Conclusion",
                "paragraphs": [
                    "Building scalable Vue.js applications is an art that combines technical expertise with strategic planning. By following these patterns and best practices, you'll be well-equipped to handle projects of any size."
                ]
            }
        }
    },
    {
        "id": 3,
        "title": "Modern JavaScript Features Every Developer Should Know",
        "slug": "modern-javascript-features-every-developer-should-know",
        "summary": "Explore the latest JavaScript features that can improve your code quality, readability, and development productivity.",
        "tags": ["JavaScript", "ES6+", "Programming", "Best Practices"],
        "author": {
            "name": "Yuvaraj",
            "profileImage": "author-yuvaraj.jpg"
        },
        "date": "2024-08-22",
        "content": {
            "introduction": {
                "heading": "Introduction",
                "paragraphs": [
                    "JavaScript continues to evolve rapidly, with new features being added regularly that can significantly improve your development experience.",
                    "In this article, we'll explore the most important modern JavaScript features that every developer should master."
                ]
            },
            "sections": [
                {
                    "heading": "Optional Chaining and Nullish Coalescing",
                    "paragraphs": [
                        "Optional chaining (?.) allows you to safely access nested object properties without worrying about null or undefined values.",
                        "Nullish coalescing (??) provides a better way to handle default values compared to the logical OR operator."
                    ]
                }
            ],
            "conclusion": {
                "heading": "Conclusion",
                "paragraphs": [
                    "Staying up-to-date with modern JavaScript features is essential for writing cleaner, more maintainable code. These features not only improve code quality but also enhance developer productivity."
                ]
            }
        }
    }
];

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
        <>
            <SEO
                title="Blog - Yuvaraj Guru's Insights on Full Stack Development"
                description="Read Yuvaraj Guru's blog posts about React optimization, Vue.js best practices, Node.js development, and full-stack development insights from 10+ years of experience."
                keywords="Yuvaraj Guru Blog, React Performance, Vue.js Tips, Node.js Development, Full Stack Development Blog, JavaScript Best Practices, Web Development Insights"
                url="https://yuvarajguru.dev/blog"
                type="website"
            />
            <PageTitle {...props}></PageTitle>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Search and Filter Section */}
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
                            className="w-full pl-10 pr-4 py-3 bg-bgLight border border-borderLight rounded-lg text-typography placeholder-typography placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                        <span className="text-typography font-medium">Filter by tag:</span>
                        <button
                            onClick={() => setSelectedTag('')}
                            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${!selectedTag
                                    ? 'bg-primary text-background'
                                    : 'bg-bgLight text-typography opacity-70 hover:opacity-100 border border-borderLight'
                                }`}
                        >
                            All
                        </button>
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(tag)}
                                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${selectedTag === tag
                                        ? 'bg-primary text-background'
                                        : 'bg-bgLight text-typography opacity-70 hover:opacity-100 border border-borderLight'
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>

                    {/* Active Filters */}
                    {(searchTerm || selectedTag) && (
                        <div className="flex items-center gap-2 text-sm">
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
                        </div>
                    )}
                </div>

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
                        {paginatedPosts.map(post => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-typography opacity-70 text-lg mb-4">
                            No blog posts found matching your criteria.
                        </p>
                        <button
                            onClick={clearFilters}
                            className="text-primary hover:text-primary hover:opacity-80 underline"
                        >
                            Clear filters to see all posts
                        </button>
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <nav className="mt-12 mb-8">
                        <ul className="flex justify-center space-x-2">
                            {/* Previous button */}
                            <li>
                                <button
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${currentPage === 1
                                            ? 'bg-bgLight text-typography opacity-50 cursor-not-allowed'
                                            : 'bg-bgLight text-typography hover:bg-primary hover:text-background'
                                        }`}
                                >
                                    Previous
                                </button>
                            </li>

                            {/* Page numbers */}
                            {[...Array(totalPages)].map((_, index) => {
                                const page = index + 1;
                                return (
                                    <li key={page}>
                                        <button
                                            onClick={() => setCurrentPage(page)}
                                            className={`w-10 h-10 transition-all duration-300 text-center flex items-center justify-center rounded-full ${currentPage === page
                                                    ? 'bg-primary text-background font-bold'
                                                    : 'bg-bgLight text-typography hover:bg-primary hover:text-background'
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    </li>
                                );
                            })}

                            {/* Next button */}
                            <li>
                                <button
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${currentPage === totalPages
                                            ? 'bg-bgLight text-typography opacity-50 cursor-not-allowed'
                                            : 'bg-bgLight text-typography hover:bg-primary hover:text-background'
                                        }`}
                                >
                                    Next
                                </button>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </>
    );
}
