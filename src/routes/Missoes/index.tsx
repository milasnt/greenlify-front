import Section from "../../components/Section";
import Hero from "../../components/Hero";
import { MissionCard, MissaoMensal } from "../../components/MissionCard";
import { FaCircleCheck, FaLeaf, FaListCheck } from "react-icons/fa6";
import MissionModal from "../../components/MissionModal";

const missoesMensais = [
    {
        titulo: "Faça 5 missões fáceis",
        progresso: 3,
        meta: 5,
    },
    {
        titulo: "Faça 10 missões de impacto baixo",
        progresso: 7,
        meta: 10,
    },
    {
        titulo: "Complete 3 missões de impacto alto",
        progresso: 2,
        meta: 3,
    },
    {
        titulo: "Complete 5 missões diferentes",
        progresso: 4,
        meta: 5,
    },
];

const missoes = [
    {
        titulo: "Separar materiais recicláveis",
        descricao: "Separe materiais recicláveis e organize-os corretamente para descarte.",
        impacto: "Médio" as const,
        dificuldade: "Fácil" as const,
        pontos: 40,
        xp: 30,
    },
    {
        titulo: "Utilizar uma alternativa reutilizável",
        descricao: "Substitua um produto descartável por uma alternativa reutilizável durante sua rotina.",
        impacto: "Baixo" as const,
        dificuldade: "Fácil" as const,
        pontos: 30,
        xp: 20,
    },
    {
        titulo: "Levar resíduos a um ponto de coleta",
        descricao: "Leve materiais recicláveis ou resíduos específicos a um ponto de coleta adequado.",
        impacto: "Alto" as const,
        dificuldade: "Média" as const,
        pontos: 70,
        xp: 50,
    },
    {
        titulo: "Reutilizar uma embalagem",
        descricao: "Dê uma nova utilidade a uma embalagem que seria descartada.",
        impacto: "Médio" as const,
        dificuldade: "Fácil" as const,
        pontos: 40,
        xp: 30,
    },
    {
        titulo: "Realizar uma compra consciente",
        descricao: "Escolha uma alternativa de compra que reduza o uso de materiais descartáveis.",
        impacto: "Médio" as const,
        dificuldade: "Média" as const,
        pontos: 50,
        xp: 40,
    },
    {
        titulo: "Participar de uma ação de reciclagem",
        descricao: "Participe de uma ação relacionada à coleta, separação ou reciclagem de resíduos.",
        impacto: "Alto" as const,
        dificuldade: "Difícil" as const,
        pontos: 90,
        xp: 70,
    },
];

export default function Missoes() {
    return (
        <>
            <Section>
                <Hero
                    variant="internal"
                    badge={<FaLeaf />}
                    title={<>Missões <span className="font-bold text-green-primary">Greenlify</span></>}
                    text="Realize ações sustentáveis, comprove sua participação e acumule pontos e XP para evoluir dentro da SoulUp."
                    visual={
                        <div className="flex h-48 w-48 items-center justify-center rounded-[3rem] border border-black/5 bg-bg-card shadow-custom-md">
                            <FaListCheck className="text-[4.5rem] text-green-primary" />
                        </div>
                    }
                />
            </Section>

            <Section variant="primary">
                <div className="mx-auto w-full max-w-[140rem] px-16 py-24">
                    <div className="flex items-start gap-8">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green-ultra-light text-[2rem] font-bold text-green-primary">
                            1
                        </div>

                        <div className="w-full">
                            <h2 className="mb-6 text-[2.8rem] font-bold text-text-main">
                                Missões mensais
                            </h2>

                            <p className="mb-12 max-w-280 text-[1.6rem] leading-[1.7] text-text-secondary">
                                As missões mensais acompanham o desempenho do usuário durante o mês
                                e são cumpridas a partir das missões contínuas realizadas.
                            </p>

                            <div className="grid grid-cols-2 gap-6 max-[700px]:grid-cols-1">
                                {missoesMensais.map((missao) => (
                                    <MissaoMensal
                                        key={missao.titulo}
                                        titulo={missao.titulo}
                                        progresso={missao.progresso}
                                        meta={missao.meta}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section>
                <div className="mx-auto w-full max-w-[140rem] px-16 py-24">
                    <div className="flex items-start gap-8">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green-ultra-light text-[2rem] font-bold text-green-primary">
                            2
                        </div>

                        <div className="w-full">
                            <h2 className="mb-6 text-[2.8rem] font-bold text-text-main">
                                Missões disponíveis
                            </h2>

                            <p className="mb-12 max-w-280 text-[1.6rem] leading-[1.7] text-text-secondary">
                                Escolha uma missão contínua para realizar uma ação sustentável,
                                acumular pontos e XP e contribuir para suas metas mensais.
                            </p>

                            <div className="grid grid-cols-3 gap-6 max-[1000px]:grid-cols-2 max-[650px]:grid-cols-1">
                                {missoes.map((missao) => (
                                    <MissionCard
                                        key={missao.titulo}
                                        titulo={missao.titulo}
                                        descricao={missao.descricao}
                                        impacto={missao.impacto}
                                        dificuldade={missao.dificuldade}
                                        pontos={missao.pontos}
                                        xp={missao.xp}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section variant="primary">
                <div className="mx-auto w-full max-w-[140rem] px-16 py-24">
                    <div className="flex items-start gap-8">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green-ultra-light text-[2rem] font-bold text-green-primary">
                            3
                        </div>

                        <div className="w-full">
                            <h2 className="mb-6 text-[2.8rem] font-bold text-text-main">
                                Como funciona uma missão
                            </h2>

                            <p className="mb-12 max-w-280 text-[1.6rem] leading-[1.7] text-text-secondary">
                                O usuário escolhe uma missão contínua, realiza a ação e envia
                                um vídeo como comprovação. Após a validação, os pontos e o XP
                                são adicionados ao seu perfil e também contribuem para o
                                progresso das metas mensais.
                            </p>

                            <div className="grid grid-cols-4 gap-6 max-[1000px]:grid-cols-2 max-[600px]:grid-cols-1">
                                <div className="rounded-2xl border border-border bg-bg-card p-8 text-center shadow-custom-sm">
                                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-ultra-light">
                                        <span className="text-[1.8rem] font-bold text-green-primary">
                                            1
                                        </span>
                                    </div>

                                    <h3 className="mb-3 text-[1.8rem] font-bold text-text-main">
                                        Escolha
                                    </h3>

                                    <p className="text-[1.5rem] leading-[1.7] text-text-secondary">
                                        Escolha uma missão disponível na plataforma.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-border bg-bg-card p-8 text-center shadow-custom-sm">
                                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-ultra-light">
                                        <span className="text-[1.8rem] font-bold text-green-primary">
                                            2
                                        </span>
                                    </div>

                                    <h3 className="mb-3 text-[1.8rem] font-bold text-text-main">
                                        Realize
                                    </h3>

                                    <p className="text-[1.5rem] leading-[1.7] text-text-secondary">
                                        Realize a ação sustentável seguindo os critérios da missão.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-border bg-bg-card p-8 text-center shadow-custom-sm">
                                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-ultra-light">
                                        <span className="text-[1.8rem] font-bold text-green-primary">
                                            3
                                        </span>
                                    </div>

                                    <h3 className="mb-3 text-[1.8rem] font-bold text-text-main">
                                        Comprove
                                    </h3>

                                    <p className="text-[1.5rem] leading-[1.7] text-text-secondary">
                                        Envie um vídeo para comprovar a realização da ação.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-border bg-bg-card p-8 text-center shadow-custom-sm">
                                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-ultra-light">
                                        <span className="text-[1.8rem] font-bold text-green-primary">
                                            4
                                        </span>
                                    </div>

                                    <h3 className="mb-3 text-[1.8rem] font-bold text-text-main">
                                        Receba
                                    </h3>

                                    <p className="text-[1.5rem] leading-[1.7] text-text-secondary">
                                        Após a validação, receba pontos e XP pelo seu desempenho.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <MissionModal
    titulo="Separar materiais recicláveis"
    descricao="Separe materiais recicláveis e organize-os corretamente para facilitar o processo de reciclagem."
    impacto="Médio"
    dificuldade="Fácil"
    pontos={40}
    xp={30}
    criteria={
        <>
            <div className="flex items-start gap-4">
                <FaCircleCheck className="mt-1 shrink-0 text-green-primary" />
                <p className="text-[1.5rem] leading-[1.6] text-text-secondary">
                    A ação deve ser realizada pelo próprio usuário.
                </p>
            </div>

            <div className="flex items-start gap-4">
                <FaCircleCheck className="mt-1 shrink-0 text-green-primary" />
                <p className="text-[1.5rem] leading-[1.6] text-text-secondary">
                    O vídeo deve mostrar claramente a realização da ação.
                </p>
            </div>

            <div className="flex items-start gap-4">
                <FaCircleCheck className="mt-1 shrink-0 text-green-primary" />
                <p className="text-[1.5rem] leading-[1.6] text-text-secondary">
                    O conteúdo enviado deve corresponder à missão selecionada.
                </p>
            </div>
        </>
    }
/>
            </Section>
        </>
    );
}