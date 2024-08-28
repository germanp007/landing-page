import React from "react";
import { Paragraph, ParagraphCard } from "../generics/paragraph/Paragraph";
import "./card.css";

interface ElementProps {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface CartProps {
  element: ElementProps;
}
const Card: React.FC<CartProps> = ({ element }) => {
  return (
    <div className="card flex flex-col p-4">
      <div className="flex-1  grid place-content-center">
        <div className="w-full h-full overflow-hidden">
          <img
            src={element.icon}
            alt="Web App"
            className={`${
              element.title === "E-Comerce" ? "w-[100%] " : "w-[80%]"
            } m-auto`}
          />
        </div>
      </div>
      <div className="flex-1 grid place-content-center">
        <Paragraph className="text-[#111827] text-center text-base font-semibold ">
          {element.title}
        </Paragraph>
        <ParagraphCard>{element.description}</ParagraphCard>
      </div>
    </div>
  );
};

export default Card;
