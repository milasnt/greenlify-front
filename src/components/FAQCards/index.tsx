import { FaChevronDown } from "react-icons/fa";

interface FAQCardProps {
    question: string;
    answer: string;
}

export default function FAQCard({
    question,
    answer,
}: FAQCardProps) {
  
    return (
        <details
            className="
                group
              bg-bg-card
                border
              border-border
                rounded-2xl
                overflow-hidden
                transition
                duration-300
                hover:translate-y-[0.3rem]
                hover:shadow-custom-md
            "
        >

        <summary
            className="
                list-none
                flex
                items-center
                justify-between
                gap-8
                px-[2.4rem]
                py-8
                cursor-pointer
                text-[1.5rem]
                font-semibold
              text-text-main
                [&::-webkit-details-marker]:hidden    
            "
        >

        <span>{question}</span>

        <FaChevronDown
            className="
                shrink-0
              text-green-primary
                text-[1.2rem]
                transition
                duration-300
                group-open:rotate-180
            "
        />
      </summary>

      <div
        className="
            border-t
          border-border
            px-[2.4rem]
            py-[2.4rem]
            text-[1.4rem]
            leading-[1.8]
          text-text-secondary
        "
      >
        {answer}
      </div>
    </details>
  );
}