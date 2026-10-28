import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050816",
        panel: "#0D1228",
        line: "rgba(255, 255, 255, 0.10)",
      },
      boxShadow: {
        glow: "0 18px 42px rgba(99, 102, 241, 0.28), 0 0 34px rgba(59, 130, 246, 0.15)",
        card: "0 24px 70px rgba(0, 0, 0, 0.42), inset 0 1px 0 rgba(255, 255, 255, 0.035)",
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(148, 163, 184, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.07) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
