import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import "./index.css";

function App() {
    return (
        <div className="bg-black min-h-screen">
            <Navbar />
            <Hero />
            <Projects />
            <Achievements />
        </div>
    );
}

export default App;
