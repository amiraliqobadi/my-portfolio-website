import { createContext, useEffect, useState } from "react";
import { translations } from "./translations";

const defaultContext = {
    lang: "en",
    isFa: false,
    toggleLang: () => {},
    t: translations.en,
};

export const LanguageContext = createContext(defaultContext);

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState("en");

    const toggleLang = () => setLang((prev) => (prev === "en" ? "fa" : "en"));

    useEffect(() => {
        // ═══ زبان و جهت سند ═══
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";

        // ═══ SEO پویا: عنوان صفحه ═══
        document.title =
            lang === "fa"
                ? "امیرعلی قبادی — مهندس نرم‌افزار فول‌استک | پورتفولیو و رزومه"
                : "Amirali Qobadi (امیرعلی قبادی) — Full-Stack Software Engineer";

        // ═══ SEO پویا: meta description ═══
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute(
                "content",
                lang === "fa"
                    ? "وب‌سایت و رزومه رسمی امیرعلی قبادی، مهندس نرم‌افزار فول‌استک با تخصص در Python (جنگو و FastAPI) و React.js. سازنده‌ی ۵ پلتفرم پروداکشن، شرکت‌کننده‌ی مسابقات برنامه‌نویسی ICPC و رتبه جهانی LeetCode Top 6.9%."
                    : "Official portfolio of Amirali Qobadi (امیرعلی قبادی) — Full-Stack Software Engineer specializing in Python (Django & FastAPI) and React.js. 5 production platforms shipped, ICPC contestant, LeetCode Top 6.9%.",
            );
        }

        // ═══ SEO پویا: Open Graph (پیش‌نمایش لینکدین/تلگرام) ═══
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", document.title);

        const ogDesc = document.querySelector(
            'meta[property="og:description"]',
        );
        if (ogDesc) {
            ogDesc.setAttribute(
                "content",
                lang === "fa"
                    ? "امیرعلی قبادی · ۵ پلتفرم پروداکشن تجاری · شرکت‌کننده‌ی ICPC · رتبه‌ی Top 6.9% جهانی LeetCode · React، جنگو، FastAPI، PostgreSQL، Redis"
                    : "Amirali Qobadi (امیرعلی قبادی) · 5 production platforms shipped · ICPC contestant · LeetCode Top 6.9% · React, Django, FastAPI, PostgreSQL, Redis",
            );
        }
    }, [lang]);

    const value = {
        lang,
        isFa: lang === "fa",
        toggleLang,
        t: translations[lang],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};
