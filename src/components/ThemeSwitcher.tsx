import {useState} from 'react';
import {Check, Palette, X} from 'lucide-react';
import {AnimatePresence, motion, useReducedMotion} from 'motion/react';
import {THEME_OPTIONS, ThemeId} from '../data/themes';
import {MODERN_EASE} from './MotionPrimitives';

interface ThemeSwitcherProps {
  activeTheme: ThemeId;
  onSelectTheme: (theme: ThemeId) => void;
}

export function ThemeSwitcher({activeTheme, onSelectTheme}: ThemeSwitcherProps) {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const current = THEME_OPTIONS.find((t) => t.id === activeTheme) ?? THEME_OPTIONS[0];

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={prefersReducedMotion ? {opacity: 1, y: 0} : {opacity: 0, y: 10, scale: 0.97}}
            animate={{opacity: 1, y: 0, scale: 1}}
            exit={prefersReducedMotion ? {opacity: 0} : {opacity: 0, y: 8, scale: 0.97}}
            transition={{duration: 0.18, ease: MODERN_EASE}}
            role="dialog"
            aria-label="Choose website color theme"
            className="w-72 sm:w-80 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4 shadow-2xl"
          >
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-[var(--border-subtle)]">
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
                  Theme Selector
                </p>
                <p className="text-sm font-bold text-[var(--text-primary)]">
                  Choose Your Style
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close theme selector"
                className="w-8 h-8 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-3 space-y-2">
              {THEME_OPTIONS.map((theme) => {
                const isSelected = theme.id === activeTheme;
                return (
                  <button
                    key={theme.id}
                    type="button"
                    onClick={() => onSelectTheme(theme.id)}
                    className={`w-full text-left p-2.5 rounded-xl border transition-all duration-150 flex items-center justify-between gap-3 cursor-pointer ${
                      isSelected
                        ? 'border-[var(--accent)] bg-[var(--accent-soft)]'
                        : 'border-[var(--border-subtle)] bg-[var(--bg-primary)] hover:border-[var(--accent-border)]'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        aria-hidden="true"
                        className="flex items-center -space-x-1.5 shrink-0"
                      >
                        <span
                          className="w-5 h-5 rounded-full border border-black/20"
                          style={{backgroundColor: theme.swatches[0]}}
                        />
                        <span
                          className="w-5 h-5 rounded-full border border-black/20"
                          style={{backgroundColor: theme.swatches[2]}}
                        />
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[var(--text-primary)] truncate">
                            {theme.name}
                          </span>
                          <span className="text-[10px] font-mono text-[var(--text-muted)]">
                            · {theme.mode}
                          </span>
                        </div>
                        <p className="text-[11px] text-[var(--text-secondary)] truncate">
                          {theme.description}
                        </p>
                      </div>
                    </div>

                    {isSelected && (
                      <Check
                        className="w-4 h-4 text-[var(--accent)] shrink-0"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[var(--accent)] shadow-xl text-xs font-semibold transition-all duration-150 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
      >
        <Palette className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
        <span>Theme: {current.name}</span>
      </button>
    </div>
  );
}
