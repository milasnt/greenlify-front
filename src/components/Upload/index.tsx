import { FaVideo, FaUpload } from "react-icons/fa6";
import Card from "../Card";
import Button from "../Button";

export default function UploadProof() {
    return (
        <div>
            <h3 className="mb-5 text-[2.2rem] font-bold text-text-main">
                Comprovação da missão
            </h3>

            <Card className="border-dashed border-green-primary/30">
                <div className="flex flex-col items-center justify-center py-10 text-center">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-ultra-light">
                        <FaVideo className="text-[3rem] text-green-primary" />
                    </div>

                    <h4 className="mb-3 text-[2rem] font-bold text-text-main">
                        Envie um vídeo da sua ação
                    </h4>

                    <p className="mb-8 max-w-180 text-[1.5rem] leading-[1.7] text-text-secondary">
                        O vídeo será utilizado como comprovação da missão e poderá
                        passar por uma análise automatizada.
                    </p>

                    <Button variant="secondary" size="md">
                        <span className="flex items-center gap-3">
                            <FaUpload />
                            Selecionar vídeo
                        </span>
                    </Button>

                    <span className="mt-5 text-[1.3rem] text-text-secondary">
                        Formatos aceitos: MP4, MOV ou WebM
                    </span>
                </div>
            </Card>
        </div>
    );
}