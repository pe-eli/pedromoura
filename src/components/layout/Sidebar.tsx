import { motion } from "framer-motion";
import { Flag } from "lucide-react";
import { navItems } from "../../data/navigation";
import type { AppPage } from "../../data/types";
import { useLanguage } from "../../i18n/language";

interface SidebarProps {
  currentPage: AppPage;
}

export function Sidebar({ currentPage }: SidebarProps) {
  const shouldAnimateEntrance = currentPage === "home";
  const { locale, text, toggleLocale } = useLanguage();

  return (
    <>
      {/* Desktop sidebar */}
      <motion.nav
        className="fixed left-0 top-0 z-50 hidden h-screen w-20 flex-col items-center justify-center gap-2 border-r border-glass-border bg-deep-bg/80 backdrop-blur-xl md:flex"
        initial={shouldAnimateEntrance ? { x: -80, opacity: 0 } : false}
        animate={shouldAnimateEntrance ? { x: 0, opacity: 1 } : undefined}
        transition={shouldAnimateEntrance ? { duration: 0.6, delay: 0.5 } : undefined}
      >
        {/* Logo mark */}
        <div className="absolute top-6">
          <span className="text-glow font-display text-xl font-bold text-neon-blue">
            E
          </span>
        </div>

        <button
          type="button"
          onClick={toggleLocale}
          className="absolute top-20 flex h-10 w-10 items-center justify-center rounded-xl border border-neon-blue/30 bg-neon-blue/10 text-neon-blue transition-colors hover:bg-neon-blue/20"
          aria-label={text.toggleLanguage}
          title={text.toggleLanguage}
        >
          <Flag size={16} />
        </button>

        {/* Nav items */}
        <div className="flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.page;
            const label = locale === "en" ? item.labelEn ?? item.label : item.label;
            return (
              <motion.a
                key={item.page}
                href={item.href}
                data-swup-link
                className={`group relative flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-200 ${
                  isActive
                    ? "bg-neon-blue/10 text-neon-blue"
                    : "text-text-muted hover:bg-white/5 hover:text-text-secondary"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon size={20} />
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    className="absolute -right-[1.1rem] h-8 w-1 rounded-full bg-neon-blue"
                    layoutId="sidebar-indicator"
                    style={{
                      boxShadow: "0 0 12px rgba(0, 212, 255, 0.6)",
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {/* Tooltip */}
                <span className="pointer-events-none absolute left-16 whitespace-nowrap rounded-lg border border-glass-border bg-deep-surface/95 px-3 py-1.5 font-body text-xs text-text-primary opacity-0 shadow-xl backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  {label}
                </span>
              </motion.a>
            );
          })}
        </div>
      </motion.nav>

      {/* Mobile bottom nav */}
      <motion.nav
        className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-glass-border bg-deep-bg/90 px-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl md:hidden"
        initial={shouldAnimateEntrance ? { y: 80, opacity: 0 } : false}
        animate={shouldAnimateEntrance ? { y: 0, opacity: 1 } : undefined}
        transition={shouldAnimateEntrance ? { duration: 0.5, delay: 0.3 } : undefined}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.page;
          const label = locale === "en" ? item.labelEn ?? item.label : item.label;
          return (
            <a
              key={item.page}
              href={item.href}
              data-swup-link
              className={`relative flex flex-col items-center gap-1 rounded-lg px-3 py-1 transition-colors ${
                isActive
                  ? "text-neon-blue"
                  : "text-text-muted"
              }`}
              aria-label={label}
            >
              <Icon size={18} />
              <span className="text-[10px] font-medium">{label}</span>
              {isActive && (
                <motion.div
                  className="absolute -top-px h-0.5 w-8 rounded-full bg-neon-blue"
                  layoutId="mobile-indicator"
                  style={{ boxShadow: "0 0 8px rgba(0, 212, 255, 0.6)" }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </a>
          );
        })}
        <button
          type="button"
          onClick={toggleLocale}
          className="ml-1 flex flex-col items-center gap-1 rounded-lg px-2 py-1 text-text-muted transition-colors hover:text-neon-blue"
          aria-label={text.toggleLanguage}
        >
          <Flag size={18} />
          <span className="text-[10px] font-medium">{locale === "pt" ? "EN" : "PT"}</span>
        </button>
      </motion.nav>
    </>
  );
}
