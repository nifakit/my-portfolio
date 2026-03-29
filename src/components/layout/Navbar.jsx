import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const Navbar = () => {
  const { t } = useTranslation();

  const navLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-screen-2xl mx-auto px-8 py-5 flex items-center justify-between">
        <a href="#" className="text-3xl font-semibold tracking-tighter text-white">nifakit</a>

        
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

        
        <div className="flex items-center gap-1 bg-white/10 rounded-3xl p-1 border border-white/10">
          {["en", "ru", "uk"].map((lng) => (
            <button
              key={lng}
              onClick={() => i18n.changeLanguage(lng)}
              className={`px-4 py-1.5 text-xs font-medium rounded-3xl transition-all ${
                i18n.language === lng
                  ? "bg-white text-black shadow-inner"
                  : "text-white hover:bg-white/20"
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

        
        <button className="md:hidden p-2 text-white">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;