import React from 'react';

const PageLayout = ({
    children,
    className = "",
    containerSize = "default", // "default", "wide", "full"
    paddingTop = "default" // "default", "large", "small", "none"
}) => {
    const getContainerClass = () => {
        switch (containerSize) {
            case "wide":
                return "max-w-7xl";
            case "full":
                return "max-w-full";
            default:
                return "max-w-6xl";
        }
    };

    const getPaddingClass = () => {
        switch (paddingTop) {
            case "large":
                return "pt-24 lg:pt-16";
            case "small":
                return "pt-8 lg:pt-12";
            case "none":
                return "";
            default:
                return "pt-16 lg:pt-20";
        }
    };

    return (
        <div className={`min-h-screen bg-background ${getPaddingClass()} ${className}`}>
            <div className={`${getContainerClass()} mx-auto px-4 sm:px-6 lg:px-8`}>
                {children}
            </div>
        </div>
    );
};

export default PageLayout;
