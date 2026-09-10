/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FAF8F5",
        secondary: "#6E665E",
        tertiary: "#FFFFFF",
        accent: "#AF9D8E",
        "accent-dark": "#8C7A6B",
        "accent-light": "#D6C7B9",
        "accent-rose": "#C4B5A5",
        "heading-gray": "#48413A",
        "heading-dark": "#3D3731",
        "text-body": "#6E665E",
        "text-muted": "#8A8077",
        "black-100": "#F5F1EB",
        "black-200": "#EAE3DB",
        "white-100": "#FAF8F5",
        "gray-warm": "#8C7A6B",
      },
      fontFamily: {
        heading: ['"Clash Display"', "sans-serif"],
        sans: ['"Satoshi"', "sans-serif"],
      },
      boxShadow: {
        card: "0px 20px 60px -10px rgba(175, 157, 142, 0.2)",
        "warm-glow":
          "0 0 30px rgba(175, 157, 142, 0.25), 0 0 60px rgba(140, 122, 107, 0.15)",
        "warm-glow-lg":
          "0 0 40px rgba(175, 157, 142, 0.35), 0 0 80px rgba(140, 122, 107, 0.2)",
        "warm-glow-sm":
          "0 0 15px rgba(175, 157, 142, 0.15), 0 0 30px rgba(140, 122, 107, 0.1)",
        glass:
          "0 8px 32px rgba(175, 157, 142, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.6)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern":
          "radial-gradient(ellipse at 25% 30%, rgba(175, 157, 142, 0.18) 0%, transparent 60%), radial-gradient(ellipse at 75% 70%, rgba(140, 122, 107, 0.12) 0%, transparent 60%)",
        "warm-gradient": "linear-gradient(135deg, #AF9D8E 0%, #8C7A6B 100%)",
        "warm-gradient-subtle":
          "linear-gradient(135deg, rgba(175, 157, 142, 0.12) 0%, rgba(140, 122, 107, 0.06) 100%)",
        "taupe-gradient": "linear-gradient(135deg, #48413A 0%, #8C7A6B 100%)",
      },
      animation: {
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "reveal-up": "revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": {
            boxShadow:
              "0 0 20px rgba(175, 157, 142, 0.15), 0 0 40px rgba(140, 122, 107, 0.1)",
          },
          "50%": {
            boxShadow:
              "0 0 30px rgba(175, 157, 142, 0.3), 0 0 60px rgba(140, 122, 107, 0.2)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        revealUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
