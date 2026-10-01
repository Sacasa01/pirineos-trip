/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#07080b',
        surface: '#111318',
        'surface-elevated': '#181b22',
        accent: '#f97316',
        hiking: '#10b981',
        water: '#06b6d4',
        rock: '#94a3b8'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(249, 115, 22, 0.3)',
        'glow-cyan': '0 0 40px -10px rgba(6, 182, 212, 0.3)',
      }
    },
  },
  plugins: [],
};
