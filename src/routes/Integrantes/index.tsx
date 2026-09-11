import Section from "../../components/Section";
import Hero from "../../components/Hero";
import { FaGithub, FaLinkedinIn, FaSeedling } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import Card from "../../components/Card";

import imgCamila from "../../assets/img/integrantes/img-camila.jpeg";
import imgChristian from "../../assets/img/integrantes/img-christian.jpeg";
import imgLucas from "../../assets/img/integrantes/img-lucas.jpeg";
import imgEnzo from "../../assets/img/integrantes/img-enzo.jpeg";
import imgSophia from "../../assets/img/integrantes/img-sophia.jpeg";

interface Integrante {
    nome: string;
    cargo: string;
    rm: string;
    turma: string;
    foto: string;
    linkedin: string;
    github: string;
}

export default function Integrantes() {
    const integrantes: Integrante[] = [
        {
            nome: "Camila de Souza",
            cargo: "Desenvolvedora Front-End",
            rm: "573993",
            turma: "1TDSPJ",
            foto: imgCamila,
            linkedin: "https://www.linkedin.com/in/camila-souza-52164a3a5/",
            github: "https://github.com/milasnt",
        },
        {
            nome: "Christian Pereira",
            cargo: "Analista de Negócios",
            rm: "571586",
            turma: "1TDSPJ",
            foto: imgChristian,
            linkedin: "https://www.linkedin.com/in/christian-rodrigues-b756263b8/",
            github: "https://github.com/Ch-Rodrigues",
        },
        {
            nome: "Lucas Marti Zapater",
            cargo: "Administrador de Dados",
            rm: "571053",
            turma: "1TDSPJ",
            foto: imgLucas,
            linkedin: "https://www.linkedin.com/in/lucas-marti-zapater-vieira-b902a4236/",
            github: "https://github.com/Lucasvieira-tech",
        },
        {
            nome: "Enzo Gabriel Florencio",
            cargo: "Desenvolvedor Back-End",
            rm: "573898",
            turma: "1TDSPK",
            foto: imgEnzo,
            linkedin: "https://www.linkedin.com/in/enzo-pereira-931a323a6/",
            github: "https://github.com/EnzoPereira0618",
        },
        {
            nome: "Sophia Teixeira Ramada",
            cargo: "Desenvolvedora Back-End",
            rm: "573823",
            turma: "1TDSPJ",
            foto: imgSophia,
            linkedin: "https://www.linkedin.com/in/sophia-ramada-228b07364/",
            github: "https://github.com/sophRmd",
        },
    ];

    return (
        <>
            <Section>
                <Hero
                    badge={<FaUserGroup />}
                    title={<>Conheça os <span className="font-bold text-green-primary">integrantes</span></>}
                    text="Conheça quem está por trás do desenvolvimento da Greenlify. Uma equipe que uniu tecnologia e criatividade para criar uma solução sustentável para a SoulUp."
                    visual={<div className="flex h-48 w-48 items-center justify-center rounded-[3rem] border border-black/5 bg-bg-card shadow-custom-md"><FaSeedling className="text-[4.5rem] text-green-primary" /></div>}
                />
            </Section>

            <Section>
                <div className="grid grid-cols-5 gap-8 max-[1200px]:grid-cols-3 max-[768px]:grid-cols-2 max-[480px]:grid-cols-1">
                    {integrantes.map((integrante) => (
                        <Card key={integrante.rm} member>
                            <div className="mx-auto mb-8 h-48 w-48 overflow-hidden rounded-full border-3 border-green-ultra-light shadow-custom-sm">
                                <img src={integrante.foto} alt={`Foto de ${integrante.nome}`} className="h-full w-full object-cover" />
                            </div>

                            <h3 className="mx-auto mb-3 flex min-h-10 max-w items-center justify-center text-[1.7rem] font-bold leading-[1.3] text-text-main">
                                {integrante.nome}
                            </h3>

                            <p className="min-h-11 text-[1.4rem] leading-[1.6] text-text-secondary">
                                {integrante.cargo}
                            </p>

                            <div className="mt-5 flex flex-wrap justify-center gap-3">
                                <span className="rounded-4xl bg-green-ultra-light px-4 py-2 text-[1.3rem] font-semibold text-green-primary">RM {integrante.rm}</span>
                                <span className="rounded-4xl bg-green-ultra-light px-4 py-2 text-[1.3rem] font-semibold text-green-primary">{integrante.turma}</span>
                            </div>

                            <div className="my-8 h-px w-full bg-border" />

                            <div className="flex justify-center gap-4">
                                <a href={integrante.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${integrante.nome}`} className="flex h-15 w-15 items-center justify-center rounded-full border border-border text-[1.5rem] text-text-secondary transition duration-300 hover:border-green-primary hover:bg-green-primary hover:text-bg">
                                    <FaLinkedinIn />
                                </a>

                                <a href={integrante.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub de ${integrante.nome}`} className="flex h-15 w-15 items-center justify-center rounded-full border border-border text-[1.5rem] text-text-secondary transition duration-300 hover:border-green-primary hover:bg-green-primary hover:text-bg">
                                    <FaGithub />
                                </a>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>
        </>
    );
}