import "./footer.css";
import logo_gris from "../../assets/logos/logo_gris.svg";
import { TitleLogo } from "../generics/titles/Titles";
import { Paragraph } from "../generics/paragraph/Paragraph";

export const Footer = () => {
  return (
    <footer className="footer grid grid-cols-2">
      <div className="flex flex-col justify-center items-center gap-4">
        <img
          src={logo_gris}
          alt="logo"
          className="size-[50px] sm:w-[80px] sm:h-[70px] "
        />
        <TitleLogo className="text-[12px]  font-normal sm:text-[16px] sm:tracking-[6.4px]">
          Tel & Tech Services
        </TitleLogo>
      </div>
      <div className="flex flex-col justify-center items-start gap-2 px-8">
        <Paragraph className="text-[12px] text-white font-bold">
          Sobre Nosotros
        </Paragraph>
        <Paragraph className="text-[12px] text-white font-bold">
          Redes Sociales
        </Paragraph>
        <Paragraph className="text-[12px] text-white font-bold">
          Contacto
        </Paragraph>
      </div>
    </footer>
  );
};
