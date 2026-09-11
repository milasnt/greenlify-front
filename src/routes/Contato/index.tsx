import Section from "../../components/Section";
import Hero from "../../components/Hero";
import { FaSeedling, FaTelegramPlane } from "react-icons/fa";

export default function Contato() {
    return (
        <Section variant="primary">
            <Hero
                badge={<FaTelegramPlane />}
                title={
                    <>
                        Converse com a{" "}
                        <span className="text-green-primary font-bold">
                            nossa equipe
                        </span>
                    </>
                }
                text="Estamos disponíveis para responder dúvidas, receber sugestões e conversar sobre a solução criada. Entre em contato com nossa equipe!"
                visual={
                    <div className="flex h-48 w-48 items-center justify-center rounded-[3rem] border border-black/5 bg-bg-card shadow-custom-md">
                        <FaSeedling className="text-[4.5rem] text-green-primary" />
                    </div>
                }
            >
                <></>
            </Hero>
        </Section>
    );
}