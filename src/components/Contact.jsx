import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { useLanguage } from "../i18n/useLanguage";
import SpotlightCard from "./ui/SpotlightCard";
import TiltCard from "./ui/TiltCard";
import { Mail, Phone, Copy, Check, ArrowRight } from "lucide-react";

const Contact = () => {
    const { t, lang } = useLanguage();
    const [copied, setCopied] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);
    const email = "amiraliqobadi5@gmail.com";
    const phone = "+98 930 362 3107";

    const triggerCelebration = (e) => {
        const rect = e?.currentTarget?.getBoundingClientRect();
        const x = rect ? (rect.left + rect.width / 2) / window.innerWidth : 0.5;
        const y = rect ? (rect.top + rect.height / 2) / window.innerHeight : 0.5;

        confetti({
            particleCount: 50,
            spread: 70,
            origin: { x, y },
            colors: ["#79FFE1", "#0070F3", "#FF0080", "#7928CA", "#ffffff"],
            disableForReducedMotion: true,
        });
    };

    const copyEmail = async (e) => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            triggerCelebration(e);
            setTimeout(() => setCopied(false), 2400);
        } catch (err) {
            console.error("Copy failed", err);
        }
    };

    const copyPhone = async (e) => {
        try {
            await navigator.clipboard.writeText(phone);
            setCopiedPhone(true);
            triggerCelebration(e);
            setTimeout(() => setCopiedPhone(false), 2400);
        } catch (err) {
            console.error("Copy failed", err);
        }
    };

    const socialLinks = [
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/amirali-qobadi",
            handle: "@amirali-qobadi",
            accent: "text-[#0A66C2]",
            spotlight: "rgba(10, 102, 194, 0.15)",
            border: "hover:border-[#0A66C2]/40",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
        {
            name: "GitHub",
            href: "https://github.com/amiraliqobadi",
            handle: "@amiraliqobadi",
            accent: "text-white",
            spotlight: "rgba(255, 255, 255, 0.12)",
            border: "hover:border-white/40",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
            ),
        },
        {
            name: "LeetCode",
            href: "https://leetcode.com/u/Amirali_Qobadi_/",
            handle: "Top 6.9%",
            accent: "text-[#FFA116]",
            spotlight: "rgba(255, 161, 22, 0.15)",
            border: "hover:border-[#FFA116]/40",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.198 5.343 5.343 0 0 0 1.095 4.898 5.31 5.31 0 0 0 2.11 1.609 5.244 5.244 0 0 0 2.57.43 5.29 5.29 0 0 0 2.153-.628 5.247 5.247 0 0 0 1.77-1.501l5.644-6.034 5.418-5.796a1.374 1.374 0 0 0 .022-1.903 1.374 1.374 0 0 0-1.903-.023l-5.418 5.796-5.644 6.034a2.634 2.634 0 0 1-.887.75 2.625 2.625 0 0 1-1.08.314 2.622 2.622 0 0 1-1.284-.215 2.637 2.637 0 0 1-1.055-.804 2.669 2.669 0 0 1-.547-2.449 2.635 2.635 0 0 1 .603-1.098l3.854-4.126 5.406-5.788a1.374 1.374 0 0 0-.022-1.902A1.374 1.374 0 0 0 13.483 0z" />
                </svg>
            ),
        },
        {
            name: "Quera",
            href: "https://quera.org/profile/AmiraliQobadi",
            handle: "Rating 7.01",
            accent: "text-[#7C3AED]",
            spotlight: "rgba(124, 58, 237, 0.15)",
            border: "hover:border-[#7C3AED]/40",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
        },
    ];

    return (
        <section id="contact" className="py-24 px-4 sm:px-6 relative overflow-hidden">
            <div className="pointer-events-none absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-vercel-blue/10 rounded-full blur-[140px]" />
            <div className="pointer-events-none absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-vercel-violet/10 rounded-full blur-[140px]" />

            <div className="relative max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-white/10 bg-white/[0.03]">
                        <span className="relative flex w-2 h-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-medium text-zinc-300">
                            {t.contact.badge}
                        </span>
                    </div>

                    <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
                        <span className="text-gradient">{t.contact.title1}</span>
                        <br />
                        <span className="text-gradient-cyan">{t.contact.title2}</span>
                    </h2>

                    <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed">
                        {t.contact.subtitle}
                    </p>
                </motion.div>

                {/* Interactive Copy Buttons */}
                <div className="flex flex-col items-center gap-4 mb-12">
                    {/* Email Copy Card */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={copyEmail}
                        className="group relative inline-flex items-center justify-between gap-3 px-6 py-4 rounded-2xl border border-white/10 bg-zinc-950/70 backdrop-blur-xl hover:border-vercel-cyan/50 hover:shadow-[0_0_30px_rgba(121,255,225,0.15)] transition-all w-full max-w-md"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-vercel-cyan transition-colors">
                                <Mail className="w-4 h-4" />
                            </div>
                            <span className="text-base sm:text-lg font-mono text-white tracking-tight" dir="ltr">
                                {email}
                            </span>
                        </div>

                        <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                            {copied ? (
                                <Check className="w-4 h-4 text-emerald-400" />
                            ) : (
                                <Copy className="w-4 h-4" />
                            )}
                        </div>
                    </motion.button>

                    <AnimatePresence>
                        {copied && (
                            <motion.p
                                initial={{ opacity: 0, y: -4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -4 }}
                                className="text-xs sm:text-sm text-emerald-400 font-medium -mt-2"
                            >
                                {t.contact.copied}
                            </motion.p>
                        )}
                    </AnimatePresence>

                    {/* Phone Copy Card */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={copyPhone}
                        className="group relative inline-flex items-center justify-between gap-3 px-6 py-4 rounded-2xl border border-white/10 bg-zinc-950/70 backdrop-blur-xl hover:border-vercel-blue/50 hover:shadow-[0_0_30px_rgba(0,112,243,0.15)] transition-all w-full max-w-md"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-vercel-blue transition-colors">
                                <Phone className="w-4 h-4" />
                            </div>
                            <span className="text-base sm:text-lg font-mono text-white tracking-tight" dir="ltr">
                                {phone}
                            </span>
                        </div>

                        <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                            {copiedPhone ? (
                                <Check className="w-4 h-4 text-emerald-400" />
                            ) : (
                                <Copy className="w-4 h-4" />
                            )}
                        </div>
                    </motion.button>

                    <AnimatePresence>
                        {copiedPhone && (
                            <motion.p
                                initial={{ opacity: 0, y: -4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -4 }}
                                className="text-xs sm:text-sm text-emerald-400 font-medium -mt-2"
                            >
                                {t.contact.copied || "Copied!"}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>

                {/* Social Channels */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-3xl mx-auto mb-14">
                    {socialLinks.map((social) => (
                        <TiltCard key={social.name} maxTilt={8}>
                            <SpotlightCard
                                spotlightColor={social.spotlight}
                                className={`p-5 text-center group cursor-pointer ${social.border}`}
                            >
                                <a
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <div
                                        className={`${social.accent} mb-2 inline-flex items-center justify-center group-hover:scale-110 transition-transform`}
                                    >
                                        {social.icon}
                                    </div>
                                    <p className="text-sm font-bold text-white mb-0.5">
                                        {social.name}
                                    </p>
                                    <p className="text-xs text-zinc-400 font-mono">
                                        {social.handle}
                                    </p>
                                </a>
                            </SpotlightCard>
                        </TiltCard>
                    ))}
                </div>

                {/* Send Email Direct CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.a
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.98 }}
                        href={`mailto:${email}`}
                        className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-zinc-100 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                    >
                        <span>{t.contact.send}</span>
                        <ArrowRight
                            className={`w-4 h-4 transition-transform ${
                                lang === "fa" ? "rotate-180" : ""
                            }`}
                        />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
