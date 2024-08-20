import { useState } from "react";
import icono_original from "../../assets/logos/icono_original.png";
import Button from "../generics/button/Button";
import { TitleLogo } from "../generics/titles/Titles";
import HamburgerMenu from "./Hamburger";

const ResponsiveNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("English");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language: string) => {
    setSelected(language);
  };
  return (
    <>
      <nav className="w-screen h-32 flex items-center justify-evenly fixed">
        <img src={icono_original} className="size-[50px] md:size-[68px]" />
        <TitleLogo>Tel & Tech Services</TitleLogo>
        <Button className="hidden sm:flex">Home</Button>
        <HamburgerMenu toggle={toggleMenu} isOpen={isOpen} />
      </nav>

      <div
        className={`bg-white rounded-xl w-[247px] h-[60vh] fixed right-0 top-32 transform transition-transform duration-300 ease-in-out md:w-[363px] md:h-[75vh] ${
          isOpen ? "-translate-x-5" : "translate-x-full"
        }`}
      >
        <ul className="px-4 py-8">
          <div className="w-[192px] h-[41px] flex m-auto">
            <button
              className={`flex-1 h-full grid place-content-center rounded-s-full ${
                selected === "English"
                  ? "bg-primary text-white"
                  : "bg-white text-primary"
              } border-2 border-primary transition-all duration-500 ease-in-out`}
              onClick={() => selectLanguage("English")}
            >
              Ingles
            </button>
            <button
              className={`flex-1 h-full grid place-content-center rounded-e-full ${
                selected === "Spanish"
                  ? "bg-primary text-white"
                  : "bg-white text-primary"
              } border-2 border-primary transition-all duration-500 ease-in-out`}
              onClick={() => selectLanguage("Spanish")}
            >
              Español
            </button>
          </div>
          <li>Sobre Nosotros</li>
          <li>Tecnologias</li>
          <li>Contactanos</li>
        </ul>
      </div>
    </>
  );
};

export default ResponsiveNav;
