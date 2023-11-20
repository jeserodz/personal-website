import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#dda15e',
          '50': '#fcf8f0',
          '100': '#f8eedc',
          '200': '#f0dab8',
          '300': '#e7c18a',
          '400': '#dda15e',
          '500': '#d5863a',
          '600': '#c66f30',
          '700': '#a55729',
          '800': '#844628',
          '900': '#6b3b23',
          '950': '#391c11',
        },
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Oxygen', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
