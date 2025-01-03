import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brown: {
          100: '#f0e9d5',
          200: '#e6dcc3',
          300: '#dccfb0',
          400: '#d2c29e',
          500: '#cbb48e',
          600: '#bfaa85',
          700: '#b39f7b',
          800: '#a89473',
          900: '#aa9474',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
