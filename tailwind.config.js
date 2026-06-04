/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1a1f6e',
          indigo: '#2d35a8',
          light: '#4a54d4',
          teal: '#00b4a6',
          steel: '#6b7b8d',
          'steel-dark': '#2c3e50',
          'steel-light': '#e8edf2',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
