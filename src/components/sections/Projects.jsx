import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-28 bg-black/30">
      <div className="max-w-screen-2xl mx-auto px-8 text-center">
        <div className="max-w-md mx-auto glass rounded-3xl p-12 relative overflow-hidden reveal">
          
          <div className="absolute -top-6 -right-6 text-[180px] font-mono font-black text-white/5 select-none animate-pulse">
            404
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 mb-8 text-5xl animate-bounce">
              🚧
            </div>
            <h2 className="text-4xl font-semibold tracking-tighter mb-2">{t("projects.title")}</h2>
            <p className="text-2xl text-zinc-400 mb-3">{t("projects.subtitle")}</p>
            <p className="text-violet-300 text-xl mb-8">{t("projects.coming")}</p>
            <p className="text-zinc-400 max-w-xs mx-auto">{t("projects.desc")}</p>

            <div className="mt-12 h-1.5 w-40 bg-gradient-to-r from-transparent via-violet-400 to-transparent mx-auto rounded-full animate-[pulse_2s_infinite]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;