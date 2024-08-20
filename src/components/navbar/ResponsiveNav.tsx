import { useState } from "react";
import icono_original from "../../assets/logos/icono_original.png";
import Button from "../generics/button/Button";
import { TitleLogo } from "../generics/titles/Titles";
import HamburgerMenu from "./Hamburger";
import ToggleLanguage from "../generics/toggle/ToggleLanguage";
import SelectLanguage from "../select/SelectLanguage";

const ResponsiveNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-screen h-32 flex items-center justify-evenly fixed">
        <img src={icono_original} className="size-[50px] md:size-[68px]" />
        <TitleLogo>Tel & Tech Services</TitleLogo>

        <ul className="hidden px-4 py-8 lg:flex gap-16 font-medium text-xl text-white">
          <li>Sobre Nosotros</li>
          <li>Tecnologías</li>
          <li>Contáctanos</li>
        </ul>
        <SelectLanguage />
        <Button className="hidden sm:flex">Home</Button>
        <HamburgerMenu
          toggle={toggleMenu}
          isOpen={isOpen}
          classname="lg:hidden"
        />
      </nav>

      <div
        className={`bg-white rounded-xl w-[247px] h-[60vh] fixed right-0 top-32 transform transition-transform duration-300 ease-in-out md:w-[363px] md:h-[75vh] ${
          isOpen ? "-translate-x-5" : "translate-x-full"
        }`}
      >
        <ul className="px-4 py-8 flex  flex-col gap-12 text-primary font-medium md:text-xl">
          <ToggleLanguage />
          <li>Sobre Nosotros</li>
          <li>Tecnologías</li>
          <li>Contáctanos</li>
        </ul>
      </div>
    </>
  );
};

export default ResponsiveNav;
