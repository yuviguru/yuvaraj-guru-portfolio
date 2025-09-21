import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faRefresh, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log error details for debugging
        console.error('Error Boundary caught an error:', error, errorInfo);
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    handleReload = () => {
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-background flex items-center justify-center px-4">
                    <div className="max-w-md mx-auto text-center">
                        {/* Error Icon */}
                        <div className="mb-8">
                            <FontAwesomeIcon
                                icon={faExclamationTriangle}
                                className="text-6xl text-red-500 opacity-60"
                            />
                        </div>

                        {/* Error Message */}
                        <h1 className="text-3xl font-bold text-typography mb-4">
                            Something went wrong
                        </h1>

                        <p className="text-typography opacity-70 mb-8 leading-relaxed">
                            We're sorry, but something unexpected happened. The error has been logged
                            and we'll work on fixing it.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <button
                                onClick={this.handleReload}
                                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
                            >
                                <FontAwesomeIcon icon={faRefresh} className="mr-2" />
                                Reload Page
                            </button>

                            <Link
                                to="/"
                                className="inline-flex items-center px-6 py-3 bg-mutedText text-activeText rounded-lg font-medium hover:bg-borderLight transition-colors duration-200"
                            >
                                <FontAwesomeIcon icon={faHome} className="mr-2" />
                                Go to Homepage
                            </Link>
                        </div>

                        {/* Error Details (Development) */}
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <details className="text-left bg-bgLight border border-borderLight rounded-lg p-4 mt-8">
                                <summary className="text-typography font-medium cursor-pointer mb-2">
                                    Error Details (Development)
                                </summary>
                                <div className="text-xs text-typography opacity-70 font-mono">
                                    <div className="mb-2">
                                        <strong>Error:</strong> {this.state.error.toString()}
                                    </div>
                                    <div>
                                        <strong>Stack Trace:</strong>
                                        <pre className="mt-1 whitespace-pre-wrap">
                                            {this.state.errorInfo.componentStack}
                                        </pre>
                                    </div>
                                </div>
                            </details>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
