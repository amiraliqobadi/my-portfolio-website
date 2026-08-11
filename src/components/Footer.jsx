import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const quickLinks = [
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#stack", label: "Stack" },
        { href: "#achievements", label: "Achievements" },
        { href: "#contact", label: "Contact" },
    ];

    const socialLinks = [
        {
            href: "https://www.linkedin.com/in/amirali-qobadi",
            label: "LinkedIn",
        },
        { href: "https://github.com/amiraliqobadi", label: "GitHub" },
        { href: "https://leetcode.com/u/amiraliqobadi/", label: "LeetCode" },
        { href: "https://quera.org/profile/AmiraliQobadi", label: "Quera" },
    ];

    return (
        <footer className="relative border-t border-white/10 bg-black">
            <div className="max-w-6xl mx-auto px-6 py-14">
                <div className="grid md:grid-cols-3 gap-10 mb-12">
                    {/* ستون اول: برند */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-md bg-white text-black flex items-center justify-center font-bold text-sm">
                                AQ
                            </div>
                            <span className="font-semibold text-white">
                                Amirali Qobadi
                            </span>
                        </div>
                        <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                            Full-Stack Engineer building scalable platforms
                            <br />
                            from database schema to pixel-perfect UI.
                        </p>
                        <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                            <span className="relative flex w-2 h-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Open to new opportunities
                        </div>
                    </div>

                    {/* ستون دوم: Navigation */}
                    <div>
                        <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
                            Navigation
                        </p>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-zinc-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ستون سوم: Connect */}
                    <div>
                        <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
                            Connect
                        </p>
                        <ul className="space-y-2">
                            {socialLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1.5 group"
                                    >
                                        {link.label}
                                        <svg
                                            className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            />
                                        </svg>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Built with section */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-zinc-500">
                        <span>© {currentYear} Amirali Qobadi.</span>
                        <span className="hidden sm:inline">·</span>
                        <span className="inline-flex items-center gap-1.5">
                            Built with
                            <span className="text-zinc-400 font-mono">
                                React
                            </span>
                            +
                            <span className="text-zinc-400 font-mono">
                                Tailwind
                            </span>
                            · Deployed on
                            <a
                                href="https://vercel.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-400 hover:text-white transition-colors font-mono"
                            >
                                Vercel
                            </a>
                        </span>
                    </div>

                    {/* Back to top */}
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors"
                    >
                        Back to top
                        <svg
                            className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
