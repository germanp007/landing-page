import { useState } from "react";
import icono_original from "../../assets/logos/icono_original.png";
// import Button from "../generics/button/Button";
import { TitleLogo } from "../generics/titles/Titles";
import HamburgerMenu from "./Hamburger";
import SelectLanguage from "../select/SelectLanguage";
import ModalNav from "./ModalNav";
import useNavbarColor from "../../hooks/useNavbarColor";

const ResponsiveNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  useNavbarColor("help", "links", "navbar", "titleLogo");

  const navLinks = [
    {
      name: "Sobre Nosotros",
      link: "#sobre-nosotros",
    },
    {
      name: "Tecnologías",
      link: "#tecnologias",
    },
    {
      name: "Contáctanos",
      link: "#contactanos",
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        id="navbar"
        className="w-screen h-24 md:h-32 flex items-center justify-evenly fixed z-20 bg-white/10 backdrop-blur-md border-b border-white/10"
      >
        <a href="#hero-section" className="flex justify-center items-center">
          <img src={icono_original} className="size-[50px] md:size-[68px]" />
          <TitleLogo id="titleLogo">Tel & Tech Services</TitleLogo>
        </a>
        <ul
          id="links"
          className="hidden px-4 py-8 lg:flex gap-16 font-medium text-xl text-white"
        >
          {navLinks.map((navItem) => (
            <li key={navItem.name} className="cursor-pointer">
              <a href={navItem.link}>{navItem.name}</a>
            </li>
          ))}
        </ul>
        <SelectLanguage />

        {/* <Button className="hidden sm:flex">Home</Button> */}

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
