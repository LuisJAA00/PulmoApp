/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik-Regular', 'sans-serif'],
        'rubik-medium': ['Rubik-Medium', 'sans-serif'],
        'rubik-bold': ['Rubik-Bold', 'sans-serif'],
        'rubik-semibold': ['Rubik-SemiBold', 'sans-serif'],
        'rubik-light': ['Rubik-Light', 'sans-serif'],
        'rubik-semibold': ['Rubik-SemiBold', 'sans-serif'],
        'rubik-extrabold': ['Rubik-ExtraBold', 'sans-serif'],
    },
    colors:{
      "primary":{
        100: '#0061FF0A',
        200: '#0061FF1A',
        300: '#0061FF2A',
      },
      accent: {
        100: '#FBFBFD',
      
      },
      black:{
        DEFAULT: '#000000',
        100: '#8C8E98',
        200: '#666879',
        300: '#191d31',
      },
      danger: '#F75555'
    }
  },
  },
  plugins: [],
};
