import { LanguageProvider } from "./i18n/LanguageContext";
import InteractivePortfolio from "./components/InteractivePortfolio";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./index.css";
function App() {
    return (
        <LanguageProvider>
            <InteractivePortfolio />
            <SpeedInsights />
        </LanguageProvider>
    );
}

export default App;
