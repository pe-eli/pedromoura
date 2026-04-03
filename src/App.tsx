import { useEffect } from "react";
import { Sidebar } from "./components/layout/Sidebar";
import { Hero } from "./components/sections/Hero";
import { Skills } from "./components/sections/Skills";
import { Portfolio } from "./components/sections/Portfolio";
import { Education } from "./components/sections/Education";
import { Languages } from "./components/sections/Languages";
import type { AppPage } from "./data/types";
import { LanguageProvider, useLanguage } from "./i18n/language";

interface AppProps {
  page: AppPage;
}

function AppContent({ page }: AppProps) {
  const { getPageTitle } = useLanguage();

  useEffect(() => {
    document.title = getPageTitle(page);
  }, [getPageTitle, page]);

  const renderCurrentPage = () => {
    switch (page) {
      case "home":
        return <Hero />;
      case "skills":
        return <Skills />;
      case "portfolio":
        return <Portfolio />;
      case "education":
        return <Education />;
      case "languages":
        return <Languages />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="grain-overlay relative min-h-screen bg-deep-bg">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-deep-bg/35" />
      </div>

      <Sidebar currentPage={page} />

      {/* Main content for the selected page */}
      <main className="relative z-10 w-full pb-20 md:pb-0 md:pl-20">
        {renderCurrentPage()}
      </main>
    </div>
  );
}

function App({ page }: AppProps) {
  return (
    <LanguageProvider>
      <AppContent page={page} />
    </LanguageProvider>
  );
}

export default App;
