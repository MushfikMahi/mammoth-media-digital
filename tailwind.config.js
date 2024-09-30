/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mammothTheme: {
          primary: "#99aa5e",
          secondary: "#fffbe6",
          // accent: "#99aa5e",
          // neutral: "#",
          // "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
};
