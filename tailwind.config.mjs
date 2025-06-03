/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        dark: 'var(--dark)',
        darker: 'var(--darker)',
        lightGray: 'var(--light-gray)',
        mediumGray: 'var(--medium-gray)',
        borderGray: 'var(--border-gray)',
        success: 'var(--success)',
        warning: 'var(--warning)',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        raleway: ['var(--font-raleway)'],
      },
    },
  },
  plugins: [],
}

export default config
