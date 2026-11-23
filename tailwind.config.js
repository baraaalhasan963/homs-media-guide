/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#134F47',       // الزيتي الرسمي (60% / 30%)
          beige: '#FFF4E0',       // البيج الدافئ المعتمد (60% / 30%)
          orange: '#E85B0D',      // البرتقالي التفاعلي (10%)
          red: '#C51A1B',         // الأحمر المعتمد (10%)
          burgundy: '#71122B',    // الخمري / العنابي (30%)
        },
        olive: {
          dark: '#134F47',
          deep: '#0D2B26',
          mid: '#1C544B',
          light: '#2C6E63',
          subtle: '#EDF4F2',
        },
        gold: {
          primary: '#E85B0D',
          deep: '#C51A1B',
          light: '#FFF4E0',
          pale: '#FFF4E0',
        },
        union: {
          red: '#C51A1B',
          orange: '#E85B0D',
          burgundy: '#71122B',
          green: '#134F47',
          beige: '#FFF4E0'
        }
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
