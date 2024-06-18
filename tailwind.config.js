/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "default-color": "#150b2b",
      },
    },
  },
  plugins: [require("daisyui")],
};
