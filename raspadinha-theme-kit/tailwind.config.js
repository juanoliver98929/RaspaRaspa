/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        bg: "var(--color-bg)",
        card: "var(--color-card)",
        muted: "var(--color-muted)"
      },
      borderRadius: {
        xl: "var(--radius)"
      },
      boxShadow: {
        lgx: "var(--shadow-lg)"
      }
    }
  },
  plugins: []
}
