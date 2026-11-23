import {ReactNode} from 'react';
import {motion, useReducedMotion} from 'motion/react';

export const MODERN_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({children, delay = 0, className = ''}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{opacity: 0, y: 16}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.1}}
      transition={{duration: 0.45, delay, ease: MODERN_EASE}}
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
      initial={{opacity: 0, y: 14}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.08}}
      transition={{
        duration: 0.4,
        delay: Math.min(index * 0.05, 0.25),
        ease: MODERN_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
