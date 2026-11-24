import {useState} from 'react';
import {
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  LifeBuoy,
  PenTool,
  PhoneCall,
  SearchCheck,
  Workflow,
  Wrench,
} from 'lucide-react';
import {AnimatePresence, motion, useReducedMotion} from 'motion/react';
import {I18N, LanguageCode} from '../data/companyConfig';
import {MODERN_EASE, Reveal} from './MotionPrimitives';

interface ProcessSectionProps {
  lang: LanguageCode;
}

const STEP_ICONS = [PhoneCall, SearchCheck, PenTool, Wrench, GraduationCap, LifeBuoy];

export function ProcessSection({lang}: ProcessSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const locale = I18N[lang];
  const copy = locale.processSection;
  const steps = locale.workingProcess;
  const current = steps[activeIndex] ?? steps[0];
  const ActiveIcon = STEP_ICONS[activeIndex] ?? ClipboardCheck;
  const progressPct = ((activeIndex + 1) / steps.length) * 100;

  return (
    <section
      id="process"
      className="py-14 sm:py-20 lg:py-24 bg-[var(--bg-secondary)] text-[var(--text-primary)] relative overflow-hidden border-b border-[var(--border-subtle)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-10 w-80 h-80 rounded-full blur-[120px]"
        style={{backgroundColor: 'var(--accent-glow)'}}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="max-w-2xl mx-auto text-center mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center justify-center gap-2">
            <Workflow className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
            <p className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.18em] uppercase text-[var(--accent)]">
              {copy.eyebrow}
            </p>
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight"
            style={{textWrap: 'balance'}}
          >
            <span className="text-blend-title">{copy.heading}</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-[17px] text-[var(--text-secondary)] leading-relaxed">
            {copy.subtitle}
          </p>
        </Reveal>

        {/* Interactive Step Selector Bar */}
        <div
          role="tablist"
          aria-label={copy.heading}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5 mb-5"
        >
          {steps.map((item, idx) => {
            const isSelected = activeIndex === idx;
            const StepIcon = STEP_ICONS[idx] ?? ClipboardCheck;
            return (
              <button
                key={item.step}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveIndex(idx)}
                className={`p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                  isSelected
                    ? 'bg-[var(--accent)] border-[var(--accent)] text-[var(--accent-contrast)] shadow-md -translate-y-0.5'
                    : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent-border)] hover:text-[var(--text-primary)]'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`font-mono text-[11px] font-bold tabular-nums ${
                      isSelected ? 'opacity-85' : 'text-[var(--accent)]'
                    }`}
                  >
                    {item.step}
                  </span>
                  <StepIcon
                    className={`w-3.5 h-3.5 ${isSelected ? 'opacity-90' : 'text-[var(--text-muted)]'}`}
                    aria-hidden="true"
                  />
                </div>
                <span className="mt-1.5 block text-xs font-bold leading-snug truncate">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Animated Stage Progress Rail */}
        <div
          aria-hidden="true"
          className="h-1 w-full rounded-full bg-[var(--border-subtle)] overflow-hidden mb-6"
        >
          <motion.div
            animate={{width: `${progressPct}%`}}
            transition={prefersReducedMotion ? {duration: 0} : {duration: 0.35, ease: MODERN_EASE}}
            className="h-full rounded-full"
            style={{
              background: 'var(--blend-gradient)',
            }}
          />
        </div>

        {/* Clean Focused Step Detail Stage */}
        <div
          className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 sm:p-8 lg:p-10"
          style={{boxShadow: 'var(--shadow-card)'}}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${lang}-${current.step}`}
              initial={prefersReducedMotion ? {opacity: 1, y: 0} : {opacity: 0, y: 8}}
              animate={{opacity: 1, y: 0}}
              exit={prefersReducedMotion ? {opacity: 0, y: 0} : {opacity: 0, y: -6}}
              transition={{duration: 0.22, ease: MODERN_EASE}}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center"
            >
              <div className="md:col-span-8 space-y-3.5 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent-soft)] border border-[var(--accent-border)] text-[var(--accent)] flex items-center justify-center shrink-0">
                    <ActiveIcon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xl sm:text-2xl font-extrabold text-[var(--accent)] tabular-nums">
                    {current.step}
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
                    {copy.stepWord} {Number(current.step)} {copy.ofWord} {steps.length}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
                  {current.title}
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  {current.description}
                </p>
              </div>

              <div className="md:col-span-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] p-4 sm:p-5 text-left">
                <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--text-muted)] font-bold">
                  {copy.keyOutcomeLabel}
                </p>
                <div className="mt-2.5 flex items-start gap-2.5">
                  <CheckCircle2
                    className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    {current.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
