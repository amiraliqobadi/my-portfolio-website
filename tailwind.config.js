/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Geist", "system-ui", "sans-serif"],
                mono: ["Geist Mono", "monospace"],
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
                "gradient-x": "gradientX 15s ease infinite",
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
                gradientX: {
                    "0%, 100%": { "background-position": "0% 50%" },
                    "50%": { "background-position": "100% 50%" },
                },
            },
        },
    },
    plugins: [],
};
