import { useTranslation } from "react-i18next";

const frontendSkills = [
  { name: "React", color: "bg-cyan-500", level: "advanced" },
  { name: "TypeScript", color: "bg-blue-600", level: "advanced" },
  { name: "JavaScript", color: "bg-yellow-500", level: "advanced" },
  { name: "Tailwind CSS", color: "bg-teal-500", level: "advanced" },
  { name: "HTML5", color: "bg-orange-500", level: "advanced" },
  { name: "CSS3", color: "bg-blue-500", level: "advanced" },
  { name: "Vite", color: "bg-purple-500", level: "advanced" },
  { name: "Node.js", color: "bg-green-600", level: "advanced" },
];

const backendSkills = [
  { name: "C#", color: "bg-purple-600", level: "intermediate" },
  { name: ".NET", color: "bg-indigo-600", level: "intermediate" },
  { name: "Git", color: "bg-red-500", level: "advanced" },
  { name: "npm", color: "bg-red-600", level: "advanced" },
  { name: "Azure", color: "bg-blue-700", level: "beginner" },
  { name: "Docker", color: "bg-blue-400", level: "beginner" },
  { name: "AWS", color: "bg-orange-600", level: "beginner" },
];

const Skills = () => {
  const { t } = useTranslation();

  const SkillCard = ({ skill }) => {
    return (
      <div className="group glass rounded-3xl p-5 transition-all duration-300 hover:scale-[1.03] hover:border-white/25 border border-white/10 bg-white/5 backdrop-blur-3xl">
        <div className="flex items-center gap-4">
          {/* Иконка — как в оригинале, но с чуть лучшей тенью */}
          <div
            className={`w-12 h-12 rounded-2xl ${skill.color} flex-shrink-0 flex items-center justify-center text-white text-2xl font-semibold shadow-inner group-hover:scale-110 transition-transform`}
          >
            {skill.name.slice(0, 2)}
          </div>

          {/* Название + уровень сбоку (на одной строке, не растянут) */}
          <div className="flex-1 flex items-center justify-between min-w-0">
            <div className="font-semibold text-lg tracking-tight line-clamp-1">
              {skill.name}
            </div>

            <div
              className={`inline-flex text-xs px-4 py-1.5 rounded-3xl font-medium whitespace-nowrap ${
                skill.level === "advanced"
                  ? "bg-emerald-400/10 text-emerald-300 border border-emerald-400/30"
                  : skill.level === "intermediate"
                  ? "bg-amber-400/10 text-amber-300 border border-amber-400/30"
                  : "bg-zinc-400/10 text-zinc-400 border border-zinc-400/30"
              }`}
            >
              {t(`skills.level.${skill.level}`)}
            </div>
          </div>
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

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Frontend */}
          <div>
            <h3 className="text-2xl font-medium text-violet-300 text-center lg:text-left mb-8 flex items-center gap-3 justify-center lg:justify-start">
              <span className="w-3 h-3 rounded-full bg-violet-400"></span>
              {t("skills.frontend")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {frontendSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-2xl font-medium text-cyan-300 text-center lg:text-left mb-8 flex items-center gap-3 justify-center lg:justify-start">
              <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
              {t("skills.backend")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {backendSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;