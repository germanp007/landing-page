import { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="size-11 md:size-12 rounded-2xl bg-white grid place-content-center gap-[6px] cursor-pointer relative"
      onClick={toggleMenu}
    >
      <div
        className={`w-6 h-1 bg-primary transform transition-transform duration-300 ${
          isOpen ? "rotate-45 translate-y-[9.5px] " : ""
        }`}
      ></div>
      <div
        className={`w-6 h-1 bg-primary transition-opacity duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      ></div>
      <div
        className={`w-6 h-1 bg-primary transform transition-transform duration-300 ${
          isOpen ? "-rotate-45 -translate-y-[9.5px]" : ""
        }`}
      ></div>
    </div>
  );
};

export default HamburgerMenu;
