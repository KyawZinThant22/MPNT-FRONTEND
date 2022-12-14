import React, { useState } from "react";

interface ITextFieldProps {
  register?: any;
  type: string;
  name: string;
  placeholder?: string;
  labelName?: string;
  required?: boolean;
  disabled?: boolean;
  errors?: any;
  icon?: any;
  hidePwIcon?: any;
  showPwIcon?: any;
  children?: any;
  className?: string;
  value?: any;
}

const TextField = ({
  register,
  type,
  name,
  placeholder,
  labelName,
  required,
  disabled,
  errors,
  icon,
  hidePwIcon,
  showPwIcon,
  className,
  value,
  children,
}: ITextFieldProps) => {
  const [showText, setShowText] = useState(type);

  const togglePassword = () => {
    setShowText(showText === "password" ? "text" : "password");
  };

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between mb-2">
        <label htmlFor={name} className="text-lg font-medium text-gray-900">
          {labelName}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>

        {children}
      </div>

      <div className="flex h-16">
        <input
          {...register}
          type={showText}
          id={name}
          name={name}
          value={value}
          disabled={disabled}
          className={`border border-gray-200 rounded-xl ${className} ${
            errors
              ? "focus:ring-red-500 focus:border-red-500 border-red-500"
              : "focus:ring-primary focus:border-primary"
          } text-gray-900 outline-none block flex-1 min-w-0 w-full text-lg p-2 px-4`}
          placeholder={placeholder}
        />
      </div>
      {type === "password" ? (
        <div className="mt-4 flex items-center gap-2">
          <input
            type="checkBox"
            className="cursor-pointer w-5 h-5"
            onChange={togglePassword}
          />
          <p className="text-md font-light">Show Password</p>
        </div>
      ) : (
        ""
      )}
      {errors && (
        <p className="block text-xs font-normal text-red-500 mt-2">{errors}</p>
      )}
    </div>
  );
};

export default TextField;
