import {motion, useReducedMotion} from 'motion/react';
import {MODERN_EASE} from './MotionPrimitives';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export function PageHeader({eyebrow, title, subtitle}: PageHeaderProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative bg-[#0B1220] text-white bg-navy-grid border-b border-white/10 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 right-0 w-[440px] h-[440px] rounded-full bg-[#2563EB]/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/3 w-[320px] h-[220px] rounded-full bg-[#06B6D4]/8 blur-3xl"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <motion.p
          initial={prefersReducedMotion ? {opacity: 1, y: 0} : {opacity: 0, y: 10}}
          animate={{opacity: 1, y: 0}}
          transition={prefersReducedMotion ? {duration: 0} : {duration: 0.4, ease: MODERN_EASE}}
          className="text-sm font-medium text-[#06B6D4] tracking-wide"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={prefersReducedMotion ? {opacity: 1, y: 0} : {opacity: 0, y: 14}}
          animate={{opacity: 1, y: 0}}
          transition={
            prefersReducedMotion
              ? {duration: 0}
              : {duration: 0.45, delay: 0.05, ease: MODERN_EASE}
          }
          className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-3xl"
          style={{textWrap: 'balance'}}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={prefersReducedMotion ? {opacity: 1, y: 0} : {opacity: 0, y: 12}}
          animate={{opacity: 1, y: 0}}
          transition={
            prefersReducedMotion
              ? {duration: 0}
              : {duration: 0.45, delay: 0.1, ease: MODERN_EASE}
          }
          className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
