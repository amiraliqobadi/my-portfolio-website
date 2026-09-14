import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useLanguage } from "../i18n/useLanguage";
import SpotlightCard from "./ui/SpotlightCard";
import TiltCard from "./ui/TiltCard";
import { Trophy, Award, Code, CheckCircle, ExternalLink, Quote, Sparkles } from "lucide-react";

import icpcTehranImg from "../assets/certificates/icpc-asia-tehran-2024.webp";
import icpcIranImg from "../assets/certificates/icpc-iran-internet-2024.webp";
import maktabSharifImg from "../assets/certificates/maktab-sharif-django.webp";

const certificatesImgs = [icpcTehranImg, icpcIranImg, maktabSharifImg];
const certificatesNames = {
    en: [
        "ICPC Asia Tehran 2024",
        "20th Iran Internet Contest",
        "Maktab Sharif",
    ],
    fa: ["ICPC آسیا تهران ۲۰۲۴", "بیستمین مسابقه اینترنت ایران", "مکتب شریف"],
};

const achievementIcons = [
    <Trophy key="icpc" className="w-5 h-5 text-vercel-blue" />,
    <Code key="lc" className="w-5 h-5 text-vercel-cyan" />,
    <Award key="biaupc" className="w-5 h-5 text-vercel-pink" />,
    <Sparkles key="quera" className="w-5 h-5 text-vercel-violet" />,
];

const achievementKeys = ["icpc", "leetcode", "biaupc", "quera"];
const achievementMeta = [
    {
        label: "ACM-ICPC",
        value: "ICPC",
        accent: "vercel-blue",
        spotlight: "rgba(0, 112, 243, 0.15)",
        gradient: "from-white via-zinc-200 to-zinc-400",
    },
    {
        label: "LeetCode",
        value: "Top 6.9%",
        accent: "vercel-cyan",
        spotlight: "rgba(121, 255, 225, 0.15)",
        gradient: "from-vercel-cyan via-white to-zinc-300",
        link: "https://leetcode.com/u/amiraliqobadi/",
    },
    {
        label: "BIAUPC",
        value: "2nd Place",
        accent: "vercel-pink",
        spotlight: "rgba(255, 0, 128, 0.15)",
        gradient: "from-vercel-pink via-white to-zinc-300",
    },
    {
        label: "Quera",
        value: "7.01",
        accent: "vercel-violet",
        spotlight: "rgba(121, 40, 202, 0.15)",
        gradient: "from-vercel-violet via-white to-zinc-300",
        link: "https://quera.org/profile/AmiraliQobadi",
    },
];

const accentClasses = {
    "vercel-blue": "text-vercel-blue bg-vercel-blue/10 border-vercel-blue/20",
    "vercel-cyan": "text-vercel-cyan bg-vercel-cyan/10 border-vercel-cyan/20",
    "vercel-pink": "text-vercel-pink bg-vercel-pink/10 border-vercel-pink/20",
    "vercel-violet": "text-vercel-violet bg-vercel-violet/10 border-vercel-violet/20",
};

const Achievements = () => {
    const { t, lang } = useLanguage();

    const triggerConfetti = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;

        confetti({
            particleCount: 40,
            spread: 60,
            origin: { x, y },
            colors: ["#79FFE1", "#0070F3", "#FF0080", "#7928CA", "#ffffff"],
            disableForReducedMotion: true,
        });
    };

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
        hidden: { opacity: 0, y: 22 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <section
            id="achievements"
            className="py-24 px-4 sm:px-6 relative overflow-hidden"
        >
            <div className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] bg-vercel-pink/5 rounded-full blur-[140px]" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-[600px] h-[600px] bg-vercel-blue/5 rounded-full blur-[140px]" />

            <div className="relative max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-white/10 bg-white/[0.03]">
                        <Trophy className="w-3.5 h-3.5 text-vercel-pink" />
                        <span className="text-xs font-medium text-zinc-400">
                            {t.achievements.badge}
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        <span className="text-gradient">
                            {t.achievements.title}
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg text-zinc-400 max-w-2xl">
                        {t.achievements.subtitle}
                    </p>
                </motion.div>

                {/* Achievement Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14"
                >
                    {achievementKeys.map((key, i) => {
                        const meta = achievementMeta[i];
                        const card = t.achievements.cards[key];

                        return (
                            <motion.div key={key} variants={itemVariants}>
                                <TiltCard maxTilt={5}>
                                    <SpotlightCard
                                        spotlightColor={meta.spotlight}
                                        className="p-6 sm:p-7 h-full flex flex-col justify-between group"
                                        onClick={triggerConfetti}
                                    >
                                        <div>
                                            <div className="flex items-start justify-between mb-5">
                                                <div
                                                    className={`inline-flex items-center justify-center w-10 h-10 rounded-xl border ${accentClasses[meta.accent]}`}
                                                >
                                                    {achievementIcons[i]}
                                                </div>
                                                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest font-semibold">
                                                    {meta.label}
                                                </span>
                                            </div>

                                            <p
                                                className={`text-3xl sm:text-4xl font-bold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-br ${meta.gradient} font-mono`}
                                            >
                                                {meta.value}
                                            </p>
                                            <p className="text-sm font-semibold text-zinc-200 mb-3">
                                                {card.title}
                                            </p>
                                            <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                                                {card.desc}
                                            </p>
                                        </div>

                                        {meta.link && (
                                            <a
                                                href={meta.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors pt-2"
                                            >
                                                <span>{t.achievements.viewProfile}</span>
                                                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                            </a>
                                        )}
                                    </SpotlightCard>
                                </TiltCard>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Verified Certificates */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-14"
                >
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
                        {t.achievements.verified}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        {certificatesImgs.map((img, i) => (
                            <TiltCard key={i} maxTilt={6}>
                                <a
                                    href={img}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/30 transition-all duration-300 shadow-lg"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                                        <img
                                            src={img}
                                            alt={certificatesNames.en[i]}
                                            loading="lazy"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                                    </div>
                                    <div className="p-4 bg-zinc-950/60 backdrop-blur-md">
                                        <p className="text-sm font-semibold text-white mb-0.5 group-hover:text-vercel-cyan transition-colors">
                                            {certificatesNames[lang][i]}
                                        </p>
                                        <p className="text-xs text-zinc-400">
                                            {t.achievements.certSubtitles[i]}
                                        </p>
                                    </div>
                                </a>
                            </TiltCard>
                        ))}
                    </div>
                </motion.div>

                {/* Additional Highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5 }}
                    className="pt-8 border-t border-white/10"
                >
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
                        {t.achievements.additionalTitle}
                    </p>
                    <ul className="flex flex-wrap gap-2.5">
                        {t.achievements.additional.map((h, i) => (
                            <li
                                key={i}
                                className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs sm:text-sm text-zinc-300 bg-white/[0.03] border border-white/10 rounded-full hover:border-white/20 transition-colors"
                            >
                                <CheckCircle className="w-3.5 h-3.5 text-vercel-cyan" />
                                <span>{h}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Quote Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5 }}
                    className="mt-16 p-6 sm:p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] via-zinc-950/70 to-transparent backdrop-blur-xl"
                >
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-vercel-violet/10 border border-vercel-violet/25 flex items-center justify-center shadow-md">
                            <Quote className="w-6 h-6 text-vercel-violet" />
                        </div>
                        <div>
                            <p className="text-zinc-200 text-sm sm:text-base leading-relaxed italic mb-3 font-light">
                                "{t.achievements.quote}"
                            </p>
                            <p className="text-xs text-zinc-500 font-mono">
                                — {t.achievements.quoteBy}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
