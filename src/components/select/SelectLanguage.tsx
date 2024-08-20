// import { useState } from "react";
import eeuu from "../../assets/flags/flag-us-svgrepo-com.svg";
import spain from "../../assets/flags/flag-for-flag-spain-svgrepo-com.svg";
import { useState } from "react";
const SelectLanguage = () => {
  const [selected, setSelected] = useState("Spanish");
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { name: "English", value: "English", flag: eeuu },
    { name: "Spanish", value: "Spanish", flag: spain },
  ];

  const handleChange = (value: string) => {
    setSelected(value);
    setIsOpen(false);
  };
  return (
    <div className="relative inline-block text-left bg-primary text-white rounded-lg font-semibold  ">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center border-2 border-primary rounded-xl w-[150px] h-12 px-2 cursor-pointer"
      >
        <img
          src={languages.find((lang) => lang.value === selected)?.flag}
          alt={selected}
          className="w-6 h-6 mr-2"
        />
        <span>{selected}</span>
      </div>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white rounded-xl shadow-lg z-10">
          {languages.map((language) => (
            <div
              key={language.value}
              onClick={() => handleChange(language.value)}
              className="flex items-center px-2 py-2 cursor-pointer text-black hover:bg-primary hover:text-white rounded-xl"
            >
              <img
                src={language.flag}
                alt={language.name}
                className="w-6 h-6 mr-2"
              />
              <span className="font-semibold">{language.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectLanguage;
