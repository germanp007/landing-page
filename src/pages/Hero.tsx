import React from "react";
import { TitleMain } from "../components/generics/titles/Titles";
import { Paragraph } from "../components/generics/paragraph/Paragraph";
import Button from "../components/generics/button/Button";
const Hero: React.FC = () => {
  return (
    <section
      className="hero-section h-screen md:h-[750px] w-screen grid place-items-end"
      id="hero-section"
    >
      <div className="grid gap-2 w-full h-auto p-4 ">
        <TitleMain className="h-auto">La Solución que buscas</TitleMain>
        <Paragraph className="text-white text-lg tracking-[3.6px] font-light ">
          En un solo Lugar
        </Paragraph>
        <Button>Ver Servicios</Button>
      </div>
    </section>
  );
};

export default Hero;
