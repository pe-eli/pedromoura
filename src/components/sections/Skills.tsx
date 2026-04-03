import { useState } from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { SectionHeading } from "../ui/SectionHeading";
import { ProgressBar } from "../ui/ProgressBar";
import { skills } from "../../data/skills";
import type { SkillCategory } from "../../data/types";
import { useLanguage } from "../../i18n/language";

const categories: SkillCategory[] = ["frontend", "backend", "tools", "design", "ai"];

export function Skills() {
  const { text } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "all">(
    "all"
  );

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  const sortedSkills = [...filteredSkills].sort((a, b) => {
    const levelDiff = b.level - a.level;
    if (levelDiff !== 0) return levelDiff;
    return a.name.localeCompare(b.name, "pt-BR");
  });

  return (
    <SectionWrapper id="skills">
      <div className="grid gap-10 md:grid-cols-[minmax(340px,430px)_minmax(0,1fr)] md:gap-12">
        {/* Left text column */}
        <div className="liquid-subcard min-w-0 p-5 md:p-6 [background:linear-gradient(145deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.035)_100%)]">
          <SectionHeading
            title={text.skills.title}
            subtitle={text.skills.subtitle}
          />

          {/* Category filters */}
          <div className="mt-8 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`rounded-full border px-5 py-2.5 font-display text-xs font-medium tracking-wider transition-all ${
                activeCategory === "all"
                  ? "border-neon-blue bg-neon-blue/10 text-neon-blue"
                  : "border-white/20 bg-white/4 text-text-secondary hover:border-neon-blue/40 hover:text-text-primary"
              }`}
            >
              {text.skills.all}
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full border px-5 py-2.5 font-display text-xs font-medium tracking-wider transition-all ${
                  activeCategory === cat
                    ? "border-neon-blue bg-neon-blue/10 text-neon-blue"
                    : "border-white/20 bg-white/4 text-text-secondary hover:border-neon-blue/40 hover:text-text-primary"
                }`}
              >
                {text.skills.categories[cat].toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Right skills bars */}
        <div className="liquid-subcard grid min-w-0 gap-4 p-5 sm:grid-cols-2 md:p-6 [background:linear-gradient(145deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.035)_100%)]">
          {sortedSkills.map((skill) => (
            <div key={skill.name}>
              <ProgressBar
                label={skill.name}
                value={skill.level}
                icon={skill.icon}
                category={skill.category}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
