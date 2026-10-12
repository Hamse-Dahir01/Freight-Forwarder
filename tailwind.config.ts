import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff8ff',
          100: '#dff1ff',
          500: '#0f6fc5',
          700: '#0c538d',
          900: '#0a243c',
        },
      },
      boxShadow: {
        soft: '0 20px 50px rgba(15, 111, 197, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
