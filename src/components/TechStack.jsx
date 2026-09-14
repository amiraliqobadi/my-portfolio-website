import { motion } from "framer-motion";
import { useLanguage } from "../i18n/useLanguage";
import SpotlightCard from "./ui/SpotlightCard";
import { Cpu, Terminal, Database, Wrench } from "lucide-react";

const itemNames = [
    ["Python", "Django", "FastAPI", "REST APIs"],
    ["React.js", "Tailwind CSS", "TypeScript", "Vite"],
    ["PostgreSQL", "Redis", "Docker", "Linux"],
    ["Git", "CI/CD", "AI-Augmented", "Agile"],
];

const categoryIcons = [
    <Terminal key="py" className="w-4 h-4 text-vercel-blue" />,
    <Cpu key="fe" className="w-4 h-4 text-vercel-cyan" />,
    <Database key="db" className="w-4 h-4 text-vercel-pink" />,
    <Wrench key="dev" className="w-4 h-4 text-vercel-violet" />,
];

const colorMap = [
    {
        dot: "bg-vercel-blue",
        text: "text-vercel-blue",
        spotlight: "rgba(0, 112, 243, 0.12)",
        badge: "bg-vercel-blue/10 text-vercel-blue border-vercel-blue/20",
    },
    {
        dot: "bg-vercel-cyan",
        text: "text-vercel-cyan",
        spotlight: "rgba(121, 255, 225, 0.12)",
        badge: "bg-vercel-cyan/10 text-vercel-cyan border-vercel-cyan/20",
    },
    {
        dot: "bg-vercel-pink",
        text: "text-vercel-pink",
        spotlight: "rgba(255, 0, 128, 0.12)",
        badge: "bg-vercel-pink/10 text-vercel-pink border-vercel-pink/20",
    },
    {
        dot: "bg-vercel-violet",
        text: "text-vercel-violet",
        spotlight: "rgba(121, 40, 202, 0.12)",
        badge: "bg-vercel-violet/10 text-vercel-violet border-vercel-violet/20",
    },
];

const TechStack = () => {
    const { t } = useLanguage();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <section id="stack" className="py-24 px-4 sm:px-6 relative overflow-hidden">
            <div className="pointer-events-none absolute top-1/2 right-0 w-[600px] h-[600px] bg-vercel-violet/5 rounded-full blur-[140px]" />

            <div className="relative max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-white/10 bg-white/[0.03]">
                        <span className="w-1.5 h-1.5 rounded-full bg-vercel-violet" />
                        <span className="text-xs font-medium text-zinc-400">
                            {t.stack.badge}
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        <span className="text-gradient">{t.stack.title}</span>
                    </h2>
                    <p className="text-base sm:text-lg text-zinc-400 max-w-2xl">
                        {t.stack.subtitle}
                    </p>
                </motion.div>

                {/* Categories Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
                >
                    {t.stack.categories.map((category, catIndex) => {
                        const color = colorMap[catIndex];
                        return (
                            <motion.div key={catIndex} variants={itemVariants}>
                                <SpotlightCard
                                    spotlightColor={color.spotlight}
                                    className="p-6 h-full flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between gap-2 mb-6 pb-3 border-b border-white/5">
                                            <div className="flex items-center gap-2.5">
                                                <span
                                                    className={`w-2 h-2 rounded-full ${color.dot} shadow-[0_0_8px_currentColor]`}
                                                />
                                                <h3 className="text-sm font-bold text-white tracking-wide">
                                                    {category.name}
                                                </h3>
                                            </div>
                                            <div>{categoryIcons[catIndex]}</div>
                                        </div>

                                        <ul className="space-y-3">
                                            {category.details.map(
                                                (detail, itemIndex) => (
                                                    <li
                                                        key={itemIndex}
                                                        className="group/item flex items-start gap-3 p-2 -mx-2 rounded-lg hover:bg-white/[0.04] transition-colors"
                                                    >
                                                        <div
                                                            className={`flex-shrink-0 w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[11px] font-bold ${color.text} font-mono group-hover/item:border-white/20 transition-all`}
                                                        >
                                                            {itemNames[catIndex][
                                                                itemIndex
                                                            ]
                                                                .slice(0, 2)
                                                                .toUpperCase()}
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-semibold text-white leading-tight">
                                                                {
                                                                    itemNames[catIndex][
                                                                        itemIndex
                                                                    ]
                                                                }
                                                            </p>
                                                            <p className="text-xs text-zinc-400 mt-0.5">
                                                                {detail}
                                                            </p>
                                                        </div>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Stack Numbers */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5 }}
                    className="mt-16 pt-12 border-t border-white/10"
                >
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">
                        {t.stack.numbersTitle}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                        {t.stack.numbers.map((num, i) => (
                            <SpotlightCard
                                key={i}
                                spotlightColor="rgba(121, 40, 202, 0.1)"
                                className="p-5"
                            >
                                <p className="text-3xl font-bold text-white mb-1 font-mono tracking-tight text-gradient-purple">
                                    {num.value}
                                </p>
                                <p className="text-xs sm:text-sm text-zinc-400 font-medium">
                                    {num.label}
                                </p>
                            </SpotlightCard>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;
