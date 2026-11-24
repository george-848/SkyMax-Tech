import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  Cloud,
  GraduationCap,
  Handshake,
  Headphones,
  Layers,
  Lock,
  Rocket,
  ShieldCheck,
  SlidersHorizontal,
  Target,
  Wallet,
} from 'lucide-react';
import {SOLUTIONS, WHY_CHOOSE_US} from '../data/companyConfig';
import {Reveal, StaggerCard} from './MotionPrimitives';

interface SolutionsAndWhySectionProps {
  onDiscussSolution: (serviceTitle?: string) => void;
}

const TRUST_ICONS = [
  Layers,
  Target,
  Cloud,
  Lock,
  Headphones,
  SlidersHorizontal,
  Wallet,
  Handshake,
];

const SOLUTION_ICONS = [Building2, GraduationCap, Rocket, Briefcase];

export function SolutionsAndWhySection({onDiscussSolution}: SolutionsAndWhySectionProps) {
  return (
    <section
      id="why-us"
      className="py-20 lg:py-24 bg-[var(--bg-secondary)] text-[var(--text-primary)] relative overflow-hidden border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Sticky Left Editorial Intro + 2x4 Trust Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <Reveal direction="left" className="lg:col-span-4 text-left space-y-5 lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
              <p className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[var(--accent)]">
                Why SkyMax
              </p>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-[var(--text-primary)]"
              style={{textWrap: 'balance'}}
            >
              Why Businesses Choose Us
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              We bring full-stack SaaS software, cloud hosting, office networks, and security
              together under one dependable team.
            </p>

            <div
              className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--accent-border)] transition-colors flex items-start gap-3.5"
              style={{boxShadow: 'var(--shadow-card)'}}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--accent-soft)] text-[var(--accent)] shrink-0 border border-[var(--accent-border)]">
                <ShieldCheck className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-xs text-[var(--text-primary)]">
                  Full Ownership &amp; Clarity
                </p>
                <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
                  You keep full ownership of your software, accounts, and equipment with clear
                  guides.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
            {WHY_CHOOSE_US.map((item, idx) => {
              const Icon = TRUST_ICONS[idx] ?? ShieldCheck;
              return (
                <StaggerCard key={item.title} index={idx} className="flex">
                  <div
                    className="w-full relative overflow-hidden p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--accent-border)] hover:-translate-y-1 transition-all duration-200 group"
                    style={{boxShadow: 'var(--shadow-card)'}}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(90deg, var(--accent), var(--accent-deep))',
                      }}
                    />
                    <div className="flex items-center justify-between gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[var(--accent-soft)] border border-[var(--accent-border)] text-[var(--accent)] flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-contrast)] group-hover:scale-105 transition-all duration-200">
                        <Icon className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors tabular-nums">
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </StaggerCard>
              );
            })}
          </div>
        </div>

        {/* Clean Integrated Industry Solutions Strip */}
        <div className="mt-20 pt-14 border-t border-[var(--border-subtle)]">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
                <p className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[var(--accent)]">
                  Industry Solutions
                </p>
              </div>
              <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
                Complete Setups Built For Your Industry
              </h3>
            </div>
            <button
              type="button"
              onClick={() => onDiscussSolution('Multiple / Integrated Solution')}
              className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--accent)] hover:text-[var(--text-primary)] transition-colors cursor-pointer whitespace-nowrap shrink-0 self-start sm:self-end"
            >
              <span>Request Custom Setup</span>
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </button>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SOLUTIONS.map((sol, idx) => {
              const SectorIcon = SOLUTION_ICONS[idx] ?? Layers;
              return (
                <StaggerCard key={sol.index} index={idx} className="flex">
                  <article
                    className="w-full relative overflow-hidden rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 flex flex-col justify-between hover:border-[var(--accent-border)] hover:-translate-y-1 transition-all duration-200 group"
                    style={{boxShadow: 'var(--shadow-card)'}}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute top-0 left-0 right-0 h-0.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(90deg, var(--accent), var(--accent-deep))',
                      }}
                    />
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs font-mono font-bold text-[var(--accent)]">
                          {sol.index} · {sol.sector}
                        </span>
                        <div className="w-9 h-9 rounded-xl bg-[var(--accent-soft)] border border-[var(--accent-border)] text-[var(--accent)] flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-contrast)] group-hover:scale-105 transition-all duration-200">
                          <SectorIcon className="w-4 h-4" aria-hidden="true" />
                        </div>
                      </div>
                      <h4 className="mt-3 text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors tracking-tight">
                        {sol.title}
                      </h4>
                      <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                        {sol.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
                      <p className="text-xs font-mono text-[var(--text-muted)]">
                        {sol.includedServices.join(' · ')}
                      </p>
                      <button
                        type="button"
                        onClick={() => onDiscussSolution('Multiple / Integrated Solution')}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] hover:text-[var(--text-primary)] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                      >
                        <span>Discuss</span>
                        <ArrowRight
                          className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
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
      </div>
    </section>
  );
}
