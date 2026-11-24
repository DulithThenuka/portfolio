/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#070b19',       // Deep Dark Navy
          surface: '#0b1226',  // Navy Surface
          card: '#0f1833',     // Card Navy
          cardHover: '#162245',// Hover Navy
          border: '#1c2b50',   // Navy Border
          text: '#94a3b8',
          heading: '#f8fafc'
        },
        navy: {
          950: '#040711',
          900: '#070b19',
          850: '#0b1226',
          800: '#0f1833',
          700: '#1c2b50',
          600: '#273c6e',
        },
        accent: {
          blue: '#3b82f6',
          indigo: '#6366f1',
          purple: '#8b5cf6',
          violet: '#a855f7',
          cyan: '#06b6d4'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'navy-glow': 'radial-gradient(ellipse at top, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.12), transparent 70%)',
      }
    },
  },
  plugins: [],
}
