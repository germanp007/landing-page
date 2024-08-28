import { webApp } from "../../assets/icons";
import { Paragraph } from "../generics/paragraph/Paragraph";
import "./card.css";

const Card = () => {
  return (
    <div className="card flex flex-col">
      <div className="flex-1">
        <img src={webApp} alt="Web App" />
      </div>
      <div className="flex-1">
        <Paragraph className="text-[#111827] text-center text-base font-semibold ">
          Desarollo de App de escritorio
        </Paragraph>
      </div>
    </div>
  );
};

export default Card;
