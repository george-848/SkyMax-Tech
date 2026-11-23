import {useState} from 'react';
import {motion, useReducedMotion} from 'motion/react';
import {TECH_EXPERTISE, TechCategory} from '../data/companyConfig';
import {MODERN_EASE} from './MotionPrimitives';

type FilterTab = 'All' | TechCategory['category'];

const FILTER_TABS: FilterTab[] = [
  'All',
  'Cloud',
  'DevOps',
  'Systems',
  'Networking',
  'Development',
  'Security',
];

export function TechExpertiseSection() {
  const [activeCategory, setActiveCategory] = useState<FilterTab>('All');
  const prefersReducedMotion = useReducedMotion();

  const visibleGroups =
    activeCategory === 'All'
      ? TECH_EXPERTISE
      : TECH_EXPERTISE.filter((group) => group.category === activeCategory);

  return (
    <section
      id="expertise"
      className="py-16 lg:py-20 bg-[#0B1220] text-white bg-navy-grid border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#06B6D4] tracking-wide">
              Technology Expertise
            </p>
            <h2
              className="mt-2 text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
              style={{textWrap: 'balance'}}
            >
              Enterprise Platforms Across Every Layer
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              We build and administer production infrastructure using industry-standard cloud,
              DevOps, systems, networking, development, and surveillance tooling.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter technology expertise by domain"
            className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#142D4E]/70 border border-white/10 self-start lg:self-end"
          >
            {FILTER_TABS.map((tab) => {
              const isSelected = activeCategory === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveCategory(tab)}
                  className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] ${
                    isSelected
                      ? 'bg-[#2563EB] text-white shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Technology Groups */}
        <div className="mt-10 space-y-6">
          {visibleGroups.map((group) => (
            <motion.div
              key={group.category}
              layout={!prefersReducedMotion}
              initial={prefersReducedMotion ? {opacity: 1, y: 0} : {opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.28, ease: MODERN_EASE}}
              className="rounded-2xl bg-[#142D4E]/45 backdrop-blur-sm border border-white/10 p-6 sm:p-7"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
                <h3 className="text-lg font-bold text-white">{group.category}</h3>
                <p className="text-sm text-slate-300">{group.summary}</p>
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-4 rounded-xl bg-[#0B1220]/80 border border-white/10 px-4 py-3.5 hover:border-[#06B6D4]/50 hover:-translate-y-0.5 transition-all duration-150"
                  >
                    <div
                      aria-hidden="true"
                      className="w-11 h-11 rounded-lg bg-[#142D4E] border border-white/10 flex items-center justify-center font-mono text-xs font-semibold text-[#06B6D4] shrink-0"
                    >
                      {tech.code}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-white truncate">{tech.name}</p>
                      <p className="text-xs text-slate-400 truncate mt-0.5">{tech.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
