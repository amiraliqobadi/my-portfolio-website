import { motion } from "framer-motion";
import { useLanguage } from "../i18n/useLanguage";
import { ArrowUp, ExternalLink } from "lucide-react";

const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    const quickLinks = [
        { href: "#about" },
        { href: "#projects" },
        { href: "#stack" },
        { href: "#achievements" },
        { href: "#contact" },
    ];

    const socialLinks = [
        {
            href: "https://www.linkedin.com/in/amirali-qobadi",
            label: "LinkedIn",
        },
        { href: "https://github.com/amiraliqobadi", label: "GitHub" },
        { href: "https://leetcode.com/u/Amirali_Qobadi_/", label: "LeetCode" },
        { href: "https://quera.org/profile/AmiraliQobadi", label: "Quera" },
    ];

    return (
        <footer className="relative border-t border-black/10 dark:border-white/10 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
                <div className="grid md:grid-cols-3 gap-10 mb-12">
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2.5 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xs shadow-md">
                                AQ
                            </div>
                            <span className="font-bold text-zinc-900 dark:text-white tracking-tight">
                                {t.nav?.name || "Amirali Qobadi"}
                            </span>
                        </div>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                            {t.footer.tagline}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                            <span className="relative flex w-2 h-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span>{t.footer.open}</span>
                        </div>
                    </div>

                    <div>
                        <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
                            {t.footer.navTitle}
                        </p>
                        <ul className="space-y-2.5">
                            {quickLinks.map((link, i) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                                    >
                                        {t.nav?.links?.[i]?.label ||
                                            link.href.slice(1)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
                            {t.footer.connectTitle}
                        </p>
                        <ul className="space-y-2.5">
                            {socialLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors inline-flex items-center gap-1.5 group"
                                    >
                                        <span>{link.label}</span>
                                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-vercel-cyan" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-zinc-500">
                        <span>
                            © {currentYear} {t.footer.rights}
                        </span>
                        <span className="hidden sm:inline">·</span>
                        <span className="inline-flex items-center gap-1">
                            {t.footer.built}
                        </span>
                    </div>

                    <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-black/20 dark:hover:border-white/25 transition-all"
                    >
                        <span>{t.footer.back}</span>
                        <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
