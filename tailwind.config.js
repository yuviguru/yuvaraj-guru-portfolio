/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      background: 'var(--color-background)',
      buttons: 'var(--color-buttons)',
      typography: 'var(--color-typography)',
      mutedText: 'var(--color-nav-pills-bg)',
      activeText: 'var(--color-active-text)',
      navPillsBg: 'var(--color-nav-pills-bg)',
      borderLight: 'var(--color-border)',
      bgLight: 'var(--color-bg-gray)',
    }
  },
  plugins: [],
}
