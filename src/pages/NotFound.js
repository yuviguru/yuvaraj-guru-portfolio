import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import SEO from '../components/SEO';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
    return (
        <PageLayout>
            <SEO
                title="404 - Page Not Found | Yuvaraj Guru Portfolio"
                description="The page you're looking for doesn't exist. Return to Yuvaraj Guru's portfolio homepage to explore projects, blog posts, and professional information."
                url="https://yuvarajguru.dev/404"
                type="website"
            />

            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center max-w-md mx-auto">
                    {/* 404 Number */}
                    <div className="mb-8">
                        <h1 className="text-9xl font-bold text-primary opacity-20 select-none">
                            404
                        </h1>
                    </div>

                    {/* Main Message */}
                    <h2 className="text-3xl md:text-4xl font-bold text-typography mb-4">
                        Page Not Found
                    </h2>

                    <p className="text-typography opacity-70 mb-8 leading-relaxed">
                        Oops! The page you're looking for doesn't exist. It might have been moved,
                        deleted, or you entered the wrong URL.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/"
                            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
                        >
                            <FontAwesomeIcon icon={faHome} className="mr-2" />
                            Go to Homepage
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="inline-flex items-center px-6 py-3 bg-mutedText text-activeText rounded-lg font-medium hover:bg-borderLight transition-colors duration-200"
                        >
                            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                            Go Back
                        </button>
                    </div>

                    {/* Quick Links */}
                    <div className="mt-12 pt-8 border-t border-borderLight">
                        <p className="text-typography opacity-60 mb-4 text-sm">
                            Or explore these sections:
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <Link
                                to="/about"
                                className="text-primary hover:text-primary/80 transition-colors"
                            >
                                About Me
                            </Link>
                            <Link
                                to="/portfolio"
                                className="text-primary hover:text-primary/80 transition-colors"
                            >
                                Portfolio
                            </Link>
                            <Link
                                to="/blog"
                                className="text-primary hover:text-primary/80 transition-colors"
                            >
                                Blog
                            </Link>
                            <Link
                                to="/contact"
                                className="text-primary hover:text-primary/80 transition-colors"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default NotFound;
