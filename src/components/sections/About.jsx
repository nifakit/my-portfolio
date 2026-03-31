import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="py-28 lg:py-36 bg-black/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(at_center,#ffffff08_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* ── Left: heading + about text ── */}
          <div className="lg:col-span-7">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-2px] leading-none mb-8 reveal bg-gradient-to-r from-white via-zinc-200 to-white bg-clip-text text-transparent">
              {t("about.title")}
            </h2>

            <div className="glass rounded-3xl p-10 md:p-14 border border-white/10 bg-white/5 backdrop-blur-3xl shadow-2xl reveal">
              <p className="text-lg md:text-xl text-zinc-200 leading-relaxed">
                {t("about.text")}
              </p>
            </div>
          </div>

          {/* ── Right: status cards ── */}
          <div className="lg:col-span-5 flex flex-col gap-4 reveal">

            {/* Open to work */}
            <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/5 backdrop-blur-xl p-6 flex items-center gap-4">
              <span className="relative flex h-3 w-3 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
              </span>
              <div>
                <p className="text-sm font-medium text-emerald-300">{t("about.status.available")}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{t("about.status.availableDesc")}</p>
              </div>
            </div>

            {/* Currently learning */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">{t("about.status.learning")}</p>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React Query", "Zustand", "Framer Motion", "PostgreSQL"].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-xs font-medium border border-violet-500/30 bg-violet-500/10 text-violet-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Focus */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">{t("about.status.focus")}</p>
              <ul className="space-y-2.5">
                {[
                  t("about.status.focus1"),
                  t("about.status.focus2"),
                  t("about.status.focus3"),
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;