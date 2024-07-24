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
        
      },
    },
  },
  plugins: [],
};
