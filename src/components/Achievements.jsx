import React from "react";

// تصاویر مدارک
import icpcTehranImg from "../assets/certificates/icpc-asia-tehran-2024.png";
import icpcIranImg from "../assets/certificates/icpc-iran-internet-2024.png";
import maktabSharifImg from "../assets/certificates/maktab-sharif-django.png";

/* ────────────────────────────────────────────
   کارت‌های اصلی افتخارات (داده‌های واقعی)
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
        value: "ICPC",
        title: "Asia Tehran Regional — Honorable",
        description:
            "Represented Islamic Azad University of Babol in the 2024 ICPC Asia Tehran Online Regional (Honorable) and the 20th Iran Internet Contest (Ranked) — competing against the country's top algorithmic teams.",
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
        title: 'Programming Contest — Team "Code"',
        description:
            'Silver medal in the competitive programming contest — solving algorithmic challenges under time pressure as part of team "Code".',
        accent: "vercel-pink",
        link: null,
    },
    {
        id: "quera",
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
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
            </svg>
        ),
        label: "Quera",
        value: "7.01",
        title: "Developer Rating",
        description:
            "Active competitive programmer on Quera: CodeStar Software Engineering (8.7), Khodahafez 1403 (6.6), and Bale Round 1 (6.4) — all in the Algorithm track.",
        accent: "vercel-violet",
        link: {
            href: "https://quera.org/profile/AmiraliQobadi",
            label: "View Profile",
        },
    },
];

/* ────────────────────────────────────────────
   گالری مدارک (اسناد واقعی)
──────────────────────────────────────────── */
const certificates = [
    {
        image: icpcTehranImg,
        title: "ICPC Asia Tehran 2024",
        subtitle: "Honorable — Online Regional Contest",
        date: "Nov 2024",
    },
    {
        image: icpcIranImg,
        title: "20th Iran Internet Contest",
        subtitle: "Ranked — ICPC",
        date: "May 2024",
    },
    {
        image: maktabSharifImg,
        title: "Maktab Sharif",
        subtitle: "400h Practical Python/Django",
        date: "Jul 2024",
    },
];

const additionalHonors = [
    { text: "Certificate of Merit — Islamic Azad University" },
    { text: "B.Sc. Computational Science — Azad University, 2022" },
];

/* ────────────────────────────────────────────
   کارت اصلی افتخار
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

                {/* گرید کارت‌های اصلی */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
                    {achievements.map((a) => (
                        <AchievementCard key={a.id} achievement={a} />
                    ))}
                </div>

                {/* گالری مدارک واقعی */}
                <div className="mb-12">
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
                        Verified Credentials
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        {certificates.map((c) => (
                            <a
                                key={c.title}
                                href={c.image}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/25 transition-all duration-300"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                                    <img
                                        src={c.image}
                                        alt={c.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-4">
                                    <p className="text-sm font-medium text-white mb-0.5">
                                        {c.title}
                                    </p>
                                    <p className="text-xs text-zinc-500">
                                        {c.subtitle} · {c.date}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
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

                {/* نقل‌قول شطرنج */}
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
                                — Outside of code · 1500+ ELO
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
