import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "./translations";

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        return {
            lang: "en",
            isFa: false,
            toggleLang: () => {},
            t: translations.en,
        };
    }
    return context;
};
