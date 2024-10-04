/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': 'var(--font-geist-mono)'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'deep-forest-green': {
        '50': '#fcffe5',
        '100': '#f7ffc6',
        '200': '#edff94',
        '300': '#ddff57',
        '400': '#c9f724',
        '500': '#abdd05',
        '600': '#84b100',
        '700': '#638605',
        '800': '#506a0a',
        '900': '#42590e',
        '950': '#1e2c01',
    },
    
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;
