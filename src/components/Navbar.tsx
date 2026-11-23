import {useState} from 'react';
import {Menu, X, ArrowUpRight} from 'lucide-react';
import {AnimatePresence, motion, useReducedMotion} from 'motion/react';
import {COMPANY_INFO, PageId} from '../data/companyConfig';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

const NAV_LINKS: {label: string; page: PageId}[] = [
  {label: 'Home', page: 'home'},
  {label: 'About Us', page: 'about'},
  {label: 'Services', page: 'services'},
  {label: 'Solutions', page: 'solutions'},
  {label: 'Projects', page: 'projects'},
  {label: 'Contact', page: 'contact'},
];

export function Navbar({activePage, onNavigate}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleNav = (page: PageId) => {
    setMobileOpen(false);
    onNavigate(page);
  };

  return (
    <header className="sticky top-0 z-40 h-16 bg-[#0B1220]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav('home');
          }}
          className="inline-flex items-center gap-2.5 text-white font-bold text-lg tracking-tight whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] rounded-md"
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
            <rect width="64" height="64" rx="14" fill="#142D4E" />
            <path
              d="M16 44V20L26 32L36 20V44"
              stroke="#F8FAFC"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M44 22L48 26L44 30"
              stroke="#06B6D4"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="46" cy="40" r="4" fill="#2563EB" />
          </svg>
          <span>{COMPANY_INFO.name}</span>
        </a>

        {/* Zone 2: Clean Single-Line Page Navigation with Sliding Underline */}
        <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((item) => {
            const isActive = activePage === item.page;
            return (
              <a
                key={item.page}
                href={`#${item.page}`}
                aria-current={isActive ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(item.page);
                }}
                className={`relative text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] rounded-sm ${
                  isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    transition={
                      prefersReducedMotion
                        ? {duration: 0}
                        : {type: 'spring', stiffness: 420, damping: 34}
                    }
                    className="absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action (+ Mobile Toggle) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleNav('contact')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg transition-all duration-150 hover:-translate-y-0.5 whitespace-nowrap shrink-0 shadow-sm shadow-[#2563EB]/25 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]"
          >
            Get a Quote
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={prefersReducedMotion ? {opacity: 1} : {opacity: 0, y: -8}}
            animate={{opacity: 1, y: 0}}
            exit={prefersReducedMotion ? {opacity: 0} : {opacity: 0, y: -8}}
            transition={{duration: 0.18, ease: [0.16, 1, 0.3, 1]}}
            className="lg:hidden bg-[#0B1220]/98 backdrop-blur-lg border-b border-white/10 shadow-xl"
          >
            <nav
              aria-label="Mobile Navigation"
              className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1"
            >
              {NAV_LINKS.map((item) => {
                const isActive = activePage === item.page;
                return (
                  <a
                    key={item.page}
                    href={`#${item.page}`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(item.page);
                    }}
                    className={`px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[#142D4E] text-white'
                        : 'text-slate-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => handleNav('contact')}
                  className="w-full py-3 px-4 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm text-center transition-colors cursor-pointer"
                >
                  Get a Quote
                </button>
                <a
                  href={COMPANY_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-lg border border-white/15 text-slate-200 hover:text-white hover:bg-white/5 font-medium text-sm inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <span>WhatsApp: {COMPANY_INFO.whatsappDisplay}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#06B6D4]" aria-hidden="true" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
