/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,html}'],
  theme: {
    extend: {
      colors: {
        khf: {
          red: '#c8102e',
          green: '#007a3d',
          black: '#111418',
          dark: '#1a1f26',
          gray: '#6b7280',
          light: '#f5f7fa',
          gold: '#f2b705',
        },
      },
      fontFamily: {
        head: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};