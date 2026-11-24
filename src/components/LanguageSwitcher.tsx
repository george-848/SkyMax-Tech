import {Globe} from 'lucide-react';
import {I18N, LANGUAGE_OPTIONS, LanguageCode} from '../data/companyConfig';

interface LanguageSwitcherProps {
  activeLanguage: LanguageCode;
  onSelectLanguage: (language: LanguageCode) => void;
}

export function LanguageSwitcher({activeLanguage, onSelectLanguage}: LanguageSwitcherProps) {
  const t = I18N[activeLanguage].controls;

  return (
    <div
      role="group"
      aria-label={t.switchLanguageAria}
      className="inline-flex items-center gap-0.5 p-0.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)]/85 backdrop-blur-md shadow-sm shrink-0"
    >
      <span
        className="pl-2 pr-1 text-[var(--accent)] flex items-center justify-center"
        aria-hidden="true"
      >
        <Globe className="w-3.5 h-3.5" />
      </span>
      {LANGUAGE_OPTIONS.map((option) => {
        const isSelected = option.code === activeLanguage;
        return (
          <button
            key={option.code}
            type="button"
            onClick={() => onSelectLanguage(option.code)}
            aria-pressed={isSelected}
            title={`${option.label} (${option.regionNote})`}
            className={`px-2 py-1 rounded-full text-[11px] font-bold tracking-wide transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
              isSelected
                ? 'bg-[var(--accent)] text-[var(--accent-contrast)] shadow-sm'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]'
            }`}
          >
            {option.shortLabel}
          </button>
        );
      })}
    </div>
  );
}
