import { useState } from "react";
import icono_original from "../../assets/logos/icono_original.png";
import Button from "../generics/button/Button";
import { TitleLogo } from "../generics/titles/Titles";
import HamburgerMenu from "./Hamburger";
import SelectLanguage from "../select/SelectLanguage";
import ModalNav from "./ModalNav";

const ResponsiveNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: "Sobre Nosotros",
    },
    {
      name: "Tecnologías",
    },
    {
      name: "Contáctanos",
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-screen h-32 flex items-center justify-evenly fixed">
        <img src={icono_original} className="size-[50px] md:size-[68px]" />
        <TitleLogo>Tel & Tech Services</TitleLogo>

        <ul className="hidden px-4 py-8 lg:flex gap-16 font-medium text-xl text-white">
          {navLinks.map((link) => (
            <li key={link.name} className="cursor-pointer">
              {link.name}
            </li>
          ))}
        </ul>
        <SelectLanguage />
        <Button className="hidden sm:flex">Home</Button>
        <HamburgerMenu
          toggle={toggleMenu}
          isOpen={isOpen}
          classname="lg:hidden"
        />
      </nav>
      <ModalNav isOpen={isOpen} />
    </>
  );
};

export default ResponsiveNav;
