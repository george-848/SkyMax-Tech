import {WORKING_PROCESS} from '../data/companyConfig';
import {Reveal, StaggerCard} from './MotionPrimitives';

export function ProcessSection() {
  return (
    <section id="process" className="py-16 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold text-[#2563EB] tracking-wide">Our Working Process</p>
          <h2
            className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight"
            style={{textWrap: 'balance'}}
          >
            Six-Step Path From Consultation to Ongoing Support
          </h2>
          <p className="mt-3 text-base text-[#64748B] leading-relaxed">
            Every project follows a transparent, documented engineering lifecycle.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKING_PROCESS.map((item, idx) => (
            <StaggerCard key={item.step} index={idx} className="flex">
              <div className="w-full rounded-2xl bg-[#F8FAFC] border border-slate-200 p-6 flex flex-col justify-between hover:border-[#2563EB]/40 hover:-translate-y-0.5 transition-all duration-200">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-2xl font-bold text-[#2563EB] tabular-nums">
                      {item.step}
                    </span>
                    <span className="text-xs font-medium text-[#64748B]">
                      Step {Number(item.step)}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[#0F172A]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#64748B] leading-relaxed">{item.description}</p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200">
                  <p className="text-xs font-semibold text-[#0F172A]">
                    Deliverable:{' '}
                    <span className="font-normal text-[#64748B]">{item.outcome}</span>
                  </p>
                </div>
              </div>
            </StaggerCard>
          ))}
        </div>
      </div>
    </section>
  );
}
