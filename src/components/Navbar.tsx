import {useEffect, useState} from 'react';
import {ArrowUpRight, Menu, X} from 'lucide-react';
import {AnimatePresence, motion, useReducedMotion} from 'motion/react';
import {COMPANY_INFO, SectionId} from '../data/companyConfig';

interface NavbarProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
}

const NAV_LINKS: {id: SectionId; label: string}[] = [
  {id: 'hero', label: 'Home'},
  {id: 'about', label: 'About'},
  {id: 'services', label: 'Services'},
  {id: 'why-us', label: 'Why Us'},
  {id: 'projects', label: 'Projects'},
  {id: 'process', label: 'Process'},
  {id: 'tech', label: 'Technologies'},
  {id: 'contact', label: 'Contact'},
];

export function Navbar({activeSection, onNavigate}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (section: SectionId) => {
    setMobileOpen(false);
    onNavigate(section);
  };

  return (
    <header
      id="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-[var(--bg-primary)]/95 border-b border-[var(--border-subtle)] backdrop-blur-md shadow-lg'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between gap-4 xl:gap-8 transition-all duration-300 ${
            scrolled || mobileOpen ? 'py-3' : 'py-4 sm:py-5'
          }`}
        >
          {/* Zone 1: Clean single-line brand mark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNav('hero');
            }}
            className="inline-flex items-center gap-2.5 text-[var(--text-primary)] font-bold text-base sm:text-lg tracking-tight whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-md"
            style={{fontFamily: 'var(--font-display)'}}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 64 64"
              fill="none"
              aria-hidden="true"
              className="shrink-0"
            >
              <rect
                x="1"
                y="1"
                width="62"
                height="62"
                rx="14"
                style={{fill: 'var(--bg-surface)', stroke: 'var(--border-subtle)'}}
                strokeWidth="2.5"
              />
              <path
                d="M16 44V20L26 32L36 20V44"
                style={{stroke: 'var(--text-primary)'}}
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M44 22L49 27L44 32"
                style={{stroke: 'var(--accent)'}}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect x="42" y="38" width="7" height="7" rx="2" style={{fill: 'var(--accent)'}} />
            </svg>
            <span>{COMPANY_INFO.name}</span>
          </a>

          {/* Zone 2: Horizontal Section Menu */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-1.5"
          >
            {NAV_LINKS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(item.id);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                    isActive
                      ? 'text-[var(--accent)] bg-[var(--accent-soft)] border border-[var(--accent-border)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent-soft)] border border-transparent'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Single Primary Action + Mobile Drawer Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleNav('contact')}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold tracking-wide text-[var(--accent-contrast)] bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0 shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              Get Consultation
            </button>

            <button
              type="button"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-[var(--text-primary)] hover:bg-[var(--accent-soft)] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-[var(--accent)]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={prefersReducedMotion ? {opacity: 1} : {opacity: 0, height: 0}}
            animate={{opacity: 1, height: 'auto'}}
            exit={prefersReducedMotion ? {opacity: 0} : {opacity: 0, height: 0}}
            transition={{duration: 0.22, ease: [0.16, 1, 0.3, 1]}}
            className="lg:hidden overflow-hidden border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]/98 backdrop-blur-xl shadow-2xl max-h-[80vh] overflow-y-auto"
          >
            <nav
              aria-label="Mobile Navigation"
              className="max-w-7xl mx-auto px-4 pt-3 pb-6 flex flex-col gap-1"
            >
              {NAV_LINKS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(item.id);
                    }}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'text-[var(--accent)] bg-[var(--accent-soft)] border border-[var(--accent-border)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-[var(--border-subtle)] flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => handleNav('contact')}
                  className="w-full py-3 px-4 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--accent-contrast)] font-bold text-xs tracking-wider uppercase text-center transition-colors cursor-pointer"
                >
                  Get Consultation
                </button>
                <a
                  href={COMPANY_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[var(--accent-border)] font-medium text-xs inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <span>WhatsApp: {COMPANY_INFO.whatsappDisplay}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
