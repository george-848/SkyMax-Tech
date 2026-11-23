import {ABOUT_DATA, ABOUT_MEDIA} from '../data/companyConfig';
import {Reveal, StaggerCard} from './MotionPrimitives';
import {PageHeader} from './PageHeader';
import {ProcessSection} from './ProcessSection';
import {QuoteCtaSection} from './QuoteCtaSection';
import {ResilientImage} from './ResilientImage';

interface AboutPageProps {
  onRequestQuoteClick: () => void;
}

export function AboutSection({onRequestQuoteClick}: AboutPageProps) {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title={ABOUT_DATA.headline}
        subtitle={ABOUT_DATA.lead}
      />

      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <Reveal className="lg:col-span-6 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                Unified Engineering, Without Disconnected Vendors
              </h2>
              <p className="mt-4 text-base text-[#64748B] leading-relaxed">{ABOUT_DATA.body}</p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A]">Our Mission</h3>
                  <p className="mt-2 text-sm text-[#64748B] leading-relaxed">
                    {ABOUT_DATA.mission}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A]">Our Vision</h3>
                  <p className="mt-2 text-sm text-[#64748B] leading-relaxed">
                    {ABOUT_DATA.vision}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-6 flex">
              <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 bg-[#0B1220] min-h-[280px] sm:min-h-[340px] lg:min-h-full shadow-lg">
                <ResilientImage
                  src={ABOUT_MEDIA.image}
                  alt={ABOUT_MEDIA.alt}
                  fallbackTitle="Systems Engineering & Operations"
                  className="w-full h-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/85 via-transparent to-transparent"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xs font-mono text-[#06B6D4]">Customer Service Approach</p>
                  <p className="mt-1.5 text-sm text-slate-200 leading-relaxed max-w-lg">
                    {ABOUT_DATA.approach}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Core Values */}
          <div className="mt-16 pt-12 border-t border-slate-200">
            <Reveal>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A]">Our Core Values</h2>
            </Reveal>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {ABOUT_DATA.values.map((val, idx) => (
                <StaggerCard key={val.name} index={idx} className="flex">
                  <div className="w-full rounded-xl bg-[#F8FAFC] border border-slate-200 p-5 hover:border-[#2563EB]/35 hover:-translate-y-0.5 transition-all duration-200">
                    <span className="font-mono text-xs text-[#2563EB] tabular-nums">
                      0{idx + 1}.
                    </span>
                    <h3 className="mt-2 text-base font-bold text-[#0F172A]">{val.name}</h3>
                    <p className="mt-1.5 text-sm text-[#64748B] leading-relaxed">{val.detail}</p>
                  </div>
                </StaggerCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProcessSection />

      <QuoteCtaSection onRequestQuoteClick={onRequestQuoteClick} />
    </>
  );
}
