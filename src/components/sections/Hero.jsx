import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative px-6">
      <div className="max-w-screen-2xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        <div className="space-y-8 reveal text-center md:text-left">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tighter leading-none text-white">
            {t("hero.title")}
          </h1>
          <p className="text-2xl sm:text-3xl text-zinc-400 tracking-tight">{t("hero.subtitle")}</p>
          <p className="max-w-md mx-auto md:mx-0 text-base sm:text-lg text-zinc-400">
            {t("hero.desc")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-black rounded-3xl text-base font-medium flex items-center gap-2 hover:bg-violet-300 transition-all active:scale-95"
            >
              {t("hero.btnProjects")} →
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-white/30 hover:border-white/60 rounded-3xl text-base font-medium text-white transition-all"
            >
              {t("hero.btnContact")}
            </a>
          </div>
        </div>

        <div className="relative h-80 sm:h-96 md:h-full flex justify-center items-center reveal">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96">
            <div className="orb absolute top-8 left-8 w-40 h-40 bg-violet-400/30 rounded-full blur-3xl" />
            <div className="orb absolute bottom-12 right-12 w-56 h-56 bg-cyan-400/30 rounded-full blur-3xl" style={{ animationDelay: "3s" }} />
            <div className="orb absolute top-32 right-4 w-32 h-32 bg-fuchsia-400/25 rounded-full blur-3xl" style={{ animationDelay: "7s" }} />

            <div className="glass absolute inset-0 m-auto w-64 h-64 sm:w-72 sm:h-72 rounded-3xl flex items-center justify-center border border-white/20 shadow-[0_0_70px_-20px] shadow-violet-400/50">
              <div className="text-center">
                <div className="text-6xl sm:text-7xl font-light text-white/90">React</div>
                <div className="text-sm tracking-[4px] text-violet-300">+ Tailwind</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-xs tracking-widest text-white/40">
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        SCROLL
      </div>
    </section>
  );
};

export default Hero;