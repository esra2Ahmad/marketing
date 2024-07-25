/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "green":"#90BAA8",
        "blue":"#E8E8FF",
        "green1":"#DDEDCC",
        "blue1":"#CCDDED",
        "green2":"#CCEDED",
        "purble":"#CCCCED",
        "green3":"#F0FDF7",
        "red":"#EDCCCC",
        "pink":"#EDCCDE",
        "acete":"#F0FDF7",
        
      },
      backgroundImage: {
        'Frame28': "url('/images/Frame 28.png')",
        'Frame29': "url('/images/Frame 29.png')",
        'Frame30': "url('/images/Frame 30.png')",
        'Frame31': "url('/images/Frame 31.png')",
   
      },
    },
  },
  plugins: [],
};
