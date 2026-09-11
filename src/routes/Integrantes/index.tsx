import Section from "../../components/Section";
import Hero from "../../components/Hero";
import { FaSeedling } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

export default function Integrantes() {
    return (
        <Section variant="primary">
            <Hero
                badge={<FaUserGroup />}
                title={
                    <>
                        Conheça os{" "}
                        <span className="text-green-primary font-bold">
                            integrantes
                        </span>
                    </>
                }
                text="Conheça quem está por trás do desenvolvimento da Greenlify. Uma equipe que uniu tecnologia e criatividade para criar uma solução sustentável para a SoulUp."
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