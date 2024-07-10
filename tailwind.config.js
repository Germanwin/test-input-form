/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // Just-In-Time компиляция для более быстрой сборки
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
