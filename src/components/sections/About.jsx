import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-28 bg-black/30">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-semibold tracking-tighter mb-8 reveal">
            {t("about.title")}
          </h2>
          
          <div className="glass rounded-3xl p-10 md:p-14 text-left text-zinc-300 leading-relaxed reveal">
            <p className="text-lg">{t("about.text")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;