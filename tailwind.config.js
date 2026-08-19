/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // adapted from old config
    extend: {
      colors: {
        "ie-red": "#D13939",
        "ie-red-hover": "#b33232",
        "ie-gray": "var(--color-text-main)",
        "brand-light": "var(--color-background)",
        "brand-dark": "var(--color-ie-red-hover)",
        "brand": "var(--color-ie-red)",
        "textMain": "var(--color-text-main)",
        "textSecondary": "var(--color-text-secondary)",
        "borderDefault": "var(--color-border-default)",
        "success": "oklch(0.73 0.17 160)",
        "warning": "oklch(0.80 0.18 85)",
        "error": "#D13939",
      },
      fontFamily: {
        "sans": ["Readex Pro", "system-ui", "Inter", "sans-serif"],
        "heading": ["Readex Pro", "system-ui", "Inter", "sans-serif"],
        "carnival": ["CarnivaleeFreakShow", "Arial", "sans-serif"],
      },
    },
  },
};
