/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        stellar: {
          400: '#7dd3fc',
          500: '#38bdf8',
          600: '#0284c7',
        },
        cosmic: {
          950: '#050816',
          900: '#070b1f',
          800: '#0d1430',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(56, 189, 248, 0.24)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at top, rgba(56, 189, 248, 0.22), transparent 36rem)',
        'mesh-grid': 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
