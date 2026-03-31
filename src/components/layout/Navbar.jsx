import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const Navbar = () => {
  const { t, i18n: i18nInstance } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 bg-black/80 backdrop-blur-2xl">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          
          <a href="#" className="text-3xl font-semibold tracking-tighter text-white">nifakit</a>

          <div className="flex-1 hidden md:flex justify-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wide text-white hover:text-violet-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="relative flex items-center bg-white/10 rounded-3xl p-0.5 border border-white/10">
              {["en", "ru", "ua"].map((lng) => (
                <button
                  key={lng}
                  onClick={() => changeLanguage(lng)}
                  className={`relative z-10 px-3 sm:px-6 py-2 text-[10px] sm:text-xs font-medium rounded-3xl transition-all duration-200 ${
                    i18nInstance.language === lng ? "text-black" : "text-white hover:bg-white/10"
                  }`}
                >
                  {lng.toUpperCase()}
                </button>
              ))}

              <div
                className="absolute top-0.5 bottom-0.5 bg-white rounded-3xl shadow-inner transition-all duration-300 ease-out"
                style={{
                  left: i18nInstance.language === "en" ? "2px" : i18nInstance.language === "ru" ? "calc(33.333% + 2px)" : "calc(66.666% + 4px)",
                  width: "calc(33.333% - 4px)",
                }}
              />
            </div>

            <a
              href="#contact"
              className="hidden md:block min-w-[138px] text-center px-7 py-3 text-sm font-medium bg-white/10 hover:bg-white/20 border border-white/20 rounded-3xl text-white transition-all whitespace-nowrap"
            >
              {t("nav.contact")}
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6h12v12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-black/95 backdrop-blur-3xl z-40 md:hidden transition-all duration-500 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}`}>
        <div className="flex flex-col items-center justify-center h-full pt-20 gap-10 text-3xl font-medium text-center">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-violet-400 transition-all py-3 px-8 hover:scale-105"
              style={{ transitionDelay: `${isOpen ? index * 60 : 0}ms` }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;