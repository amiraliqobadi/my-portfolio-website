import React from "react";
import { useLanguage } from "../i18n/useLanguage";

import icpcTehranImg from "../assets/certificates/icpc-asia-tehran-2024.png";
import icpcIranImg from "../assets/certificates/icpc-iran-internet-2024.png";
import maktabSharifImg from "../assets/certificates/maktab-sharif-django.png";

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
    <svg
        key="icpc"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
    </svg>,
    <svg
        key="lc"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
    </svg>,
    <svg
        key="biaupc"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
    </svg>,
    <svg
        key="quera"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
    </svg>,
];

const achievementKeys = ["icpc", "leetcode", "biaupc", "quera"];
const achievementMeta = [
    { label: "ACM-ICPC", value: "ICPC", accent: "vercel-blue" },
    {
        label: "LeetCode",
        value: "Top 6.9%",
        accent: "vercel-cyan",
        link: "https://leetcode.com/u/amiraliqobadi/",
    },
    { label: "BIAUPC", value: "2nd Place", accent: "vercel-pink" },
    {
        label: "Quera",
        value: "7.01",
        accent: "vercel-violet",
        link: "https://quera.org/profile/AmiraliQobadi",
    },
];

const accentClasses = {
    "vercel-blue": "text-vercel-blue bg-vercel-blue/10 border-vercel-blue/20",
    "vercel-cyan": "text-vercel-cyan bg-vercel-cyan/10 border-vercel-cyan/20",
    "vercel-pink": "text-vercel-pink bg-vercel-pink/10 border-vercel-pink/20",
    "vercel-violet":
        "text-vercel-violet bg-vercel-violet/10 border-vercel-violet/20",
};
const valueGradients = {
    "vercel-blue": "from-white to-zinc-400",
    "vercel-cyan": "from-vercel-cyan to-white",
    "vercel-pink": "from-vercel-pink to-white",
    "vercel-violet": "from-vercel-violet to-white",
};

const Achievements = () => {
    const { t, lang } = useLanguage();

    return (
        // ADDED overflow-hidden HERE
        <section
            id="achievements"
            className="py-24 px-6 relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-vercel-pink/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-vercel-blue/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-6xl mx-auto">
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-white/10 bg-white/[0.02]">
                        <span className="w-1.5 h-1.5 rounded-full bg-vercel-pink" />
                        <span className="text-xs text-zinc-400">
                            {t.achievements.badge}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                        <span className="text-gradient">
                            {t.achievements.title}
                        </span>
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl">
                        {t.achievements.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
                    {achievementKeys.map((key, i) => {
                        const meta = achievementMeta[i];
                        const card = t.achievements.cards[key];
                        const content = (
                            <>
                                <div className="flex items-start justify-between mb-5">
                                    <div
                                        className={`inline-flex items-center justify-center w-10 h-10 rounded-lg border ${accentClasses[meta.accent]}`}
                                    >
                                        {achievementIcons[i]}
                                    </div>
                                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                                        {meta.label}
                                    </span>
                                </div>
                                <p
                                    className={`text-3xl md:text-4xl font-semibold tracking-tight mb-1 bg-clip-text text-transparent bg-gradient-to-br ${valueGradients[meta.accent]} font-mono`}
                                >
                                    {meta.value}
                                </p>
                                <p className="text-sm text-zinc-400 mb-4">
                                    {card.title}
                                </p>
                                <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                                    {card.desc}
                                </p>
                                {meta.link && (
                                    <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-300 group-hover:text-white transition-colors">
                                        {t.achievements.viewProfile}
                                        <svg
                                            className="w-3 h-3"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </>
                        );
                        const wrapperClass =
                            "group relative block p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300";
                        return meta.link ? (
                            <a
                                key={key}
                                href={meta.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={wrapperClass}
                            >
                                {content}
                            </a>
                        ) : (
                            <div key={key} className={wrapperClass}>
                                {content}
                            </div>
                        );
                    })}
                </div>

                <div className="mb-12">
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
                        {t.achievements.verified}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        {certificatesImgs.map((img, i) => (
                            <a
                                key={i}
                                href={img}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/25 transition-all duration-300"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                                    <img
                                        src={img}
                                        alt={certificatesNames.en[i]}
                                        loading="lazy"
                                        className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-4">
                                    <p className="text-sm font-medium text-white mb-0.5">
                                        {certificatesNames[lang][i]}
                                    </p>
                                    <p className="text-xs text-zinc-500">
                                        {t.achievements.certSubtitles[i]}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
                        {t.achievements.additionalTitle}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                        {t.achievements.additional.map((h, i) => (
                            <li
                                key={i}
                                className="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-zinc-300 bg-white/[0.03] border border-white/10 rounded-md"
                            >
                                <svg
                                    className="w-3.5 h-3.5 text-zinc-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                {h}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-16 p-6 md:p-8 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-vercel-violet/10 border border-vercel-violet/20 flex items-center justify-center">
                            <svg
                                className="w-6 h-6 text-vercel-violet"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                        <div>
                            <p className="text-zinc-300 leading-relaxed italic mb-3">
                                {t.achievements.quote}
                            </p>
                            <p className="text-xs text-zinc-500 font-mono">
                                {t.achievements.quoteBy}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
