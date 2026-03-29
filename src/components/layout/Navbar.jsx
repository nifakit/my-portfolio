import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-screen-2xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="text-3xl font-semibold tracking-tighter text-white">nifakit</a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
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

        {/* Language + Contact button */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1 bg-white/10 rounded-3xl p-1 border border-white/10">
            {["en", "ru", "uk"].map((lng) => (
              <button
                key={lng}
                onClick={() => i18n.changeLanguage(lng)}
                className={`px-4 py-1.5 text-xs font-medium rounded-3xl transition-all ${
                  i18n.language === lng ? "bg-white text-black shadow-inner" : "text-white hover:bg-white/20"
                }`}
              >
                {lng.toUpperCase()}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:block px-6 py-2.5 text-sm font-medium bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl text-white transition-all"
          >
            {t("nav.contact")}
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6h12v12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-zinc-950/95 backdrop-blur-2xl z-50 pt-20 flex flex-col items-center justify-center gap-10 text-2xl font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-violet-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-6 px-12 py-5 bg-white text-black rounded-3xl text-xl font-medium"
          >
            {t("nav.contact")}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;