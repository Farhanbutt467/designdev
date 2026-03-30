import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-2": "#555555",
        "black-3": "#1C1C1C",
        "secondary-2": "#ffffffab",
        "white-2": "#999999",
        "white-3": "#FBF9F9",
        "white-4": "#FDFAF8",
        "border-2": "var(--border2)",
        "border-3": "var(--border3)",
        "mint-green": "#d8e9e4",
        "off-white": "#f9f3ee",
        "soft-pink": "#f4e0e0",
        "pink-border": "#C3B4B4",
        "yellow-2": "#d8544d",
        theme: "var(--theme)",
        primary: "var(--primary)",
        background: {
          DEFAULT: "var(--background)",
          fixed: {
            DEFAULT: "var(--background-fixed)",
            2: "var(--background-fixed2)",
          },
          2: "var(--background2)",
          3: "var(--background3)",
          4: "var(--background4)",
          5: "var(--background5)",
        },
        text: {
          DEFAULT: "var(--text)",
          fixed: {
            DEFAULT: "var(--text-fixed)",
            2: "var(--text-fixed2)",
            3: "var(--text-fixed3)",
            4: "var(--text-fixed4)",
          },
          2: "var(--text2)",
          3: "var(--text3)",
          4: "var(--text4)",
          5: "var(--text5)",
        },

        border: "var(--border)",
      },
      fontFamily: {
        primary: ["Kanit", "sans-serif"],
        getaway: ["getaway", "sans-serif"],
        instrument: ["Instrument Sans", "sans-serif"],
        beatricetrial: ["beatricetrial", "san-serif"],
        plusjakartasans: ["Plus Jakarta Sans", "sans-serif"],
        spacegrotesk: ["Space Grotesk", "sans-serif"],
        teko: ["Teko", "sans-serif"],
        khand: ["Khand", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  variants: {
    extend: {
      maxWidth: ["responsive"],
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
