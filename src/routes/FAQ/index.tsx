import Section from "../../components/Section";
import Hero from "../../components/Hero";
import { FaQuestion, FaSeedling } from "react-icons/fa";

export default function FAQ() {
    return (
        <Section variant="primary">
            <Hero
                badge={<FaQuestion />}
                title={
                    <>
                        Respondendo suas{" "}
                        <span className="text-green-primary font-bold">
                            principais dúvidas
                        </span>
                    </>
                }
                text="Encontre informações sobre a SoulUp e o Greenlify, entendendo melhor como funciona a plataforma e as funcionalidades da solução."
                visual={
                    <div className="flex h-48 w-48 items-center justify-center rounded-[3rem] border border-black/5 bg-bg-card shadow-custom-md">
                        <FaSeedling className="text-[4.5rem] text-green-primary" />
                    </div>
                }
            >
            </Hero>
        </Section>
    );
}