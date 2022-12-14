interface IButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  variant: "primary" | "secondary" | "text" | "error";
  label: string;
  color?: string;
  disabled?: boolean;
  action?: () => void;
}

const Button = ({
  type,
  variant,
  label,
  color,
  action,
  disabled,
}: IButtonProps) => {
  return (
    // <button
    //   type={type}
    //   disabled={disabled}
    //   className={`w-full text-sm h-10 px-5 hover:delay-75 font-semibold ${
    //     variant === "primary" && "bg-primary text-white"
    //   } ${
    //     variant === "secondary" &&
    //     "border border-gray-300 bg-transparent text-gray-500"
    //   } ${variant === "error" && "bg-red-500 text-white"} ${
    //     variant === "text" && `text-${color} hover:bg-gray-100`
    //   } disabled:bg-gray-200`}
    //   onClick={action}
    // >
    //   {label}
    // </button>
    <div
      onClick={action}
      className={`w-full text-xl h-16 px-5 hover:delay-75 font-semibold  cursor-pointer rounded-lg flex items-center justify-center ${
        variant === "primary" && "bg-primary text-white"
      }`}
    >
      <button type={type} disabled={disabled}>
        {label}
      </button>
    </div>
  );
};

export default Button;
