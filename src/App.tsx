/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useEffect, useState} from 'react';
import {AnimatePresence, motion, MotionConfig, useReducedMotion} from 'motion/react';
import {Navbar} from './components/Navbar';
import {HomePage} from './components/HomePage';
import {AboutSection} from './components/AboutSection';
import {ServicesSection} from './components/ServicesSection';
import {SolutionsAndWhySection} from './components/SolutionsAndWhySection';
import {ProjectsSection} from './components/ProjectsSection';
import {ContactSection} from './components/ContactSection';
import {Footer} from './components/Footer';
import {LegalModal, ProjectDetailModal, ServiceDetailModal} from './components/Modals';
import {MODERN_EASE} from './components/MotionPrimitives';
import {COMPANY_INFO, PageId, ProjectItem, ServiceItem} from './data/companyConfig';

const VALID_PAGES: PageId[] = ['home', 'about', 'services', 'solutions', 'projects', 'contact'];

const PAGE_TITLES: Record<PageId, string> = {
  home: `${COMPANY_INFO.name} | Enterprise IT, Cloud & Software Solutions`,
  about: `About Us | ${COMPANY_INFO.name}`,
  services: `Services | ${COMPANY_INFO.name}`,
  solutions: `Solutions & Technology Stack | ${COMPANY_INFO.name}`,
  projects: `Projects & Portfolio | ${COMPANY_INFO.name}`,
  contact: `Contact & Request a Quote | ${COMPANY_INFO.name}`,
};

function getPageFromHash(): PageId {
  const hash = window.location.hash.replace('#', '').toLowerCase() as PageId;
  return VALID_PAGES.includes(hash) ? hash : 'home';
}

export default function App() {
  const [activePage, setActivePage] = useState<PageId>(() => getPageFromHash());
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [legalDoc, setLegalDoc] = useState<'privacy' | 'terms' | null>(null);
  const [preselectedService, setPreselectedService] = useState<string>(
    'Web Application Development'
  );
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    document.title = PAGE_TITLES[activePage];
  }, [activePage]);

  useEffect(() => {
    const onHashChange = () => {
      setActivePage(getPageFromHash());
      window.scrollTo({top: 0, behavior: 'smooth'});
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigateTo = (page: PageId, serviceChoice?: string) => {
    if (serviceChoice) {
      setPreselectedService(serviceChoice);
    }
    setActivePage(page);
    if (window.location.hash !== `#${page}`) {
      window.history.pushState(null, '', `#${page}`);
    }
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
        <Navbar activePage={activePage} onNavigate={(page) => navigateTo(page)} />

        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={prefersReducedMotion ? {opacity: 1, y: 0} : {opacity: 0, y: 8}}
              animate={{opacity: 1, y: 0}}
              exit={prefersReducedMotion ? {opacity: 1, y: 0} : {opacity: 0, y: -6}}
              transition={
                prefersReducedMotion
                  ? {duration: 0}
                  : {duration: 0.22, ease: MODERN_EASE}
              }
            >
              {activePage === 'home' && (
                <HomePage
                  onNavigate={navigateTo}
                  onSelectService={(service) => setSelectedService(service)}
                  onSelectProject={(project) => setSelectedProject(project)}
                />
              )}

              {activePage === 'about' && (
                <AboutSection onRequestQuoteClick={() => navigateTo('contact')} />
              )}

              {activePage === 'services' && (
                <ServicesSection
                  onLearnMore={(service) => setSelectedService(service)}
                  onRequestServiceQuote={(serviceTitle) => navigateTo('contact', serviceTitle)}
                />
              )}

              {activePage === 'solutions' && (
                <SolutionsAndWhySection
                  onDiscussSolution={(serviceTitle) => navigateTo('contact', serviceTitle)}
                />
              )}

              {activePage === 'projects' && (
                <ProjectsSection
                  onSelectProject={(project) => setSelectedProject(project)}
                  onRequestQuoteClick={() => navigateTo('contact')}
                />
              )}

              {activePage === 'contact' && (
                <ContactSection preselectedService={preselectedService} />
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer
          onNavigate={(page) => navigateTo(page)}
          onOpenService={(service) => setSelectedService(service)}
          onOpenLegal={(doc) => setLegalDoc(doc)}
        />

        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onRequestQuote={(title) => navigateTo('contact', title)}
        />

        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onRequestSimilar={(category) => navigateTo('contact', category)}
        />

        <LegalModal docType={legalDoc} onClose={() => setLegalDoc(null)} />
      </div>
    </MotionConfig>
  );
}
