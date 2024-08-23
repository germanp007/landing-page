import React from "react";
import ToggleLanguage from "../generics/toggle/ToggleLanguage";

interface ModalNavProps {
  isOpen: boolean;
}

const ModalNav: React.FC<ModalNavProps> = ({ isOpen }) => {
  return (
    <div
      className={`bg-white rounded-xl w-[247px] h-[350px] z-50 shadow-2xl border-[1px] border-slate-300 fixed right-0 top-32 transform transition-transform duration-300 ease-in-out md:w-[363px] md:h-[75vh] ${
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
  );
};

export default ModalNav;
