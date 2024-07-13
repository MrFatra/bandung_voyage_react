/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#005cff",

          "secondary": "#00b768",

          "accent": "#00582e",

          "neutral": "#120c04",

          "base-100": "#fff9fc",

          "info": "#3fc2ff",

          "success": "#00f0a5",

          "warning": "#ef6d00",

          "error": "#cd003d",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}