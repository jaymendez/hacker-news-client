/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      opacity: {
        30: "0.3",
      },
      colors: {
        "accent-1": "cyan",
      },
      fontFamily: {
        sans: ["Inter var", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: "#ea580c",
              "&:hover": {
                color: "#c2410c",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
