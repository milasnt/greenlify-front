import Section from "../../components/Section";
import Hero from "../../components/Hero";
import { FaInfo, FaSeedling } from "react-icons/fa";

export default function Sobre() {
    return (
        <Section variant="primary">
            <Hero
                badge={<FaInfo />}
                title={
                    <>
                        Gamificação e{" "}
                        <span className="text-green-primary font-bold">
                            sustentabilidade
                        </span>
                    </>
                }
                text="Conheça a Greenlify, a solução desenvolvida para a SoulUp que transforma ações sustentáveis em desafios, pontuações e recompensas reais dentro da plataforma."
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