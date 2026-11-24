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
import {WhatsAppFloatingButton} from './components/WhatsAppFloatingButton';
import {
  DEFAULT_LANGUAGE,
  I18N,
  LANGUAGE_OPTIONS,
  LanguageCode,
  ProjectItem,
  SectionId,
  ServiceItem,
} from './data/companyConfig';
import {DEFAULT_THEME} from './data/themes';

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

const LANGUAGE_STORAGE_KEY = 'skymax_language';

function getInitialLanguage(): LanguageCode {
  try {
    const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY) as LanguageCode | null;
    if (saved && LANGUAGE_OPTIONS.some((l) => l.code === saved)) {
      return saved;
    }
  } catch {
    // Ignore storage access restrictions
  }
  return DEFAULT_LANGUAGE;
}

export default function App() {
  const [activeLanguage, setActiveLanguage] = useState<LanguageCode>(() => getInitialLanguage());
  const [activeSection, setActiveSection] = useState<SectionId>('hero');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [legalDoc, setLegalDoc] = useState<'privacy' | 'terms' | null>(null);
  const [preselectedService, setPreselectedService] = useState<string>(
    I18N[DEFAULT_LANGUAGE].services[0].title
  );

  const locale = I18N[activeLanguage];
  const selectedService: ServiceItem | null = selectedServiceId
    ? locale.services.find((s) => s.id === selectedServiceId) ?? null
    : null;
  const selectedProject: ProjectItem | null = selectedProjectId
    ? locale.projects.find((p) => p.id === selectedProjectId) ?? null
    : null;

  useEffect(() => {
    document.documentElement.lang = activeLanguage;
    document.title = locale.metaTitle;
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, activeLanguage);
    } catch {
      // Ignore storage access restrictions
    }
  }, [activeLanguage, locale.metaTitle]);

  useEffect(() => {
    document.documentElement.dataset.theme = DEFAULT_THEME;
  }, []);

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
        <Navbar
          activeSection={activeSection}
          onNavigate={(id) => scrollToSection(id)}
          lang={activeLanguage}
          onSelectLanguage={setActiveLanguage}
        />

        <main className="flex-1 w-full">
          <HeroSection
            lang={activeLanguage}
            onStartProject={() =>
              scrollToSection('contact', locale.contact.extraServiceOptions.general)
            }
            onViewProjects={() => scrollToSection('projects')}
          />

          <AboutSection
            lang={activeLanguage}
            onScheduleConsultation={() => scrollToSection('contact')}
          />

          <ServicesSection
            lang={activeLanguage}
            onLearnMore={(service) => setSelectedServiceId(service.id)}
            onRequestServiceQuote={(serviceTitle) => scrollToSection('contact', serviceTitle)}
          />

          <SolutionsAndWhySection
            lang={activeLanguage}
            onDiscussSolution={(serviceTitle) => scrollToSection('contact', serviceTitle)}
          />

          <ProjectsSection
            lang={activeLanguage}
            onSelectProject={(project) => setSelectedProjectId(project.id)}
          />

          <ProcessSection lang={activeLanguage} />

          <TechExpertiseSection lang={activeLanguage} />

          <ContactSection lang={activeLanguage} preselectedService={preselectedService} />
        </main>

        <Footer
          lang={activeLanguage}
          onNavigate={(id) => scrollToSection(id)}
          onOpenService={(service) => setSelectedServiceId(service.id)}
          onOpenLegal={(doc) => setLegalDoc(doc)}
        />

        <div className="fixed bottom-3.5 right-3.5 sm:bottom-5 sm:right-5 z-40">
          <WhatsAppFloatingButton lang={activeLanguage} />
        </div>

        <ServiceDetailModal
          lang={activeLanguage}
          service={selectedService}
          onClose={() => setSelectedServiceId(null)}
          onRequestQuote={(title) => scrollToSection('contact', title)}
        />

        <ProjectDetailModal
          lang={activeLanguage}
          project={selectedProject}
          onClose={() => setSelectedProjectId(null)}
          onRequestSimilar={(category) => scrollToSection('contact', category)}
        />

        <LegalModal
          lang={activeLanguage}
          docType={legalDoc}
          onClose={() => setLegalDoc(null)}
        />
      </div>
    </MotionConfig>
  );
}
