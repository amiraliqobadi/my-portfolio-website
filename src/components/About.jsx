import { motion } from "framer-motion";
import { useLanguage } from "../i18n/useLanguage";
import SpotlightCard from "./ui/SpotlightCard";
import TiltCard from "./ui/TiltCard";
import { MapPin, Languages, Briefcase, FileText } from "lucide-react";

const factIcons = [
    <MapPin key="loc" className="w-4 h-4 text-vercel-cyan" />,
    <Languages key="lang" className="w-4 h-4 text-vercel-blue" />,
    <Briefcase key="work" className="w-4 h-4 text-vercel-pink" />,
];

const About = () => {
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
        <section id="about" className="py-24 px-4 sm:px-6 relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="pointer-events-none absolute top-1/2 left-0 w-[500px] h-[500px] bg-vercel-cyan/5 rounded-full blur-[120px]" />

            <div className="relative max-w-6xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-center"
                >
                    {/* Holographic Interactive Avatar Card */}
                    <motion.div variants={itemVariants} className="relative mx-auto md:mx-0">
                        <TiltCard maxTilt={12} className="group">
                            <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-3xl bg-gradient-to-br from-white/[0.08] via-zinc-900 to-black border border-white/15 flex flex-col items-center justify-center relative overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.6)] group-hover:border-vercel-cyan/40 transition-colors duration-500">
                                {/* Grid texture */}
                                <div
                                    className="absolute inset-0 opacity-[0.2]"
                                    style={{
                                        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                                        backgroundSize: "20px 20px",
                                    }}
                                />

                                {/* Ambient color reflection */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-vercel-blue/20 via-transparent to-vercel-cyan/15 opacity-60 group-hover:opacity-100 transition-opacity" />

                                <span className="relative text-7xl sm:text-8xl font-black text-gradient-cyan tracking-tighter drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
                                    AQ
                                </span>

                                <div className="absolute bottom-2 flex items-center gap-1 text-[10px] font-mono text-zinc-400">
                                    <span>Amirali Qobadi</span>
                                </div>
                            </div>
                        </TiltCard>

                        {/* Available status pill */}
                        <div className="absolute -bottom-3 -right-2 sm:-right-3 flex items-center gap-1.5 px-3 py-1.5 bg-black/90 border border-white/15 rounded-full shadow-2xl backdrop-blur-md">
                            <span className="relative flex w-2 h-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-xs text-zinc-300 font-medium">
                                {t.about.available}
                            </span>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div>
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-white/10 bg-white/[0.03]">
                            <span className="w-1.5 h-1.5 rounded-full bg-vercel-cyan" />
                            <span className="text-xs font-medium text-zinc-400">
                                {t.about.badge}
                            </span>
                        </motion.div>

                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6"
                        >
                            <span className="text-gradient">
                                {t.about.title}
                            </span>
                        </motion.h2>

                        <motion.div
                            variants={itemVariants}
                            className="space-y-4 text-base md:text-lg text-zinc-400 leading-relaxed mb-8"
                        >
                            <p>{t.about.p1}</p>
                            <p>{t.about.p2}</p>
                            <p>{t.about.p3}</p>
                        </motion.div>

                        {/* Fact Cards */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8"
                        >
                            {t.about.facts.map((fact, i) => (
                                <SpotlightCard
                                    key={i}
                                    spotlightColor="rgba(121, 255, 225, 0.1)"
                                    className="p-4"
                                >
                                    <div className="flex items-center gap-2 text-zinc-400 text-xs mb-2">
                                        {factIcons[i]}
                                        <span className="uppercase tracking-wider font-mono font-medium">
                                            {fact.label}
                                        </span>
                                    </div>
                                    <p
                                        className={`text-sm font-semibold ${
                                            fact.highlight
                                                ? "text-emerald-400"
                                                : "text-white"
                                        }`}
                                    >
                                        {fact.value}
                                    </p>
                                </SpotlightCard>
                            ))}
                        </motion.div>

                        {/* Resume CTA */}
                        <motion.div variants={itemVariants}>
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/30 transition-all text-sm font-medium text-zinc-200 shadow-sm"
                            >
                                <FileText className="w-4 h-4 text-vercel-cyan" />
                                <span>{t.about.resume}</span>
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
