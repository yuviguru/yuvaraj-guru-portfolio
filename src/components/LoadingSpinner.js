import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const LoadingSpinner = ({
    size = "lg",
    className = "",
    text = "Loading...",
    fullScreen = false
}) => {
    const getSpinnerSize = () => {
        switch (size) {
            case "sm":
                return "text-sm";
            case "md":
                return "text-lg";
            case "lg":
                return "text-2xl";
            case "xl":
                return "text-4xl";
            default:
                return "text-2xl";
        }
    };

    const content = (
        <div className={`flex flex-col items-center justify-center ${className}`}>
            <FontAwesomeIcon
                icon={faSpinner}
                spin
                className={`text-primary mb-3 ${getSpinnerSize()}`}
            />
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
                <div className="bg-bgLight border border-borderLight rounded-lg p-8 shadow-lg">
                    {content}
                </div>
            </div>
        );
    }

    return content;
};

export default LoadingSpinner;
