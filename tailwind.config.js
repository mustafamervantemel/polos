/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Polo's Brand Colors
        brand: {
          orange: '#FFAA29',
          black: '#231F20',
        },
        primary: {
          50: '#fff8ed',
          100: '#ffeed4',
          200: '#ffdaa8',
          300: '#ffc271',
          400: '#FFAA29',
          500: '#ff9500',
          600: '#e67500',
          700: '#bf5700',
          800: '#974400',
          900: '#7a3600',
        },
      },
    },
  },
  plugins: [],
};
