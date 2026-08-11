import React from "react";

// وارد کردن تصاویر واقعی
import studiometanoImg from "../assets/projects/studiometano.png";
import hyperarianImg from "../assets/projects/hyperarian.png";
import moshtaghmarketImg from "../assets/projects/moshtaghmarket.png";
import hyperghedmatImg from "../assets/projects/hyperghedmat.png";
import dastchinshomalImg from "../assets/projects/dastchinshomal.png";

/* ────────────────────────────────────────────
   پروژه ویژه: StudioMetano (کارفرمای فعلی)
──────────────────────────────────────────── */
const featuredProject = {
    title: "StudioMetano",
    domain: "studiometano.com",
    badge: "⚡ Latest Build — Current Employer",
    description:
        "Corporate platform for StudioMetano, the creative studio where I currently work as a Software Engineer. A fast, modern marketing site with portfolio showcase, services and recruitment sections — engineered to feel as premium as the brand itself.",
    tech: ["React", "Tailwind CSS", "Vite", "CI/CD"],
    image: studiometanoImg,
    url: "https://studiometano.com",
};

/* ────────────────────────────────────────────
   ۴ پلتفرم خرده‌فروشی
──────────────────────────────────────────── */
const projects = [
    {
        id: 1,
        title: "HyperArian",
        domain: "hyperarian.com",
        description:
            "Corporate platform for a 15,000 sqm hypermarket complex serving 50,000+ SKUs with membership system, job portal, blog, and facility showcases.",
        tech: ["Django", "React", "PostgreSQL", "Redis"],
        image: hyperarianImg,
        url: "https://hyperarian.com",
    },
    {
        id: 2,
        title: "MoshtaghMarket",
        domain: "moshtaghmarket.com",
        description:
            "Multi-branch retail platform spanning 5 cities with custom interactive branch-finder map, geolocation, city routing, and content magazine.",
        tech: ["FastAPI", "React", "PostgreSQL", "Leaflet Maps"],
        image: moshtaghmarketImg,
        url: "https://moshtaghmarket.com",
    },
    {
        id: 3,
        title: "HyperGhedmat",
        domain: "hyperghedmat.com",
        description:
            "Content platform for one of northern Iran's largest hypermarkets with daily articles, offers, and brand stories powered by a custom Django CMS.",
        tech: ["Django", "React", "Redis Cache", "SEO"],
        image: hyperghedmatImg,
        url: "https://hyperghedmat.com",
    },
    {
        id: 4,
        title: "DastchinShomal",
        domain: "dastchinshomal.com",
        description:
            "FMCG e-commerce brand platform featuring product storytelling with scroll-driven parallax UI and mobile-first responsive design.",
        tech: ["Django", "React", "Tailwind", "Parallax"],
        image: dastchinshomalImg,
        url: "https://dastchinshomal.com",
    },
];

/* ────────────────────────────────────────────
   کارت ویژه (تمام‌عرض)
──────────────────────────────────────────── */
const FeaturedCard = ({ project }) => (
    <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.04] transition-all duration-300"
    >
        <div className="grid md:grid-cols-2">
            {/* تصویر */}
            <div className="relative h-64 md:h-auto overflow-hidden bg-zinc-900">
                <img
                    src={project.image}
                    alt={`${project.title} — ${project.domain}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/30" />

                {/* نشانگر LIVE */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 bg-black/70 backdrop-blur-md rounded-full border border-white/10">
                    <span className="relative flex w-1.5 h-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                    </span>
                    <span className="text-[10px] text-zinc-300 font-medium uppercase tracking-wider">
                        Live
                    </span>
                </div>
            </div>

            {/* محتوا */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="inline-flex items-center gap-1.5 self-start px-3 py-1 mb-4 rounded-full text-xs font-medium text-vercel-cyan bg-vercel-cyan/10 border border-vercel-cyan/20">
                    {project.badge}
                </span>

                <div className="flex items-baseline justify-between gap-4 mb-3">
                    <h3 className="text-2xl md:text-3xl font-semibold text-white">
                        {project.title}
                    </h3>
                    <span className="text-xs text-zinc-500 font-mono">
                        {project.domain}
                    </span>
                </div>

                <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-6">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-white/5 text-zinc-300 border border-white/5"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white group-hover:text-vercel-cyan transition-colors">
                    Visit Live
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

/* ────────────────────────────────────────────
   کارت معمولی پروژه
──────────────────────────────────────────── */
const ProjectCard = ({ project }) => (
    <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:bg-white/[0.04] hover:border-white/20"
    >
        <div className="relative h-52 overflow-hidden bg-zinc-900">
            <img
                src={project.image}
                alt={`${project.title} — ${project.domain}`}
                loading="lazy"
                className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

            <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                <span className="text-xs text-white font-medium">
                    Visit Live
                </span>
                <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                </svg>
            </div>

            <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 bg-black/70 backdrop-blur-md rounded-full border border-white/10">
                <span className="relative flex w-1.5 h-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                </span>
                <span className="text-[10px] text-zinc-300 font-medium uppercase tracking-wider">
                    Live
                </span>
            </div>
        </div>

        <div className="p-6">
            <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold text-white">
                    {project.title}
                </h3>
                <span className="text-xs text-zinc-500 font-mono">
                    {project.domain}
                </span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                    <span
                        key={t}
                        className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-white/5 text-zinc-300 border border-white/5"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </div>
    </a>
);

/* ────────────────────────────────────────────
   سکشن اصلی Projects
──────────────────────────────────────────── */
const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-vercel-blue/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-6xl mx-auto">
                {/* هدر سکشن */}
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-white/10 bg-white/[0.02]">
                        <span className="w-1.5 h-1.5 rounded-full bg-vercel-blue" />
                        <span className="text-xs text-zinc-400">
                            Featured Work
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                        <span className="text-gradient">
                            Production Platforms
                        </span>
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl">
                        5 custom-built systems serving real customers daily — no
                        templates, no CMS. Each architected and shipped from
                        scratch with full product ownership.
                    </p>
                </div>

                {/* پروژه ویژه */}
                <div className="mb-6">
                    <FeaturedCard project={featuredProject} />
                </div>

                {/* گرید ۴ پلتفرم خرده‌فروشی */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* آمار پایین */}
                <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <p className="text-3xl font-semibold text-white mb-1 font-mono">
                            5
                        </p>
                        <p className="text-sm text-zinc-400">Live Platforms</p>
                    </div>
                    <div>
                        <p className="text-3xl font-semibold text-white mb-1 font-mono">
                            50K+
                        </p>
                        <p className="text-sm text-zinc-400">SKUs Managed</p>
                    </div>
                    <div>
                        <p className="text-3xl font-semibold text-white mb-1 font-mono">
                            5
                        </p>
                        <p className="text-sm text-zinc-400">Cities Covered</p>
                    </div>
                    <div>
                        <p className="text-3xl font-semibold text-white mb-1 font-mono">
                            100%
                        </p>
                        <p className="text-sm text-zinc-400">Custom Code</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
