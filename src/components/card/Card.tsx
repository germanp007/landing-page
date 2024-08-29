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
    <div className="card flex flex-col p-4 md:p-10 transition-all duration-300 lg:p-2 lg:flex-row">
      <div className="flex-1  grid place-content-center lg:order-1 lg:w-1/2 ">
        <img
          src={element.icon}
          alt={element.title}
          className={`${
            element.title === "E-Comerce"
              ? "w-[120%] lg:w-[70%]"
              : "w-[90%] lg:w-[60%]"
          } m-auto`}
        />
      </div>
      <div className="flex-1 grid place-content-center lg:w-full lg:order-3 lg:mt-4">
        <Paragraph className="text-[#111827] text-center font-semibold ">
          {element.title}
        </Paragraph>
      </div>
      <div className="flex-1 grid place-content-center lg:w-1/2 lg:order-2">
        <ParagraphCard className="m-auto text-center">
          {element.description}
        </ParagraphCard>
      </div>
    </div>
  );
};

export default Card;
