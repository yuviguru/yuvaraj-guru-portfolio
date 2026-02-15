import React from 'react';

const LoadingSpinner = ({ className = "", text = "", fullScreen = false }) => {
    const content = (
        <div className={`flex flex-col items-center justify-center ${className}`}>
            <div className="loader-bars">
                <div className="loader-bars__bar"></div>
                <div className="loader-bars__bar"></div>
                <div className="loader-bars__bar"></div>
                <div className="loader-bars__bar"></div>
                <div className="loader-bars__bar"></div>
                <div className="loader-bars__ball"></div>
            </div>
            {text && (
                <p className="text-typography opacity-70 text-sm font-medium mt-4">
                    {text}
                </p>
            )}
        </div>
    );

    if (fullScreen) {
        return (
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
                {content}
            </div>
        );
    }

    return content;
};

export default LoadingSpinner;
