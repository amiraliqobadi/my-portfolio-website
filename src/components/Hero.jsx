import { motion } from "framer-motion";
import { useLanguage } from "../i18n/useLanguage";
import ParticleBackground from "./canvas/ParticleBackground";
import SpotlightCard from "./ui/SpotlightCard";
import { ArrowRight, Terminal, ChevronDown } from "lucide-react";

const Hero = () => {
    const { t, lang } = useLanguage();

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
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 24,
                stiffness: 260,
            },
        },
    };

    return (
        <section className="relative min-h-[92vh] flex items-center justify-center px-4 sm:px-6 pt-28 pb-16 overflow-hidden">
            {/* Interactive HTML5 Constellation Canvas */}
            <ParticleBackground className="z-0" />

            {/* Ambient Nebula Radial Lights */}
            <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-vercel-blue/20 via-vercel-cyan/15 to-vercel-violet/20 rounded-full blur-[120px] opacity-70" />
            <div className="pointer-events-none absolute -bottom-20 left-1/4 w-[400px] h-[400px] bg-vercel-pink/10 rounded-full blur-[100px] opacity-50" />

            {/* Subtle Grid Overlay */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                    backgroundSize: "48px 48px",
                    maskImage:
                        "radial-gradient(ellipse 85% 60% at 50% 45%, black 40%, transparent 95%)",
                }}
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative max-w-4xl mx-auto text-center z-10"
            >
                {/* Available Badge */}
                <motion.div variants={itemVariants} className="inline-block mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-[0_0_20px_rgba(0,112,243,0.15)] hover:border-white/20 transition-all">
                        <span className="relative flex w-2 h-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-medium text-zinc-300">
                            {t.hero.badge}
                        </span>
                    </div>
                </motion.div>

                {/* Hero Title */}
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6"
                >
                    <span className="text-zinc-500">{t.hero.hi}</span>{" "}
                    <span className="text-gradient-cyan drop-shadow-sm">
                        {t.hero.name}
                    </span>
                    {t.hero.nameSuffix && (
                        <>
                            {" "}
                            <span className="text-zinc-500">
                                {t.hero.nameSuffix}
                            </span>
                        </>
                    )}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={itemVariants}
                    className="text-lg sm:text-xl md:text-2xl text-zinc-400 mb-8 font-light max-w-2xl mx-auto leading-relaxed"
                >
                    <span className="text-zinc-200 font-normal">
                        {t.hero.role}
                    </span>
                    <br className="hidden sm:block" />
                    <span className="text-zinc-400 text-base sm:text-xl">
                        {" "}
                        {t.hero.tagline}
                    </span>
                </motion.p>

                {/* Interactive Mini Terminal Pill */}
                <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -2 }}
                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-zinc-400 mb-8 backdrop-blur-md shadow-lg"
                    dir="ltr"
                >
                    <Terminal className="w-3.5 h-3.5 text-vercel-cyan" />
                    <span className="text-emerald-400 font-semibold">$</span>
                    <span>status --verified</span>
                    <span className="text-zinc-600">|</span>
                    <span className="text-zinc-300">
                        ICPC Tehran · LeetCode Top 6.9% · 5 Shipped Apps
                    </span>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-3 justify-center items-center"
                >
                    <motion.a
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        href="#projects"
                        className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-black font-semibold text-sm shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:bg-zinc-100 transition-all w-full sm:w-auto"
                    >
                        <span>{t.hero.ctaProjects}</span>
                        <ArrowRight
                            className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                                lang === "fa" ? "rotate-180 group-hover:-translate-x-1" : ""
                            }`}
                        />
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/15 bg-white/[0.03] backdrop-blur-md text-white font-medium text-sm hover:bg-white/[0.08] hover:border-white/30 transition-all w-full sm:w-auto"
                    >
                        <span>{t.hero.ctaContact}</span>
                    </motion.a>
                </motion.div>

                {/* Highlights / Stats Bento Grid */}
                <motion.div
                    variants={itemVariants}
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-3.5 max-w-3xl mx-auto"
                >
                    {t.hero.stats.map((stat, i) => (
                        <SpotlightCard
                            key={i}
                            spotlightColor="rgba(0, 112, 243, 0.12)"
                            className="p-5 text-center group"
                        >
                            <p className="text-3xl md:text-4xl font-bold text-white mb-1 font-mono tracking-tight group-hover:text-vercel-cyan transition-colors">
                                {stat.value}
                            </p>
                            <p className="text-xs font-semibold text-zinc-300 mb-1">
                                {stat.label}
                            </p>
                            <p className="text-[11px] text-zinc-500">{stat.desc}</p>
                        </SpotlightCard>
                    ))}
                </motion.div>

                {/* Scroll Down Cue */}
                <motion.div
                    variants={itemVariants}
                    className="mt-14 flex justify-center"
                >
                    <motion.a
                        href="#about"
                        animate={{ y: [0, 6, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 2.2,
                            ease: "easeInOut",
                        }}
                        className="flex flex-col items-center gap-1.5 text-zinc-500 hover:text-zinc-300 text-xs transition-colors"
                        aria-label="Scroll to about section"
                    >
                        <span>{t.hero.scroll}</span>
                        <ChevronDown className="w-4 h-4" />
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
