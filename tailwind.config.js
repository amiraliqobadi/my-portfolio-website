/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Geist", "Vazirmatn", "system-ui", "sans-serif"],
                mono: ["Geist Mono", "Vazirmatn", "monospace"],
            },
            colors: {
                vercel: {
                    blue: "#0070F3",
                    pink: "#FF0080",
                    cyan: "#79FFE1",
                    violet: "#7928CA",
                },
            },
            animation: {
                "fade-in": "fadeIn 0.6s ease-out forwards",
                "fade-up": "fadeUp 0.6s ease-out forwards",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                fadeUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
        },
    },
    plugins: [],
};
