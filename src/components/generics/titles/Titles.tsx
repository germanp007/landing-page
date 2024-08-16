import React, { ReactNode } from "react";
import "./titles.css";
interface TitleProps {
  children: ReactNode;
  classname?: string;
}

export const TitleLogo: React.FC<TitleProps> = ({ children, classname }) => {
  return <h1 className={`${classname} titleLogo`}>{children}</h1>;
};

export const TitleMain: React.FC<TitleProps> = ({ children, classname }) => {
  return <h1 className={`${classname} titleMain`}>{children}</h1>;
};

export const Titles: React.FC<TitleProps> = ({ children, classname }) => {
  return <h2 className={`${classname} titles`}>{children}</h2>;
};
