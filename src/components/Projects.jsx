import { motion } from "framer-motion";
import { useLanguage } from "../i18n/useLanguage";
import SpotlightCard from "./ui/SpotlightCard";
import TiltCard from "./ui/TiltCard";
import { ExternalLink, Sparkles, Layers } from "lucide-react";

import studiometanoImg from "../assets/projects/studiometano.webp";
import hyperarianImg from "../assets/projects/hyperarian.webp";
import moshtaghmarketImg from "../assets/projects/moshtaghmarket.webp";
import hyperghedmatImg from "../assets/projects/hyperghedmat.webp";
import dastchinshomalImg from "../assets/projects/dastchinshomal.webp";

const projectsData = [
    {
        titleKey: "studiometano",
        image: studiometanoImg,
        domain: "studiometano.com",
        tech: ["React", "Tailwind CSS", "Vite", "CI/CD"],
        url: "https://studiometano.com",
        featured: true,
    },
    {
        titleKey: "hyperarian",
        image: hyperarianImg,
        domain: "hyperarian.com",
        tech: ["Django", "React", "PostgreSQL", "Redis"],
        url: "https://hyperarian.com",
    },
    {
        titleKey: "moshtagh",
        image: moshtaghmarketImg,
        domain: "moshtaghmarket.com",
        tech: ["FastAPI", "React", "PostgreSQL", "Leaflet Maps"],
        url: "https://moshtaghmarket.com",
    },
    {
        titleKey: "ghedmat",
        image: hyperghedmatImg,
        domain: "hyperghedmat.com",
        tech: ["Django", "React", "Redis Cache", "SEO"],
        url: "https://hyperghedmat.com",
    },
    {
        titleKey: "dastchin",
        image: dastchinshomalImg,
        domain: "dastchinshomal.com",
        tech: ["Django", "React", "Tailwind", "Parallax"],
        url: "https://dastchinshomal.com",
    },
];

const titleMap = {
    studiometano: { en: "StudioMetano", fa: "استودیو متانو" },
    hyperarian: { en: "HyperArian", fa: "هایپر آرین" },
    moshtagh: { en: "MoshtaghMarket", fa: "مشتاق مارکت" },
    ghedmat: { en: "HyperGhedmat", fa: "هایپر قدمت" },
    dastchin: { en: "DastchinShomal", fa: "دستچین شمال" },
};

const LiveBadge = ({ label }) => (
    <div className="flex items-center gap-1.5 px-3 py-1 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-full border border-black/10 dark:border-white/15 shadow-md">
        <span className="relative flex w-2 h-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-[10px] text-zinc-800 dark:text-zinc-200 font-semibold uppercase tracking-wider font-mono">
            {label}
        </span>
    </div>
);

const FeaturedCard = ({ project, t, lang }) => (
    <TiltCard maxTilt={5}>
        <SpotlightCard
            spotlightColor="rgba(121, 255, 225, 0.15)"
            className="group bg-white/50 dark:bg-transparent"
        >
            <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                <div className="grid md:grid-cols-2">
                    <div className="relative h-64 md:h-auto min-h-[260px] overflow-hidden bg-zinc-200 dark:bg-zinc-900">
                        <img
                            src={project.image}
                            alt={project.domain}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-zinc-950/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/60 dark:md:to-zinc-950/60" />
                        <div className="absolute top-4 left-4 z-10">
                            <LiveBadge label={t.projects.live} />
                        </div>
                    </div>

                    <div className="p-8 md:p-10 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-vercel-cyan bg-vercel-cyan/10 border border-vercel-cyan/25">
                                <Sparkles className="w-3 h-3" />
                                {t.projects.featuredBadge}
                            </span>
                        </div>

                        <div className="flex items-baseline justify-between gap-4 mb-3">
                            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white group-hover:text-vercel-cyan transition-colors">
                                {titleMap[project.titleKey][lang]}
                            </h3>
                            <span className="text-xs text-zinc-500 font-mono" dir="ltr">
                                {project.domain}
                            </span>
                        </div>

                        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                            {t.projects.descs[project.titleKey]}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-6">
                            {project.tech.map((te) => (
                                <span
                                    key={te}
                                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono text-zinc-700 dark:text-zinc-300 bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/10"
                                >
                                    {te}
                                </span>
                            ))}
                        </div>

                        <div className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-vercel-cyan transition-colors">
                            <span>{t.projects.visit}</span>
                            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                    </div>
                </div>
            </a>
        </SpotlightCard>
    </TiltCard>
);

const ProjectCard = ({ project, t, lang }) => (
    <TiltCard maxTilt={6}>
        <SpotlightCard
            spotlightColor="rgba(0, 112, 243, 0.12)"
            className="group h-full flex flex-col justify-between bg-white/50 dark:bg-transparent"
        >
            <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col h-full"
            >
                <div className="relative h-52 overflow-hidden bg-zinc-200 dark:bg-zinc-900">
                    <img
                        src={project.image}
                        alt={project.domain}
                        loading="lazy"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-zinc-950/80 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                    
                    <div className="absolute top-4 left-4 z-10">
                        <LiveBadge label={t.projects.live} />
                    </div>

                    <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-full border border-black/10 dark:border-white/15 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                        <span className="text-xs text-zinc-900 dark:text-white font-medium">
                            {t.projects.visit}
                        </span>
                        <ExternalLink className="w-3 h-3 text-vercel-cyan" />
                    </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-vercel-cyan transition-colors">
                                {titleMap[project.titleKey][lang]}
                            </h3>
                            <span className="text-xs text-zinc-500 font-mono" dir="ltr">
                                {project.domain}
                            </span>
                        </div>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                            {t.projects.descs[project.titleKey]}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tech.map((te) => (
                            <span
                                key={te}
                                className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono text-zinc-700 dark:text-zinc-300 bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/10"
                            >
                                {te}
                            </span>
                        ))}
                    </div>
                </div>
            </a>
        </SpotlightCard>
    </TiltCard>
);

const Projects = () => {
    const { t, lang } = useLanguage();
    const featured = projectsData[0];
    const regular = projectsData.slice(1);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.55, ease: "easeOut" },
        },
    };

    return (
        <section id="projects" className="py-24 px-4 sm:px-6 relative overflow-hidden">
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-vercel-blue/5 rounded-full blur-[140px]" />

            <div className="relative max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-black/5 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03]">
                        <Layers className="w-3.5 h-3.5 text-vercel-blue" />
                        <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                            {t.projects.badge}
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        <span className="text-gradient">
                            {t.projects.title}
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
                        {t.projects.subtitle}
                    </p>
                </motion.div>

                {/* Featured Project */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                >
                    <FeaturedCard project={featured} t={t} lang={lang} />
                </motion.div>

                {/* Regular Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {regular.map((project) => (
                        <motion.div key={project.titleKey} variants={itemVariants}>
                            <ProjectCard
                                project={project}
                                t={t}
                                lang={lang}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Production Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5 }}
                    className="mt-16 pt-12 border-t border-black/10 dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {t.projects.stats.map((stat, i) => (
                        <SpotlightCard
                            key={i}
                            spotlightColor="rgba(121, 255, 225, 0.08)"
                            className="p-5 text-center"
                        >
                            <p className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-1 font-mono tracking-tight text-gradient-cyan">
                                {stat.value}
                            </p>
                            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                                {stat.label}
                            </p>
                        </SpotlightCard>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
