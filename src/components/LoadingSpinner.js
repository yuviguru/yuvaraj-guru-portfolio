import React from 'react';

const LoadingSpinner = ({ className = "", text = "", fullScreen = false }) => {
    const spinner = (
        <div
            className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin"
        />
    );

    const content = (
        <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
            {spinner}
            {text && (
                <p className="text-typography opacity-70 text-sm font-medium">
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
