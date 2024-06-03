/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quickSand: ["Quicksand", "sans-serif"],
        qanelasRegular: ["Qanelas Regular", "sans-serif"],
        qanelasMedium: ["Qanelas Medium", "sans-serif"],
        qanelasSemibold: ["Qanelas SemiBold", "sans-serif"],
        qanelasBold: ["Qanelas Bold", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
