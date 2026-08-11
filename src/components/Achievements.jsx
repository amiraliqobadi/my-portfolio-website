import React from "react";

/* ────────────────────────────────────────────
   کارت‌های اصلی افتخارات
──────────────────────────────────────────── */
const achievements = [
    {
        id: "icpc",
        icon: (
            <svg
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
            </svg>
        ),
        label: "ACM-ICPC",
        value: "Regional",
        title: "Contestant",
        description:
            "Selected among top algorithmic teams to represent at the ACM International Collegiate Programming Contest — the most prestigious algorithm competition worldwide.",
        accent: "vercel-blue",
        link: null,
    },
    {
        id: "leetcode",
        icon: (
            <svg
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
            </svg>
        ),
        label: "LeetCode",
        value: "Top 6.9%",
        title: "Worldwide Ranking",
        description:
            "270+ problems solved across Easy, Medium, Hard. Awarded the 50 Days Badge (2024) for consistent daily practice — discipline over motivation.",
        accent: "vercel-cyan",
        link: {
            href: "https://leetcode.com/u/amiraliqobadi/",
            label: "View Profile",
        },
    },
    {
        id: "biaupc",
        icon: (
            <svg
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
            </svg>
        ),
        label: "BIAUPC",
        value: "2nd Place",
        title: "Programming Contest",
        description:
            'Silver medal as part of team "Code" in the competitive programming contest — solving 8+ algorithmic challenges under time pressure.',
        accent: "vercel-pink",
        link: null,
    },
    {
        id: "chess",
        icon: (
            <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2L9 9h6l-3-7zM9 11h6v2a3 3 0 01-3 3 3 3 0 01-3-3v-2zM9 16h6v3H9z"
                />
            </svg>
        ),
        label: "Chess",
        value: "1500+ ELO",
        title: "Strategic Rating",
        description:
            "Active chess player. Pattern recognition, lookahead thinking, and calm-under-pressure decision making — skills that translate directly to system design.",
        accent: "vercel-violet",
        link: null,
    },
];

/* ────────────────────────────────────────────
   افتخارات تکمیلی (کوچک‌تر)
──────────────────────────────────────────── */
const additionalHonors = [
    { text: "Algorithmic Contest Achievements — Quera Platform" },
    { text: "Certificate of Merit — Azad University" },
    { text: "Python/Django Development — 400h Practical Certification" },
];

/* ────────────────────────────────────────────
   کارت اصلی
──────────────────────────────────────────── */
const AchievementCard = ({ achievement }) => {
    const accentClasses = {
        "vercel-blue":
            "text-vercel-blue bg-vercel-blue/10 border-vercel-blue/20",
        "vercel-cyan":
            "text-vercel-cyan bg-vercel-cyan/10 border-vercel-cyan/20",
        "vercel-pink":
            "text-vercel-pink bg-vercel-pink/10 border-vercel-pink/20",
        "vercel-violet":
            "text-vercel-violet bg-vercel-violet/10 border-vercel-violet/20",
    };

    const valueGradients = {
        "vercel-blue": "from-white to-zinc-400",
        "vercel-cyan": "from-vercel-cyan to-white",
        "vercel-pink": "from-vercel-pink to-white",
        "vercel-violet": "from-vercel-violet to-white",
    };

    const content = (
        <>
            <div className="flex items-start justify-between mb-5">
                <div
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-lg border ${accentClasses[achievement.accent]}`}
                >
                    {achievement.icon}
                </div>

                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    {achievement.label}
                </span>
            </div>

            <p
                className={`text-3xl md:text-4xl font-semibold tracking-tight mb-1 bg-clip-text text-transparent bg-gradient-to-br ${valueGradients[achievement.accent]} font-mono`}
            >
                {achievement.value}
            </p>
            <p className="text-sm text-zinc-400 mb-4">{achievement.title}</p>

            <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                {achievement.description}
            </p>

            {achievement.link && (
                <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-300 group-hover:text-white transition-colors">
                    {achievement.link.label}
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

    return achievement.link ? (
        <a
            href={achievement.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={wrapperClass}
        >
            {content}
        </a>
    ) : (
        <div className={wrapperClass}>{content}</div>
    );
};

/* ────────────────────────────────────────────
   سکشن اصلی
──────────────────────────────────────────── */
const Achievements = () => {
    return (
        <section id="achievements" className="py-24 px-6 relative">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-vercel-pink/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-vercel-blue/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-6xl mx-auto">
                {/* هدر سکشن */}
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-white/10 bg-white/[0.02]">
                        <span className="w-1.5 h-1.5 rounded-full bg-vercel-pink" />
                        <span className="text-xs text-zinc-400">
                            Recognition
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                        <span className="text-gradient">
                            Achievements & Honors
                        </span>
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl">
                        Beyond shipping products, I compete in algorithmic
                        contests — because strong problem-solving skills
                        translate directly to better software architecture.
                    </p>
                </div>

                {/* گرید کارت‌ها */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
                    {achievements.map((a) => (
                        <AchievementCard key={a.id} achievement={a} />
                    ))}
                </div>

                {/* افتخارات تکمیلی */}
                <div className="pt-8 border-t border-white/10">
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
                        Additional Honors
                    </p>
                    <ul className="flex flex-wrap gap-2">
                        {additionalHonors.map((h, i) => (
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
                                {h.text}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* نقل‌قول شطرنج (لمس شخصی) */}
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
                                "Chess keeps my pattern recognition sharp. Every
                                game teaches me to think three moves ahead — a
                                habit I bring to every codebase I architect."
                            </p>
                            <p className="text-xs text-zinc-500 font-mono">
                                — Outside of code
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
