/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        sunsetOrange: "#D87D4A",
        midnightBlack: "#101010",
        cloudGray: "#F1F1F1",
        snowWhite: "#FAFAFA",
        peachy: "#FBAF85",
        pureWhite: "#FFFFFF",
        deepBlack: "#000000",
      },
    },
  },
  plugins: [],
};
