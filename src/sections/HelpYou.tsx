import React from "react";
import { Titles } from "../components/generics/titles/Titles";
import { Paragraph } from "../components/generics/paragraph/Paragraph";
import meet from "../assets/images/Ellipse.jpg";
const HelpYou: React.FC = () => {
  return (
    <section className="w-full h-[60vh] bg-white flex flex-col justify-center items-center gap-8">
      <Titles className="text-left w-full">Podemos ayudarte</Titles>
      <div className="w-full flex ">
        <Paragraph className="flex-1">
          En Tel & Tech contamos con el mejor equipo capacitado para ayudarte a
          que CREES eso que necesitas para hacer crecer tu negocio.
        </Paragraph>
        <div className="flex-1 relative">
          <div className="w-[113px] h-[107px] bg-[#A7C6E6] rounded-full absolute z-1"></div>

          <img src={meet} alt="meet" className="w-[113px] h-[107px] " />
        </div>
      </div>
    </section>
  );
};

export default HelpYou;
