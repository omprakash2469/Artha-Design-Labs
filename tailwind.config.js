/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "8rem",
      },
    },
    extend: {
      fontFamily: {
        hannari: ["var(--font-hannari)"],
        poppins: ["var(--font-poppins)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        theme: {
          one: "#FEFAE0",
          two: "#DDA15E",
          three: "#BC6C25",
          four: "#E9EDC9",
          five: "#FAEDCD",
          six: "#D4A373",
        },
      },
    },
  },
  plugins: [],
};
