/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary-rgb) / <alpha-value>)',
        'primary-light': 'rgb(var(--color-primary-light-rgb) / <alpha-value>)',
        'primary-dark': 'rgb(var(--color-primary-dark-rgb) / <alpha-value>)',
        accent: 'rgb(var(--color-accent-rgb) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary-rgb) / <alpha-value>)',
        background: 'rgb(var(--color-background-rgb) / <alpha-value>)',
        surface: 'rgb(var(--color-surface-rgb) / <alpha-value>)',
        'surface-hover': 'rgb(var(--color-surface-hover-rgb) / <alpha-value>)',
        buttons: 'var(--color-buttons)',
        typography: 'rgb(var(--color-typography-rgb) / <alpha-value>)',
        'typography-muted': 'rgb(var(--color-typography-muted-rgb) / <alpha-value>)',
        mutedText: 'rgb(var(--color-nav-pills-bg-rgb) / <alpha-value>)',
        activeText: 'rgb(var(--color-active-text-rgb) / <alpha-value>)',
        navPillsBg: 'rgb(var(--color-nav-pills-bg-rgb) / <alpha-value>)',
        borderLight: 'rgb(var(--color-border-rgb) / <alpha-value>)',
        bgLight: 'rgb(var(--color-bg-gray-rgb) / <alpha-value>)',
        // Ember Darkroom palette
        ink: '#050505',
        coal: '#0c0b0a',
        slate: '#1d1e21',
        smoke: '#2a2725',
        cream: '#f3eee4',
        ember: '#c8794f',
        rust: '#3d1a0f',
      },
      fontFamily: {
        sans: ['Satoshi', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['"Cabinet Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Chubbo', '"Bespoke Serif"', 'Georgia', 'serif'],
        serif: ['"Bespoke Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        hand: ['Comico', '"Cabinet Grotesk"', 'sans-serif'],
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'twinkle': 'twinkle 3.2s ease-in-out infinite',
        'grain': 'grain 0.9s steps(6) infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'twinkle': {
          '0%, 100%': { opacity: '0.35', transform: 'scale(0.85) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1.1) rotate(45deg)' },
        },
        'grain': {
          '0%': { transform: 'translate(0, 0)' },
          '20%': { transform: 'translate(-3%, 2%)' },
          '40%': { transform: 'translate(2%, -3%)' },
          '60%': { transform: 'translate(-2%, -1%)' },
          '80%': { transform: 'translate(3%, 3%)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
    },
  },
  plugins: [],
}
