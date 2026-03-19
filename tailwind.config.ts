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
        // vercel-style pure neutrals
        primary: '#ededed',
        secondary: '#a1a1a1',
        accent: '#ededed',
        purple: '#888888',
        success: '#a1a1a1',
        warning: '#888888',
        // pure gray scale — no blue tint
        gh: {
          black: '#000000',
          950: '#0a0a0a',
          900: '#111111',
          800: '#1a1a1a',
          700: '#262626',
          600: '#3f3f3f',
          500: '#666666',
          400: '#888888',
          300: '#a1a1a1',
          200: '#d4d4d4',
          100: '#ededed',
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
