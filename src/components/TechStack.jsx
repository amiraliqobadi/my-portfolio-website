import React from "react";
import { useLanguage } from "../i18n/useLanguage";

const itemNames = [
    ["Python", "Django", "FastAPI", "REST APIs"],
    ["React.js", "Tailwind CSS", "TypeScript", "Vite"],
    ["PostgreSQL", "Redis", "Docker", "Linux"],
    ["Git", "CI/CD", "AI-Augmented", "Agile"],
];

const colorMap = [
    { dot: "bg-vercel-blue", text: "text-vercel-blue" },
    { dot: "bg-vercel-cyan", text: "text-vercel-cyan" },
    { dot: "bg-vercel-pink", text: "text-vercel-pink" },
    { dot: "bg-vercel-violet", text: "text-vercel-violet" },
];

const TechStack = () => {
    const { t } = useLanguage();

    return (
        <section id="stack" className="py-24 px-6 relative">
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-vercel-violet/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-6xl mx-auto">
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-white/10 bg-white/[0.02]">
                        <span className="w-1.5 h-1.5 rounded-full bg-vercel-violet" />
                        <span className="text-xs text-zinc-400">
                            {t.stack.badge}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                        <span className="text-gradient">{t.stack.title}</span>
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl">
                        {t.stack.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {t.stack.categories.map((category, catIndex) => {
                        const color = colorMap[catIndex];
                        return (
                            <div
                                key={catIndex}
                                className="group relative p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
                            >
                                <div className="flex items-center gap-2 mb-6">
                                    <span
                                        className={`w-2 h-2 rounded-full ${color.dot}`}
                                    />
                                    <h3 className="text-sm font-semibold text-white tracking-wide">
                                        {category.name}
                                    </h3>
                                </div>
                                <ul className="space-y-3">
                                    {category.details.map(
                                        (detail, itemIndex) => (
                                            <li
                                                key={itemIndex}
                                                className="group/item flex items-start gap-3 p-2 -mx-2 rounded-md hover:bg-white/[0.03] transition-colors"
                                            >
                                                <div
                                                    className={`flex-shrink-0 w-8 h-8 rounded-md bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[10px] font-bold ${color.text} font-mono group-hover/item:border-white/20 transition-colors`}
                                                >
                                                    {itemNames[catIndex][
                                                        itemIndex
                                                    ]
                                                        .slice(0, 2)
                                                        .toUpperCase()}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-white leading-tight">
                                                        {
                                                            itemNames[catIndex][
                                                                itemIndex
                                                            ]
                                                        }
                                                    </p>
                                                    <p className="text-xs text-zinc-500 mt-0.5">
                                                        {detail}
                                                    </p>
                                                </div>
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16 pt-12 border-t border-white/10">
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">
                        {t.stack.numbersTitle}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {t.stack.numbers.map((num, i) => (
                            <div key={i}>
                                <p className="text-3xl font-semibold text-white mb-1 font-mono">
                                    {num.value}
                                </p>
                                <p className="text-sm text-zinc-400">
                                    {num.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
