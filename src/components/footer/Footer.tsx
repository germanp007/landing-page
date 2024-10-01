import "./footer.css";
import logo_gris from "../../assets/logos/logo_gris.svg";
import { TitleLogo } from "../generics/titles/Titles";
import { Paragraph } from "../generics/paragraph/Paragraph";

export const Footer = () => {
  return (
    <footer className="footer grid grid-cols-2 md:grid-cols-4">
      <div className="flex flex-col justify-center items-center gap-4 col-span-1">
        <img
          src={logo_gris}
          alt="logo"
          className="size-[50px] sm:w-[80px] sm:h-[70px] "
        />
        <TitleLogo className="text-[12px]  font-normal sm:text-[16px] sm:tracking-[6.4px]">
          Tel & Tech Services
        </TitleLogo>
      </div>
      <div className="flex flex-col justify-center items-start gap-2 px-8 md:flex-row md:items-center md:justify-between col-span-1 md:col-span-3">
        <div>
          <Paragraph className="text-[12px] text-white font-bold w-auto">
            Sobre Nosotros
          </Paragraph>
        </div>
        <div>
          <Paragraph className="text-[12px] text-white font-bold w-auto">
            Redes Sociales
          </Paragraph>
        </div>
        <div>
          <Paragraph className="text-[12px] text-white font-bold w-auto">
            Contacto
          </Paragraph>
        </div>
      </div>
    </footer>
  );
};
