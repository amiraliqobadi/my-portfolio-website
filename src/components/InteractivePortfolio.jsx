import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronRight, Code2, ExternalLink, Mail, Map, MousePointer2, RotateCcw, Sparkles, X } from "lucide-react";
import { useLanguage } from "../i18n/useLanguage";
import studioMetano from "../assets/projects/studiometano.webp";
import hyperArian from "../assets/projects/hyperarian.webp";
import moshtaghMarket from "../assets/projects/moshtaghmarket.webp";
import hyperGhedmat from "../assets/projects/hyperghedmat.webp";
import dastchinShomal from "../assets/projects/dastchinshomal.webp";
import icpcTehran from "../assets/certificates/icpc-asia-tehran-2024.webp";
import icpcIran from "../assets/certificates/icpc-iran-internet-2024.webp";
import maktabDjango from "../assets/certificates/maktab-sharif-django.webp";

const WORLD = { width: 2700, height: 1800 };
const START = { x: 620, y: 900, angle: 0 };
const projects = [
    { id: "studiometano", title: "StudioMetano", eyebrow: "Creative engineering studio", x: 1100, y: 430, color: "#ff675c", image: studioMetano, url: "https://studiometano.com", tech: ["React", "Vite", "Tailwind", "CI/CD"] },
    { id: "hyperarian", title: "HyperArian", eyebrow: "Retail platform", x: 1960, y: 430, color: "#ffcf4a", image: hyperArian, url: "https://hyperarian.com", tech: ["Django", "React", "PostgreSQL", "Redis"] },
    { id: "moshtagh", title: "Moshtagh Market", eyebrow: "Multi-branch experience", x: 2150, y: 1070, color: "#7ed7ff", image: moshtaghMarket, url: "https://moshtaghmarket.com", tech: ["FastAPI", "React", "PostgreSQL", "Maps"] },
    { id: "ghedmat", title: "Hyper Ghedmat", eyebrow: "Content platform", x: 1550, y: 1430, color: "#a98dff", image: hyperGhedmat, url: "https://hyperghedmat.com", tech: ["Django", "React", "Redis", "SEO"] },
    { id: "dastchin", title: "Dastchin Shomal", eyebrow: "FMCG brand platform", x: 720, y: 1430, color: "#63e6a6", image: dastchinShomal, url: "https://dastchinshomal.com", tech: ["Django", "React", "Tailwind", "Parallax"] },
];

const certificates = [
    { id: "icpc-tehran", image: icpcTehran, year: "2024", title: { en: "ICPC Asia Tehran Regional", fa: "مسابقات منطقه‌ای ICPC آسیا تهران" }, issuer: { en: "Honorable participation · Regional Contest", fa: "حضور افتخاری · مسابقه منطقه‌ای" } },
    { id: "icpc-iran", image: icpcIran, year: "2024", title: { en: "20th Iran Internet Contest", fa: "بیستمین مسابقه اینترنتی ایران" }, issuer: { en: "ICPC Iran · Ranked participation", fa: "ICPC ایران · حضور رتبه‌بندی‌شده" } },
    { id: "django", image: maktabDjango, year: "400h", title: { en: "Python & Django Development", fa: "توسعه پایتون و جنگو" }, issuer: { en: "Maktab Sharif · Practical program", fa: "مکتب شریف · دوره عملی" } },
];

const copy = {
    en: { kicker: "FULL-STACK ENGINEER · INTERACTIVE PORTFOLIO", titleA: "Hi, I'm Amirali.", titleB: "I build digital worlds.", intro: "Drive around, discover my work and park beside a project to open it.", start: "Start exploring", controls: "Use WASD or arrow keys to drive", nearby: "Project discovered", visit: "Visit live project", about: "About", work: "Work", certificates: "Certificates", contact: "Contact", reset: "Reset car", aboutTitle: "Engineer first, coder second.", aboutBody: "I'm a full-stack engineer specializing in Python backends and React frontends. I design and ship complete products—from database architecture to the last interaction on screen.", aboutStat1: "5 live platforms", aboutStat2: "270+ problems solved", certificatesTitle: "Credentials earned through practice.", certificatesBody: "Competitive programming and 400 hours of practical Python and Django training.", openCertificate: "Open full certificate", contactTitle: "Let's make something memorable.", contactBody: "I'm open to ambitious product work, full-stack roles and select freelance projects.", tip: "Drive close to a colored project station" },
    fa: { kicker: "مهندس فول‌استک · پورتفولیوی تعاملی", titleA: "سلام، من امیرعلی‌ام.", titleB: "دنیای دیجیتال می‌سازم.", intro: "رانندگی کن، پروژه‌هایم را پیدا کن و کنار هر پروژه توقف کن تا باز شود.", start: "شروع ماجراجویی", controls: "با WASD یا کلیدهای جهت حرکت کن", nearby: "پروژه پیدا شد", visit: "مشاهده پروژه", about: "درباره من", work: "پروژه‌ها", certificates: "گواهینامه‌ها", contact: "ارتباط", reset: "بازگشت ماشین", aboutTitle: "اول مهندس، بعد برنامه‌نویس.", aboutBody: "مهندس فول‌استک متخصص در بک‌اند پایتون و فرانت‌اند React هستم. محصول را از معماری دیتابیس تا آخرین تعامل روی صفحه طراحی و منتشر می‌کنم.", aboutStat1: "۵ پلتفرم آنلاین", aboutStat2: "۲۷۰+ مسئله حل‌شده", certificatesTitle: "اعتبارهایی که با تمرین به دست آمده‌اند.", certificatesBody: "مسابقات برنامه‌نویسی و ۴۰۰ ساعت آموزش عملی پایتون و جنگو.", openCertificate: "مشاهده کامل گواهینامه", contactTitle: "بیایید چیزی ماندگار بسازیم.", contactBody: "برای پروژه‌های جدی، موقعیت‌های فول‌استک و همکاری فریلنس آماده‌ام.", tip: "به ایستگاه‌های رنگی پروژه نزدیک شو" },
};

const trees = Array.from({ length: 74 }, (_, i) => ({ x: 90 + ((i * 347) % 2480), y: 80 + ((i * 613) % 1630), r: 15 + (i % 5) * 3 }))
    .filter((tree) => !projects.some((project) => Math.hypot(tree.x - project.x, tree.y - project.y) < 230));

function roundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath(); ctx.roundRect(x, y, width, height, Math.min(radius, width / 2, height / 2));
}

function drawWorld(ctx, width, height, dpr, car, images, time) {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, width, height); ctx.fillStyle = "#87ba62"; ctx.fillRect(0, 0, width, height);
    ctx.save(); ctx.translate(width / 2, height / 2); const scale = Math.max(.72, Math.min(1.04, width / 1200)); ctx.scale(scale, scale); ctx.rotate(-car.angle); ctx.translate(-car.x, -car.y);
    ctx.fillStyle = "#82b35e"; ctx.fillRect(0, 0, WORLD.width, WORLD.height);
    ctx.strokeStyle = "rgba(255,255,255,.09)"; ctx.lineWidth = 1;
    for (let x = 0; x <= WORLD.width; x += 90) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, WORLD.height); ctx.stroke(); }
    for (let y = 0; y <= WORLD.height; y += 90) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(WORLD.width, y); ctx.stroke(); }
    ctx.lineCap = "round"; ctx.lineJoin = "round"; ctx.strokeStyle = "#d8c7a1"; ctx.lineWidth = 180; ctx.beginPath();
    ctx.moveTo(210, 900); ctx.lineTo(2450, 900); ctx.moveTo(1110, 160); ctx.lineTo(1110, 1580); ctx.moveTo(1970, 250); ctx.lineTo(1970, 1500); ctx.moveTo(410, 1430); ctx.lineTo(2300, 1430); ctx.stroke();
    ctx.strokeStyle = "#6b6960"; ctx.lineWidth = 142; ctx.stroke(); ctx.strokeStyle = "rgba(255,255,255,.54)"; ctx.lineWidth = 4; ctx.setLineDash([28, 34]); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle = "#74c8d8"; ctx.beginPath(); ctx.ellipse(390, 330, 270, 155, -.24, 0, Math.PI * 2); ctx.fill(); ctx.strokeStyle = "rgba(255,255,255,.28)"; ctx.lineWidth = 9; ctx.stroke();
    trees.forEach((tree, i) => { ctx.fillStyle = "rgba(34,61,25,.2)"; ctx.beginPath(); ctx.ellipse(tree.x + 10, tree.y + 13, tree.r, tree.r * .62, 0, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = i % 3 === 0 ? "#397946" : "#468850"; ctx.beginPath(); ctx.arc(tree.x, tree.y, tree.r, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = "rgba(255,255,255,.12)"; ctx.beginPath(); ctx.arc(tree.x - tree.r * .25, tree.y - tree.r * .25, tree.r * .48, 0, Math.PI * 2); ctx.fill(); });
    projects.forEach((project, index) => { const pulse = 1 + Math.sin(time / 500 + index) * .045; ctx.save(); ctx.translate(project.x, project.y); ctx.scale(pulse, pulse); ctx.fillStyle = "rgba(18,23,18,.2)"; ctx.beginPath(); ctx.ellipse(12, 55, 168, 46, 0, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = project.color; ctx.beginPath(); ctx.arc(0, 32, 112, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = "#eee8dc"; ctx.beginPath(); ctx.arc(0, 32, 82, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = "#262823"; roundedRect(ctx, -132, -94, 264, 142, 13); ctx.fill(); ctx.fillStyle = "#f5f1e8"; roundedRect(ctx, -120, -82, 240, 112, 6); ctx.fill(); const image = images.current[project.id]; if (image?.complete) { ctx.save(); roundedRect(ctx, -116, -78, 232, 104, 4); ctx.clip(); ctx.drawImage(image, -116, -78, 232, 104); ctx.restore(); } ctx.fillStyle = "#262823"; ctx.font = "700 21px system-ui"; ctx.textAlign = "center"; ctx.fillText(project.title, 0, 72); ctx.restore(); });
    ctx.strokeStyle = "rgba(38,50,31,.35)"; ctx.lineWidth = 24; ctx.strokeRect(0, 0, WORLD.width, WORLD.height); ctx.restore();
    ctx.save(); ctx.translate(width / 2, height / 2); ctx.fillStyle = "rgba(23,30,24,.28)"; ctx.beginPath(); ctx.ellipse(7, 16, 27, 48, 0, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = "#242520"; roundedRect(ctx, -29, -47, 58, 94, 18); ctx.fill(); ctx.fillStyle = "#ff5b4f"; roundedRect(ctx, -24, -43, 48, 86, 15); ctx.fill(); ctx.fillStyle = "#d9eced"; ctx.beginPath(); ctx.moveTo(-18, -22); ctx.lineTo(18, -22); ctx.lineTo(14, 3); ctx.lineTo(-14, 3); ctx.closePath(); ctx.fill(); ctx.fillStyle = "#293538"; roundedRect(ctx, -16, 8, 32, 21, 6); ctx.fill(); ctx.fillStyle = "#fff1a6"; ctx.fillRect(-18, -42, 10, 5); ctx.fillRect(8, -42, 10, 5); ctx.restore();
    const vignette = ctx.createRadialGradient(width / 2, height / 2, 120, width / 2, height / 2, Math.max(width, height) * .72); vignette.addColorStop(0, "rgba(0,0,0,0)"); vignette.addColorStop(1, "rgba(20,31,18,.22)"); ctx.fillStyle = vignette; ctx.fillRect(0, 0, width, height);
}

const TouchButton = ({ label, code, setKey, className = "" }) => (
    <button
        type="button"
        className={`touch-key ${className}`}
        onPointerDown={(event) => {
            event.preventDefault();
            event.stopPropagation();
            event.currentTarget.setPointerCapture?.(event.pointerId);
            setKey(code, true);
        }}
        onPointerUp={(event) => {
            event.preventDefault();
            event.currentTarget.releasePointerCapture?.(event.pointerId);
            event.currentTarget.blur();
            setKey(code, false);
        }}
        onPointerCancel={(event) => {
            event.preventDefault();
            event.currentTarget.releasePointerCapture?.(event.pointerId);
            event.currentTarget.blur();
            setKey(code, false);
        }}
        onPointerLeave={(event) => {
            if (event.pointerType === "mouse") setKey(code, false);
        }}
        onClick={(event) => event.preventDefault()}
        onContextMenu={(event) => event.preventDefault()}
        onDragStart={(event) => event.preventDefault()}
        aria-label={label}
    >
        {label}
    </button>
);

export default function InteractivePortfolio() {
    const { lang, toggleLang } = useLanguage(); const c = copy[lang]; const canvasRef = useRef(null); const keys = useRef({}); const car = useRef({ ...START, speed: 0 }); const images = useRef({});
    const [started, setStarted] = useState(false); const [nearby, setNearby] = useState(null); const [panel, setPanel] = useState(null); const [sound, setSound] = useState(true); const [mapPosition, setMapPosition] = useState(START);
    useEffect(() => { projects.forEach((project) => { const image = new Image(); image.src = project.image; images.current[project.id] = image; }); }, []);
    const setKey = useCallback((code, value) => { keys.current[code] = value; }, []);
    const resetCar = useCallback(() => { car.current = { ...START, speed: 0 }; setMapPosition(START); setNearby(null); }, []);
    const travelTo = useCallback((project) => { const next = { x: project.x, y: project.y + 205, angle: 0, speed: 0 }; car.current = next; setMapPosition(next); setNearby(project); setPanel(null); setStarted(true); }, []);
    useEffect(() => { const down = (event) => { if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(event.code)) event.preventDefault(); keys.current[event.code] = true; }; const up = (event) => { keys.current[event.code] = false; }; window.addEventListener("keydown", down, { passive: false }); window.addEventListener("keyup", up); return () => { window.removeEventListener("keydown", down); window.removeEventListener("keyup", up); }; }, []);
    useEffect(() => {
        const canvas = canvasRef.current; const ctx = canvas.getContext("2d"); let frame; let previous = performance.now();
        const resize = () => { const dpr = Math.min(window.devicePixelRatio || 1, 2); canvas.width = window.innerWidth * dpr; canvas.height = window.innerHeight * dpr; canvas.style.width = `${window.innerWidth}px`; canvas.style.height = `${window.innerHeight}px`; }; resize(); window.addEventListener("resize", resize);
        const loop = (now) => { const delta = Math.min((now - previous) / 16.67, 2); previous = now; const state = car.current; const forward = keys.current.ArrowUp || keys.current.KeyW; const backward = keys.current.ArrowDown || keys.current.KeyS; const left = keys.current.ArrowLeft || keys.current.KeyA; const right = keys.current.ArrowRight || keys.current.KeyD;
            if (started && !panel) { if (forward) state.speed += .32 * delta; if (backward) state.speed -= .25 * delta; state.speed *= Math.pow(.965, delta); state.speed = Math.max(-4.3, Math.min(7.4, state.speed)); const steer = Math.min(Math.abs(state.speed) / 2.2, 1) * .045 * delta * (state.speed < 0 ? -1 : 1); if (left) state.angle -= steer; if (right) state.angle += steer; state.x += Math.sin(state.angle) * state.speed * delta; state.y -= Math.cos(state.angle) * state.speed * delta; state.x = Math.max(70, Math.min(WORLD.width - 70, state.x)); state.y = Math.max(70, Math.min(WORLD.height - 70, state.y)); }
            const closest = projects.map((project) => ({ project, distance: Math.hypot(state.x - project.x, state.y - project.y) })).sort((a, b) => a.distance - b.distance)[0]; const nextNearby = closest.distance < 210 ? closest.project : null; setNearby((current) => current?.id === nextNearby?.id ? current : nextNearby); setMapPosition((current) => Math.abs(current.x - state.x) > 10 || Math.abs(current.y - state.y) > 10 ? { x: state.x, y: state.y } : current); drawWorld(ctx, window.innerWidth, window.innerHeight, Math.min(window.devicePixelRatio || 1, 2), state, images, now); frame = requestAnimationFrame(loop); };
        frame = requestAnimationFrame(loop); return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); };
    }, [started, panel]);

    return <main className="world-shell" dir={lang === "fa" ? "rtl" : "ltr"}>
        <canvas ref={canvasRef} className="world-canvas" aria-label="Interactive portfolio world" />
        <header className="game-header"><button className="brand-mark" onClick={resetCar} aria-label="Amirali Qobadi home"><span>AQ</span><strong>AMIRALI<br />QOBADI</strong></button><nav className="game-nav"><button onClick={() => setPanel("about")}>{c.about}</button><button onClick={() => setPanel("work")}>{c.work}</button><button onClick={() => setPanel("certificates")}>{c.certificates}</button><button onClick={() => setPanel("contact")}>{c.contact}</button></nav><div className="header-actions"><button className="round-button" onClick={toggleLang}>{lang === "en" ? "FA" : "EN"}</button><button className={`round-button sound-button ${sound ? "is-on" : ""}`} onClick={() => setSound(!sound)} aria-label="Toggle sound"><span /><span /><span /></button></div></header>
        {!started && <section className="welcome-card"><div className="welcome-kicker"><Sparkles size={14} /> {c.kicker}</div><h1>{c.titleA}<br /><em>{c.titleB}</em></h1><p>{c.intro}</p><button className="primary-cta" onClick={() => setStarted(true)}>{c.start}<ArrowRight size={18} /></button><div className="control-hint"><span className="key-set">W A S D</span>{c.controls}</div></section>}
        {started && !panel && <div className="explore-tip"><MousePointer2 size={15} /><span>{c.tip}</span></div>}
        {nearby && started && !panel && <article className="project-popover" style={{ "--accent": nearby.color }}><div className="project-image"><img src={nearby.image} alt="" /></div><div className="project-copy"><span className="discovered"><i />{c.nearby}</span><p>{nearby.eyebrow}</p><h2>{nearby.title}</h2><div className="project-tags">{nearby.tech.map((item) => <span key={item}>{item}</span>)}</div><a href={nearby.url} target="_blank" rel="noreferrer">{c.visit}<ExternalLink size={15} /></a></div></article>}
        <aside className="map-card"><div className="map-label"><Map size={14} /><span>WORLD MAP</span></div><div className="mini-map"><div className="road horizontal" /><div className="road vertical one" /><div className="road vertical two" />{projects.map((project) => <button key={project.id} style={{ left: `${project.x / WORLD.width * 100}%`, top: `${project.y / WORLD.height * 100}%`, background: project.color }} onClick={() => travelTo(project)} aria-label={`Go to ${project.title}`} />)}<i style={{ left: `${mapPosition.x / WORLD.width * 100}%`, top: `${mapPosition.y / WORLD.height * 100}%` }} /></div><button className="reset-link" onClick={resetCar}><RotateCcw size={12} />{c.reset}</button></aside>
        <div className="touch-controls"><div className="touch-steer"><TouchButton label="←" code="ArrowLeft" setKey={setKey} /><TouchButton label="→" code="ArrowRight" setKey={setKey} /></div><div className="touch-pedals"><TouchButton label="↑" code="ArrowUp" setKey={setKey} className="gas" /><TouchButton label="↓" code="ArrowDown" setKey={setKey} /></div></div>
        {panel && <div className="panel-backdrop" onClick={(event) => event.target === event.currentTarget && setPanel(null)}><section className={`info-panel ${panel === "certificates" ? "certificates-panel" : ""}`}><button className="panel-close" onClick={() => setPanel(null)}><X /></button>{panel === "about" && <><span className="panel-number">01 / ABOUT</span><h2>{c.aboutTitle}</h2><p>{c.aboutBody}</p><div className="stats-row"><strong>{c.aboutStat1}</strong><strong>{c.aboutStat2}</strong></div><div className="stack-line"><Code2 size={17} /> Python · Django · FastAPI · React · PostgreSQL · Redis</div></>}{panel === "work" && <><span className="panel-number">02 / SELECTED WORK</span><h2>{lang === "fa" ? "پنج محصول واقعی، نه پروژه نمایشی." : "Five real products, not concept pieces."}</h2><div className="work-list">{projects.map((project, index) => <button key={project.id} onClick={() => travelTo(project)}><span>0{index + 1}</span><strong>{project.title}</strong><small>{project.eyebrow}</small><ChevronRight /></button>)}</div></>}{panel === "certificates" && <><span className="panel-number">03 / CERTIFICATES</span><h2>{c.certificatesTitle}</h2><p>{c.certificatesBody}</p><div className="certificate-grid">{certificates.map((certificate) => <a className="certificate-card" key={certificate.id} href={certificate.image} target="_blank" rel="noreferrer"><div className="certificate-preview"><img src={certificate.image} alt={certificate.title[lang]} loading="lazy" /><span>{c.openCertificate}<ExternalLink size={13} /></span></div><div className="certificate-meta"><small>{certificate.year}</small><strong>{certificate.title[lang]}</strong><p>{certificate.issuer[lang]}</p></div></a>)}</div></>}{panel === "contact" && <><span className="panel-number">04 / CONTACT</span><h2>{c.contactTitle}</h2><p>{c.contactBody}</p><a className="big-email" href="mailto:amiraliqobadi5@gmail.com"><Mail />amiraliqobadi5@gmail.com</a><div className="social-row"><a href="https://github.com/amiraliqobadi" target="_blank" rel="noreferrer"><Code2 />GitHub</a><a href="https://www.linkedin.com/in/amirali-qobadi" target="_blank" rel="noreferrer"><ExternalLink />LinkedIn</a></div></>}</section></div>}
        <footer className="game-footer"><span>© 2026 AQ</span><span>DESIGNED & ENGINEERED WITH CARE</span></footer>
    </main>;
}
