import { ExternalLink, Award } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { education, certifications } from "../../data/education";
import { useLanguage } from "../../i18n/language";

export function Education() {
  const { locale, text } = useLanguage();

  return (
    <SectionWrapper id="education">
      <SectionHeading
        title={text.education.title}
        subtitle={text.education.subtitle}
      />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-14">
        {/* Education Timeline - Left */}
        <div className="min-w-0">
          <h3 className="mb-8 font-display text-lg tracking-wider text-neon-blue">
            {text.education.educationLabel}
          </h3>

          <div className="relative space-y-8 pl-8">
            {/* Timeline line */}
            <div className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-neon-blue via-neon-purple to-transparent" />

            {education.map((item) => (
              <div key={item.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-8 top-1 flex h-6 w-6 -translate-x-1/2 items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-neon-blue" />
                  <div
                    className="absolute h-5 w-5 animate-ping rounded-full bg-neon-blue/30"
                    style={{ animationDuration: "3s" }}
                  />
                </div>

                <GlassCard className="p-7">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="font-display text-xs tracking-wider text-neon-blue">
                      {item.startYear} — {item.endYear ?? text.education.present}
                    </span>
                    {!item.endYear && (
                      <span className="rounded-full bg-neon-blue/10 px-3 py-1 text-[10px] font-semibold text-neon-blue">
                        {text.education.inProgress}
                      </span>
                    )}
                  </div>
                  <h4 className="mb-1 font-display text-base font-semibold tracking-wide text-text-primary">
                    {locale === "en" ? item.degreeEn ?? item.degree : item.degree}
                  </h4>
                  <p className="mb-3 text-sm text-neon-cyan">{item.institution}</p>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {locale === "en" ? item.descriptionEn ?? item.description : item.description}
                  </p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications - Right */}
        <div className="min-w-0">
          <h3 className="mb-8 font-display text-lg tracking-wider text-neon-purple">
            {text.education.certificationsLabel}
          </h3>

          <div className="grid gap-4">
            {certifications.map((cert) => (
              <div key={cert.id}>
                <GlassCard className="flex items-center gap-5 p-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-neon-purple/10">
                    <Award className="text-neon-purple" size={22} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display text-sm font-semibold tracking-wide text-text-primary">
                      {locale === "en" ? cert.nameEn ?? cert.name : cert.name}
                    </h4>
                    <p className="text-xs text-text-secondary">
                      {cert.issuer} — {cert.year}
                    </p>
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      className="flex-shrink-0 text-text-muted transition-colors hover:text-neon-blue"
                      aria-label={text.education.viewCredential}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
