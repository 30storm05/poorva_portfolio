/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vintage-blue-primary': 'var(--vintage-blue-primary)',
        'vintage-blue-secondary': 'var(--vintage-blue-secondary)',
        'vintage-blue-light': 'var(--vintage-blue-light)',
        'vintage-cream': 'var(--vintage-cream)',
        'vintage-paper': 'var(--vintage-paper)',
        'vintage-brown': 'var(--vintage-brown)',
        'vintage-red': 'var(--vintage-red)',
        'vintage-dark': 'var(--vintage-dark)',
        'sky-blue': 'var(--sky-blue)',
        'shadow-blue': 'var(--shadow-blue)',
        'light-blue-grey': 'var(--light-blue-grey)',
      },
    },
  },
  plugins: [],
}