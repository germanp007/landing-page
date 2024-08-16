import React, { ReactNode } from "react";
import "./button.css";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  if (children == "Home") {
    return <button className={`${className} button`}>{children}</button>;
  }
  if (children == "Enviar") {
    return <button className={`${className} send`}>{children}</button>;
  }
  if (children == "Ver Servicios") {
    return <button className={`${className} servicios`}>{children}</button>;
  }
};

export default Button;
