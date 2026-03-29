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

  const SkillCard = ({ skill }) => (
    <div className="flex items-center gap-4 glass rounded-3xl p-4 hover:border-white/30 transition-all group">
      <div className={`w-10 h-10 rounded-2xl ${skill.color} flex items-center justify-center text-white text-xl font-bold shadow-inner`}>
        {skill.name.slice(0, 2)}
      </div>
      <div className="flex-1">
        <div className="font-medium">{skill.name}</div>
      </div>
      <div className={`text-xs px-4 py-1.5 rounded-3xl font-medium ${
        skill.level === "advanced" ? "bg-emerald-400 text-black" :
        skill.level === "intermediate" ? "bg-amber-400 text-black" : "bg-zinc-500 text-white"
      }`}>
        {t(`skills.level.${skill.level}`)}
      </div>
    </div>
  );

  const MobileSkillCard = ({ skill }) => (
    <div className="glass rounded-3xl p-5 text-center">
      <div className="font-medium text-lg mb-2">{skill.name}</div>
      <div className={`text-xs px-5 py-1.5 inline-block rounded-3xl font-medium ${
        skill.level === "advanced" ? "bg-emerald-400 text-black" :
        skill.level === "intermediate" ? "bg-amber-400 text-black" : "bg-zinc-500 text-white"
      }`}>
        {t(`skills.level.${skill.level}`)}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-28">
      <div className="max-w-screen-2xl mx-auto px-6">
        <h2 className="text-5xl font-semibold tracking-tighter text-center mb-16 reveal">
          {t("skills.title")}
        </h2>

        <div className="space-y-16">
          
          <div>
            <h3 className="text-xl font-medium mb-6 text-violet-300 text-center">{t("skills.frontend")}</h3>
            <div className="hidden md:grid grid-cols-4 gap-4">
              {frontendSkills.map((skill) => <SkillCard key={skill.name} skill={skill} />)}
            </div>
            <div className="grid md:hidden grid-cols-2 gap-4">
              {frontendSkills.map((skill) => <MobileSkillCard key={skill.name} skill={skill} />)}
            </div>
          </div>

          
          <div>
            <h3 className="text-xl font-medium mb-6 text-cyan-300 text-center">{t("skills.backend")}</h3>
            <div className="hidden md:grid grid-cols-4 gap-4">
              {backendSkills.map((skill) => <SkillCard key={skill.name} skill={skill} />)}
            </div>
            <div className="grid md:hidden grid-cols-2 gap-4">
              {backendSkills.map((skill) => <MobileSkillCard key={skill.name} skill={skill} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;