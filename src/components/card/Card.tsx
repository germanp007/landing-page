import { webApp } from "../../assets/icons";
import { Paragraph } from "../generics/paragraph/Paragraph";
import "./card.css";

const Card = () => {
  return (
    <div className="card flex flex-col p-4">
      <div className="flex-1  grid place-content-center">
        <img src={webApp} alt="Web App" className="w-[70%] m-auto" />
      </div>
      <div className="flex-1 grid place-content-center">
        <Paragraph className="text-[#111827] text-center text-base font-semibold ">
          Desarollo de App de escritorio
        </Paragraph>
      </div>
    </div>
  );
};

export default Card;
