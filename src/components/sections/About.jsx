import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-28 lg:py-36 bg-black/30 relative overflow-hidden">
      {/* Декоративный radial background — добавляет глубину и современный вид */}
      <div className="absolute inset-0 bg-[radial-gradient(at_center,#ffffff08_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Левая колонка — контент */}
          <div className="lg:col-span-7">
            <div className="max-w-2xl">
              {/* Градиентный заголовок — трендовый приём 2025 года */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-2px] leading-none mb-8 reveal bg-gradient-to-r from-white via-zinc-200 to-white bg-clip-text text-transparent">
                {t("about.title")}
              </h2>

              {/* Улучшенная glass-карточка */}
              <div className="glass rounded-3xl p-10 md:p-14 border border-white/10 bg-white/5 backdrop-blur-3xl shadow-2xl reveal">
                <p className="text-lg md:text-xl text-zinc-200 leading-relaxed">
                  {t("about.text")}
                </p>
              </div>
            </div>
          </div>

          {/* Правая колонка — декоративный визуал (CSS-only, без внешних изображений) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Основной glass-блок */}
              <div className="absolute inset-0 rounded-3xl glass border border-white/10 bg-white/5 backdrop-blur-3xl flex items-center justify-center">
                {/* Абстрактный декоративный элемент */}
                <div className="relative w-64 h-64 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-3xl border border-white/20 bg-gradient-to-br from-violet-500/10 to-transparent rotate-12" />
                  <div className="absolute inset-0 rounded-3xl border border-white/20 bg-gradient-to-tl from-cyan-500/10 to-transparent -rotate-12" />
                  <span className="text-[140px] text-white/5 font-light select-none">✦</span>
                </div>
              </div>

              {/* Плавающий акцент (добавляет динамики) */}
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-3xl glass border border-white/10 bg-white/5 backdrop-blur-3xl flex items-center justify-center text-6xl rotate-[-12deg] shadow-xl">
                ∞
              </div>

              {/* Ещё один маленький акцент для баланса */}
              <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-2xl glass border border-white/10 bg-white/5 backdrop-blur-3xl flex items-center justify-center text-4xl">
                ↓
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;