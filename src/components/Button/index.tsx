import type { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    full?: boolean;
    href?: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}

export default function Button({
    children,
    variant = "primary",
    size = "md",
    full = false,
    href,
    type = "button",
    onClick,
}: ButtonProps) {

    const baseStyles =
        "block w-fit text-center no-underline font-semibold rounded-3xl transition duration-300 whitespace-nowrap outline-none";

    const variantStyles = {
        primary: "bg-gradient-green text-bg hover:brightness-110",
        secondary: "bg-bg border border border-gradient-green text-green-primary hover:bg-gradient-green hover:text-bg",
    };

    const sizeStyles = {
        sm: "px-[2rem] py-[1rem] text-[1.3rem]",
        md: "px-[2.8rem] py-[1.4rem] text-[1.5rem]",
        lg: "px-[3rem] py-[1.8rem] text-[1.7rem]",
    };

    const widthStyles = full ? "w-full" : "";

    const className = `
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${widthStyles}
        rounded-custom-lg
    `;

    if (href) {
        return (
        <a href={href} className={className}>
            {children}
        </a>
        );
    }

    return (
        <button type={type} onClick={onClick} className={className}>
            {children}
        </button>
  );
}