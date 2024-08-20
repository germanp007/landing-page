// import { useState } from "react";
import eeuu from "../../assets/flags/flag-us-svgrepo-com.svg";
import spain from "../../assets/flags/flag-for-flag-spain-svgrepo-com.svg";
import { useState } from "react";

interface LanguageProps {
  name: string;
  value: string;
  flag: string;
}
const SelectLanguage = () => {
  const [selected, setSelected] = useState({
    language: "Spanish",
    isOpen: false,
  });

  const languages: LanguageProps[] = [
    { name: "English", value: "English", flag: eeuu },
    { name: "Spanish", value: "Spanish", flag: spain },
  ];

  const handleChange = (value: LanguageProps) => {
    setSelected({
      language: value.name,
      isOpen: false,
    });
  };
  return (
    <div className="hidden lg:inline-block relative  text-left bg-primary text-white rounded-lg font-semibold  ">
      <div
        onClick={() => setSelected({ ...selected, isOpen: true })}
        className="flex items-center border-2 border-primary rounded-xl w-[150px] h-12 px-2 cursor-pointer"
      >
        <img
          src={languages.find((lang) => lang.value === selected.language)?.flag}
          alt={selected.language}
          className="w-6 h-6 mr-2"
        />
        <span>{selected.language}</span>
      </div>

      {selected.isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white rounded-xl shadow-lg z-10">
          {languages.map((language) => (
            <div
              key={language.value}
              onClick={() => handleChange(language)}
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
