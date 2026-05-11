import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070B13",
        panel: "#0E1525",
        line: "rgba(148, 163, 184, 0.18)",
      },
      boxShadow: {
        glow: "0 0 60px rgba(45, 212, 191, 0.18)",
        card: "0 24px 70px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
