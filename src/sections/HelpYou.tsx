import React from "react";
import { Titles } from "../components/generics/titles/Titles";
import { Paragraph } from "../components/generics/paragraph/Paragraph";
import meet from "../assets/images/Ellipse.jpg";
const HelpYou: React.FC = () => {
  return (
    <section className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] bg-white flex p-6 md:p-12">
      <div className="flex-1 flex flex-col gap-6">
        <Titles className="text-left w-full h-auto">Podemos ayudarte</Titles>
        <Paragraph className=" w-[174px] sm:w-full ">
          En Tel & Tech contamos con el mejor equipo capacitado para ayudarte a
          que CREES eso que necesitas para hacer crecer tu negocio.
        </Paragraph>
      </div>
      <div className="flex-1 relative ">
        <div className="md:size-[290px] bg-[#A7C6E6] rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"></div>
        <div className="absolute z-10   rounded-full overflow-hidden top-4 left-[45%] transform -translate-x-1/2">
          <img src={meet} alt="meet" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default HelpYou;
