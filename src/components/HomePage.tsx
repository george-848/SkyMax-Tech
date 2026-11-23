import {
  ArrowRight,
  Briefcase,
  Cloud,
  Code2,
  Network,
  Server,
  ShieldCheck,
} from 'lucide-react';
import {
  DEMO_PROJECTS,
  PageId,
  ProjectItem,
  SERVICES,
  ServiceItem,
  TECH_EXPERTISE,
  WHY_CHOOSE_US,
} from '../data/companyConfig';
import {HeroSection} from './HeroSection';
import {Reveal, StaggerCard} from './MotionPrimitives';
import {ResilientImage} from './ResilientImage';
import {QuoteCtaSection} from './QuoteCtaSection';

interface HomePageProps {
  onNavigate: (page: PageId, preselectService?: string) => void;
  onSelectService: (service: ServiceItem) => void;
  onSelectProject: (project: ProjectItem) => void;
}

const ICON_MAP = {
  code: Code2,
  cloud: Cloud,
  server: Server,
  network: Network,
  shield: ShieldCheck,
  briefcase: Briefcase,
};

export function HomePage({onNavigate, onSelectService, onSelectProject}: HomePageProps) {
  return (
    <>
      <HeroSection
        onExploreServices={() => onNavigate('services')}
        onConsultationClick={() => onNavigate('contact', 'General IT Consultation')}
      />

      {/* Concise Services Overview */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#2563EB]">Our Services</p>
              <h2
                className="mt-1.5 text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight"
                style={{textWrap: 'balance'}}
              >
                Core Technology Capabilities
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#142D4E] transition-colors cursor-pointer whitespace-nowrap shrink-0 self-start sm:self-end"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => {
              const Icon = ICON_MAP[service.iconName];
              return (
                <StaggerCard key={service.id} index={index} className="flex">
                  <article className="w-full group rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-[#2563EB]/45 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#0B1220] text-[#06B6D4] flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-200">
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <span className="font-mono text-xs text-[#64748B] tabular-nums">
                          {service.number}
                        </span>
                      </div>

                      <h3 className="mt-4 text-lg font-bold text-[#0F172A]">{service.title}</h3>
                      {service.callout && (
                        <p className="mt-1 text-xs font-semibold text-[#2563EB]">
                          {service.callout}
                        </p>
                      )}
                      <p className="mt-2 text-sm text-[#64748B] leading-relaxed">
                        {service.summary}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => onSelectService(service)}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#142D4E] cursor-pointer"
                      >
                        <span>Learn More</span>
                        <ArrowRight
                          className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5"
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

      {/* Why Choose Us Snapshot */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-br from-[#0B1220] via-[#142D4E] to-[#0B1220] text-white overflow-hidden border-b border-white/10">
        {/* Subtle blue & cyan ambient color accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#2563EB]/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 right-0 w-96 h-96 rounded-full bg-[#06B6D4]/15 blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#06B6D4]">Why Choose Us</p>
              <h2
                className="mt-1.5 text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
                style={{textWrap: 'balance'}}
              >
                Built for Reliability, Security &amp; Long-Term Value
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('solutions')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#06B6D4] hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 self-start sm:self-end"
            >
              <span>View Solutions &amp; Stack</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Featured visual anchor */}
            <StaggerCard index={0} className="lg:col-span-5 flex">
              <div className="relative w-full rounded-2xl overflow-hidden border border-white/15 bg-[#0B1220] shadow-xl min-h-[240px] lg:min-h-full">
                <ResilientImage
                  src="/src/assets/images/hero_enterprise_tech_1795449872221.jpg"
                  alt="Enterprise cloud data center infrastructure and technology operations gallery"
                  fallbackTitle="Enterprise Operations"
                  className="w-full h-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/90 via-[#0B1220]/30 to-transparent"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <p className="text-xs font-mono text-[#06B6D4]">
                    Unified IT Delivery
                  </p>
                  <p className="mt-1 text-base font-bold text-white">
                    Software, Cloud, Networking &amp; Security Working Together
                  </p>
                </div>
              </div>
            </StaggerCard>

            {/* 4 Pillars in 2x2 glass grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {WHY_CHOOSE_US.slice(0, 4).map((item, idx) => (
                <StaggerCard key={item.title} index={idx + 1} className="flex">
                  <div className="w-full rounded-xl bg-[#0B1220]/60 backdrop-blur-md border border-white/15 p-5 hover:border-[#06B6D4]/50 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-xs text-[#06B6D4] tabular-nums">
                        0{idx + 1}.
                      </span>
                      <h3 className="mt-2 text-base font-bold text-white">{item.title}</h3>
                      <p className="mt-1.5 text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Demonstration Projects */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#2563EB]">Featured Projects</p>
              <h2
                className="mt-1.5 text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight"
                style={{textWrap: 'balance'}}
              >
                Demonstration Solution Blueprints
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#142D4E] transition-colors cursor-pointer whitespace-nowrap shrink-0 self-start sm:self-end"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {DEMO_PROJECTS.slice(0, 3).map((project, idx) => (
              <StaggerCard key={project.id} index={idx} className="flex">
                <article className="w-full group rounded-2xl bg-white border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-[#2563EB]/45 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <div>
                    <div className="aspect-[4/3] w-full overflow-hidden bg-[#0B1220]">
                      <ResilientImage
                        src={project.image}
                        alt={project.imageAlt}
                        fallbackTitle={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-medium text-[#64748B]">
                        <span className="text-[#2563EB] font-semibold">{project.category}</span>
                        {' · '}Demonstration Sample
                      </p>
                      <h3 className="mt-2 text-lg font-bold text-[#0F172A]">{project.title}</h3>
                      <p className="mt-2 text-sm text-[#64748B] leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#142D4E] cursor-pointer"
                    >
                      <span>View Details</span>
                      <ArrowRight
                        className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </article>
              </StaggerCard>
            ))}
          </div>
        </div>
      </section>

      {/* Compact Technology Expertise Strip */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <p className="text-sm font-semibold text-[#2563EB]">Our Technology Expertise</p>
              <h2 className="mt-1 text-xl sm:text-2xl font-bold text-[#0F172A]">
                Enterprise Platforms Across Every Layer
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('solutions')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#142D4E] cursor-pointer whitespace-nowrap shrink-0 self-start sm:self-center"
            >
              <span>Filter Full Tech Stack</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {TECH_EXPERTISE.map((group, idx) => (
              <StaggerCard key={group.category} index={idx} className="flex">
                <div className="w-full rounded-xl bg-[#F8FAFC] border border-slate-200 p-4 hover:border-[#2563EB]/35 transition-colors">
                  <h3 className="text-sm font-bold text-[#0F172A]">{group.category}</h3>
                  <p className="mt-2 text-xs text-[#64748B] leading-relaxed">
                    {group.items.map((i) => i.name).join(' · ')}
                  </p>
                </div>
              </StaggerCard>
            ))}
          </div>
        </div>
      </section>

      <QuoteCtaSection onRequestQuoteClick={() => onNavigate('contact')} />
    </>
  );
}
