import {useState} from 'react';
import {
  ArrowUpRight,
  Cloud,
  Code2,
  FolderKanban,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import {motion, useReducedMotion} from 'motion/react';
import {DEMO_PROJECTS, ProjectItem} from '../data/companyConfig';
import {MODERN_EASE, Reveal} from './MotionPrimitives';
import {ResilientImage} from './ResilientImage';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

type ProjectFilter =
  | 'All'
  | 'Full-Stack SaaS'
  | 'Cloud & DevOps'
  | 'IT Infrastructure'
  | 'Networking'
  | 'CCTV & Security';

const PROJECT_CATEGORIES: {id: ProjectFilter; label: string; Icon: typeof Sparkles}[] = [
  {id: 'All', label: 'All Projects', Icon: FolderKanban},
  {id: 'Full-Stack SaaS', label: 'Full-Stack SaaS', Icon: Code2},
  {id: 'Cloud & DevOps', label: 'Cloud & DevOps', Icon: Cloud},
  {id: 'IT Infrastructure', label: 'IT Infrastructure', Icon: Server},
  {id: 'Networking', label: 'Networking', Icon: Network},
  {id: 'CCTV & Security', label: 'CCTV & Security', Icon: ShieldCheck},
];

const CATEGORY_ICON_MAP: Record<ProjectItem['category'], typeof Code2> = {
  'Full-Stack SaaS': Code2,
  'Cloud & DevOps': Cloud,
  'IT Infrastructure': Server,
  Networking: Network,
  'CCTV & Security': ShieldCheck,
};

export function ProjectsSection({onSelectProject}: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectFilter>('All');
  const prefersReducedMotion = useReducedMotion();

  const filteredProjects =
    selectedCategory === 'All'
      ? DEMO_PROJECTS
      : DEMO_PROJECTS.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="projects"
      className="py-20 lg:py-24 bg-[var(--bg-primary)] text-[var(--text-primary)] relative overflow-hidden border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="max-w-2xl mx-auto text-center mb-12 space-y-3">
          <div className="inline-flex items-center justify-center gap-2">
            <FolderKanban className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
            <p className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[var(--accent)]">
              Sample Work
            </p>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]"
            style={{textWrap: 'balance'}}
          >
            Featured Projects &amp; Blueprints
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            See example setups showing how we deliver full-stack SaaS web applications, cloud
            hosting, office servers, business networks, and security cameras.
          </p>
        </Reveal>

        {/* Interactive Category Filter Controls */}
        <div
          role="tablist"
          aria-label="Filter demonstration projects by category"
          className="flex flex-wrap justify-center items-center gap-2 mb-12"
        >
          {PROJECT_CATEGORIES.map(({id, label, Icon}) => {
            const isActive = selectedCategory === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                  isActive
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent)] font-bold shadow-md'
                    : 'bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--accent-border)]'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Clean 2-column Exhibit Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 text-left">
          {filteredProjects.map((project, idx) => {
            const CatIcon = CATEGORY_ICON_MAP[project.category] ?? Code2;
            return (
              <motion.article
                key={project.id}
                layout={!prefersReducedMotion}
                initial={prefersReducedMotion ? {opacity: 1, y: 0} : {opacity: 0, y: 14}}
                animate={{opacity: 1, y: 0}}
                whileHover={prefersReducedMotion ? undefined : {y: -4}}
                transition={{
                  duration: 0.35,
                  delay: Math.min(idx * 0.05, 0.2),
                  ease: MODERN_EASE,
                }}
                className="group relative rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--accent-border)] transition-all duration-300 flex flex-col justify-between"
                style={{boxShadow: 'var(--shadow-card)'}}
              >
                <div>
                  <div className="aspect-[16/9] w-full overflow-hidden bg-[#070B14] relative">
                    <ResilientImage
                      src={project.image}
                      alt={project.imageAlt}
                      fallbackTitle={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
                    />
                    <div className="absolute top-3.5 left-4 flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-black/65 backdrop-blur-md border border-white/15 text-white">
                      <CatIcon
                        className="w-3.5 h-3.5"
                        style={{color: 'var(--accent-on-photo)'}}
                        aria-hidden="true"
                      />
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    <p
                      className="absolute bottom-3 left-5 right-5 text-[11px] font-mono font-semibold"
                      style={{color: 'var(--accent-on-photo)'}}
                    >
                      {project.demoScopeLabel}
                    </p>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] font-mono">
                      <span className="text-[var(--accent)] font-semibold">{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>Sample Setup</span>
                    </div>

                    <h3 className="mt-2.5 text-xl font-bold text-[var(--text-primary)] tracking-tight group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs font-mono text-[var(--text-muted)]">
                    {project.technologies.slice(0, 4).join(' · ')}
                  </p>

                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--accent)] hover:text-[var(--text-primary)] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>View Details</span>
                    <ArrowUpRight
                      className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
