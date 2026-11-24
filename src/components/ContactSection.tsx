import {FormEvent, useEffect, useMemo, useState} from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  Phone,
  Send,
} from 'lucide-react';
import {COMPANY_INFO, I18N, LanguageCode} from '../data/companyConfig';
import {Reveal} from './MotionPrimitives';

interface ContactSectionProps {
  lang: LanguageCode;
  preselectedService: string;
}

interface FormValues {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  service: string;
  description: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
  description?: string;
}

function getOptionsForLocale(code: LanguageCode): string[] {
  const loc = I18N[code];
  return [
    ...loc.services.map((s) => s.title),
    loc.contact.extraServiceOptions.integrated,
    loc.contact.extraServiceOptions.general,
  ];
}

function mapServiceAcrossLanguages(current: string, targetLang: LanguageCode): string {
  const targetOptions = getOptionsForLocale(targetLang);
  if (targetOptions.includes(current)) {
    return current;
  }
  for (const code of Object.keys(I18N) as LanguageCode[]) {
    const idx = getOptionsForLocale(code).indexOf(current);
    if (idx !== -1 && targetOptions[idx]) {
      return targetOptions[idx];
    }
  }
  return targetOptions[0];
}

export function ContactSection({lang, preselectedService}: ContactSectionProps) {
  const locale = I18N[lang];
  const copy = locale.contact;

  const serviceOptions = useMemo(() => getOptionsForLocale(lang), [lang]);

  const [values, setValues] = useState<FormValues>({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    service: mapServiceAcrossLanguages(preselectedService || serviceOptions[0], lang),
    description: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedSummary, setSubmittedSummary] = useState<FormValues | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setValues((prev) => ({
        ...prev,
        service: mapServiceAcrossLanguages(preselectedService, lang),
      }));
      setSubmittedSummary(null);
    }
  }, [preselectedService, lang]);

  useEffect(() => {
    setValues((prev) => {
      const mapped = mapServiceAcrossLanguages(prev.service, lang);
      return mapped === prev.service ? prev : {...prev, service: mapped};
    });
    setSubmittedSummary((prev) => {
      if (!prev) return null;
      const mapped = mapServiceAcrossLanguages(prev.service, lang);
      return mapped === prev.service ? prev : {...prev, service: mapped};
    });
  }, [lang]);

  const validate = (form: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      nextErrors.fullName = copy.errors.fullName;
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = copy.errors.email;
    }
    const cleanedPhone = form.phone.replace(/[\s\-()]/g, '');
    if (!cleanedPhone || !/^\+?\d{7,15}$/.test(cleanedPhone)) {
      nextErrors.phone = copy.errors.phone;
    }
    if (!form.service) {
      nextErrors.service = copy.errors.service;
    }
    if (!form.description.trim() || form.description.trim().length < 10) {
      nextErrors.description = copy.errors.description;
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmittedSummary({...values});
    }
  };

  const buildWhatsAppMessageUrl = (data: FormValues) => {
    const lines =
      lang === 'fr'
        ? [
            `Bonjour ${COMPANY_INFO.name},`,
            `Je souhaite demander une consultation.`,
            ``,
            `Nom : ${data.fullName}`,
            data.businessName ? `Entreprise : ${data.businessName}` : null,
            `E-mail : ${data.email}`,
            `Téléphone : ${data.phone}`,
            `Service : ${data.service}`,
            `Résumé du projet : ${data.description}`,
          ]
        : [
            `Hello ${COMPANY_INFO.name},`,
            `I would like to request a consultation.`,
            ``,
            `Name: ${data.fullName}`,
            data.businessName ? `Business: ${data.businessName}` : null,
            `Email: ${data.email}`,
            `Phone: ${data.phone}`,
            `Service: ${data.service}`,
            `Project Brief: ${data.description}`,
          ];

    return `${COMPANY_INFO.whatsappLink}?text=${encodeURIComponent(lines.filter(Boolean).join('\n'))}`;
  };

  const buildMailtoUrl = (data: FormValues) => {
    const subject =
      lang === 'fr'
        ? `Demande de projet : ${data.service} — ${data.fullName}`
        : `Project Enquiry: ${data.service} — ${data.fullName}`;
    const body = (
      lang === 'fr'
        ? [
            `Nom complet : ${data.fullName}`,
            `Entreprise : ${data.businessName || 'Non précisée'}`,
            `E-mail : ${data.email}`,
            `Téléphone : ${data.phone}`,
            `Service souhaité : ${data.service}`,
            ``,
            `Description du projet :`,
            data.description,
          ]
        : [
            `Full Name: ${data.fullName}`,
            `Business Name: ${data.businessName || 'Not specified'}`,
            `Email: ${data.email}`,
            `Phone: ${data.phone}`,
            `Service Required: ${data.service}`,
            ``,
            `Project Description:`,
            data.description,
          ]
    ).join('\n');

    return `mailto:${COMPANY_INFO.emailPlaceholder}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleReset = () => {
    setSubmittedSummary(null);
    setErrors({});
    setValues({
      fullName: '',
      businessName: '',
      email: '',
      phone: '',
      service: mapServiceAcrossLanguages(preselectedService || serviceOptions[0], lang),
      description: '',
    });
  };

  const directWhatsAppText =
    lang === 'fr'
      ? 'Bonjour, je souhaite me renseigner sur les services de SkyMax Technology.'
      : 'Hello, I would like to enquire about SkyMax Technology services.';

  return (
    <section
      id="contact"
      className="py-14 sm:py-20 lg:py-24 bg-[var(--bg-secondary)] text-[var(--text-primary)] relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-10 w-96 h-96 rounded-full blur-[120px]"
        style={{backgroundColor: 'var(--accent-glow)'}}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">
          {/* Left Sticky Contact Info Column */}
          <Reveal
            direction="left"
            className="lg:col-span-5 text-left space-y-6 sm:space-y-8 lg:sticky lg:top-24"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
                <p className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.18em] uppercase text-[var(--accent)]">
                  {copy.eyebrow}
                </p>
              </div>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight"
                style={{textWrap: 'balance'}}
              >
                <span className="text-blend-title">{copy.heading}</span>
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {copy.subtitle}
              </p>
            </div>

            <div className="space-y-3.5">
              <a
                href={`${COMPANY_INFO.whatsappLink}?text=${encodeURIComponent(directWhatsAppText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-border)] hover:-translate-y-0.5 transition-all duration-200 group"
                style={{boxShadow: 'var(--shadow-card)'}}
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2" aria-hidden="true">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
                    </span>
                    <p className="text-xs font-mono text-[var(--accent)] font-semibold">
                      {copy.whatsappCardTitle}
                    </p>
                  </div>
                  <p className="mt-0.5 text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors tabular-nums">
                    {COMPANY_INFO.whatsappInternational} ({COMPANY_INFO.whatsappDisplay})
                  </p>
                </div>
              </a>

              <a
                href="tel:+233545452076"
                className="flex items-start gap-4 p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-border)] hover:-translate-y-0.5 transition-all duration-200 group"
                style={{boxShadow: 'var(--shadow-card)'}}
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[var(--text-muted)]">{copy.phoneLabel}</p>
                  <p className="mt-0.5 text-sm font-semibold text-[var(--text-primary)] tabular-nums">
                    {COMPANY_INFO.whatsappInternational}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.emailPlaceholder}`}
                className="flex items-start gap-4 p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-border)] transition-colors"
                style={{boxShadow: 'var(--shadow-card)'}}
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono text-[var(--text-muted)]">{copy.emailLabel}</p>
                  <p className="mt-0.5 text-sm font-semibold text-[var(--text-primary)] break-all">
                    {COMPANY_INFO.emailPlaceholder}
                  </p>
                </div>
              </a>

              <div
                className="flex items-start gap-4 p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]"
                style={{boxShadow: 'var(--shadow-card)'}}
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[var(--text-muted)]">{copy.coverageLabel}</p>
                  <p className="mt-0.5 text-sm font-semibold text-[var(--text-primary)]">
                    {copy.location}
                  </p>
                  <p className="mt-0.5 text-xs text-[var(--text-secondary)]">
                    {copy.locationDetail}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 px-1 pt-1 text-xs text-[var(--text-muted)] font-mono">
                <Clock className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
                <span>{copy.businessHours}</span>
              </div>
            </div>
          </Reveal>

          {/* Right Form Column */}
          <Reveal direction="right" delay={0.08} className="lg:col-span-7">
            <div
              className="relative overflow-hidden rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-5 sm:p-8 lg:p-10"
              style={{boxShadow: 'var(--shadow-card)'}}
            >
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{
                  background: 'var(--blend-gradient)',
                }}
              />
              {submittedSummary ? (
                <div className="py-2 text-left" role="status" aria-live="polite">
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-soft)] border border-[var(--accent-border)] text-[var(--accent)] flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 text-2xl font-bold">
                    <span className="text-blend-title">{copy.readyTitle}</span>
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                    {copy.readySubtitlePrefix}{' '}
                    <strong className="text-[var(--text-primary)]">
                      {submittedSummary.fullName}
                    </strong>
                    {copy.readySubtitleSuffix}
                  </p>

                  <div className="mt-6 rounded-xl bg-[var(--bg-input)] border border-[var(--border-subtle)] p-5 space-y-2 text-sm">
                    <p>
                      <span className="font-semibold text-[var(--text-primary)]">
                        {copy.summaryServiceLabel}
                      </span>{' '}
                      <span className="text-[var(--text-secondary)]">
                        {submittedSummary.service}
                      </span>
                    </p>
                    {submittedSummary.businessName && (
                      <p>
                        <span className="font-semibold text-[var(--text-primary)]">
                          {copy.businessNameLabel}:
                        </span>{' '}
                        <span className="text-[var(--text-secondary)]">
                          {submittedSummary.businessName}
                        </span>
                      </p>
                    )}
                    <p>
                      <span className="font-semibold text-[var(--text-primary)]">
                        {locale.nav.contact}:
                      </span>{' '}
                      <span className="text-[var(--text-secondary)]">
                        {submittedSummary.email} · {submittedSummary.phone}
                      </span>
                    </p>
                    <p className="pt-2 border-t border-[var(--border-subtle)] text-[var(--text-primary)]">
                      {submittedSummary.description}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href={buildWhatsAppMessageUrl(submittedSummary)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--accent-contrast)] font-bold text-xs uppercase tracking-wider transition-colors whitespace-nowrap shrink-0"
                    >
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      <span>{copy.sendWhatsAppBtn}</span>
                    </a>

                    <a
                      href={buildMailtoUrl(submittedSummary)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[var(--bg-primary)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-semibold text-xs uppercase tracking-wider transition-colors whitespace-nowrap shrink-0"
                    >
                      <Mail className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
                      <span>{copy.sendEmailBtn}</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmittedSummary(null)}
                      className="px-4 py-3 rounded-xl border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                    >
                      {copy.editDetailsBtn}
                    </button>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-4 py-3 rounded-xl border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                    >
                      {copy.startAnotherBtn}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5 text-left">
                  <div className="pb-2 border-b border-[var(--border-subtle)]">
                    <h3 className="text-lg sm:text-xl font-bold">
                      <span className="text-blend-title">{copy.formTitle}</span>
                    </h3>
                    <p className="mt-1 text-[13px] sm:text-sm text-[var(--text-muted)]">
                      {copy.formSubtitlePrefix} <span className="text-[var(--accent)]">*</span>{' '}
                      {copy.formSubtitleSuffix}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-fullName"
                        className="block text-xs sm:text-[13px] font-semibold text-[var(--text-primary)] mb-1.5"
                      >
                        {copy.fullNameLabel} <span className="text-[var(--accent)]">*</span>
                      </label>
                      <input
                        id="contact-fullName"
                        name="fullName"
                        type="text"
                        required
                        value={values.fullName}
                        onChange={(e) => {
                          setValues({...values, fullName: e.target.value});
                          if (errors.fullName) setErrors({...errors, fullName: undefined});
                        }}
                        placeholder={copy.fullNamePlaceholder}
                        aria-invalid={Boolean(errors.fullName)}
                        className={`w-full rounded-xl border px-4 py-3 text-base sm:text-sm text-[var(--text-primary)] bg-[var(--bg-input)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors ${
                          errors.fullName ? 'border-rose-500' : 'border-[var(--border-subtle)]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-500">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-businessName"
                        className="block text-xs sm:text-[13px] font-semibold text-[var(--text-primary)] mb-1.5"
                      >
                        {copy.businessNameLabel}{' '}
                        <span className="text-[var(--text-muted)] font-normal">
                          {copy.optionalTag}
                        </span>
                      </label>
                      <input
                        id="contact-businessName"
                        name="businessName"
                        type="text"
                        value={values.businessName}
                        onChange={(e) => setValues({...values, businessName: e.target.value})}
                        placeholder={copy.businessNamePlaceholder}
                        className="w-full rounded-xl border border-[var(--border-subtle)] px-4 py-3 text-base sm:text-sm text-[var(--text-primary)] bg-[var(--bg-input)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs sm:text-[13px] font-semibold text-[var(--text-primary)] mb-1.5"
                      >
                        {copy.emailFieldLabel} <span className="text-[var(--accent)]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={values.email}
                        onChange={(e) => {
                          setValues({...values, email: e.target.value});
                          if (errors.email) setErrors({...errors, email: undefined});
                        }}
                        placeholder={copy.emailPlaceholder}
                        aria-invalid={Boolean(errors.email)}
                        className={`w-full rounded-xl border px-4 py-3 text-base sm:text-sm text-[var(--text-primary)] bg-[var(--bg-input)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors ${
                          errors.email ? 'border-rose-500' : 'border-[var(--border-subtle)]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-500">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs sm:text-[13px] font-semibold text-[var(--text-primary)] mb-1.5"
                      >
                        {copy.phoneFieldLabel} <span className="text-[var(--accent)]">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        value={values.phone}
                        onChange={(e) => {
                          setValues({...values, phone: e.target.value});
                          if (errors.phone) setErrors({...errors, phone: undefined});
                        }}
                        placeholder={COMPANY_INFO.whatsappDisplay}
                        aria-invalid={Boolean(errors.phone)}
                        className={`w-full rounded-xl border px-4 py-3 text-base sm:text-sm text-[var(--text-primary)] bg-[var(--bg-input)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors ${
                          errors.phone ? 'border-rose-500' : 'border-[var(--border-subtle)]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-500">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-xs sm:text-[13px] font-semibold text-[var(--text-primary)] mb-1.5"
                    >
                      {copy.serviceFieldLabel} <span className="text-[var(--accent)]">*</span>
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={values.service}
                      onChange={(e) => {
                        setValues({...values, service: e.target.value});
                        if (errors.service) setErrors({...errors, service: undefined});
                      }}
                      className="w-full rounded-xl border border-[var(--border-subtle)] px-4 py-3 text-base sm:text-sm text-[var(--text-primary)] bg-[var(--bg-input)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                    >
                      {serviceOptions.map((option) => (
                        <option
                          key={option}
                          value={option}
                          className="bg-[var(--bg-surface)] text-[var(--text-primary)]"
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-description"
                      className="block text-xs sm:text-[13px] font-semibold text-[var(--text-primary)] mb-1.5"
                    >
                      {copy.summaryLabel} <span className="text-[var(--accent)]">*</span>
                    </label>
                    <textarea
                      id="contact-description"
                      name="description"
                      rows={4}
                      required
                      value={values.description}
                      onChange={(e) => {
                        setValues({...values, description: e.target.value});
                        if (errors.description) setErrors({...errors, description: undefined});
                      }}
                      placeholder={copy.summaryPlaceholder}
                      aria-invalid={Boolean(errors.description)}
                      className={`w-full rounded-xl border px-4 py-3 text-base sm:text-sm text-[var(--text-primary)] bg-[var(--bg-input)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors ${
                        errors.description ? 'border-rose-500' : 'border-[var(--border-subtle)]'
                      }`}
                    />
                    {errors.description && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-500">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.description}</span>
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--accent-contrast)] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap shrink-0 shadow-md"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>{copy.submitBtn}</span>
                    </button>

                    <p className="text-xs text-[var(--text-muted)]">{copy.submitHint}</p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
