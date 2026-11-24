import {
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  Cloud,
  Code2,
  Layers,
  Lock,
  Network,
  Settings,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import {motion, useReducedMotion} from 'motion/react';
import {HERO_MEDIA, I18N, LanguageCode} from '../data/companyConfig';
import {ResilientImage} from './ResilientImage';

interface HeroSectionProps {
  onStartProject: () => void;
  onViewProjects: () => void;
  lang: LanguageCode;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function HeroSection({onStartProject, onViewProjects, lang}: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const {hero, trustPillars} = I18N[lang];

  const fadeUp = (delay = 0) => ({
    initial: prefersReducedMotion ? {opacity: 1, y: 0} : {opacity: 0, y: 18},
    animate: {opacity: 1, y: 0},
    transition: prefersReducedMotion
      ? {duration: 0}
      : {duration: 0.5, delay, ease: EASE_OUT_EXPO},
  });

  return (
    <section
      id="hero"
      className="relative bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-34 lg:pb-24 border-b border-[var(--border-subtle)]"
    >
      {/* Visible animated backdrop + theme-aware contrast scrim + ambient accent glow */}
      <div className="absolute inset-0 pointer-events-none">
        <ResilientImage
          src={HERO_MEDIA.image}
          alt={HERO_MEDIA.alt}
          eager
          fallbackTitle="Cloud Technology Infrastructure"
          style={{opacity: 'var(--hero-img-opacity)'}}
          className="w-full h-full object-cover object-center animate-hero-swing will-change-transform"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, color-mix(in srgb, var(--bg-primary) 86%, transparent) 0%, color-mix(in srgb, var(--bg-primary) 56%, transparent) 58%, color-mix(in srgb, var(--bg-primary) 70%, transparent) 100%)',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-32"
          style={{
            background: 'linear-gradient(to top, var(--bg-primary), transparent)',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 navy-grid opacity-70"
        />
        <div
          aria-hidden="true"
          className="absolute -top-16 -left-20 w-80 h-80 rounded-full blur-[100px]"
          style={{backgroundColor: 'var(--glow-violet)'}}
        />
        <div
          aria-hidden="true"
          className="absolute top-12 -right-16 w-80 h-80 rounded-full blur-[100px]"
          style={{backgroundColor: 'var(--glow-cyan)'}}
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 left-1/3 w-96 h-96 rounded-full blur-[110px]"
          style={{backgroundColor: 'var(--glow-amber)'}}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-10 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 text-left">
            <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="h-px w-7 sm:w-8 bg-[var(--accent)]" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.18em] uppercase text-[var(--accent)]">
                {hero.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.08)}
              className="font-extrabold tracking-tight leading-[1.12]"
              style={{
                fontSize: 'clamp(1.95rem, 4.2vw, 3.65rem)',
                textWrap: 'balance',
              }}
            >
              <span className="text-blend-title">
                {hero.titlePrefix} {hero.titleHighlight}
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.16)}
              className="mt-4 sm:mt-6 text-[15px] sm:text-base lg:text-[17px] text-[var(--text-secondary)] leading-relaxed max-w-xl"
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              {...fadeUp(0.24)}
              className="mt-7 sm:mt-9 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
            >
              <button
                type="button"
                onClick={onStartProject}
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--accent-contrast)] font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0 shadow-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                <span>{hero.primaryCta}</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>

              <button
                type="button"
                onClick={onViewProjects}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl border border-[var(--border-subtle)] hover:border-[var(--accent)] bg-[var(--bg-surface)] hover:bg-[var(--accent-soft)] text-[var(--accent)] font-bold text-sm transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                <span>{hero.secondaryCta}</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </motion.div>

            <motion.div
              {...fadeUp(0.3)}
              className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-2 text-xs sm:text-[13px] font-mono text-[var(--text-muted)]"
            >
              <span className="text-[var(--text-secondary)]">{hero.audiences[0]}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[var(--text-secondary)]">{hero.audiences[1]}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[var(--accent)] font-semibold">{hero.audiences[2]}</span>
            </motion.div>
          </div>

          {/* Right Animated Product Showcase (Reference Orbital Layout) */}
          <motion.div {...fadeUp(0.18)} className="lg:col-span-5">
            <div className="relative w-full h-[350px] sm:h-[420px] lg:h-[470px] flex items-center justify-center select-none">
              {/* Central Styled Orbital & Glass SaaS Showcase */}
              <motion.div
                initial={prefersReducedMotion ? {scale: 1, opacity: 1} : {scale: 0.9, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={prefersReducedMotion ? {duration: 0} : {duration: 0.85, ease: EASE_OUT_EXPO}}
                className="relative w-[256px] h-[256px] sm:w-[336px] sm:h-[336px] xl:w-[368px] xl:h-[368px] flex items-center justify-center"
              >
                {/* Sweeping Conic Gradient Halo */}
                <motion.div
                  aria-hidden="true"
                  animate={prefersReducedMotion ? undefined : {rotate: 360}}
                  transition={{duration: 9, repeat: Infinity, ease: 'linear'}}
                  className="absolute inset-2 rounded-full opacity-60 blur-xl pointer-events-none"
                  style={{
                    background:
                      'conic-gradient(from 0deg, var(--accent), transparent 28%, var(--accent-deep) 56%, var(--accent-amber) 78%, transparent 94%)',
                  }}
                />

                {/* Precision Outer Orbital SVG Ring with Satellite Nodes */}
                <motion.svg
                  viewBox="0 0 360 360"
                  aria-hidden="true"
                  animate={prefersReducedMotion ? undefined : {rotate: 360}}
                  transition={{duration: 20, repeat: Infinity, ease: 'linear'}}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                >
                  <circle
                    cx="180"
                    cy="180"
                    r="168"
                    fill="none"
                    stroke="var(--accent-border)"
                    strokeWidth="1.5"
                    strokeDasharray="8 10"
                  />
                  <circle cx="180" cy="12" r="5" fill="var(--accent)" />
                  <circle cx="180" cy="348" r="4.5" fill="var(--accent-amber)" />
                </motion.svg>

                {/* Counter-Rotating Inner Segmented Arc */}
                <motion.svg
                  viewBox="0 0 360 360"
                  aria-hidden="true"
                  animate={prefersReducedMotion ? undefined : {rotate: -360}}
                  transition={{duration: 12, repeat: Infinity, ease: 'linear'}}
                  className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] pointer-events-none"
                >
                  <circle
                    cx="180"
                    cy="180"
                    r="152"
                    fill="none"
                    stroke="var(--accent)"
                    strokeOpacity="0.45"
                    strokeWidth="2"
                    strokeDasharray="65 36 24 36"
                  />
                </motion.svg>

                {/* Central Cloud & Precision Settings Gear Engine */}
                <div
                  className="relative z-10 w-40 h-40 sm:w-52 sm:h-52 xl:w-56 xl:h-56 rounded-full border border-[var(--accent-border)] bg-[var(--bg-surface)]/90 backdrop-blur-md flex flex-col items-center justify-center overflow-hidden"
                  style={{
                    boxShadow: 'var(--shadow-card), inset 0 0 36px var(--accent-soft)',
                  }}
                >
                  {/* Subtle Engineering Dot Matrix */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-45"
                    style={{
                      backgroundImage:
                        'radial-gradient(var(--accent-border) 1px, transparent 1px)',
                      backgroundSize: '12px 12px',
                    }}
                  />

                  {/* Expanding Sonar Pulse Ring */}
                  {!prefersReducedMotion && (
                    <motion.div
                      aria-hidden="true"
                      animate={{scale: [0.65, 1.38], opacity: [0.55, 0]}}
                      transition={{duration: 2.6, repeat: Infinity, ease: 'easeOut'}}
                      className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-[var(--accent)] pointer-events-none"
                    />
                  )}

                  {/* Interlocking Kinetic Settings Gears (separated position & rotation wrappers) */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <div className="-translate-x-6 -translate-y-5 sm:-translate-x-8 sm:-translate-y-6">
                      <motion.div
                        animate={prefersReducedMotion ? undefined : {rotate: 360}}
                        transition={{duration: 9, repeat: Infinity, ease: 'linear'}}
                      >
                        <Settings
                          strokeWidth={1.6}
                          className="w-24 h-24 sm:w-28 sm:h-28 xl:w-32 xl:h-32 text-[var(--accent)]/50"
                        />
                      </motion.div>
                    </div>
                    <div className="translate-x-6 translate-y-4 sm:translate-x-8 sm:translate-y-5">
                      <motion.div
                        animate={prefersReducedMotion ? undefined : {rotate: -360}}
                        transition={{duration: 6, repeat: Infinity, ease: 'linear'}}
                      >
                        <Settings
                          strokeWidth={1.75}
                          className="w-14 h-14 sm:w-16 sm:h-16 xl:w-[72px] xl:h-[72px] text-[var(--accent-deep)]/65"
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Sculpted Multi-Layer SaaS Cloud Core */}
                  <motion.div
                    animate={
                      prefersReducedMotion
                        ? undefined
                        : {y: [0, -7, 0], scale: [1, 1.03, 1]}
                    }
                    transition={{duration: 3.2, repeat: Infinity, ease: 'easeInOut'}}
                    className="relative z-10 flex flex-col items-center"
                  >
                    <svg
                      viewBox="0 0 160 104"
                      aria-hidden="true"
                      className="w-24 h-16 sm:w-32 sm:h-20 xl:w-36 xl:h-24"
                      style={{
                        filter: 'drop-shadow(0 12px 24px var(--accent-glow))',
                      }}
                    >
                      <defs>
                        <linearGradient id="skymaxCloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="var(--accent)" />
                          <stop offset="56%" stopColor="var(--accent-deep)" />
                          <stop offset="100%" stopColor="var(--accent-amber)" />
                        </linearGradient>
                        <linearGradient id="skymaxCloudSheen" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
                          <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0.04" />
                          <stop offset="100%" stopColor="#000000" stopOpacity="0.14" />
                        </linearGradient>
                      </defs>

                      {/* Soft Offset Depth Cloud Layer */}
                      <path
                        d="M40 88 H122 A18 18 0 0 0 124.5 52.2 A24 24 0 0 0 100 30 A30 30 0 0 0 46 45 A22 22 0 0 0 40 88 Z"
                        fill="var(--accent-deep)"
                        fillOpacity="0.32"
                      />

                      {/* Primary Sculpted Cloud Body */}
                      <path
                        d="M40 84 H122 A18 18 0 0 0 124.5 48.2 A24 24 0 0 0 100 26 A30 30 0 0 0 46 41 A22 22 0 0 0 40 84 Z"
                        fill="url(#skymaxCloudGrad)"
                        stroke="var(--accent-contrast)"
                        strokeOpacity="0.45"
                        strokeWidth="1.6"
                      />

                      {/* Top Gloss Specular Layer */}
                      <path
                        d="M40 84 H122 A18 18 0 0 0 124.5 48.2 A24 24 0 0 0 100 26 A30 30 0 0 0 46 41 A22 22 0 0 0 40 84 Z"
                        fill="url(#skymaxCloudSheen)"
                      />

                      {/* Side Cloud Node Connectors */}
                      <path
                        d="M44 63 H63 M99 63 H118"
                        fill="none"
                        stroke="var(--accent-contrast)"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeOpacity="0.5"
                      />
                      <circle cx="44" cy="63" r="3" fill="var(--accent-contrast)" fillOpacity="0.9" />
                      <circle cx="118" cy="63" r="3" fill="var(--accent-contrast)" fillOpacity="0.9" />

                      {/* Animated Upward Cloud Sync Chevron & Data Beam */}
                      <motion.g
                        animate={
                          prefersReducedMotion
                            ? undefined
                            : {y: [2, -3, 2], opacity: [0.85, 1, 0.85]}
                        }
                        transition={{duration: 1.8, repeat: Infinity, ease: 'easeInOut'}}
                      >
                        <path
                          d="M81 62 V39 M71 49 L81 39 L91 49"
                          fill="none"
                          stroke="var(--accent-contrast)"
                          strokeWidth="3.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </motion.g>

                      {/* SaaS Platform Stack Bars */}
                      <rect
                        x="65"
                        y="67"
                        width="32"
                        height="4.2"
                        rx="2.1"
                        fill="var(--accent-contrast)"
                        fillOpacity="0.92"
                      />
                      <rect
                        x="71"
                        y="74"
                        width="20"
                        height="3.4"
                        rx="1.7"
                        fill="var(--accent-contrast)"
                        fillOpacity="0.65"
                      />
                    </svg>

                    <div className="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--bg-primary)]/90 border border-[var(--border-subtle)] backdrop-blur-sm">
                      <span
                        className={`w-1.5 h-1.5 rounded-full bg-[var(--accent)] ${
                          prefersReducedMotion ? '' : 'animate-ping'
                        }`}
                      />
                      <span className="font-mono text-[9px] font-bold tracking-[0.18em] text-[var(--text-primary)] uppercase">
                        {hero.cloudEngineLabel}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Telemetry & Product Cards Layer */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Top-Right Cloud Compute Bar Chart Card */}
                <motion.div
                  initial={prefersReducedMotion ? {opacity: 1, x: 0} : {opacity: 0, x: 18}}
                  animate={{opacity: 1, x: 0}}
                  transition={
                    prefersReducedMotion ? {duration: 0} : {duration: 0.7, delay: 0.35, ease: EASE_OUT_EXPO}
                  }
                  className="absolute top-2 right-0 sm:top-3 sm:right-2 p-2.5 sm:p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]/95 backdrop-blur-md"
                  style={{boxShadow: 'var(--shadow-card)'}}
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="relative flex h-2 w-2">
                      {!prefersReducedMotion && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
                      )}
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
                    </span>
                    <p className="text-[10px] font-mono tracking-wider uppercase text-[var(--text-secondary)] font-semibold">
                      {hero.cloudComputeLabel}
                    </p>
                  </div>
                  <div className="mt-2 h-6 sm:h-8 w-20 sm:w-24 flex items-end gap-1">
                    {[40, 75, 45, 90, 60, 50, 85, 95].map((heightPct, barIdx) => (
                      <motion.div
                        key={barIdx}
                        animate={
                          prefersReducedMotion
                            ? undefined
                            : {scaleY: [1, 0.72 + (barIdx % 3) * 0.14, 1]}
                        }
                        transition={{
                          duration: 2.2 + barIdx * 0.2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="w-2 sm:w-2.5 rounded-t-sm origin-bottom"
                        style={{
                          height: `${heightPct}%`,
                          background:
                            'linear-gradient(to top, var(--accent-deep), var(--accent))',
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Floating Product Cards */}
                {[
                  {
                    label: hero.floatingProducts[0],
                    Icon: Code2,
                    pos: 'top-[12%] left-0 sm:left-2 lg:left-[-2%]',
                    delay: 0,
                    dir: -8,
                  },
                  {
                    label: hero.floatingProducts[1],
                    Icon: Cloud,
                    pos: 'bottom-[14%] left-0 sm:left-2 lg:left-[-3%]',
                    delay: 1.2,
                    dir: 8,
                  },
                  {
                    label: hero.floatingProducts[2],
                    Icon: Network,
                    pos: 'top-[48%] right-0 sm:right-1 lg:right-[-3%]',
                    delay: 2.4,
                    dir: -8,
                  },
                  {
                    label: hero.floatingProducts[3],
                    Icon: ShieldCheck,
                    pos: 'bottom-[5%] right-0 sm:right-4',
                    delay: 3.6,
                    dir: 8,
                  },
                ].map((product, idx) => {
                  const ProductIcon = product.Icon;
                  return (
                    <motion.div
                      key={idx}
                      className={`absolute ${product.pos} flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border border-[var(--border-subtle)] hover:border-[var(--accent-border)] bg-[var(--bg-surface)]/95 backdrop-blur-md`}
                      style={{boxShadow: 'var(--shadow-card)'}}
                      animate={prefersReducedMotion ? undefined : {y: [0, product.dir, 0]}}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: product.delay,
                      }}
                    >
                      <ProductIcon
                        className={`w-3.5 h-3.5 text-[var(--accent)] shrink-0 ${
                          prefersReducedMotion ? '' : 'animate-pulse'
                        }`}
                        aria-hidden="true"
                      />
                      <span className="font-semibold text-[11px] sm:text-xs tracking-wide whitespace-nowrap text-[var(--text-primary)]">
                        {product.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-width 4-column Trust Pillars Strip */}
        <motion.div
          {...fadeUp(0.34)}
          className="mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-[var(--border-subtle)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {trustPillars.map((pillar, idx) => {
            const PillarIcon = [Layers, Lock, TrendingUp, BookOpenCheck][idx] ?? Layers;
            return (
              <motion.div
                key={pillar.index}
                whileHover={prefersReducedMotion ? undefined : {y: -4}}
                transition={{duration: 0.2, ease: EASE_OUT_EXPO}}
                className="group relative rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-5 hover:border-[var(--accent-border)] transition-colors duration-200 overflow-hidden"
                style={{boxShadow: 'var(--shadow-card)'}}
              >
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'var(--blend-gradient)',
                  }}
                />
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-[var(--accent-soft)] border border-[var(--accent-border)] text-[var(--accent)] flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-contrast)] transition-colors duration-200">
                    <PillarIcon className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors tabular-nums">
                    {pillar.index}.
                  </span>
                </div>
                <h2 className="mt-3.5 text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  {pillar.title}
                </h2>
                <p className="mt-1.5 text-sm text-[var(--text-secondary)] leading-relaxed">
                  {pillar.detail}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
