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
    <div className="card flex flex-col p-4 md:p-10 transition-all duration-300 lg:p-6 lg:flex-row lg:flex-wrap lg:items-center">
      <div className="flex-1 grid place-content-center lg:w-1/3 lg:order-1">
        <img
          src={element.icon}
          alt={element.title}
          className={`${
            element.title === "E-Comerce"
              ? "w-[120%] lg:w-[120%]"
              : "w-[70%] lg:w-[80%]"
          } m-auto`}
        />
      </div>
      <div className="flex-1 grid place-content-center lg:w-full lg:order-3 ">
        <Paragraph className="text-[#111827] text-center font-semibold lg:w-[400px] lg:truncate">
          {element.title}
        </Paragraph>
      </div>
      <div className="flex-1 grid place-content-center lg:w-2/3 lg:order-2">
        <ParagraphCard className="m-auto text-center lg:line-clamp-4">
          {element.description}
        </ParagraphCard>
      </div>
    </div>
  );
};

export default Card;
