/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // make sure to include all file types
    // Add any additional paths where Tailwind classes might be used
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Gabarito", "sans-serif"],
        thai: ["IBM Plex Sans Thai", "sans-serif"],
      },
    },
  },
  plugins: [],
};
