import { FaCheck, FaLaptopCode, FaLink, FaReact } from "react-icons/fa";

const roadmapItems = [
    {
        title: "Etapa 1 - Pesquisa",
        text: "Estudo dos requisitos propostos pela SoulUp e levantamento dos principais desafios relacionados à gamificação sustentável.",
        icon: <FaCheck />,
        status: "done",
    },
    {
        title: "Etapa 2 - Idealização",
        text: "Definição das missões, sistema de pontuação, ranking, streak e mecanismos de validação das ações sustentáveis.",
        icon: <FaCheck />,
        status: "done",
    },
    {
        title: "Etapa 3 - Desenvolvimento Acadêmico",
        text: "Desenvolvimento do protótipo funcional da Greenlify nas matérias de Front-end, Java, Python, Banco de Dados, Chatbot e Business.",
        icon: <FaLaptopCode />,
        status: "done",
    },
    {
        title: "Etapa 4 - Evolução com React",
        text: "Planejamento futuro da interface utilizando React e integração com funcionalidades mais dinâmicas e escaláveis.",
        icon: <FaReact />,
        status: "active",
    },
    {
        title: "Etapa 5 - Integração com a SoulUp",
        text: "Estruturação da integração do módulo com a plataforma SoulUp, incluindo APIs, validação automatizada e recursos de segurança.",
        icon: <FaLink />,
        status: "default",
    },
];

export default function Roadmap() {
    return (
        <div className="flex flex-col gap-12">
            {roadmapItems.map((item, index) => (
                <div key={item.title} className="relative flex gap-8">
                    {index < roadmapItems.length - 1 && (
                        <div className={`absolute left-[1.1rem] top-12 h-[calc(100%+3rem)] w-[0.2rem] ${item.status === "done" ? "bg-green-primary/30" : item.status === "active" ? "bg-linear-to-b from-purple-primary to-transparent animate-pulse" : "bg-border"}`} />
                    )}

                    <div className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[1rem] leading-none text-bg ${item.status === "done" ? "bg-green-primary" : item.status === "active" ? "bg-purple-primary" : "bg-text-muted"}`}>
                        {item.icon}
                    </div>

                    <div className="min-w-0 pt-0.5">
                        <h3 className="mb-2 text-[2rem] font-bold leading-[1.3] text-text-main ">
                            {item.title}
                        </h3>

                        <p className="text-[1.5rem] leading-[1.7] text-text-secondary">
                            {item.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}