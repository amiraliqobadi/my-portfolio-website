import React from "react";
import { useLanguage } from "../i18n/useLanguage";

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
    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-black/70 backdrop-blur-md rounded-full border border-white/10">
        <span className="relative flex w-1.5 h-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
        </span>
        <span className="text-[10px] text-zinc-300 font-medium uppercase tracking-wider">
            {label}
        </span>
    </div>
);

const FeaturedCard = ({ project, t, lang }) => (
    <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.04] transition-all duration-300"
    >
        <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto overflow-hidden bg-zinc-900">
                <img
                    src={project.image}
                    alt={project.domain}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/30" />
                <div className="absolute top-4 left-4">
                    <LiveBadge label={t.projects.live} />
                </div>
            </div>

            <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="inline-flex items-center gap-1.5 self-start px-3 py-1 mb-4 rounded-full text-xs font-medium text-vercel-cyan bg-vercel-cyan/10 border border-vercel-cyan/20">
                    {t.projects.featuredBadge}
                </span>
                <div className="flex items-baseline justify-between gap-4 mb-3">
                    <h3 className="text-2xl md:text-3xl font-semibold text-white">
                        {titleMap[project.titleKey][lang]}
                    </h3>
                    <span className="text-xs text-zinc-500 font-mono">
                        {project.domain}
                    </span>
                </div>
                <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-6">
                    {t.projects.descs[project.titleKey]}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((te) => (
                        <span
                            key={te}
                            className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-white/5 text-zinc-300 border border-white/5"
                        >
                            {te}
                        </span>
                    ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white group-hover:text-vercel-cyan transition-colors">
                    {t.projects.visit}
                    <svg
                        className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </span>
            </div>
        </div>
    </a>
);

const ProjectCard = ({ project, t, lang }) => (
    <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:bg-white/[0.04] hover:border-white/20"
    >
        <div className="relative h-52 overflow-hidden bg-zinc-900">
            <img
                src={project.image}
                alt={project.domain}
                loading="lazy"
                className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                <span className="text-xs text-white font-medium">
                    {t.projects.visit}
                </span>
            </div>
            <div className="absolute top-4 left-4">
                <LiveBadge label={t.projects.live} />
            </div>
        </div>

        <div className="p-6">
            <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold text-white">
                    {titleMap[project.titleKey][lang]}
                </h3>
                <span className="text-xs text-zinc-500 font-mono">
                    {project.domain}
                </span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                {t.projects.descs[project.titleKey]}
            </p>
            <div className="flex flex-wrap gap-1.5">
                {project.tech.map((te) => (
                    <span
                        key={te}
                        className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-white/5 text-zinc-300 border border-white/5"
                    >
                        {te}
                    </span>
                ))}
            </div>
        </div>
    </a>
);

const Projects = () => {
    const { t, lang } = useLanguage();
    const featured = projectsData[0];
    const regular = projectsData.slice(1);

    return (
        // ADDED overflow-hidden HERE
        <section id="projects" className="py-24 px-6 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-vercel-blue/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-6xl mx-auto">
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-white/10 bg-white/[0.02]">
                        <span className="w-1.5 h-1.5 rounded-full bg-vercel-blue" />
                        <span className="text-xs text-zinc-400">
                            {t.projects.badge}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                        <span className="text-gradient">
                            {t.projects.title}
                        </span>
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl">
                        {t.projects.subtitle}
                    </p>
                </div>

                <div className="mb-6">
                    <FeaturedCard project={featured} t={t} lang={lang} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {regular.map((project) => (
                        <ProjectCard
                            key={project.titleKey}
                            project={project}
                            t={t}
                            lang={lang}
                        />
                    ))}
                </div>

                <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {t.projects.stats.map((stat, i) => (
                        <div key={i}>
                            <p className="text-3xl font-semibold text-white mb-1 font-mono">
                                {stat.value}
                            </p>
                            <p className="text-sm text-zinc-400">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
