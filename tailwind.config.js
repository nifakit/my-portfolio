/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['SF Pro Display', 'Inter', 'sans-serif'], 
      },
      colors: {
        glass: {
          bg: 'rgba(255, 255, 255, 0.08)',
          border: 'rgba(255, 255, 255, 0.15)',
          dark: {
            bg: 'rgba(0, 0, 0, 0.35)',
            border: 'rgba(255, 255, 255, 0.1)',
          }
        },
        accent: {
          DEFAULT: '#6366f1', 
          hover: '#4f46e5',
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-light': '0 4px 20px 0 rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}