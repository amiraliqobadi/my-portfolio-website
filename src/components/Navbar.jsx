import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#achievements", label: "Achievements" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-md bg-white text-black flex items-center justify-center font-bold text-sm group-hover:bg-zinc-200 transition-colors">
                        AQ
                    </div>
                    <span className="font-medium text-sm hidden sm:block">
                        Amirali Qobadi
                    </span>
                </a>

                {/* Links */}
                <div className="hidden md:flex items-center gap-1">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="px-4 py-1.5 text-sm text-zinc-400 hover:text-white transition-colors rounded-md hover:bg-white/5"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <a
                    href="mailto:amiraliqobadi5@gmail.com"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
                >
                    <span className="hidden sm:inline">Let's talk</span>
                    <span className="sm:hidden">✉️</span>
                    <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
