/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: "Bebas Neue",
        paragraph: "Roboto",
        bottons: "Poppins",
      },
      colors: {
        primary: "#3157A7", // Azul Oscuro
        secondary: "#6D91C7", // Azul Medio
        complementary: "#A7C6E6", // Azul Claro
        footerBackground: "#231D45", // Fondo de Footer
        greenButton: "#018B6A", // Fondo boton Aprovado
        sectionBg: "#012E8B", // Fondo Section Services
      },
    },
  },
  plugins: [],
};
