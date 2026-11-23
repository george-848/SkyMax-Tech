import {ArrowRight, MessageSquare} from 'lucide-react';
import {motion, useReducedMotion} from 'motion/react';
import {HERO_MEDIA, TRUST_PILLARS} from '../data/companyConfig';
import {ResilientImage} from './ResilientImage';

interface HeroSectionProps {
  onExploreServices: () => void;
  onConsultationClick: () => void;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function HeroSection({onExploreServices, onConsultationClick}: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: prefersReducedMotion ? {opacity: 1, y: 0} : {opacity: 0, y: 16},
    animate: {opacity: 1, y: 0},
    transition: prefersReducedMotion
      ? {duration: 0}
      : {duration: 0.5, delay, ease: EASE_OUT_EXPO},
  });

  return (
    <section
      id="home"
      className="relative bg-[#0B1220] text-white overflow-hidden border-b border-white/10"
    >
      {/* Full-bleed cloud technology background inspired by compureus.cat hero */}
      <div className="absolute inset-0">
        <ResilientImage
          src={HERO_MEDIA.image}
          alt={HERO_MEDIA.alt}
          eager
          fallbackTitle="Cloud Technology Infrastructure"
          className="w-full h-full object-cover object-center animate-hero-swing will-change-transform"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#0B1220]/75 via-[#142D4E]/70 to-[#0B1220]/95"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 lg:pt-24 lg:pb-20">
        {/* Centered full-width hero composition */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            {...fadeUp(0)}
            className="text-sm font-semibold text-[#06B6D4] tracking-wide mb-4"
          >
            Enterprise IT · Cloud Infrastructure · Software Engineering
          </motion.p>

          <motion.h1
            {...fadeUp(0.06)}
            className="font-extrabold tracking-tight text-white leading-[1.08] mx-auto max-w-3xl"
            style={{
              fontSize: 'clamp(2.35rem, 4.6vw, 4rem)',
              textWrap: 'balance',
            }}
          >
            Transforming Businesses{' '}
            <span className="bg-gradient-to-r from-[#60A5FA] to-[#06B6D4] bg-clip-text text-transparent">
              Through Technology.
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.12)}
            className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto"
          >
            From custom web applications and cloud infrastructure to secure business networks and IT
            solutions, we help organisations build, deploy and manage technology that drives growth.
          </motion.p>

          <motion.div
            {...fadeUp(0.18)}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              type="button"
              onClick={onExploreServices}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm sm:text-base transition-all duration-150 hover:-translate-y-0.5 whitespace-nowrap shrink-0 cursor-pointer shadow-lg shadow-[#2563EB]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={onConsultationClick}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#0B1220]/60 hover:bg-[#0B1220]/85 backdrop-blur-md border border-white/25 text-white font-semibold text-sm sm:text-base transition-all duration-150 hover:-translate-y-0.5 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]"
            >
              <MessageSquare className="w-4 h-4 text-[#06B6D4]" aria-hidden="true" />
              <span>Get a Free Consultation</span>
            </button>
          </motion.div>

          <motion.div
            {...fadeUp(0.24)}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-300"
          >
            <span>Businesses &amp; Organisations</span>
            <span aria-hidden="true" className="text-slate-500">
              ·
            </span>
            <span>Startups &amp; Institutions</span>
            <span aria-hidden="true" className="text-slate-500">
              ·
            </span>
            <span>Ghana &amp; Remote Delivery</span>
          </motion.div>
        </div>

        {/* Full-width 4-column Trusted Technology Solutions strip */}
        <motion.div {...fadeUp(0.28)} className="mt-14 lg:mt-16 pt-8 border-t border-white/15">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <h2 className="text-sm font-semibold text-white tracking-wide">
              Trusted Technology Solutions Built for Real Operations
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Practical architecture · Documented delivery · Long-term accountability
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TRUST_PILLARS.map((pillar, index) => (
              <motion.div
                key={pillar.index}
                initial={prefersReducedMotion ? {opacity: 1, y: 0} : {opacity: 0, y: 14}}
                animate={{opacity: 1, y: 0}}
                transition={
                  prefersReducedMotion
                    ? {duration: 0}
                    : {duration: 0.45, delay: 0.32 + index * 0.06, ease: EASE_OUT_EXPO}
                }
                className="rounded-xl bg-[#0B1220]/70 backdrop-blur-md border border-white/15 p-5 transition-colors duration-150 hover:border-[#06B6D4]/50"
              >
                <span className="font-mono text-xs text-[#06B6D4] tabular-nums">
                  {pillar.index}.
                </span>
                <h3 className="mt-2 text-base font-semibold text-white">{pillar.title}</h3>
                <p className="mt-1.5 text-sm text-slate-300 leading-relaxed">{pillar.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
