import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useLanguage } from "../i18n/useLanguage";
import { Mail, Sparkles } from "lucide-react";

const Navbar = () => {
    const { t, lang, toggleLang } = useLanguage();
    const [scrolled, setScrolled] = useState(false);

    // Scroll progress bar
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Glowing Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-vercel-blue via-vercel-cyan to-vercel-pink z-[60] origin-left"
                style={{ scaleX }}
            />

            <motion.header
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 transition-all duration-300 pointer-events-none"
            >
                <div
                    className={`max-w-6xl mx-auto h-14 px-4 sm:px-5 flex items-center justify-between rounded-full transition-all duration-500 pointer-events-auto ${
                        scrolled
                            ? "bg-zinc-950/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                            : "bg-white/[0.02] backdrop-blur-md border border-white/5"
                    }`}
                >
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2.5 group">
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 0.3 }}
                            className="w-8 h-8 rounded-lg bg-gradient-to-br from-white to-zinc-200 text-black flex items-center justify-center font-bold text-xs shadow-md"
                        >
                            AQ
                        </motion.div>
                        <span className="font-semibold text-sm tracking-tight hidden sm:flex items-center gap-1.5 text-zinc-200 group-hover:text-white transition-colors">
                            {t.nav.name}
                            <Sparkles className="w-3 h-3 text-vercel-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                        </span>
                    </a>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/5">
                        {t.nav.links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="px-3.5 py-1 text-xs font-medium text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-white/[0.08]"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Language Switcher & CTA */}
                    <div className="flex items-center gap-2">
                        {/* Smooth Sliding Language Toggle */}
                        <div className="relative flex items-center rounded-full border border-white/10 bg-white/[0.03] p-0.5 text-xs font-medium">
                            <button
                                onClick={toggleLang}
                                className="relative z-10 px-2.5 py-1 text-xs font-medium transition-colors"
                                aria-label="Switch to English"
                            >
                                <span
                                    className={
                                        lang === "en"
                                            ? "text-black font-semibold"
                                            : "text-zinc-400 hover:text-white"
                                    }
                                >
                                    EN
                                </span>
                            </button>
                            <button
                                onClick={toggleLang}
                                className="relative z-10 px-2.5 py-1 text-xs font-medium transition-colors"
                                aria-label="Switch to Persian"
                            >
                                <span
                                    className={
                                        lang === "fa"
                                            ? "text-black font-semibold"
                                            : "text-zinc-400 hover:text-white"
                                    }
                                >
                                    فا
                                </span>
                            </button>

                            {/* Animated Background Pill */}
                            <motion.div
                                layoutId="langPill"
                                transition={{
                                    type: "spring",
                                    stiffness: 450,
                                    damping: 30,
                                }}
                                className={`absolute top-0.5 bottom-0.5 rounded-full bg-white shadow-sm ${
                                    lang === "en"
                                        ? "left-0.5 w-[32px]"
                                        : "right-0.5 w-[30px]"
                                }`}
                            />
                        </div>

                        {/* Contact CTA */}
                        <motion.a
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            href="mailto:amiraliqobadi5@gmail.com"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs rounded-full bg-white text-black font-medium hover:bg-zinc-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                        >
                            <Mail className="w-3 h-3" />
                            <span className="hidden sm:inline">{t.nav.cta}</span>
                        </motion.a>
                    </div>
                </div>
            </motion.header>
        </>
    );
};

export default Navbar;
