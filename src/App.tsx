/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useCallback, useEffect, useState} from 'react';
import {MotionConfig} from 'motion/react';
import {Navbar} from './components/Navbar';
import {HeroSection} from './components/HeroSection';
import {AboutSection} from './components/AboutSection';
import {ServicesSection} from './components/ServicesSection';
import {SolutionsAndWhySection} from './components/SolutionsAndWhySection';
import {ProjectsSection} from './components/ProjectsSection';
import {ProcessSection} from './components/ProcessSection';
import {TechExpertiseSection} from './components/TechExpertiseSection';
import {ContactSection} from './components/ContactSection';
import {Footer} from './components/Footer';
import {LegalModal, ProjectDetailModal, ServiceDetailModal} from './components/Modals';
import {ThemeSwitcher} from './components/ThemeSwitcher';
import {COMPANY_INFO, ProjectItem, SectionId, ServiceItem} from './data/companyConfig';
import {DEFAULT_THEME, THEME_OPTIONS, ThemeId} from './data/themes';

const SECTIONS: SectionId[] = [
  'hero',
  'about',
  'services',
  'why-us',
  'projects',
  'process',
  'tech',
  'contact',
];

const THEME_STORAGE_KEY = 'skymax_theme';

function getInitialTheme(): ThemeId {
  try {
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY) as ThemeId | null;
    if (saved && THEME_OPTIONS.some((t) => t.id === saved)) {
      return saved;
    }
  } catch {
    // Ignore storage access restrictions
  }
  return DEFAULT_THEME;
}

export default function App() {
  const [activeTheme, setActiveTheme] = useState<ThemeId>(() => getInitialTheme());
  const [activeSection, setActiveSection] = useState<SectionId>('hero');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [legalDoc, setLegalDoc] = useState<'privacy' | 'terms' | null>(null);
  const [preselectedService, setPreselectedService] = useState<string>(
    'Full-Stack SaaS Web Applications'
  );

  useEffect(() => {
    document.title = `${COMPANY_INFO.name} | Business IT, Cloud & Full-Stack SaaS Solutions`;
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = activeTheme;
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, activeTheme);
    } catch {
      // Ignore storage access restrictions
    }
  }, [activeTheme]);

  // Scroll-spy for single-page menu arrangement
  useEffect(() => {
    const onScroll = () => {
      const scrollMarker = window.scrollY + 150;
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollMarker >= top && scrollMarker < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: SectionId, serviceChoice?: string) => {
    if (serviceChoice) {
      setPreselectedService(serviceChoice);
    }
    setActiveSection(sectionId);
    const target = document.getElementById(sectionId);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({top: Math.max(0, offsetTop), behavior: 'smooth'});
    }
  }, []);

  useEffect(() => {
    const rawHash = window.location.hash.replace('#', '').toLowerCase() as SectionId;
    if (SECTIONS.includes(rawHash) && rawHash !== 'hero') {
      const timer = setTimeout(() => scrollToSection(rawHash), 120);
      return () => clearTimeout(timer);
    }
  }, [scrollToSection]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-x-hidden transition-colors duration-200">
        <Navbar activeSection={activeSection} onNavigate={(id) => scrollToSection(id)} />

        <main className="flex-1 w-full">
          <HeroSection
            onStartProject={() => scrollToSection('contact', 'General IT Consultation')}
            onViewProjects={() => scrollToSection('projects')}
          />

          <AboutSection onScheduleConsultation={() => scrollToSection('contact')} />

          <ServicesSection
            onLearnMore={(service) => setSelectedService(service)}
            onRequestServiceQuote={(serviceTitle) => scrollToSection('contact', serviceTitle)}
          />

          <SolutionsAndWhySection
            onDiscussSolution={(serviceTitle) => scrollToSection('contact', serviceTitle)}
          />

          <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

          <ProcessSection />

          <TechExpertiseSection />

          <ContactSection preselectedService={preselectedService} />
        </main>

        <Footer
          onNavigate={(id) => scrollToSection(id)}
          onOpenService={(service) => setSelectedService(service)}
          onOpenLegal={(doc) => setLegalDoc(doc)}
        />

        <ThemeSwitcher activeTheme={activeTheme} onSelectTheme={setActiveTheme} />

        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onRequestQuote={(title) => scrollToSection('contact', title)}
        />

        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onRequestSimilar={(category) => scrollToSection('contact', category)}
        />

        <LegalModal docType={legalDoc} onClose={() => setLegalDoc(null)} />
      </div>
    </MotionConfig>
  );
}
