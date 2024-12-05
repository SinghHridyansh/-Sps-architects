/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      flexGrow: {
        1: "1",
        2: "2",
        5: "5",
      },
      colors: {
        "project-yellow": "#ffd700",
        "project-blue": "#87ceeb",
        "project-gray": "#e5e5e5",
        "project-purple": "#8184d2",
      },
      backgroundImage: {
        ContactImage: "url('./Assets/ContactImage.webp')",
      },
    },
  },
  plugins: [tailwindScrollbar],
};
