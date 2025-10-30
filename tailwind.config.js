/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1976D2",
          dark: "#1565C0",
          light: "#E3F2FD"
        },
        bg: {
          page: "#F7FAFF",
          card: "#FFFFFF"
        },
        text: {
          primary: "#0A2540",
          secondary: "#4E5D78",
          mutted: "#9AA6B2"
        },
        border: "#E6ECF5",
        warn: "#F9A825",
        danger: "#D32F2F",
        success: "#2E7D32"
      },
      borderRadius: {
        xl: "8px"
      },
      boxShadow: {
        card: "0 2px 8px rgba(0,0,0,0.12)"
      }
    },
  },
  plugins: [],
};

