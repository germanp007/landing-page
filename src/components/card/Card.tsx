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
    <div className="card flex flex-col p-4 md:p-10">
      <div className="flex-1  grid place-content-center">
        <div className="w-full h-full overflow-hidden">
          <img
            src={element.icon}
            alt="Web App"
            className={`${
              element.title === "E-Comerce" ? "w-[120%] " : "w-[80%]"
            } m-auto`}
          />
        </div>
      </div>
      <div className="flex-1 grid place-content-center">
        <Paragraph className="text-[#111827] text-center font-semibold ">
          {element.title}
        </Paragraph>
        <ParagraphCard className="m-auto text-center">
          {element.description}
        </ParagraphCard>
      </div>
    </div>
  );
};

export default Card;
