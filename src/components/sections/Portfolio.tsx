import { SectionWrapper } from "../ui/SectionWrapper";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "../ui/ProjectCard";
import { projects } from "../../data/projects";
import { useLanguage } from "../../i18n/language";

export function Portfolio() {
  const { text } = useLanguage();

  return (
    <SectionWrapper id="portfolio">
      <SectionHeading
        title={text.portfolio.title}
        subtitle={text.portfolio.subtitle}
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
