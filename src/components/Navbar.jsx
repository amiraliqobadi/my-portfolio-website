import React, { useState, useEffect } from "react";
import { useLanguage } from "../i18n/useLanguage";

const Navbar = () => {
    const { t, lang, toggleLang } = useLanguage();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-md bg-white text-black flex items-center justify-center font-bold text-sm group-hover:bg-zinc-200 transition-colors">
                        AQ
                    </div>
                    <span className="font-medium text-sm hidden sm:block">
                        {t.nav.name}
                    </span>
                </a>

                <div className="hidden md:flex items-center gap-1">
                    {t.nav.links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="px-4 py-1.5 text-sm text-zinc-400 hover:text-white transition-colors rounded-md hover:bg-white/5"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={toggleLang}
                        className="flex items-center rounded-md border border-white/10 bg-white/[0.03] p-0.5 text-xs font-medium"
                        aria-label="Toggle language"
                    >
                        <span
                            className={`px-2 py-1 rounded transition-all ${lang === "en" ? "bg-white text-black" : "text-zinc-400 hover:text-white"}`}
                        >
                            EN
                        </span>
                        <span
                            className={`px-2 py-1 rounded transition-all ${lang === "fa" ? "bg-white text-black" : "text-zinc-400 hover:text-white"}`}
                        >
                            فا
                        </span>
                    </button>

                    <a
                        href="mailto:amiraliqobadi5@gmail.com"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
                    >
                        <span className="hidden sm:inline">{t.nav.cta}</span>
                        <svg
                            className="w-3.5 h-3.5 sm:hidden"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
