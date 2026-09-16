import { LanguageProvider } from "./i18n/LanguageContext";
import { ThemeProvider } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./index.css";
function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <div className="bg-zinc-50 dark:bg-black min-h-screen text-zinc-900 dark:text-white transition-colors duration-500">
                <Navbar />
                <Hero />
                <About />
                <Projects />
                <TechStack />
                <Achievements />
                <Contact />
                <Footer />
                <SpeedInsights />
            </div>
            </LanguageProvider>
        </ThemeProvider>
    );
}

export default App;
