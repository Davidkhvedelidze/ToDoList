/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#f8f4ee',
          100: '#f3ebe0',
          200: '#e6d6bf',
          300: '#d9c1a0',
          400: '#cba082',
          500: '#b4805f',
          600: '#946549',
          700: '#6f4b34',
          800: '#483323',
          900: '#261c13'
        }
      },
      boxShadow: {
        glass: '0 20px 45px -20px rgba(15, 23, 42, 0.45)'
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(135deg, rgba(11,34,57,0.85), rgba(122,58,24,0.7)), url(https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80)'
      }
    }
  },
  plugins: []
};
