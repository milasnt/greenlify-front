import type { ReactNode } from "react";
import Card from "../Card";
import Button from "../Button";

interface MissionCardProps {
    titulo: string;
    descricao: string;
    impacto: "Baixo" | "Médio" | "Alto";
    dificuldade: "Fácil" | "Média" | "Difícil";
    pontos: number;
    xp: number;
    icon?: ReactNode;
}

export function MissionCard({
    titulo,
    descricao,
    impacto,
    dificuldade,
    pontos,
    xp,
    icon,
}: MissionCardProps) {
    return (
        <Card className="flex h-full flex-col">
            <div className="mb-6 flex items-center justify-between">
                {icon && (
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-ultra-light text-[2.4rem] text-green-primary">
                        {icon}
                    </div>
                )}

                <span className="rounded-full bg-green-ultra-light px-4 py-2 text-[1.2rem] font-semibold text-green-primary">
                    {impacto}
                </span>
            </div>

            <h3 className="mb-4 text-[1.9rem] font-bold leading-[1.3] text-text-main">
                {titulo}
            </h3>

            <p className="mb-6 text-[1.5rem] leading-[1.7] text-text-secondary">
                {descricao}
            </p>

            <div className="mb-8 flex gap-10">
                <div>
                    <span className="mb-1 block text-[1.2rem] text-text-secondary">
                        Dificuldade
                    </span>

                    <span className="text-[1.4rem] font-semibold text-text-main">
                        {dificuldade}
                    </span>
                </div>

                <div>
                    <span className="mb-1 block text-[1.2rem] text-text-secondary">
                        Pontos
                    </span>

                    <span className="text-[1.4rem] font-semibold text-green-primary">
                        +{pontos}
                    </span>
                </div>

                <div>
                    <span className="mb-1 block text-[1.2rem] text-text-secondary">
                        XP
                    </span>

                    <span className="text-[1.4rem] font-semibold text-green-primary">
                        +{xp}
                    </span>
                </div>
            </div>

            <div className="mt-auto">
                <Button variant="secondary" full>
                    Ver missão
                </Button>
            </div>
        </Card>
    );
}

interface MissaoMensalProps {
    titulo: string;
    progresso: number;
    meta: number;
}

export function MissaoMensal({
    titulo,
    progresso,
    meta,
}: MissaoMensalProps) {
    const percentage = Math.min((progresso / meta) * 100, 100);

    return (
        <Card>
            <div className="mb-5 flex items-start justify-between gap-6">
                <div>
                    <h3 className="mb-2 text-[1.8rem] font-bold text-text-main">
                        {titulo}
                    </h3>

                    <p className="text-[1.4rem] text-text-secondary">
                        {progresso} de {meta} concluídas
                    </p>
                </div>

                <span className="text-[1.5rem] font-bold text-green-primary">
                    {Math.round(percentage)}%
                </span>
            </div>

            <div className="h-3 w-full overflow-hidden rounded-full bg-green-ultra-light">
                <div
                    className="h-full rounded-full bg-green-primary transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </Card>
    );
}