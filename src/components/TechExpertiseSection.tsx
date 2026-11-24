import {useState} from 'react';
import {
  Cloud,
  Code2,
  Cpu,
  GitBranch,
  Grid2x2,
  Network,
  Server,
  ShieldCheck,
} from 'lucide-react';
import {AnimatePresence, motion, useReducedMotion} from 'motion/react';
import {I18N, LanguageCode, TECH_EXPERTISE, TechCategory} from '../data/companyConfig';
import {MODERN_EASE, Reveal} from './MotionPrimitives';

interface TechExpertiseSectionProps {
  lang: LanguageCode;
}

type FilterTab = 'All' | TechCategory['category'];

const FILTER_TABS: {id: FilterTab; Icon: typeof Grid2x2}[] = [
  {id: 'All', Icon: Grid2x2},
  {id: 'Cloud', Icon: Cloud},
  {id: 'DevOps', Icon: GitBranch},
  {id: 'Systems', Icon: Server},
  {id: 'Networking', Icon: Network},
  {id: 'Development', Icon: Code2},
  {id: 'Security', Icon: ShieldCheck},
];

export function TechExpertiseSection({lang}: TechExpertiseSectionProps) {
  const [activeCategory, setActiveCategory] = useState<FilterTab>('All');
  const prefersReducedMotion = useReducedMotion();
  const copy = I18N[lang].techSection;

  const visibleItems =
    activeCategory === 'All'
      ? TECH_EXPERTISE.flatMap((group) =>
          group.items.map((item) => ({...item, category: group.category}))
        )
      : TECH_EXPERTISE.filter((group) => group.category === activeCategory).flatMap((group) =>
          group.items.map((item) => ({...item, category: group.category}))
        );

  return (
    <section
      id="tech"
      className="py-14 sm:py-20 lg:py-24 bg-[var(--bg-primary)] text-[var(--text-primary)] relative overflow-hidden border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Reveal className="max-w-2xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center justify-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
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

        {/* Interactive Filter Tabs */}
        <div
          role="tablist"
          aria-label={copy.heading}
          className="flex flex-wrap justify-center items-center gap-2 mb-8 sm:mb-10"
        >
          {FILTER_TABS.map(({id, Icon}) => {
            const isSelected = activeCategory === id;
            const label = copy.tabLabels[id];
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(id)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                  isSelected
                    ? 'bg-[var(--accent)] border-[var(--accent)] text-[var(--accent-contrast)] font-bold shadow-md'
                    : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] hover:border-[var(--accent-border)]'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Clean 4-Column Tech Grid */}
        <motion.div
          layout={!prefersReducedMotion}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4 text-left"
        >
          <AnimatePresence mode="popLayout">
            {visibleItems.map((tech) => {
              const roleText = copy.roleOverrides?.[tech.name] ?? tech.role;
              return (
                <motion.div
                  key={`${tech.category}-${tech.name}`}
                  layout={!prefersReducedMotion}
                  initial={prefersReducedMotion ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.96}}
                  animate={{opacity: 1, scale: 1}}
                  exit={prefersReducedMotion ? {opacity: 0} : {opacity: 0, scale: 0.96}}
                  whileHover={prefersReducedMotion ? undefined : {y: -3}}
                  transition={{duration: 0.22, ease: MODERN_EASE}}
                  className="p-4 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex items-start gap-3.5 hover:border-[var(--accent-border)] transition-colors duration-200 group"
                  style={{boxShadow: 'var(--shadow-card)'}}
                >
                  <div
                    aria-hidden="true"
                    className="w-10 h-10 rounded-xl shrink-0 border border-[var(--accent-border)] bg-[var(--accent-soft)] text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-contrast)] group-hover:scale-105 flex items-center justify-center font-mono text-[11px] font-bold transition-all duration-200"
                  >
                    {tech.code}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors truncate">
                      {tech.name}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] truncate mt-0.5">{roleText}</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
