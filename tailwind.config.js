/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'bpp-blue': {
          DEFAULT: '#1c5b96',
          50: '#f0f5fb',
          100: '#e1ebf6',
          200: '#c8d9ee',
          300: '#a1c0e3',
          400: '#73a0d5',
          500: '#5283c8',
          600: '#3c68b3',
          700: '#325392',
          800: '#1c5b96', // exact logo blue
          900: '#274171',
          950: '#1a294b',
        },
        'bpp-gold': {
          DEFAULT: '#c1983c',
          50: '#fcf9f1',
          100: '#f7f1e0',
          200: '#eee0c1',
          300: '#e3c99c',
          400: '#d5ac70',
          500: '#c9924c',
          600: '#bc7b40',
          700: '#9d5e35',
          800: '#814c31',
          900: '#c1983c', // exact logo gold
          950: '#3e2315',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glow-blue': '0 0 20px rgba(28, 91, 150, 0.5)',
        'glow-gold': '0 0 20px rgba(193, 152, 60, 0.5)',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}