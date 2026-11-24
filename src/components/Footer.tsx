import {FormEvent, useState} from 'react';
import {
  ArrowRight,
  CalendarCheck,
  Check,
  Compass,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import {COMPANY_INFO, I18N, LanguageCode, SectionId, ServiceItem} from '../data/companyConfig';

interface FooterProps {
  lang: LanguageCode;
  onNavigate: (section: SectionId) => void;
  onOpenService: (service: ServiceItem) => void;
  onOpenLegal: (doc: 'privacy' | 'terms') => void;
}

const FOOTER_LINK_IDS: SectionId[] = [
  'hero',
  'about',
  'services',
  'why-us',
  'projects',
  'process',
  'tech',
  'contact',
];

export function Footer({lang, onNavigate, onOpenService, onOpenLegal}: FooterProps) {
  const [updateEmail, setUpdateEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const locale = I18N[lang];
  const copy = locale.footer;

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (updateEmail.trim() && updateEmail.includes('@')) {
      setSubscribed(true);
      setUpdateEmail('');
      setTimeout(() => setSubscribed(false), 6000);
    }
  };

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] text-[var(--text-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          {/* Column 1: Brand + Updates Input */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('hero');
              }}
              className="inline-flex items-center gap-2.5 text-[var(--text-primary)] font-bold text-base tracking-tight hover:text-[var(--accent)] transition-colors"
              style={{fontFamily: 'var(--font-display)'}}
            >
              <svg
                width="26"
                height="26"
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
                <rect x="42" y="38" width="7" height="7" rx="2" style={{fill: 'var(--accent-amber)'}} />
              </svg>
              <span>{COMPANY_INFO.name}</span>
            </a>

            <p className="text-[13px] sm:text-sm leading-relaxed text-[var(--text-secondary)] max-w-sm">
              {copy.intro}
            </p>

            <div className="space-y-2 max-w-sm pt-1">
              <p className="text-[11px] font-mono tracking-[0.16em] uppercase text-[var(--text-muted)] font-semibold">
                {copy.stayUpdated}
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-[13px] text-[var(--accent)] font-mono py-2">
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{copy.subscribedMessage}</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="relative flex items-center">
                  <input
                    type="email"
                    value={updateEmail}
                    onChange={(e) => setUpdateEmail(e.target.value)}
                    placeholder={locale.contact.emailPlaceholder}
                    required
                    aria-label={copy.emailInputLabel}
                    className="w-full bg-[var(--bg-input)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-base sm:text-xs outline-none focus:border-[var(--accent)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-colors pr-12"
                  />
                  <button
                    type="submit"
                    aria-label={copy.subscribeAria}
                    className="absolute right-2 p-2 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--accent-contrast)] cursor-pointer transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h3 className="text-[11px] font-mono tracking-[0.18em] uppercase text-[var(--text-primary)] font-bold">
              {copy.coreServicesTitle}
            </h3>
            <ul className="space-y-2.5 text-[13px]">
              {locale.services.map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => onOpenService(service)}
                    className="hover:text-[var(--accent)] hover:translate-x-0.5 transition-all text-left cursor-pointer py-0.5"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation Links */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h3 className="text-[11px] font-mono tracking-[0.18em] uppercase text-[var(--text-primary)] font-bold">
              {copy.navigationTitle}
            </h3>
            <ul className="space-y-2.5 text-[13px]">
              {FOOTER_LINK_IDS.map((id) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(id)}
                    className="hover:text-[var(--accent)] hover:translate-x-0.5 transition-all text-left cursor-pointer py-0.5"
                  >
                    {locale.nav[id]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Corporate Scope & Consultation */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h3 className="text-[11px] font-mono tracking-[0.18em] uppercase text-[var(--text-primary)] font-bold">
              {copy.contactScopeTitle}
            </h3>
            <div className="space-y-3.5 text-[13px]">
              <div>
                <p className="inline-flex items-center gap-1.5 font-mono font-bold text-[var(--text-muted)] uppercase tracking-widest text-[10px]">
                  <MapPin className="w-3 h-3 text-[var(--accent)]" aria-hidden="true" />
                  <span>{copy.serviceRegionLabel}</span>
                </p>
                <p className="mt-0.5 text-[var(--text-primary)]">{copy.locationDetail}</p>
              </div>
              <div>
                <p className="font-mono font-bold text-[var(--text-muted)] uppercase tracking-widest text-[10px]">
                  {copy.whatsappDirectLabel}
                </p>
                <a
                  href={COMPANY_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-0.5 inline-flex items-center gap-1.5 text-[var(--text-primary)] hover:text-[var(--accent)] font-mono transition-colors tabular-nums"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
                  <span>{COMPANY_INFO.whatsappInternational}</span>
                </a>
              </div>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-[var(--accent-border)] bg-[var(--bg-surface)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] transition-all duration-200 hover:-translate-y-0.5 text-xs font-mono font-bold text-[var(--accent)] cursor-pointer uppercase"
                >
                  <CalendarCheck className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{copy.bookConsultation}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Delivery Strip & Legal Row */}
      <div className="border-t border-[var(--border-subtle)] py-8 bg-[var(--bg-secondary)] text-[var(--text-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-10">
            <div className="text-left">
              <span className="text-[10px] font-mono font-bold tracking-[0.18em] uppercase text-[var(--text-muted)]">
                {copy.howWeDeliver}
              </span>
              <div className="flex items-center gap-2.5 mt-1.5 select-none">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[var(--text-secondary)]">
                  <Compass className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
                  {copy.steps[0]}
                </span>
                <span className="w-4 h-px bg-[var(--border-subtle)]" aria-hidden="true" />
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[var(--accent)]">
                  <Wrench className="w-3.5 h-3.5" aria-hidden="true" />
                  {copy.steps[1]}
                </span>
                <span className="w-4 h-px bg-[var(--border-subtle)]" aria-hidden="true" />
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[var(--text-secondary)]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
                  {copy.steps[2]}
                </span>
              </div>
            </div>

            <div className="hidden sm:block h-9 w-px bg-[var(--border-subtle)]" aria-hidden="true" />

            <div className="text-left">
              <span className="text-[10px] font-mono font-bold tracking-[0.18em] uppercase text-[var(--text-muted)]">
                {copy.emailUs}
              </span>
              <a
                href={`mailto:${COMPANY_INFO.emailPlaceholder}`}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold text-[var(--accent)] hover:text-[var(--text-primary)] transition-colors mt-0.5"
              >
                <Mail className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>{COMPANY_INFO.emailPlaceholder}</span>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-[11px] font-mono text-[var(--text-muted)] pt-4 md:pt-0 border-t md:border-t-0 border-[var(--border-subtle)] w-full md:w-auto justify-between md:justify-end">
            <span>
              &copy; {COMPANY_INFO.copyrightYear} {COMPANY_INFO.name}
            </span>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenLegal('privacy')}
                className="hover:text-[var(--accent)] transition-colors cursor-pointer"
              >
                {copy.privacy}
              </button>
              <button
                type="button"
                onClick={() => onOpenLegal('terms')}
                className="hover:text-[var(--accent)] transition-colors cursor-pointer"
              >
                {copy.terms}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
