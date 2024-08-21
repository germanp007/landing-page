import React, { ReactNode } from "react";
import "./titles.css";
interface TitleProps {
  children: ReactNode;
  className?: string;
}

export const TitleLogo: React.FC<TitleProps> = ({ children, className }) => {
  return <h1 className={`${className} titleLogo`}>{children}</h1>;
};

export const TitleMain: React.FC<TitleProps> = ({ children, className }) => {
  return <h1 className={`${className} titleMain`}>{children}</h1>;
};

export const Titles: React.FC<TitleProps> = ({ children, className }) => {
  return <h2 className={`${className} titles`}>{children}</h2>;
};
