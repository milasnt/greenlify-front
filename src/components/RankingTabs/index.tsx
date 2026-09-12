interface RankingTabsProps {
    activeTab: "mensal" | "allTime" | "grupos";
    onChange: (tab: "mensal" | "allTime" | "grupos") => void;
}

export default function RankingTabs({ activeTab, onChange }: RankingTabsProps) {
    return (
        <div className="mb-8 flex gap-2 rounded-2xl border border-border bg-bg-card p-2 max-[600px]:flex-col">
            <button
                type="button"
                onClick={() => onChange("mensal")}
                className={`flex-1 rounded-xl px-6 py-4 text-[1.5rem] font-semibold transition duration-300 ${activeTab === "mensal" ? "bg-green-primary text-bg" : "text-text-secondary hover:bg-green-ultra-light hover:text-green-primary"}`}
            >
                Mensal
            </button>

            <button
                type="button"
                onClick={() => onChange("allTime")}
                className={`flex-1 rounded-xl px-6 py-4 text-[1.5rem] font-semibold transition duration-300 ${activeTab === "allTime" ? "bg-green-primary text-bg" : "text-text-secondary hover:bg-green-ultra-light hover:text-green-primary"}`}
            >
                All Time
            </button>

            <button
                type="button"
                onClick={() => onChange("grupos")}
                className={`flex-1 rounded-xl px-6 py-4 text-[1.5rem] font-semibold transition duration-300 ${activeTab === "grupos" ? "bg-green-primary text-bg" : "text-text-secondary hover:bg-green-ultra-light hover:text-green-primary"}`}
            >
                Grupos
            </button>
        </div>
    );
}