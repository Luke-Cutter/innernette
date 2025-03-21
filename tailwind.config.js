// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'marquee': 'marquee 25s linear infinite',
        'glitch-1': 'glitch1 4s infinite linear alternate-reverse',
        'glitch-2': 'glitch2 4s infinite linear alternate-reverse',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glitch1: {
          '0%': { transform: 'none', opacity: '1' },
          '7%': { transform: 'skew(-0.5deg, -0.9deg)', opacity: '0.75' },
          '10%': { transform: 'none', opacity: '1' },
          '27%': { transform: 'none', opacity: '1' },
          '30%': { transform: 'skew(0.8deg, -0.1deg)', opacity: '0.75' },
          '35%': { transform: 'none', opacity: '1' },
          '52%': { transform: 'none', opacity: '1' },
          '55%': { transform: 'skew(-1deg, 0.2deg)', opacity: '0.75' },
          '50%': { transform: 'none', opacity: '1' },
          '72%': { transform: 'none', opacity: '1' },
          '75%': { transform: 'skew(0.4deg, 1deg)', opacity: '0.75' },
          '80%': { transform: 'none', opacity: '1' },
          '100%': { transform: 'none', opacity: '1' },
        },
        glitch2: {
          '0%': { transform: 'none', opacity: '0.75' },
          '7%': { transform: 'translate(2px, 3px)', opacity: '0.5' },
          '10%': { transform: 'none', opacity: '0.75' },
          '27%': { transform: 'none', opacity: '0.75' },
          '30%': { transform: 'translate(-5px, -2px)', opacity: '0.5' },
          '35%': { transform: 'none', opacity: '0.75' },
          '52%': { transform: 'none', opacity: '0.75' },
          '55%': { transform: 'translate(5px, -1px)', opacity: '0.5' },
          '50%': { transform: 'none', opacity: '0.75' },
          '72%': { transform: 'none', opacity: '0.75' },
          '75%': { transform: 'translate(2px, 1px)', opacity: '0.5' },
          '80%': { transform: 'none', opacity: '0.75' },
          '100%': { transform: 'none', opacity: '0.75' },
        },
      },
    },
  },
  plugins: [],
}