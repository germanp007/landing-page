import React, { useState } from "react";
import eeuu from "../../../assets/flags/flag-us-svgrepo-com.svg";
import spain from "../../../assets/flags/flag-for-flag-spain-svgrepo-com.svg";
const ToggleLanguage: React.FC = () => {
  const [selected, setSelected] = useState("Spanish");

  const languages = [
    { name: "English", value: "English", flag: eeuu },
    { name: "Spanish", value: "Spanish", flag: spain },
  ];

  const selectLanguage = (language: string) => {
    setSelected(language);
  };
  return (
    <div className="w-[192px] h-[41px] flex m-auto md:w-[280px]">
      {languages.map((element) => (
        <button
          className={`flex-1 h-full flex justify-center items-center gap-2 md:gap-4 first:rounded-s-full last:rounded-e-full ${
            selected === element.value
              ? "bg-primary text-white"
              : "bg-white text-primary"
          } border-2 border-primary transition-all duration-500 ease-in-out`}
          onClick={() => selectLanguage(element.value)}
        >
          <img
            src={element.flag}
            alt={element.name}
            className="size-4 md:size-6 rounded-[50%]"
          />
          {element.name}
        </button>
      ))}
    </div>
  );
};

export default ToggleLanguage;
