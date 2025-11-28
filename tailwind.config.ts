import type { Config } from "tailwindcss";

const config: Config = {
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
        brand: {
          'black': '#000000',
          'prussian-blue': '#14213d',
          'orange': '#fca311',
          'grey': '#e5e5e5',
          'white': '#ffffff',
        },
        primary: '#fca311',
        secondary: '#3b82f6',
        accent: '#fbbf24',
      },
      keyframes: {
        "slide-in-from-bottom-full": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-out-to-bottom": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        "slide-in-from-bottom-full":
          "slide-in-from-bottom-full 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-out-to-bottom":
          "slide-out-to-bottom 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
