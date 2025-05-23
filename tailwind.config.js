// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flashRed: {
          '0%, 100%': { color: 'white' },
          '50%': { color: '#ef4444' }, // red-500
        },
      },
      animation: {
        'letter-flash': 'flashRed 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
