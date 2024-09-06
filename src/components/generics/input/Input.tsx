import React from "react";
import "./input.css";
interface InputProps {
  type?: string;
  title: string;
  name: string;
  placeholder: string;
  id: string;
  // children: ReactNode;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  title,
  name,
  placeholder,
  className,
}) => {
  return (
    <div className="flex flex-col gap-3 mt-4">
      <label htmlFor={id} className={`${className} inputLabel `}>
        {title}
      </label>

      {type === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          className={`${className} textareaClass`}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          className={`${className} ${
            type === "email" ? "inputEmail" : "inputClass"
          }`}
        />
      )}
    </div>
  );
};

export default Input;
