import React from "react";
import { useLanguage } from "../i18n/useLanguage";

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-20 overflow-hidden">
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                    backgroundSize: "64px 64px",
                    maskImage:
                        "radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)",
                }}
            />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-vercel-blue/20 rounded-full blur-3xl" />

            <div className="relative max-w-4xl mx-auto text-center z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm animate-fade-in">
                    <span className="relative flex w-2 h-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-sm text-zinc-300">
                        {t.hero.badge}
                    </span>
                </div>

                <h1
                    className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 animate-fade-up"
                    style={{ animationDelay: "0.1s", opacity: 0 }}
                >
                    <span className="text-zinc-500">{t.hero.hi}</span>{" "}
                    <span className="text-gradient">{t.hero.name}</span>
                    {t.hero.nameSuffix && (
                        <>
                            {" "}
                            <span className="text-zinc-500">
                                {t.hero.nameSuffix}
                            </span>
                        </>
                    )}
                </h1>

                <p
                    className="text-xl md:text-2xl text-zinc-400 mb-6 font-light max-w-2xl mx-auto animate-fade-up"
                    style={{ animationDelay: "0.2s", opacity: 0 }}
                >
                    {t.hero.role}
                    <br className="hidden md:block" />
                    <span className="text-zinc-500">{t.hero.tagline}</span>
                </p>

                <div
                    className="flex flex-col sm:flex-row gap-3 justify-center mt-10 animate-fade-up"
                    style={{ animationDelay: "0.3s", opacity: 0 }}
                >
                    <a
                        href="#projects"
                        className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 transition-all"
                    >
                        {t.hero.ctaProjects}
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
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-white hover:bg-white/[0.04] transition-all"
                    >
                        {t.hero.ctaContact}
                    </a>
                </div>

                <div
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-xl overflow-hidden max-w-3xl mx-auto animate-fade-up"
                    style={{ animationDelay: "0.4s", opacity: 0 }}
                >
                    {t.hero.stats.map((stat, i) => (
                        <div
                            key={i}
                            className="p-6 bg-black hover:bg-white/[0.02] transition-colors"
                        >
                            <p className="text-3xl md:text-4xl font-semibold text-white mb-1 font-mono">
                                {stat.value}
                            </p>
                            <p className="text-sm font-medium text-zinc-300 mb-1">
                                {stat.label}
                            </p>
                            <p className="text-xs text-zinc-500">{stat.desc}</p>
                        </div>
                    ))}
                </div>

                <div
                    className="mt-16 flex justify-center animate-fade-up"
                    style={{ animationDelay: "0.5s", opacity: 0 }}
                >
                    <div className="flex flex-col items-center gap-2 text-zinc-500 text-xs">
                        <span>{t.hero.scroll}</span>
                        <div className="w-px h-8 bg-gradient-to-b from-zinc-500 to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
