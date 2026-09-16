import { useRef, useState } from "react";

export const SpotlightCard = ({
    children,
    className = "",
    spotlightColor = "rgba(121, 255, 225, 0.12)",
    borderColor = "rgba(255, 255, 255, 0.2)",
    ...props
}) => {
    const cardRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative rounded-2xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-zinc-950/60 backdrop-blur-md overflow-hidden transition-all duration-300 ${className}`}
            {...props}
        >
            {/* Dynamic Spotlight Glow */}
            <div
                className="pointer-events-none absolute -inset-px transition-opacity duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
                }}
            />

            {/* Inner Border highlight */}
            <div
                className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
                style={{
                    opacity,
                    border: `1px solid ${borderColor}`,
                    maskImage: `radial-gradient(300px circle at ${position.x}px ${position.y}px, black 30%, transparent)`,
                    WebkitMaskImage: `radial-gradient(300px circle at ${position.x}px ${position.y}px, black 30%, transparent)`,
                }}
            />

            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default SpotlightCard;
