import React from "react";

const projects = [
    {
        id: 1,
        title: "HyperArian",
        domain: "hyperarian.com",
        description:
            "Corporate platform for a 15,000 sqm hypermarket complex serving 50,000+ SKUs with membership system, job portal, blog, and facility showcases.",
        tech: ["Django", "React", "PostgreSQL", "Redis"],
        gradient: "from-blue-500 to-cyan-500",
        url: "https://hyperarian.com",
    },
    {
        id: 2,
        title: "MoshtaghMarket",
        domain: "moshtaghmarket.com",
        description:
            "Multi-branch retail platform spanning 5 cities with custom interactive branch-finder map, geolocation, city routing, and content magazine.",
        tech: ["FastAPI", "React", "PostgreSQL", "Leaflet Maps"],
        gradient: "from-purple-500 to-pink-500",
        url: "https://moshtaghmarket.com",
    },
    {
        id: 3,
        title: "HyperGhedmat",
        domain: "hyperghedmat.com",
        description:
            "Content platform for one of northern Iran's largest hypermarkets with daily articles, offers, and brand stories powered by a custom Django CMS.",
        tech: ["Django", "React", "Redis Cache", "SEO"],
        gradient: "from-green-500 to-emerald-500",
        url: "https://hyperghedmat.com",
    },
    {
        id: 4,
        title: "DastchinShomal",
        domain: "dastchinshomal.com",
        description:
            "FMCG e-commerce brand platform featuring product storytelling with scroll-driven parallax UI and mobile-first responsive design.",
        tech: ["Django", "React", "Tailwind", "Stripe"],
        gradient: "from-orange-500 to-red-500",
        url: "https://dastchinshomal.com",
    },
];

const ProjectCard = ({ project }) => {
    return (
        <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:bg-white/[0.04] hover:border-white/20"
        >
            {/* Gradient Preview (جایگزین تصویر - بعداً می‌تونیم screenshot واقعی اضافه کنیم) */}
            <div
                className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}
            >
                <div className="absolute inset-0 bg-black/20" />

                {/* Browser mockup */}
                <div className="absolute inset-4 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 p-3 flex flex-col">
                    <div className="flex items-center gap-1.5 mb-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                        <div className="ml-3 flex-1 bg-white/10 rounded h-4 max-w-[180px] flex items-center px-2">
                            <span className="text-[10px] text-white/60 truncate">
                                {project.domain}
                            </span>
                        </div>
                    </div>
                    <div className="flex-1 space-y-2">
                        <div className="h-2 bg-white/20 rounded w-3/4" />
                        <div className="h-2 bg-white/15 rounded w-1/2" />
                        <div className="h-2 bg-white/10 rounded w-5/6" />
                        <div className="mt-4 grid grid-cols-3 gap-1">
                            <div className="h-8 bg-white/10 rounded" />
                            <div className="h-8 bg-white/10 rounded" />
                            <div className="h-8 bg-white/10 rounded" />
                        </div>
                    </div>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                        className="w-4 h-4 text-black"
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
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-white transition-colors">
                        {project.title}
                    </h3>
                    <span className="text-xs text-zinc-500 font-mono">
                        {project.domain}
                    </span>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                </p>

                {/* Tech Stack Tags */}
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
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6 relative">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-vercel-blue/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-6xl mx-auto">
                {/* Section Header */}
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
                        4 custom-built systems serving real customers daily — no
                        templates, no CMS. Each architected and shipped from
                        scratch with full product ownership.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Stats Footer */}
                <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <p className="text-3xl font-semibold text-white mb-1 font-mono">
                            4
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
