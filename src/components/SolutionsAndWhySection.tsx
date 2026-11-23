import {ArrowRight, Cpu, Layers, Shield, Users} from 'lucide-react';
import {SOLUTIONS, WHY_CHOOSE_US} from '../data/companyConfig';
import {Reveal, StaggerCard} from './MotionPrimitives';
import {PageHeader} from './PageHeader';
import {TechExpertiseSection} from './TechExpertiseSection';
import {QuoteCtaSection} from './QuoteCtaSection';

interface SolutionsPageProps {
  onDiscussSolution: (serviceTitle?: string) => void;
}

const SOLUTION_ICONS = [Layers, Cpu, Shield, Users];

export function SolutionsAndWhySection({onDiscussSolution}: SolutionsPageProps) {
  return (
    <>
      <PageHeader
        eyebrow="Solutions & Technology Stack"
        title="Integrated Technology Built Around Your Industry"
        subtitle="Combine custom software, cloud infrastructure, networking, and security into cohesive setups tailored to your organisation."
      />

      {/* Industry Solutions */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SOLUTIONS.map((sol, idx) => {
              const Icon = SOLUTION_ICONS[idx % SOLUTION_ICONS.length];
              return (
                <StaggerCard key={sol.index} index={idx} className="flex">
                  <article className="w-full rounded-2xl bg-[#F8FAFC] border border-slate-200 p-6 sm:p-7 flex flex-col justify-between hover:border-[#2563EB]/45 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs font-semibold text-[#2563EB]">
                          {sol.index}. {sol.sector}
                        </span>
                        <Icon className="w-5 h-5 text-[#142D4E]" aria-hidden="true" />
                      </div>

                      <h2 className="mt-3 text-xl font-bold text-[#0F172A] tracking-tight">
                        {sol.title}
                      </h2>
                      <p className="mt-2.5 text-sm text-[#64748B] leading-relaxed">
                        {sol.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                      <p className="text-xs font-medium text-[#64748B]">
                        {sol.includedServices.join(' · ')}
                      </p>
                      <button
                        type="button"
                        onClick={() => onDiscussSolution('Multiple / Integrated Solution')}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#142D4E] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                      >
                        <span>Scope Solution</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                  </article>
                </StaggerCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold text-[#2563EB]">Why Choose Us</p>
            <h2
              className="mt-1.5 text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight"
              style={{textWrap: 'balance'}}
            >
              Eight Reasons Businesses Partner With Us
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_CHOOSE_US.map((item, idx) => (
              <StaggerCard key={item.title} index={idx} className="flex">
                <div className="w-full rounded-xl bg-white border border-slate-200 p-5 hover:border-[#2563EB]/35 hover:-translate-y-0.5 transition-all duration-200">
                  <span className="font-mono text-xs font-medium text-[#2563EB] tabular-nums">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <h3 className="mt-2 text-base font-bold text-[#0F172A]">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-[#64748B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerCard>
            ))}
          </div>
        </div>
      </section>

      <TechExpertiseSection />

      <QuoteCtaSection onRequestQuoteClick={() => onDiscussSolution()} />
    </>
  );
}
