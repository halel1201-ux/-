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
        neon: {
          purple: "#a855f7",
          glow: "#8b5cf6",
          bright: "#c084fc",
          dark: "#7c3aed",
          deep: "#4c1d95",
        },
      },
      animation: {
        "glow-pulse": "glowPulse 2.5s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "slide-up": "slideUp 0.6s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
        "spin-slow": "spin 12s linear infinite",
        "border-spin": "borderSpin 4s linear infinite",
        "bounce-soft": "bounceSoft 2s ease-in-out infinite",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(168,85,247,0.3), 0 0 40px rgba(168,85,247,0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(168,85,247,0.7), 0 0 80px rgba(168,85,247,0.3)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        borderSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      backgroundImage: {
        "purple-radial": "radial-gradient(ellipse at center, rgba(139,92,246,0.15) 0%, transparent 70%)",
        "hero-gradient": "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,92,246,0.25) 0%, transparent 60%)",
      },
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;