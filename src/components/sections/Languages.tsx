import { SectionWrapper } from "../ui/SectionWrapper";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { languages } from "../../data/languages";
import { useLanguage } from "../../i18n/language";

export function Languages() {
  const { locale, text } = useLanguage();

  return (
    <SectionWrapper id="languages" className="pb-24 md:pb-28">
      <SectionHeading
        title={text.languages.title}
        subtitle={text.languages.subtitle}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {languages.map((lang) => (
          <div key={lang.name}>
            <GlassCard className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{lang.flag}</span>
                  <div>
                    <h3 className="font-display text-base font-semibold tracking-wide text-text-primary">
                      {locale === "en" ? lang.nameEn ?? lang.name : lang.name}
                    </h3>
                    <p className="text-xs text-text-secondary">
                      {locale === "en" ? lang.levelEn ?? lang.level : lang.level}
                    </p>
                  </div>
                </div>
                <span className="font-display text-2xl font-bold text-neon-blue">
                  {lang.proficiency}
                  <span className="text-sm text-text-muted">%</span>
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${lang.proficiency}%`,
                    background: `linear-gradient(90deg, #7c3aed ${100 - lang.proficiency}%, #00d4ff 100%)`,
                    boxShadow:
                      lang.proficiency > 70
                        ? "0 0 15px rgba(0, 212, 255, 0.4)"
                        : "0 0 15px rgba(124, 58, 237, 0.4)",
                  }}
                />
              </div>
            </GlassCard>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
