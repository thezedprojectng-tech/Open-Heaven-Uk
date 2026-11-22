import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem', // 1440px
      },
      colors: {
        /* Open Heavens: Deep Midnight Blue and Warm Amber on Ivory */
        paper: "var(--paper)",
        ink: "var(--ink)",
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          foreground: "var(--on-accent)",
        },
        "on-accent": "var(--on-accent)",
        surface: {
          DEFAULT: "var(--surface)",
          dark: "var(--surface-dark)",
        },
        "surface-dark": "var(--surface-dark)",
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted)",
        },
        line: "var(--line)",

        /* Dark section tokens */
        "paper-on-dark": "var(--paper-on-dark)",
        "muted-on-dark": "var(--muted-on-dark)",
        "line-on-dark": "var(--line-on-dark)",

        /* Semantic Status Tokens */
        success: {
          DEFAULT: "var(--success)",
          surface: "var(--success-surface)",
        },
        warning: {
          DEFAULT: "var(--warning)",
          surface: "var(--warning-surface)",
        },
        danger: {
          DEFAULT: "var(--danger)",
          surface: "var(--danger-surface)",
        },
        info: {
          DEFAULT: "var(--info)",
          surface: "var(--info-surface)",
        },

        /* Admin Secondary Accent */
        "admin-teal": {
          DEFAULT: "var(--admin-teal)",
          surface: "var(--admin-teal-surface)",
        },

        /* shadcn/ui Compatibility Mapping */
        background: "var(--paper)",
        foreground: "var(--ink)",
        card: {
          DEFAULT: "var(--surface)",
          foreground: "var(--ink)",
        },
        popover: {
          DEFAULT: "var(--paper)",
          foreground: "var(--ink)",
        },
        primary: {
          DEFAULT: "var(--accent)",
          foreground: "var(--on-accent)",
        },
        secondary: {
          DEFAULT: "var(--surface)",
          foreground: "var(--ink)",
        },
        destructive: {
          DEFAULT: "var(--danger)",
          foreground: "var(--paper)",
        },
        border: "var(--line)",
        input: "var(--line)",
        ring: "var(--accent)",
      },
      fontFamily: {
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
        "serif-display": ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-manrope)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        panel: "var(--panel-radius)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
