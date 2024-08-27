import React, { ReactNode } from "react";
import "./titles.css";
interface TitleProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const TitleLogo: React.FC<TitleProps> = ({
  children,
  className,
  id,
}) => {
  return (
    <h1 className={`${className} titleLogo`} id={id}>
      {children}
    </h1>
  );
};

export const TitleMain: React.FC<TitleProps> = ({
  children,
  className,
  id,
}) => {
  return (
    <h1 className={`${className} titleMain`} id={id}>
      {children}
    </h1>
  );
};

export const Titles: React.FC<TitleProps> = ({ children, className, id }) => {
  return (
    <h2 className={`${className} titles`} id={id}>
      {children}
    </h2>
  );
};
