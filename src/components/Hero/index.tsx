import type { ReactNode } from "react";

interface HeroProps {
    children?: ReactNode;
    visual?: ReactNode;
    badge?: ReactNode;
    title: ReactNode;
    text?: ReactNode;
    variant?: "home" | "internal";
}

export default function Hero({
    children,
    visual,
    badge,
    title,
    text,
    variant = "internal",
}: HeroProps) {

    const isHome = variant === "home";

    return (
        <section className="relative w-full overflow-hidden bg-bg">
        <div className={`"x-auto flex max-w-[140rem] items-stretch justify-between gap-24 px-16
            ${isHome ? "py-40" : "py-32"}
        `}
        >
        <div className={`flex max-w-240 flex-col items-start gap-20
            ${isHome ? "justify-between" : ""}
        `}
        >
        
        {badge && (
            <div
              className="
                flex items-center gap-[0.8rem]
                rounded-2xl
                border border-[rgba(0,168,107,0.12)]
                bg-green-ultra-light
                px-6 py-6
                text-[1.3rem] font-semibold
                text-green-primary
              "
            >
              {badge}
            </div>
          )}

        <div className="flex flex-col gap-20">
            <h1
                className="
                    wrap-break-word
                    text-[6rem]
                    font-bold
                    leading-[1.1]
                  text-text-main
              "
            >
              {title}
            </h1>

        {text && (
            <p
                className="
                    max-w-3xl
                    text-[1.7rem]
                    leading-[1.8]
                  text-text-secondary
                "
            >
                {text}
            </p>
            )}
          </div>
          {children}
        </div>

        {visual && (
            <div
                className="
                    flex w-full max-w-4xl
                    items-center justify-center
                    max-[992px]:max-w-280
                "
            >
            {visual}
          </div>
        )}
      </div>
    </section>
  );
}