import {useState} from 'react';
import {
  ArrowRight,
  Briefcase,
  Check,
  ChevronDown,
  ChevronUp,
  Cloud,
  Code2,
  Layers,
  Network,
  Server,
  ShieldCheck,
} from 'lucide-react';
import {AnimatePresence, motion, useReducedMotion} from 'motion/react';
import {I18N, LanguageCode, ServiceItem} from '../data/companyConfig';
import {MODERN_EASE, Reveal, StaggerCard} from './MotionPrimitives';

interface ServicesSectionProps {
  onLearnMore: (service: ServiceItem) => void;
  onRequestServiceQuote: (serviceTitle: string) => void;
  lang: LanguageCode;
}

const ICON_MAP = {
  code: Code2,
  cloud: Cloud,
  server: Server,
  network: Network,
  shield: ShieldCheck,
  briefcase: Briefcase,
};

export function ServicesSection({
  onLearnMore,
  onRequestServiceQuote,
  lang,
}: ServicesSectionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const {servicesSection, services} = I18N[lang];

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="services"
      className="py-14 sm:py-20 lg:py-24 bg-[var(--bg-primary)] text-[var(--text-primary)] relative overflow-hidden border-b border-[var(--border-subtle)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 w-96 h-96 rounded-full blur-[120px]"
        style={{backgroundColor: 'var(--accent-glow)'}}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 bottom-1/4 w-96 h-96 rounded-full blur-[120px]"
        style={{backgroundColor: 'var(--accent-glow)'}}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="max-w-2xl mx-auto text-center mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center justify-center gap-2">
            <Layers className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
            <p className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.18em] uppercase text-[var(--accent)]">
              {servicesSection.eyebrow}
            </p>
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight"
            style={{textWrap: 'balance'}}
          >
            <span className="text-blend-title">{servicesSection.heading}</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-[17px] text-[var(--text-secondary)] leading-relaxed">
            {servicesSection.subtitle}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 text-left">
          {services.map((service, index) => {
            const Icon = ICON_MAP[service.iconName];
            const isExpanded = expandedId === service.id;

            return (
              <StaggerCard key={service.id} index={index} className="flex">
                <article
                  className="w-full relative rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 sm:p-7 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:border-[var(--accent-border)] hover:-translate-y-1 group"
                  style={{boxShadow: 'var(--shadow-card)'}}
                >
                  <div
                    aria-hidden="true"
                    className="absolute top-0 left-0 right-0 h-0.5 opacity-80"
                    style={{
                      background: 'var(--blend-gradient)',
                    }}
                  />

                  <div>
                    <div className="flex items-start justify-between mb-5">
                      <div className="p-3 rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--accent-border)] transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-contrast)] group-hover:scale-105 group-hover:-rotate-3">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-mono text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors tabular-nums">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                      {service.title}
                    </h3>

                    {service.callout && (
                      <p className="text-[13px] font-semibold text-[var(--accent)] mb-2">
                        {service.callout}
                      </p>
                    )}

                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                      {service.description}
                    </p>
                  </div>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={prefersReducedMotion ? {opacity: 1} : {opacity: 0, height: 0}}
                        animate={{opacity: 1, height: 'auto'}}
                        exit={prefersReducedMotion ? {opacity: 0} : {opacity: 0, height: 0}}
                        transition={{duration: 0.25, ease: MODERN_EASE}}
                        className="overflow-hidden mb-5 pt-4 border-t border-[var(--border-subtle)]"
                      >
                        <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--accent)] font-bold mb-2.5">
                          {servicesSection.whatYouGet}
                        </p>
                        <ul className="space-y-2 mb-4">
                          {service.deliverables.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-[13px] text-[var(--text-secondary)]"
                            >
                              <Check
                                className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <button
                          type="button"
                          onClick={() => onLearnMore(service)}
                          className="text-[13px] font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors cursor-pointer"
                        >
                          {servicesSection.seeAllPrefix} {service.capabilities.length}{' '}
                          {servicesSection.seeAllSuffix} &rarr;
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-4 mt-auto border-t border-[var(--border-subtle)]">
                    <button
                      type="button"
                      onClick={() => toggleExpand(service.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <span>
                        {isExpanded ? servicesSection.hideDetails : servicesSection.viewDeliverables}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" aria-hidden="true" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => onRequestServiceQuote(service.title)}
                      aria-label={`${servicesSection.requestQuote}: ${service.title}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-secondary)] group-hover:border-[var(--accent-border)] group-hover:text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <span>{servicesSection.requestQuote}</span>
                      <ArrowRight
                        className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </article>
              </StaggerCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
