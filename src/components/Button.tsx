import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = "", ...props }) => {
  return (
    <button
      className={
        "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm md:text-base font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
