import {useEffect} from 'react';
import {ArrowRight, Check, MessageCircle, X} from 'lucide-react';
import {AnimatePresence, motion, useReducedMotion} from 'motion/react';
import {COMPANY_INFO, I18N, LanguageCode, ProjectItem, ServiceItem} from '../data/companyConfig';
import {MODERN_EASE} from './MotionPrimitives';
import {ResilientImage} from './ResilientImage';

interface ServiceModalProps {
  lang: LanguageCode;
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: (serviceTitle: string) => void;
}

export function ServiceDetailModal({lang, service, onClose, onRequestQuote}: ServiceModalProps) {
  const prefersReducedMotion = useReducedMotion();
  const copy = I18N[lang].modals;

  useEffect(() => {
    if (!service) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [service, onClose]);

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          initial={prefersReducedMotion ? {opacity: 1} : {opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.18}}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          onClick={onClose}
        >
          <motion.div
            initial={
              prefersReducedMotion ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.96, y: 12}
            }
            animate={{opacity: 1, scale: 1, y: 0}}
            exit={
              prefersReducedMotion ? {opacity: 0, scale: 1} : {opacity: 0, scale: 0.96, y: 8}
            }
            transition={{duration: 0.22, ease: MODERN_EASE}}
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 bg-[var(--bg-primary)]/95 backdrop-blur-md px-6 py-5 flex items-start justify-between gap-4 border-b border-[var(--border-subtle)]">
              <div>
                <p className="text-xs font-mono text-[var(--accent)]">
                  {copy.servicePrefix} {service.number}
                </p>
                <h3
                  id="service-modal-title"
                  className="mt-1 text-xl sm:text-2xl font-bold text-[var(--text-primary)]"
                >
                  {service.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label={copy.closeServiceAria}
                className="w-9 h-9 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center justify-center cursor-pointer shrink-0 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 sm:p-8 space-y-5 sm:space-y-6 text-left">
              {service.callout && (
                <p className="text-sm font-bold text-[var(--accent)]">{service.callout}</p>
              )}
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {service.description}
              </p>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--accent)] font-bold">
                  {copy.whatIsIncluded}
                </h4>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-start gap-2 text-sm text-[var(--text-primary)]"
                    >
                      <Check
                        className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 border-t border-[var(--border-subtle)]">
                <h4 className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--accent)] font-bold">
                  {copy.whatYouReceive}
                </h4>
                <ul className="mt-3 space-y-2">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="text-xs sm:text-sm text-[var(--text-secondary)] flex items-start gap-2"
                    >
                      <span className="text-[var(--accent)] font-bold" aria-hidden="true">
                        ·
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const title = service.title;
                    onClose();
                    onRequestQuote(title);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--accent-contrast)] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>{copy.requestQuote}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <a
                  href={`${COMPANY_INFO.whatsappLink}?text=${encodeURIComponent(
                    `${copy.whatsappEnquiryPrefix} ${service.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--accent-border)] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
                  <span>{copy.discussWhatsApp}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface ProjectModalProps {
  lang: LanguageCode;
  project: ProjectItem | null;
  onClose: () => void;
  onRequestSimilar: (categoryTitle: string) => void;
}

export function ProjectDetailModal({
  lang,
  project,
  onClose,
  onRequestSimilar,
}: ProjectModalProps) {
  const prefersReducedMotion = useReducedMotion();
  const locale = I18N[lang];
  const copy = locale.modals;
  const localizedCategory = project ? locale.projectsSection.categoryLabels[project.category] : '';

  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={prefersReducedMotion ? {opacity: 1} : {opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.18}}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={onClose}
        >
          <motion.div
            initial={
              prefersReducedMotion ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.96, y: 12}
            }
            animate={{opacity: 1, scale: 1, y: 0}}
            exit={
              prefersReducedMotion ? {opacity: 0, scale: 1} : {opacity: 0, scale: 0.96, y: 8}
            }
            transition={{duration: 0.22, ease: MODERN_EASE}}
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] w-full bg-[#070B14] overflow-hidden">
              <ResilientImage
                src={project.image}
                alt={project.imageAlt}
                fallbackTitle={project.title}
                className="w-full h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
              />
              <button
                type="button"
                onClick={onClose}
                aria-label={copy.closeProjectAria}
                className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-black/70 hover:bg-black text-white flex items-center justify-center cursor-pointer border border-white/20 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-left">
                <p
                  className="text-xs font-mono font-semibold"
                  style={{color: 'var(--accent-on-photo)'}}
                >
                  {project.demoScopeLabel}
                </p>
                <h3 id="project-modal-title" className="mt-1 text-xl sm:text-2xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </div>

            <div className="p-5 sm:p-8 space-y-5 sm:space-y-6 text-left">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
                <span className="text-[var(--accent)] font-semibold">{localizedCategory}</span>
                <span aria-hidden="true">·</span>
                <span>{copy.sampleSetupTag}</span>
              </div>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {project.fullOverview}
              </p>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--accent)] font-bold">
                  {copy.keyFeatures}
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {project.architectureHighlights.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-[var(--text-primary)]"
                    >
                      <Check
                        className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)]">
                <h4 className="text-xs font-mono text-[var(--text-muted)]">{copy.toolsUsed}</h4>
                <p className="mt-1.5 text-xs sm:text-sm font-mono text-[var(--text-primary)]">
                  {project.technologies.join(' · ')}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onRequestSimilar(locale.contact.extraServiceOptions.integrated);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--accent-contrast)] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>{copy.requestSimilar}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-3 rounded-xl border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
                >
                  {copy.closeBtn}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface LegalModalProps {
  lang: LanguageCode;
  docType: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export function LegalModal({lang, docType, onClose}: LegalModalProps) {
  const prefersReducedMotion = useReducedMotion();
  const copy = I18N[lang].modals;

  useEffect(() => {
    if (!docType) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [docType, onClose]);

  const isPrivacy = docType === 'privacy';
  const paragraphs = isPrivacy ? copy.privacyParagraphs : copy.termsParagraphs;

  return (
    <AnimatePresence>
      {docType && (
        <motion.div
          initial={prefersReducedMotion ? {opacity: 1} : {opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.18}}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          onClick={onClose}
        >
          <motion.div
            initial={
              prefersReducedMotion ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.96, y: 12}
            }
            animate={{opacity: 1, scale: 1, y: 0}}
            exit={
              prefersReducedMotion ? {opacity: 0, scale: 1} : {opacity: 0, scale: 0.96, y: 8}
            }
            transition={{duration: 0.22, ease: MODERN_EASE}}
            className="w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] shadow-2xl p-6 sm:p-8 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
              <h3 id="legal-modal-title" className="text-xl font-bold text-[var(--text-primary)]">
                {isPrivacy ? copy.privacyTitle : copy.termsTitle}
              </h3>
              <button
                type="button"
                onClick={onClose}
                aria-label={copy.closeLegalAria}
                className="w-9 h-9 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] hover:border-[var(--accent-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-5 space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
              {paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--accent-contrast)] text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors"
              >
                {copy.closeBtn}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
