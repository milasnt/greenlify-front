import type { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
}

export default function Section({
    children,
    variant = "primary",
    className = "",
}: SectionProps) {

    const variantStyles = {
        primary: "bg-bg",
        secondary: "bg-bg-soft",
    };

    return (
        <section className={`w-full ${variantStyles[variant]} ${className}`}>
            <div className="max-w-[140rem] mx-auto px-16 py-24">
                {children}
            </div>
        </section>
    );
}