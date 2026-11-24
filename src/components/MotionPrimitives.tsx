import {ReactNode} from 'react';
import {motion, useReducedMotion} from 'motion/react';

export const MODERN_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const initial =
    direction === 'left'
      ? {opacity: 0, x: -20}
      : direction === 'right'
        ? {opacity: 0, x: 20}
        : direction === 'scale'
          ? {opacity: 0, scale: 0.96}
          : {opacity: 0, y: 18};

  const target =
    direction === 'left' || direction === 'right'
      ? {opacity: 1, x: 0}
      : direction === 'scale'
        ? {opacity: 1, scale: 1}
        : {opacity: 1, y: 0};

  return (
    <motion.div
      initial={initial}
      whileInView={target}
      viewport={{once: true, amount: 0.1}}
      transition={{duration: 0.5, delay, ease: MODERN_EASE}}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  index: number;
  className?: string;
}

export function StaggerCard({children, index, className = ''}: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{opacity: 0, y: 16}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.08}}
      transition={{
        duration: 0.42,
        delay: Math.min(index * 0.055, 0.28),
        ease: MODERN_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
