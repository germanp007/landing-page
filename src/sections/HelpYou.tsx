import React from "react";
import { Titles } from "../components/generics/titles/Titles";
import { Paragraph } from "../components/generics/paragraph/Paragraph";
import meet from "../assets/images/Ellipse.jpg";
const HelpYou: React.FC = () => {
  return (
    <section
      id="help"
      className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] bg-white flex p-6 md:p-12"
    >
      <div className="flex-1 flex flex-col gap-6 justify-center">
        <Titles className="text-left w-full h-auto">Podemos ayudarte</Titles>
        <Paragraph className=" w-[174px] sm:w-full ">
          En Tel & Tech contamos con el mejor equipo capacitado para ayudarte a
          que CREES eso que necesitas para hacer crecer tu negocio.
        </Paragraph>
      </div>
      <div className="flex-1 relative ">
        <div className="absolute min-w-[134px] max-w-[400px] max-h-[400px] w-[35vw] h-[35vw] rounded-full overflow-hidden z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <img src={meet} alt="meet" className="size-full" />
        </div>

        <div className="absolute min-w-[134px] max-w-[400px] max-h-[400px] w-[35vw] h-[35vw] bg-[#A7C6E6] rounded-full bottom-1/2 left-1/2 transform -translate-x-[35%] translate-y-[35%] md:translate-y-[40%] lg:translate-y-[45%]"></div>
      </div>
    </section>
  );
};

export default HelpYou;
