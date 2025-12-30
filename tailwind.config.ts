import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        trivira: {
          primary: "#3F8133",    // Main Green
          dark: "#086938",       // Deep Green
          cream: "#FCF2E7",      // Hero Background
          peach: "#FFEBD6",      // Testimonials Background
          textGray: "#969494",   
          accent: {
            red: "#DA483B",
            orange: "#F89920",
            purple: "#9F3691",
            pink: "#EA236F",
          }
        },
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-rubik)", "sans-serif"],
        tag: ["var(--font-dm-sans)", "sans-serif"],
      },
      animation: {
        "bounce-slow": "float 3s ease-in-out infinite", 
        "fade-in": "fade-in 1s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" }, 
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "none" },
        },
      },
    },
  },
  plugins: [],
};

export default config;