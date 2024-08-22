import React from "react";
import { Titles } from "../components/generics/titles/Titles";
import { Paragraph } from "../components/generics/paragraph/Paragraph";
import meet from "../assets/images/Ellipse.jpg";
const HelpYou: React.FC = () => {
  return (
    <section className="w-full h-[50vh] bg-white flex flex-col justify-center items-center gap-8 px-4">
      <Titles className="text-left w-full">Podemos ayudarte</Titles>
      <div className="w-full flex ">
        <Paragraph className=" w-[174px]">
          En Tel & Tech contamos con el mejor equipo capacitado para ayudarte a
          que CREES eso que necesitas para hacer crecer tu negocio.
        </Paragraph>
        <div className="flex-1 relative ">
          <div className="w-[113px] h-[107px] bg-[#A7C6E6] rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"></div>
          <div className="absolute z-10 w-[113px] h-[107px] rounded-full overflow-hidden top-4 left-[45%] transform -translate-x-1/2">
            <img src={meet} alt="meet" className="w-[113px] h-[107px] " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpYou;
