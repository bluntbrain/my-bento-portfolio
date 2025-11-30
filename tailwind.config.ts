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
        // github dark theme
        primary: '#58a6ff',
        secondary: '#3fb950',
        accent: '#f78166',
        purple: '#a371f7',
        success: '#3fb950',
        warning: '#d29922',
        // github gray scale
        gh: {
          black: '#000000',
          950: '#0d1117',
          900: '#161b22',
          800: '#21262d',
          700: '#30363d',
          600: '#484f58',
          500: '#6e7681',
          400: '#8b949e',
          300: '#b1bac4',
          200: '#c9d1d9',
          100: '#e6edf3',
        },
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
