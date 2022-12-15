interface IButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  variant: "primary" | "secondary" | "text" | "error";
  label: string;
  color?: string;
  disabled?: boolean;
  submitting?: boolean;
  action?: () => void;
}

const Button = ({
  type,
  variant,
  label,
  submitting,
  color,
  action,
  disabled,
}: IButtonProps) => {
  return (
    <div
      onClick={action}
      className={`w-full text-xl h-16 px-5 hover:delay-75 font-semibold  cursor-pointer rounded-lg flex items-center justify-center  ${
        variant === "primary" &&
        `${!submitting ? "bg-primary" : "bg-gray-400"} bg-primary ${
          submitting ? "" : "hover:bg-[#36816def]"
        }  text-white`
      }`}
    >
      <button type={type} disabled={disabled || submitting}>
        {label}
      </button>
    </div>
  );
};

export default Button;
