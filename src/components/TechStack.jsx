import React from "react";

const stackCategories = [
    {
        name: "Backend",
        color: "vercel-blue",
        items: [
            { name: "Python", detail: "Primary language" },
            { name: "Django", detail: "Admin-heavy systems" },
            { name: "FastAPI", detail: "Real-time APIs" },
            { name: "REST APIs", detail: "RESTful design" },
        ],
    },
    {
        name: "Frontend",
        color: "vercel-cyan",
        items: [
            { name: "React.js", detail: "Component-driven" },
            { name: "Tailwind CSS", detail: "Utility-first" },
            { name: "TypeScript", detail: "Type-safe code" },
            { name: "Vite", detail: "Fast tooling" },
        ],
    },
    {
        name: "Data & Infrastructure",
        color: "vercel-pink",
        items: [
            { name: "PostgreSQL", detail: "Relational DB" },
            { name: "Redis", detail: "Caching layer" },
            { name: "Docker", detail: "Containerized" },
            { name: "Linux", detail: "Server admin" },
        ],
    },
    {
        name: "Workflow & Tools",
        color: "vercel-violet",
        items: [
            { name: "Git", detail: "Version control" },
            { name: "CI/CD", detail: "Auto-deployment" },
            { name: "AI-Augmented", detail: "Faster, cleaner code" },
            { name: "Agile", detail: "Iterative delivery" },
        ],
    },
];

const colorMap = {
    "vercel-blue": {
        dot: "bg-vercel-blue",
        text: "text-vercel-blue",
        border: "border-vercel-blue/20",
    },
    "vercel-cyan": {
        dot: "bg-vercel-cyan",
        text: "text-vercel-cyan",
        border: "border-vercel-cyan/20",
    },
    "vercel-pink": {
        dot: "bg-vercel-pink",
        text: "text-vercel-pink",
        border: "border-vercel-pink/20",
    },
    "vercel-violet": {
        dot: "bg-vercel-violet",
        text: "text-vercel-violet",
        border: "border-vercel-violet/20",
    },
};

const TechStack = () => {
    return (
        <section id="stack" className="py-24 px-6 relative">
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-vercel-violet/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-6xl mx-auto">
                {/* هدر */}
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-white/10 bg-white/[0.02]">
                        <span className="w-1.5 h-1.5 rounded-full bg-vercel-violet" />
                        <span className="text-xs text-zinc-400">
                            Core Stack
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                        <span className="text-gradient">Tools I use daily</span>
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl">
                        A battle-tested stack chosen for reliability, developer
                        experience, and production readiness — not hype.
                    </p>
                </div>

                {/* گرید ۴ دسته */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {stackCategories.map((category) => {
                        const colors = colorMap[category.color];
                        return (
                            <div
                                key={category.name}
                                className="group relative p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
                            >
                                {/* هدر دسته */}
                                <div className="flex items-center gap-2 mb-6">
                                    <span
                                        className={`w-2 h-2 rounded-full ${colors.dot}`}
                                    />
                                    <h3 className="text-sm font-semibold text-white tracking-wide">
                                        {category.name}
                                    </h3>
                                </div>

                                {/* لیست آیتم‌ها */}
                                <ul className="space-y-3">
                                    {category.items.map((item) => (
                                        <li
                                            key={item.name}
                                            className="group/item flex items-start gap-3 p-2 -mx-2 rounded-md hover:bg-white/[0.03] transition-colors"
                                        >
                                            <div
                                                className={`flex-shrink-0 w-8 h-8 rounded-md bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[10px] font-bold ${colors.text} font-mono group-hover/item:border-white/20 transition-colors`}
                                            >
                                                {item.name
                                                    .slice(0, 2)
                                                    .toUpperCase()}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-white leading-tight">
                                                    {item.name}
                                                </p>
                                                <p className="text-xs text-zinc-500 mt-0.5">
                                                    {item.detail}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                {/* آمار تجربه */}
                <div className="mt-16 pt-12 border-t border-white/10">
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">
                        By the numbers
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div>
                            <p className="text-3xl font-semibold text-white mb-1 font-mono">
                                5
                            </p>
                            <p className="text-sm text-zinc-400">
                                Production platforms shipped
                            </p>
                        </div>
                        <div>
                            <p className="text-3xl font-semibold text-white mb-1 font-mono">
                                270+
                            </p>
                            <p className="text-sm text-zinc-400">
                                LeetCode problems solved
                            </p>
                        </div>
                        <div>
                            <p className="text-3xl font-semibold text-white mb-1 font-mono">
                                400h
                            </p>
                            <p className="text-sm text-zinc-400">
                                Practical Django training
                            </p>
                        </div>
                        <div>
                            <p className="text-3xl font-semibold text-white mb-1 font-mono">
                                100%
                            </p>
                            <p className="text-sm text-zinc-400">
                                Custom code (no CMS)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
