import { useTranslation } from "react-i18next";
import { Code2, Layers, Terminal, Cloud } from "lucide-react";

const skillCategories = [
  {
    key: "languages",
    icon: Code2,
    accent: "text-violet-300",
    iconBg: "bg-violet-500/15 border border-violet-400/30",
    skills: ["TypeScript", "JavaScript", "C#", "HTML5", "CSS3"],
  },
  {
    key: "frameworks",
    icon: Layers,
    accent: "text-cyan-300",
    iconBg: "bg-cyan-500/15 border border-cyan-400/30",
    skills: ["React", ".NET", "Tailwind CSS", "Node.js", "Vite"],
  },
  {
    key: "tools",
    icon: Terminal,
    accent: "text-emerald-300",
    iconBg: "bg-emerald-500/15 border border-emerald-400/30",
    skills: ["Git", "npm", "Docker"],
  },
  {
    key: "cloud",
    icon: Cloud,
    accent: "text-orange-300",
    iconBg: "bg-orange-500/15 border border-orange-400/30",
    skills: ["Azure", "AWS"],
  },
];

const Skills = () => {
  const { t } = useTranslation();

  const SkillCategoryCard = ({ category }) => {
    const Icon = category.icon;

    return (
      <div className="glass rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-3xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]">
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`w-12 h-12 rounded-2xl ${category.iconBg} flex items-center justify-center flex-shrink-0`}
          >
            <Icon className={`w-5 h-5 ${category.accent}`} />
          </div>
          <h3 className="text-xl font-semibold tracking-tight">
            {t(`skills.categories.${category.key}`, category.key)}
          </h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-zinc-200 hover:border-white/25 hover:bg-white/10 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-28 bg-black/40">
      <div className="max-w-screen-2xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-semibold tracking-[-1.5px] text-center mb-20 bg-gradient-to-r from-white via-zinc-200 to-white bg-clip-text text-transparent">
          {t("skills.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <SkillCategoryCard key={category.key} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;