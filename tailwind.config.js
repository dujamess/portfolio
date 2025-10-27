/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
        luckiest: ['"Luckiest Guy"', 'cursive'],
      },      
      width: (() => {
        const obj = {};
        for (let i = 0; i <= 100; i++) obj[i] = `${i}%`;
        return obj;
      })(),
      height: (() => {
        const obj = {};
        for (let i = 0; i <= 100; i++) obj[i] = `${i}%`;
        return obj;
      })(),
    },
  },
  plugins: [],
}

