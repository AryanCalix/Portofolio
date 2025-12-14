const technologies = [
    { name: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
    { name: "Backend", items: ["Node.js", "Express", "Hono", "PostgreSQL"] },
    { name: "Automation & Tools", items: ["n8n", "Docker", "Git", "Jest"] },
    { name: "Design", items: ["Figma", "Canva", "UI/UX Principles"] },
];

export function TechStack() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((category, idx) => (
                <div
                    key={category.name}
                    className={`p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 hover:border-blue-500/50 transition-colors shadow-sm animate-fade-in-delay-${(idx % 3) + 1}`}
                >
                    <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">
                        {category.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {category.items.map((item) => (
                            <span
                                key={item}
                                className="px-3 py-1 text-sm rounded-full bg-gray-50 dark:bg-neutral-800 border border-gray-100 dark:border-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors cursor-default"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
