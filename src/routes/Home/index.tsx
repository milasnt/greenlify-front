import Hero from "../../components/Hero";
import Button from "../../components/Button";
import Dashboard from "../../components/Dashboard";
import Section from "../../components/Section";
import { FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <Section>
            <Hero
                variant="home"
                badge={
                    <>
                        <FaLeaf/>
                        Gamificação + IA + Sustentabilidade
                    </>
                }
                title={
                    <>
                        O próximo nível do{" "}
                        <span className="text-green-primary">
                            impacto ambiental
                        </span>
                    </>
                }
                text="Uma experiência sustentável onde missões interativas transformam atitudes conscientes em evolução, recompensas e impacto positivo."
                visual={<Dashboard />}
            >
                <div className="flex gap-8">
                    <Button size="lg">
                        <Link to="/sobre">
                            Conhecer Projeto
                        </Link>
                    </Button>

                    <Button variant="secondary" size="lg">
                        <Link to="/">
                            Testar Interface
                        </Link>
                    </Button>
                </div>
            </Hero>
        </Section>
);
}