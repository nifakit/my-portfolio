/* eslint-disable no-unused-vars */
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import {
  Mail,
  ArrowRight,
  FileText,
  Code2,
  MessageSquare,
  Settings,
  User,
} from "lucide-react";

// ---- typewriter effect: types the full line, pauses, erases, pauses, repeats ----
const Typewriter = ({
  text,
  typeSpeed = 90,
  deleteSpeed = 55,
  pauseAfterType = 2000,
  pauseAfterDelete = 600,
  className = "",
}) => {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState("typing"); // "typing" | "deleting"

  useEffect(() => {
    if (!text) return;
    let timeout;

    if (phase === "typing") {
      if (displayed.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayed(text.slice(0, displayed.length + 1));
        }, typeSpeed);
      } else {
        timeout = setTimeout(() => setPhase("deleting"), pauseAfterType);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(text.slice(0, displayed.length - 1));
        }, deleteSpeed);
      } else {
        timeout = setTimeout(() => setPhase("typing"), pauseAfterDelete);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, text, typeSpeed, deleteSpeed, pauseAfterType, pauseAfterDelete]);

  return (
    <span className={className}>
      {displayed}
      <span className="typewriter-cursor">|</span>
    </span>
  );
};

// ---- magnetic wrapper: element drifts toward the cursor, snaps back on leave ----
// softened: lower pull strength + smoother, slower return
const Magnetic = ({ children, strength = 0.15, className = "" }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: x * strength, y: y * strength });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className={className}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition:
          pos.x === 0 && pos.y === 0
            ? "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)"
            : "transform 0.25s ease-out",
      }}
    >
      {children}
    </div>
  );
};

// TODO: replace with your real links
const socialLinks = [
  { icon: FaLinkedin, href: "https://linkedin.com/in/nikita-nikulin-aa53783a7", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/nifakit", label: "GitHub" },
  { icon: Mail, href: "mailto:nikitanikulin182@gmail.com", label: "Email" },
  { icon: FaInstagram, href: "https://instagram.com/nifakit", label: "Instagram" },
];

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative px-6">
      <div className="max-w-screen-2xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="space-y-6 reveal text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-sm text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            {t("hero.badge", "Available for opportunities")}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter leading-none">
            <Typewriter
              key={t("hero.title")}
              text={`${t("hero.greeting", "Hi, I'm")} ${t("hero.title")}`}
              className="text-white/90"
            />
          </h1>

          <p className="text-2xl sm:text-3xl text-zinc-400 tracking-tight">{t("hero.subtitle")}</p>
          <p className="max-w-md mx-auto md:mx-0 text-base sm:text-lg text-zinc-400">
            {t("hero.desc")}
          </p>

          <div className="flex justify-center md:justify-start gap-4 pt-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Magnetic key={label} strength={0.15}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-zinc-300 hover:text-white hover:border-white/40 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              </Magnetic>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
            <Magnetic strength={0.12}>
              <a
                href="#contact"
                className="min-w-[170px] px-8 py-4 bg-gradient-to-r from-cyan-400 to-sky-500 text-black rounded-full text-base font-medium flex items-center justify-center gap-2 active:scale-95 transition-transform"
              >
                {t("hero.btnContact")} <ArrowRight className="w-4 h-4" />
              </a>
            </Magnetic>
            <Magnetic strength={0.12}>
              <a
                href="#projects"
                className="px-8 py-4 border border-white/30 hover:border-white/60 rounded-full text-base font-medium text-white flex items-center justify-center gap-2 transition-colors"
              >
                <FileText className="w-4 h-4" />
                {t("hero.btnProjects")}
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="relative h-80 sm:h-96 md:h-full flex justify-center items-center reveal">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96">
            <div className="orb absolute top-8 left-8 w-40 h-40 bg-violet-400/30 rounded-full blur-3xl" />
            <div
              className="orb absolute bottom-12 right-12 w-56 h-56 bg-cyan-400/30 rounded-full blur-3xl"
              style={{ animationDelay: "3s" }}
            />
            <div
              className="orb absolute top-32 right-4 w-32 h-32 bg-fuchsia-400/25 rounded-full blur-3xl"
              style={{ animationDelay: "7s" }}
            />

            {/* floating chips, same idea as the reference (not a copy of the artwork) */}
            <div className="float-chip absolute -top-4 -left-4 w-16 h-11 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xl flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white/70" />
            </div>
            <div
              className="float-chip absolute -top-2 right-2 w-14 h-14 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xl flex items-center justify-center"
              style={{ animationDelay: "1.5s" }}
            >
              <Code2 className="w-6 h-6 text-cyan-300" />
            </div>
            <div
              className="float-chip absolute bottom-2 -right-6 w-12 h-12 rounded-full bg-white/10 border border-white/15 backdrop-blur-xl flex items-center justify-center"
              style={{ animationDelay: "0.8s" }}
            >
              <Settings className="w-5 h-5 text-violet-300" />
            </div>

            <div className="glass absolute inset-0 m-auto w-72 h-72 sm:w-72 sm:h-72 rounded-full flex items-center justify-center border border-white/20 shadow-[0_0_70px_-20px] shadow-violet-400/50 overflow-hidden">
              {/* drop a photo at /public/avatar.png to show it here — falls back to a plain avatar placeholder */}
              <img
                src="src\assets\avatar.jpg"
                alt={t("hero.title")}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextSibling.style.display = "flex";
                }}
              />
              <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-cyan-400/10 to-violet-400/10">
                <User className="w-24 h-24 text-white/30" strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-xs tracking-widest text-white/40">
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        SCROLL
      </div>

      <style>{`
        .typewriter-cursor {
          display: inline-block;
          margin-left: 2px;
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        .float-chip {
          animation: floaty 4s ease-in-out infinite;
        }
        @keyframes floaty {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;