import {useState} from 'react';
import {ArrowUpRight, Eye} from 'lucide-react';
import {motion, useReducedMotion} from 'motion/react';
import {DEMO_PROJECTS, ProjectItem} from '../data/companyConfig';
import {MODERN_EASE} from './MotionPrimitives';
import {PageHeader} from './PageHeader';
import {QuoteCtaSection} from './QuoteCtaSection';
import {ResilientImage} from './ResilientImage';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onRequestQuoteClick: () => void;
}

type ProjectFilter =
  | 'All'
  | 'Web Applications'
  | 'Cloud and DevOps'
  | 'IT Infrastructure'
  | 'Networking'
  | 'CCTV and Security';

const PROJECT_CATEGORIES: ProjectFilter[] = [
  'All',
  'Web Applications',
  'Cloud and DevOps',
  'IT Infrastructure',
  'Networking',
  'CCTV and Security',
];

export function ProjectsSection({
  onSelectProject,
  onRequestQuoteClick,
}: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectFilter>('All');
  const prefersReducedMotion = useReducedMotion();

  const filteredProjects =
    selectedCategory === 'All'
      ? DEMO_PROJECTS
      : DEMO_PROJECTS.filter((project) => project.category === selectedCategory);

  return (
    <>
      <PageHeader
        eyebrow="Projects & Demonstration Portfolio"
        title="Sample Solution Architectures & Blueprints"
        subtitle="Explore demonstration architectures across web applications, cloud DevOps, systems administration, business networking, and IP security."
      />

      <section className="py-12 lg:py-14 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Category Filter Tabs */}
            <div
              role="tablist"
              aria-label="Filter demonstration projects by category"
              className="flex flex-wrap items-center gap-2"
            >
              {PROJECT_CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                      isActive
                        ? 'bg-[#0B1220] text-white shadow-sm'
                        : 'bg-white text-[#64748B] border border-slate-200 hover:text-[#0F172A] hover:border-slate-300'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                layout={!prefersReducedMotion}
                initial={prefersReducedMotion ? {opacity: 1, y: 0} : {opacity: 0, y: 12}}
                animate={{opacity: 1, y: 0}}
                transition={{
                  duration: 0.32,
                  delay: Math.min(idx * 0.05, 0.2),
                  ease: MODERN_EASE,
                }}
                className="group rounded-xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-[#2563EB]/45 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] w-full overflow-hidden bg-[#0B1220] relative">
                    <ResilientImage
                      src={project.image}
                      alt={project.imageAlt}
                      fallbackTitle={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/70 via-transparent to-transparent"
                    />
                    <p className="absolute bottom-2.5 left-3.5 right-3.5 text-[11px] font-medium text-slate-200">
                      {project.demoScopeLabel}
                    </p>
                  </div>

                  <div className="p-4 sm:p-5">
                    <div className="flex items-center gap-2 text-xs font-medium text-[#64748B]">
                      <span className="text-[#2563EB] font-semibold">{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>Demonstration Sample</span>
                    </div>

                    <h2 className="mt-2 text-base font-bold text-[#0F172A] tracking-tight">
                      {project.title}
                    </h2>

                    <p className="mt-1.5 text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="px-4 sm:px-5 pb-4 pt-1 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#2563EB] hover:text-[#142D4E] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>View Project</span>
                    <ArrowUpRight
                      className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-[#0F172A] bg-slate-100 hover:bg-[#0B1220] hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>View Details</span>
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <QuoteCtaSection onRequestQuoteClick={onRequestQuoteClick} />
    </>
  );
}
