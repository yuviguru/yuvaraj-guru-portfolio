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
                return "pt-32 lg:pt-40";
            case "small":
                return "pt-24 lg:pt-28";
            case "none":
                return "";
            default:
                return "pt-28 lg:pt-36";
        }
    };

    return (
        <div className={`min-h-screen bg-background ${getPaddingClass()} ${className}`}>
            <div className={`${getContainerClass()} mx-auto px-5 sm:px-8 lg:px-12`}>
                {children}
            </div>
        </div>
    );
};

export default PageLayout;
