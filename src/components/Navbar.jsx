import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useLanguage } from "../i18n/useLanguage";
import { useTheme } from "../hooks/useTheme";
import { Mail, Sparkles, Sun, Moon, Menu, X } from "lucide-react";

const Navbar = () => {
    const { t, lang, toggleLang } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                            ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-sm dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                            : "bg-white/40 dark:bg-white/[0.02] backdrop-blur-md border border-black/5 dark:border-white/5"
                    }`}
                >
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2.5 group">
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 0.3 }}
                            className="w-8 h-8 rounded-lg bg-gradient-to-br from-zinc-700 to-zinc-900 dark:from-white dark:to-zinc-200 text-white dark:text-black flex items-center justify-center font-bold text-xs shadow-md"
                        >
                            AQ
                        </motion.div>
                        <span className="font-semibold text-sm tracking-tight hidden sm:flex items-center gap-1.5 text-zinc-700 group-hover:text-black dark:text-zinc-200 dark:group-hover:text-white transition-colors">
                            {t.nav.name}
                            <Sparkles className="w-3 h-3 text-vercel-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                        </span>
                    </a>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex items-center gap-1 bg-black/[0.03] dark:bg-white/[0.03] p-1 rounded-full border border-black/5 dark:border-white/5">
                        {t.nav.links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="px-3.5 py-1 text-xs font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors rounded-full hover:bg-black/[0.05] dark:hover:bg-white/[0.08]"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Controls & CTA */}
                    <div className="flex items-center gap-2">
                        {/* Smooth Sliding Language Toggle */}
                        <div className="relative flex items-center rounded-full border border-black/5 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] p-0.5 text-xs font-medium">
                            <button
                                onClick={toggleLang}
                                className="relative z-10 px-2.5 py-1 text-xs font-medium transition-colors"
                                aria-label="Switch to English"
                            >
                                <span
                                    className={
                                        lang === "en"
                                            ? "text-black dark:text-black font-semibold"
                                            : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
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
                                            ? "text-black dark:text-black font-semibold"
                                            : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
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

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="relative flex items-center justify-center w-8 h-8 rounded-full border border-black/5 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] text-zinc-600 dark:text-zinc-300 hover:bg-black/[0.08] dark:hover:bg-white/[0.08] transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </button>

                        {/* Contact CTA */}
                        <motion.a
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            href="mailto:amiraliqobadi5@gmail.com"
                            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs rounded-full bg-zinc-900 text-white dark:bg-white dark:text-black font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-sm dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                        >
                            <Mail className="w-3 h-3" />
                            <span>{t.nav.cta}</span>
                        </motion.a>

                        {/* Hamburger Menu Toggle (Mobile) */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden relative flex items-center justify-center w-8 h-8 rounded-full border border-black/5 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] text-zinc-600 dark:text-zinc-300 hover:bg-black/[0.08] dark:hover:bg-white/[0.08] transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-[68px] left-4 right-4 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-2xl shadow-xl overflow-hidden md:hidden pointer-events-auto z-50"
                        >
                            <nav className="flex flex-col p-4 gap-1">
                                {t.nav.links.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="px-4 py-3 text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors rounded-xl hover:bg-black/[0.05] dark:hover:bg-white/[0.08] flex items-center justify-between"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>
        </>
    );
};

export default Navbar;
