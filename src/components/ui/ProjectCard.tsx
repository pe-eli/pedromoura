import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import { Badge } from "./Badge";
import type { Project } from "../../data/types";
import { useLanguage } from "../../i18n/language";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { locale, text } = useLanguage();

  return (
    <motion.div
      className="group relative liquid-subcard"
      whileHover={{
        borderColor: "rgba(0, 212, 255, 0.25)",
        boxShadow:
          "0 0 30px rgba(0, 212, 255, 0.1), 0 8px 32px rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* Image container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-deep-bg/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-neon-blue/40 bg-neon-blue/10 text-neon-blue transition-colors hover:bg-neon-blue/20"
              aria-label={text.portfolio.viewProject}
            >
              <ExternalLink size={20} />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-glass-border bg-white/10 text-text-primary transition-colors hover:bg-white/20"
              aria-label={text.portfolio.viewCode}
            >
              <Code size={20} />
            </a>
          )}
        </div>
        {/* Gradient overlay bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-deep-bg/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-2 font-display text-lg font-semibold tracking-wide text-text-primary">
          {locale === "en" ? project.titleEn ?? project.title : project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-text-secondary">
          {locale === "en" ? project.descriptionEn ?? project.description : project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} label={tag} variant="ghost" />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
