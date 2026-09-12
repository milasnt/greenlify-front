interface MissionFilterProps {
    selected?: string;
}

export default function MissionFilter({ selected = "Todas" }: MissionFilterProps) {
    const filters = ["Todas", "Mensais", "Contínuas"];

    return (
        <div className="flex flex-wrap gap-4">
            {filters.map((filter) => (
                <button
                    key={filter}
                    type="button"
                    className={`rounded-full border px-6 py-3 text-[1.4rem] font-semibold transition duration-300 ${
                        selected === filter
                            ? "border-green-primary bg-green-primary text-bg"
                            : "border-border bg-bg-card text-text-secondary hover:border-green-primary hover:text-green-primary"
                    }`}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}