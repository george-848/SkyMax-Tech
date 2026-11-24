import {useState} from 'react';
import {
  ArrowRight,
  Award,
  Compass,
  Eye,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
} from 'lucide-react';
import {AnimatePresence, motion, useReducedMotion} from 'motion/react';
import {ABOUT_DATA, ABOUT_MEDIA} from '../data/companyConfig';
import {MODERN_EASE, Reveal} from './MotionPrimitives';
import {ResilientImage} from './ResilientImage';

interface AboutSectionProps {
  onScheduleConsultation: () => void;
}

export function AboutSection({onScheduleConsultation}: AboutSectionProps) {
  const [showValues, setShowValues] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="py-20 lg:py-24 bg-[var(--bg-secondary)] text-[var(--text-primary)] relative overflow-hidden border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Image Frame */}
          <Reveal direction="left" className="lg:col-span-6 relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-full blur-3xl -z-10"
              style={{backgroundColor: 'var(--accent-glow)'}}
            />
            <div
              className="rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-2.5 hover:border-[var(--accent-border)] transition-colors duration-300"
              style={{boxShadow: 'var(--shadow-card)'}}
            >
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#070B14] group">
                <ResilientImage
                  src={ABOUT_MEDIA.image}
                  alt={ABOUT_MEDIA.alt}
                  fallbackTitle="Systems Engineering & Operations"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="inline-flex items-center gap-1.5">
                    <Compass
                      className="w-3.5 h-3.5"
                      style={{color: 'var(--accent-on-photo)'}}
                      aria-hidden="true"
                    />
                    <p
                      className="text-[10px] font-mono uppercase tracking-[0.18em] font-semibold"
                      style={{color: 'var(--accent-on-photo)'}}
                    >
                      How We Work With Clients
                    </p>
                  </div>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {ABOUT_DATA.approach}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Narrative */}
          <Reveal direction="right" delay={0.08} className="lg:col-span-6 text-left space-y-6">
            <div>
              <div className="inline-flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
                <p className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[var(--accent)]">
                  Who We Are
                </p>
              </div>
              <h2
                className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight"
                style={{textWrap: 'balance'}}
              >
                About SkyMax Technology
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              <p className="font-semibold text-[var(--text-primary)]">{ABOUT_DATA.lead}</p>
              <p>{ABOUT_DATA.body}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t border-[var(--border-subtle)]">
              <div
                className="rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-border)] p-4 transition-all duration-200 hover:-translate-y-0.5 group"
                style={{boxShadow: 'var(--shadow-card)'}}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[var(--accent-soft)] border border-[var(--accent-border)] text-[var(--accent)] flex items-center justify-center shrink-0">
                    <Target className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    Our Mission
                  </h3>
                </div>
                <p className="mt-2.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {ABOUT_DATA.mission}
                </p>
              </div>
              <div
                className="rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-border)] p-4 transition-all duration-200 hover:-translate-y-0.5 group"
                style={{boxShadow: 'var(--shadow-card)'}}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[var(--accent-soft)] border border-[var(--accent-border)] text-[var(--accent)] flex items-center justify-center shrink-0">
                    <Eye className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    Our Vision
                  </h3>
                </div>
                <p className="mt-2.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {ABOUT_DATA.vision}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => setShowValues((prev) => !prev)}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold tracking-wider uppercase text-[var(--accent-contrast)] bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shadow-md whitespace-nowrap shrink-0"
              >
                <span>{showValues ? 'Hide Core Values' : 'Our Core Values'}</span>
                <ArrowRight
                  className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>

              <button
                type="button"
                onClick={onScheduleConsultation}
                className="text-xs font-bold tracking-wider uppercase text-[var(--accent)] hover:text-[var(--text-primary)] transition-colors py-2 cursor-pointer whitespace-nowrap shrink-0"
              >
                Schedule Consultation
              </button>
            </div>

            <AnimatePresence initial={false}>
              {showValues && (
                <motion.div
                  initial={prefersReducedMotion ? {opacity: 1} : {opacity: 0, height: 0}}
                  animate={{opacity: 1, height: 'auto'}}
                  exit={prefersReducedMotion ? {opacity: 0} : {opacity: 0, height: 0}}
                  transition={{duration: 0.25, ease: MODERN_EASE}}
                  className="overflow-hidden"
                >
                  <div className="pt-4 mt-2 border-t border-[var(--border-subtle)] grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {ABOUT_DATA.values.map((val, valIdx) => {
                      const ValueIcon =
                        [ShieldCheck, Zap, ShieldCheck, Award, RefreshCw][valIdx] ?? ShieldCheck;
                      return (
                        <div
                          key={val.name}
                          className="rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-border)] p-3.5 flex items-start gap-2.5 transition-colors"
                        >
                          <div className="w-7 h-7 rounded-lg bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center shrink-0 mt-0.5">
                            <ValueIcon className="w-3.5 h-3.5" aria-hidden="true" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-[var(--text-primary)]">{val.name}</p>
                            <p className="mt-0.5 text-xs text-[var(--text-secondary)] leading-relaxed">
                              {val.detail}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
