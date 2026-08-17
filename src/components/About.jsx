import React from "react";
import { useLanguage } from "../i18n/useLanguage";

const factIcons = [
    <svg
        key="loc"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
    </svg>,
    <svg
        key="lang"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
    </svg>,
    <svg
        key="work"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
    </svg>,
];

const About = () => {
    const { t } = useLanguage();

    return (
        // ADDED overflow-hidden HERE
        <section id="about" className="py-24 px-6 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-vercel-cyan/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-6xl mx-auto">
                <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-start">
                    <div className="relative mx-auto md:mx-0">
                        <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 flex items-center justify-center relative overflow-hidden">
                            <div
                                className="absolute inset-0 opacity-[0.15]"
                                style={{
                                    backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                                    backgroundSize: "16px 16px",
                                }}
                            />
                            <span className="relative text-7xl md:text-8xl font-bold text-gradient tracking-tighter">
                                AQ
                            </span>
                        </div>
                        <div className="absolute -bottom-3 -right-3 flex items-center gap-1.5 px-3 py-1.5 bg-black border border-white/10 rounded-full shadow-xl">
                            <span className="relative flex w-2 h-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs text-zinc-300 font-medium">
                                {t.about.available}
                            </span>
                        </div>
                    </div>

                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-white/10 bg-white/[0.02]">
                            <span className="w-1.5 h-1.5 rounded-full bg-vercel-cyan" />
                            <span className="text-xs text-zinc-400">
                                {t.about.badge}
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                            <span className="text-gradient">
                                {t.about.title}
                            </span>
                        </h2>

                        <div className="space-y-4 text-base md:text-lg text-zinc-400 leading-relaxed mb-8">
                            <p>{t.about.p1}</p>
                            <p>{t.about.p2}</p>
                            <p>{t.about.p3}</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                            {t.about.facts.map((fact, i) => (
                                <div
                                    key={i}
                                    className="p-4 rounded-lg border border-white/10 bg-white/[0.02]"
                                >
                                    <div className="flex items-center gap-2 text-zinc-500 text-xs mb-1.5">
                                        {factIcons[i]}
                                        <span className="uppercase tracking-wider font-mono">
                                            {fact.label}
                                        </span>
                                    </div>
                                    <p
                                        className={`text-sm font-medium ${fact.highlight ? "text-green-400" : "text-white"}`}
                                    >
                                        {fact.value}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-all text-sm text-zinc-200"
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                            {t.about.resume}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
