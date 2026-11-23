import {
  ArrowRight,
  Briefcase,
  Check,
  Cloud,
  Code2,
  Network,
  Server,
  ShieldCheck,
} from 'lucide-react';
import {SERVICES, ServiceItem} from '../data/companyConfig';
import {StaggerCard} from './MotionPrimitives';
import {PageHeader} from './PageHeader';
import {ProcessSection} from './ProcessSection';
import {QuoteCtaSection} from './QuoteCtaSection';

interface ServicesPageProps {
  onLearnMore: (service: ServiceItem) => void;
  onRequestServiceQuote: (serviceTitle?: string) => void;
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
}: ServicesPageProps) {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Technology Services Built for Everyday Operations"
        subtitle="Custom web software, resilient cloud hosting, managed systems, structured networking, physical security, and strategic IT consulting."
      />

      <section className="py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => {
              const Icon = ICON_MAP[service.iconName];

              return (
                <StaggerCard key={service.id} index={index} className="flex">
                  <article className="w-full group flex flex-col justify-between rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#2563EB]/45 hover:-translate-y-1 transition-all duration-200">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div className="w-11 h-11 rounded-xl bg-[#0B1220] text-[#06B6D4] flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-200">
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <span className="font-mono text-xs font-medium text-[#64748B] tabular-nums">
                          {service.number}
                        </span>
                      </div>

                      <h2 className="mt-4 text-xl font-bold text-[#0F172A] tracking-tight">
                        {service.title}
                      </h2>

                      {service.callout && (
                        <p className="mt-1.5 text-sm font-semibold text-[#2563EB]">
                          {service.callout}
                        </p>
                      )}

                      <p className="mt-2.5 text-sm text-[#64748B] leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                        {service.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2 text-sm text-[#0F172A]"
                          >
                            <Check
                              className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => onLearnMore(service)}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#142D4E] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                      >
                        <span>View Full Scope ({service.capabilities.length})</span>
                        <ArrowRight
                          className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </button>

                      <button
                        type="button"
                        onClick={() => onRequestServiceQuote(service.title)}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#0F172A] bg-slate-100 hover:bg-[#0B1220] hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
                      >
                        Get Quote
                      </button>
                    </div>
                  </article>
                </StaggerCard>
              );
            })}
          </div>
        </div>
      </section>

      <ProcessSection />

      <QuoteCtaSection onRequestQuoteClick={() => onRequestServiceQuote()} />
    </>
  );
}
