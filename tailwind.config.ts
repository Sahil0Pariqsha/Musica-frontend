import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
        quicksand: ["var(--font-quicksand)"],
      },
      dropShadow: {
        glowDark: [
          "0 0px 8px rgba(255,255, 255, 0.85)",
          "0 0px 15px rgba(255, 255,255, 0.5)",
        ],
        glowLight: [
          "0 0px 8px rgba(0,245, 255, 0.85)",
          "0 0px 15px rgba(0, 255,255, 0.5)",
        ],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config
