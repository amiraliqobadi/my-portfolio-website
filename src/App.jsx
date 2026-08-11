import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./index.css";

function App() {
    return (
        <div className="bg-black min-h-screen">
            <Navbar />
            <Hero />
            {/* سکشن‌های بعدی اینجا اضافه می‌شن */}
        </div>
    );
}

export default App;
