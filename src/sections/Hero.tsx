import React from "react";
import { TitleMain } from "../components/generics/titles/Titles";
import { Paragraph } from "../components/generics/paragraph/Paragraph";
import Button from "../components/generics/button/Button";
import { useTranslation } from "react-i18next";
const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      className="hero-section h-screen md:h-[750px] w-screen grid place-items-end lg:place-items-center"
      id="hero-section"
    >
      <div className="grid gap-4 p-4 w-full h-auto md:px-16 lg:gap-8 ">
        <TitleMain className="h-auto">{t("hero.title")}</TitleMain>
        <Paragraph className="text-white text-lg tracking-[3.6px] font-light h-auto lg:text-2xl">
          {t("hero.subtitle")}
        </Paragraph>
        <Button className="hover:bg-primary hover:text-white  transition-all duration-300">
          {t("hero.button")}
        </Button>
      </div>
    </section>
  );
};

export default Hero;
