import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = ({ className = "" }) => {
    const { theme, toggleTheme, isDark } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`relative w-14 h-7 bg-mutedText rounded-full p-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 hover:bg-borderLight ${className}`}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            {/* Toggle Circle */}
            <div
                className={`relative w-5 h-5 bg-white rounded-full shadow-lg transform transition-all duration-300 flex items-center justify-center ${isDark ? 'translate-x-0' : 'translate-x-7'
                    }`}
            >
                <FontAwesomeIcon
                    icon={isDark ? faMoon : faSun}
                    className={`text-xs transition-colors duration-300 ${isDark ? 'text-blue-600' : 'text-yellow-500'
                        }`}
                />
            </div>

            {/* Background Icons */}
            <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
                <FontAwesomeIcon
                    icon={faMoon}
                    className={`text-xs transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-60 text-gray-400'
                        }`}
                />
                <FontAwesomeIcon
                    icon={faSun}
                    className={`text-xs transition-opacity duration-300 ${isDark ? 'opacity-60 text-gray-400' : 'opacity-0'
                        }`}
                />
            </div>
        </button>
    );
};

export default ThemeSwitcher;
