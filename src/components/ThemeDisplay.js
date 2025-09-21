import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeDisplay = () => {
    const { theme, isDark, isLight } = useTheme();

    return (
        <div className="fixed bottom-4 left-4 z-50 bg-mutedText text-activeText px-3 py-2 rounded-lg text-sm opacity-75 hover:opacity-100 transition-opacity">
            Current theme: <span className="font-semibold text-primary">{theme}</span>
            {isDark && ' 🌙'}
            {isLight && ' ☀️'}
        </div>
    );
};

export default ThemeDisplay;
