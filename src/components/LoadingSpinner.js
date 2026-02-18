import React from 'react';

// Theme colors matching the website
const THEME = {
    primary: '#a78bfa',
    accent: '#34d399',
};

const LoadingSpinner = ({ className = "", text = "", fullScreen = false }) => {
    const spinner = (
        <div
            className="w-8 h-8 rounded-full animate-spin"
            style={{
                border: `2px solid ${THEME.primary}20`,
                borderTopColor: THEME.primary,
            }}
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
