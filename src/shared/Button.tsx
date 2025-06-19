import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "bg-blue-500 h-9 flex items-center justify-center text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-900 duration-300",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
