import {useEffect} from 'react';
import {ArrowRight, Check, X, MessageCircle} from 'lucide-react';
import {AnimatePresence, motion, useReducedMotion} from 'motion/react';
import {COMPANY_INFO, ProjectItem, ServiceItem} from '../data/companyConfig';
import {MODERN_EASE} from './MotionPrimitives';
import {ResilientImage} from './ResilientImage';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: (serviceTitle: string) => void;
}

export function ServiceDetailModal({service, onClose, onRequestQuote}: ServiceModalProps) {
  const prefersReducedMotion = useReducedMotion();

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
          exit={prefersReducedMotion ? {opacity: 0} : {opacity: 0}}
          transition={{duration: 0.18}}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1220]/75 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          onClick={onClose}
        >
          <motion.div
            initial={
              prefersReducedMotion ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.97, y: 10}
            }
            animate={{opacity: 1, scale: 1, y: 0}}
            exit={
              prefersReducedMotion ? {opacity: 0, scale: 1} : {opacity: 0, scale: 0.97, y: 8}
            }
            transition={{duration: 0.22, ease: MODERN_EASE}}
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-slate-200 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 bg-[#0B1220] text-white px-6 py-5 flex items-start justify-between gap-4 border-b border-white/10">
              <div>
                <p className="text-xs font-mono text-[#06B6D4]">Service {service.number}</p>
                <h3
                  id="service-modal-title"
                  className="mt-1 text-xl sm:text-2xl font-bold text-white"
                >
                  {service.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close service details"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer shrink-0 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {service.callout && (
                <p className="text-base font-bold text-[#2563EB]">{service.callout}</p>
              )}
              <p className="text-base text-[#0F172A] leading-relaxed">{service.description}</p>

              <div>
                <h4 className="text-sm font-bold text-[#0F172A]">Included Capabilities</h4>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2 text-sm text-[#0F172A]">
                      <Check
                        className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 border-t border-slate-200">
                <h4 className="text-sm font-bold text-[#0F172A]">Typical Deliverables</h4>
                <ul className="mt-3 space-y-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="text-sm text-[#64748B] flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold" aria-hidden="true">
                        ·
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const title = service.title;
                    onClose();
                    onRequestQuote(title);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold transition-colors cursor-pointer"
                >
                  <span>Request a Quote for This Service</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <a
                  href={`${COMPANY_INFO.whatsappLink}?text=${encodeURIComponent(
                    `Hello, I would like to enquire about ${service.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-slate-200 text-sm font-semibold text-[#0F172A] hover:bg-slate-50 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#2563EB]" aria-hidden="true" />
                  <span>Discuss on WhatsApp</span>
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
  project: ProjectItem | null;
  onClose: () => void;
  onRequestSimilar: (categoryTitle: string) => void;
}

export function ProjectDetailModal({
  project,
  onClose,
  onRequestSimilar,
}: ProjectModalProps) {
  const prefersReducedMotion = useReducedMotion();

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
          exit={prefersReducedMotion ? {opacity: 0} : {opacity: 0}}
          transition={{duration: 0.18}}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1220]/75 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={onClose}
        >
          <motion.div
            initial={
              prefersReducedMotion ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.97, y: 10}
            }
            animate={{opacity: 1, scale: 1, y: 0}}
            exit={
              prefersReducedMotion ? {opacity: 0, scale: 1} : {opacity: 0, scale: 0.97, y: 8}
            }
            transition={{duration: 0.22, ease: MODERN_EASE}}
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-slate-200 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] w-full bg-[#0B1220] overflow-hidden">
              <ResilientImage
                src={project.image}
                alt={project.imageAlt}
                fallbackTitle={project.title}
                className="w-full h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/90 via-[#0B1220]/30 to-transparent"
              />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-[#0B1220]/80 hover:bg-[#0B1220] text-white flex items-center justify-center cursor-pointer border border-white/15 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <p className="text-xs font-medium text-[#06B6D4]">{project.demoScopeLabel}</p>
                <h3 id="project-modal-title" className="mt-1 text-xl sm:text-2xl font-bold">
                  {project.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-2 text-xs font-medium text-[#64748B]">
                <span className="text-[#2563EB] font-semibold">{project.category}</span>
                <span aria-hidden="true">·</span>
                <span>Demonstration Blueprint (Not a completed client engagement)</span>
              </div>

              <p className="text-base text-[#0F172A] leading-relaxed">{project.fullOverview}</p>

              <div>
                <h4 className="text-sm font-bold text-[#0F172A]">Architecture Highlights</h4>
                <ul className="mt-3 space-y-2.5">
                  {project.architectureHighlights.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-[#0F172A]">
                      <Check
                        className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <h4 className="text-xs font-semibold text-[#64748B]">Technologies Demonstrated</h4>
                <p className="mt-1.5 text-sm font-mono text-[#0F172A]">
                  {project.technologies.join(' · ')}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onRequestSimilar('Multiple / Integrated Solution');
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold transition-colors cursor-pointer"
                >
                  <span>Request a Similar Solution</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-3 rounded-lg border border-slate-200 text-sm font-semibold text-[#64748B] hover:text-[#0F172A] cursor-pointer"
                >
                  Close
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
  docType: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export function LegalModal({docType, onClose}: LegalModalProps) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!docType) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [docType, onClose]);

  const isPrivacy = docType === 'privacy';

  return (
    <AnimatePresence>
      {docType && (
        <motion.div
          initial={prefersReducedMotion ? {opacity: 1} : {opacity: 0}}
          animate={{opacity: 1}}
          exit={prefersReducedMotion ? {opacity: 0} : {opacity: 0}}
          transition={{duration: 0.18}}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1220]/75 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          onClick={onClose}
        >
          <motion.div
            initial={
              prefersReducedMotion ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.97, y: 10}
            }
            animate={{opacity: 1, scale: 1, y: 0}}
            exit={
              prefersReducedMotion ? {opacity: 0, scale: 1} : {opacity: 0, scale: 0.97, y: 8}
            }
            transition={{duration: 0.22, ease: MODERN_EASE}}
            className="w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <h3 id="legal-modal-title" className="text-xl font-bold text-[#0F172A]">
                {isPrivacy ? 'Privacy Policy' : 'Terms and Conditions'}
              </h3>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close legal notice"
                className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#0F172A] flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-5 space-y-4 text-sm text-[#64748B] leading-relaxed">
              {isPrivacy ? (
                <>
                  <p>
                    {COMPANY_INFO.name} respects your privacy. This static business website does
                    not store enquiry form submissions in a background database or sell visitor
                    information to third parties.
                  </p>
                  <p>
                    Information you enter into the enquiry form is validated locally in your browser
                    so you can choose to transmit your project brief directly via WhatsApp or your
                    own email application.
                  </p>
                  <p>
                    For privacy questions or data removal requests related to prior correspondence,
                    contact us at {COMPANY_INFO.emailPlaceholder} or{' '}
                    {COMPANY_INFO.whatsappInternational}.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Content on this website is provided by {COMPANY_INFO.name} for general
                    informational purposes regarding our IT, software, cloud, networking, and
                    physical security services.
                  </p>
                  <p>
                    Sample architectures displayed in the Projects section are demonstration
                    blueprints for scoping discussions. Final project deliverables, timelines,
                    warranties, and service-level terms are defined in written client proposals and
                    agreements.
                  </p>
                  <p>
                    Third-party technology names and trademarks referenced in the Technology
                    Expertise section remain the property of their respective owners.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-lg bg-[#0B1220] hover:bg-[#142D4E] text-white text-sm font-semibold cursor-pointer transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
