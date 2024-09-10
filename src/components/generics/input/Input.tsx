import React from "react";
import "./input.css";
interface InputProps {
  type?: string;
  title: string;
  name: string;
  placeholder: string;
  id: string;
  className?: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  title,
  name,
  placeholder,
  className,
  onChange,
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
          name={name}
          onChange={onChange}
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
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default Input;
