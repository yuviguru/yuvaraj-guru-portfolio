// pages/Blog.js
import React from 'react';
import PageTitle from '../components/PageTitle';
import SEO from '../components/SEO';
import blogDefaultImg from '../assets/images/blog-default-img.jpg';

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
    }
];

export default function Blog() {
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Blog Item 1 */}
                    <div className="mb-8">
                        <div className="h-full bg-gray-800 rounded-md text-typography">
                            <div className="rounded-t-md cursor-pointer overflow-hidden group border-b-4 border-solid border-primary">
                                <a href="#" className="block relative overflow-hidden transition-transform duration-300">
                                    <img
                                        className="rounded-t-md transition-transform duration-300 group-hover:scale-110 w-full h-48 object-cover"
                                        src={blogDefaultImg}
                                        alt="Blog Post 1"
                                    />
                                </a>
                            </div>
                            <div className="bg-bgLight pt-5 px-6 pb-6 rounded-b-md">
                                <a
                                    href="#"
                                    className="leading-7 text-xl font-bold hover:text-primary transition-colors duration-300 block"
                                >
                                    How to Own Your Audience by Creating an Email List
                                </a>
                                <p className="mt-4 mb-1 font-sans text-sm sm:text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Blog Item 2 */}
                    <div className="mb-8">
                        <div className="h-full bg-bgLight rounded-md text-typography">
                            <div className="rounded-t-md cursor-pointer overflow-hidden group border-b-4 border-solid border-primary">
                                <a href="#" className="block relative overflow-hidden transition-transform duration-300">
                                    <img
                                        className="rounded-t-md transition-transform duration-300 group-hover:scale-110 w-full h-48 object-cover"
                                        src={blogDefaultImg}
                                        alt="Blog Post 2"
                                    />
                                </a>
                            </div>
                            <div className="bg-gray-800 pt-5 px-6 pb-6 rounded-b-md">
                                <a
                                    href="#"
                                    className="leading-7 text-lg font-semibold text-blue-500 hover:text-blue-700 transition-colors duration-300 block"
                                >
                                    Top 10 Toolkits for Deep Learning in 2020
                                </a>
                                <p className="mt-4 mb-1 font-sans text-sm sm:text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Blog Item 3 */}
                    <div className="mb-8">
                        <div className="h-full bg-bgLight rounded-md text-typography">
                            <div className="rounded-t-md cursor-pointer overflow-hidden group border-b-4 border-solid border-primary">
                                <a href="#" className="block relative overflow-hidden transition-transform duration-300">
                                    <img
                                        className="rounded-t-md transition-transform duration-300 group-hover:scale-110 w-full h-48 object-cover"
                                        src={blogDefaultImg}
                                        alt="Blog Post 3"
                                    />
                                </a>
                            </div>
                            <div className="bg-gray-800 pt-5 px-6 pb-6 rounded-b-md">
                                <a
                                    href="#"
                                    className="leading-7 text-lg font-semibold text-blue-500 hover:text-blue-700 transition-colors duration-300 block"
                                >
                                    Everything You Need to Know About Web Accessibility
                                </a>
                                <p className="mt-4 mb-1 font-sans text-sm sm:text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pagination */}
                <nav className="mt-6 mb-8">
                    <ul className="flex justify-center space-x-2">
                        <li className="active">
                            <a
                                href="#"
                                className="w-10 h-10 transition-all duration-300 text-center flex items-center justify-center bg-blue-500 rounded-full text-white hover:bg-blue-600"
                            >
                                1
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="w-10 h-10 transition-all duration-300 text-center flex items-center justify-center bg-gray-800 rounded-full text-white hover:bg-gray-700"
                            >
                                2
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
