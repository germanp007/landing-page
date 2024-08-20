import React, { useState } from "react";

const ToggleLanguage: React.FC = () => {
  const [selected, setSelected] = useState("Spanish");

  const languages = [
    { name: "English", value: "English" },
    { name: "Spanish", value: "Spanish" },
  ];

  const selectLanguage = (language: string) => {
    setSelected(language);
  };
  return (
    <div className="w-[192px] h-[41px] flex m-auto md:w-[280px]">
      {languages.map((element) => (
        <button
          key={element.value}
          className={`flex-1 h-full grid place-content-center first:rounded-s-full last:rounded-e-full ${
            selected === element.value
              ? "bg-primary text-white"
              : "bg-white text-primary"
          } border-2 border-primary transition-all duration-500 ease-in-out`}
          onClick={() => selectLanguage(element.value)}
        >
          {element.name}
        </button>
      ))}
    </div>
  );
};

export default ToggleLanguage;
