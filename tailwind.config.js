/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode based on class
  theme: {
    extend: {
      colors: {
        // Define colors for light mode
        white: "#FFFFFF",
        gray: {
          900: "#1F2937",
        },
      },
      // Define colors for dark mode
      darkMode: {
        colors: {
          white: "#111827",
          gray: {
            900: "#F3F4F6",
          },
        },
      },
    },
  },
  plugins: [],
};
