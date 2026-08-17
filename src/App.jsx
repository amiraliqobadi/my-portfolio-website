import { LanguageProvider } from "./i18n/LanguageContext";
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
        <LanguageProvider>
            <div className="bg-black min-h-screen">
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
    );
}

export default App;
