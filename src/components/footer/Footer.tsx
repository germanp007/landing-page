import "./footer.css";
import logo_gris from "../../assets/logos/logo_gris.svg";
import { TitleLogo } from "../generics/titles/Titles";

export const Footer = () => {
  return (
    <footer className="footer grid grid-cols-2">
      <div className="flex flex-col justify-center items-center gap-4">
        <img src={logo_gris} alt="logo" className="size-[50px]" />
        <TitleLogo className="text-[12px]  font-normal">
          Tel & Tech Services
        </TitleLogo>
      </div>
      <div className=""></div>
    </footer>
  );
};
