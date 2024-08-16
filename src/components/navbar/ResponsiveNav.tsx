import { useState } from "react";
import icono_original from "../../assets/logos/icono_original.png";
import Button from "../generics/button/Button";
import { TitleLogo } from "../generics/titles/Titles";
import HamburgerMenu from "./Hamburger";

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
        <Button className="hidden sm:flex">Home</Button>
        <HamburgerMenu toggle={toggleMenu} isOpen={isOpen} />
      </nav>

      <div
        className={`fixed top-32 right-1 z-30 bg-white rounded-xl h-[70vh]  transition-all duration-500 m-4 ${
          isOpen ? "w-[247px] " : "w-0"
        }`}
      ></div>
    </>
  );
};

export default ResponsiveNav;
