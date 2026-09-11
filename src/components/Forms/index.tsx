import { FaPaperPlane } from "react-icons/fa";

export default function Forms() {
    return (
        <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <label htmlFor="nome" className="text-[1.4rem] font-semibold text-text-main">
                    Nome Completo
                </label>
                <input id="nome" type="text" placeholder="Nome completo" required className="w-full rounded-lg border border-border bg-bg px-5 py-4 text-[1.4rem] text-text-main outline-none transition duration-300 placeholder:text-text-secondary focus:border-green-primary" />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[1.4rem] font-semibold text-text-main">
                    Email
                </label>
                <input id="email" type="email" placeholder="seu@email.com" required className="w-full rounded-lg border border-border bg-bg px-5 py-4 text-[1.4rem] text-text-main outline-none transition duration-300 placeholder:text-text-secondary focus:border-green-primary" />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="assunto" className="text-[1.4rem] font-semibold text-text-main">
                    Assunto
                </label>
                <input id="assunto" type="text" placeholder="Sobre o que você quer falar?" required className="w-full rounded-lg border border-border bg-bg px-5 py-4 text-[1.4rem] text-text-main outline-none transition duration-300 placeholder:text-text-secondary focus:border-green-primary" />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="mensagem" className="text-[1.4rem] font-semibold text-text-main">
                    Mensagem
                </label>
                <textarea id="mensagem" placeholder="Escreva sua mensagem aqui..." required className="min-h-48 w-full resize-y rounded-lg border border-border bg-bg px-5 py-4 text-[1.4rem] leading-[1.6] text-text-main outline-none transition duration-300 placeholder:text-text-secondary focus:border-green-primary" />
            </div>

            <button type="submit" className="flex w-full items-center justify-center gap-3 rounded-lg bg-green-primary px-6 py-4 text-[1.5rem] font-semibold text-bg transition duration-300 hover:opacity-90">
                <FaPaperPlane />
                Enviar Mensagem
            </button>

            <p className="text-center text-[1.3rem] leading-normal text-text-secondary">
                Responderemos normalmente em até 24 horas úteis.
            </p>
        </form>
    );
}