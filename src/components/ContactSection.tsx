import {FormEvent, useEffect, useState} from 'react';
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
import {COMPANY_INFO, SERVICES} from '../data/companyConfig';
import {Reveal} from './MotionPrimitives';

interface ContactSectionProps {
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

const SERVICE_OPTIONS = [
  ...SERVICES.map((s) => s.title),
  'Multiple / Integrated Solution',
  'General IT Consultation',
];

export function ContactSection({preselectedService}: ContactSectionProps) {
  const [values, setValues] = useState<FormValues>({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    service: preselectedService || SERVICE_OPTIONS[0],
    description: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedSummary, setSubmittedSummary] = useState<FormValues | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setValues((prev) => ({...prev, service: preselectedService}));
      setSubmittedSummary(null);
    }
  }, [preselectedService]);

  const validate = (form: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    const cleanedPhone = form.phone.replace(/[\s\-()]/g, '');
    if (!cleanedPhone || !/^\+?\d{7,15}$/.test(cleanedPhone)) {
      nextErrors.phone = 'Please enter a valid phone or WhatsApp number.';
    }
    if (!form.service) {
      nextErrors.service = 'Please select the service you require.';
    }
    if (!form.description.trim() || form.description.trim().length < 10) {
      nextErrors.description =
        'Please share a brief overview of your requirements (10+ characters).';
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
    const lines = [
      `Hello ${COMPANY_INFO.name},`,
      `I would like to request a consultation.`,
      ``,
      `Name: ${data.fullName}`,
      data.businessName ? `Business: ${data.businessName}` : null,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Service: ${data.service}`,
      `Project Brief: ${data.description}`,
    ]
      .filter(Boolean)
      .join('\n');

    return `${COMPANY_INFO.whatsappLink}?text=${encodeURIComponent(lines)}`;
  };

  const buildMailtoUrl = (data: FormValues) => {
    const subject = `Project Enquiry: ${data.service} — ${data.fullName}`;
    const body = [
      `Full Name: ${data.fullName}`,
      `Business Name: ${data.businessName || 'Not specified'}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Service Required: ${data.service}`,
      ``,
      `Project Description:`,
      data.description,
    ].join('\n');

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
      service: preselectedService || SERVICE_OPTIONS[0],
      description: '',
    });
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-24 bg-[var(--bg-secondary)] text-[var(--text-primary)] relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-10 w-96 h-96 rounded-full blur-[120px]"
        style={{backgroundColor: 'var(--accent-glow)'}}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Sticky Contact Info Column */}
          <Reveal direction="left" className="lg:col-span-5 text-left space-y-8 lg:sticky lg:top-24">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
                <p className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[var(--accent)]">
                  Get In Touch
                </p>
              </div>
              <h2
                className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]"
                style={{textWrap: 'balance'}}
              >
                Talk To Us About Your Project
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Reach out for full-stack SaaS web applications, IT health checks, office network
                setups, or CCTV security quotes.
              </p>
            </div>

            <div className="space-y-3.5">
              <a
                href={`${COMPANY_INFO.whatsappLink}?text=${encodeURIComponent(
                  'Hello, I would like to enquire about SkyMax Technology services.'
                )}`}
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
                      WhatsApp Direct Chat
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
                  <p className="text-xs font-mono text-[var(--text-muted)]">Phone Line</p>
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
                  <p className="text-xs font-mono text-[var(--text-muted)]">Email Address</p>
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
                  <p className="text-xs font-mono text-[var(--text-muted)]">Operations Coverage</p>
                  <p className="mt-0.5 text-sm font-semibold text-[var(--text-primary)]">
                    {COMPANY_INFO.location}
                  </p>
                  <p className="mt-0.5 text-xs text-[var(--text-secondary)]">
                    {COMPANY_INFO.locationDetail}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 px-1 pt-1 text-xs text-[var(--text-muted)] font-mono">
                <Clock className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
                <span>{COMPANY_INFO.businessHours}</span>
              </div>
            </div>
          </Reveal>

          {/* Right Form Column */}
          <Reveal direction="right" delay={0.08} className="lg:col-span-7">
            <div
              className="relative overflow-hidden rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 sm:p-8 lg:p-10"
              style={{boxShadow: 'var(--shadow-card)'}}
            >
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{
                  background: 'linear-gradient(90deg, var(--accent), var(--accent-deep))',
                }}
              />
              {submittedSummary ? (
                <div className="py-2 text-left" role="status" aria-live="polite">
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-soft)] border border-[var(--accent-border)] text-[var(--accent)] flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-[var(--text-primary)]">
                    Your Message Is Ready
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                    Thank you,{' '}
                    <strong className="text-[var(--text-primary)]">
                      {submittedSummary.fullName}
                    </strong>
                    . Choose how you would like to send your project details directly to our team:
                  </p>

                  <div className="mt-6 rounded-xl bg-[var(--bg-input)] border border-[var(--border-subtle)] p-5 space-y-2 text-sm">
                    <p>
                      <span className="font-semibold text-[var(--text-primary)]">Service:</span>{' '}
                      <span className="text-[var(--text-secondary)]">
                        {submittedSummary.service}
                      </span>
                    </p>
                    {submittedSummary.businessName && (
                      <p>
                        <span className="font-semibold text-[var(--text-primary)]">Business:</span>{' '}
                        <span className="text-[var(--text-secondary)]">
                          {submittedSummary.businessName}
                        </span>
                      </p>
                    )}
                    <p>
                      <span className="font-semibold text-[var(--text-primary)]">Contact:</span>{' '}
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
                      <span>Send via WhatsApp</span>
                    </a>

                    <a
                      href={buildMailtoUrl(submittedSummary)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[var(--bg-primary)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-semibold text-xs uppercase tracking-wider transition-colors whitespace-nowrap shrink-0"
                    >
                      <Mail className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
                      <span>Open Email Client</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-4 py-3 rounded-xl border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                    >
                      New Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5 text-left">
                  <div className="pb-4 border-b border-[var(--border-subtle)]">
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">
                      Request a Consultation
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-[var(--text-muted)]">
                      Tell us what you want to build or improve. Fields marked with{' '}
                      <span className="text-[var(--accent)]">*</span> are required.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-fullName"
                        className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5"
                      >
                        Full Name <span className="text-[var(--accent)]">*</span>
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
                        placeholder="Kwame Mensah"
                        aria-invalid={Boolean(errors.fullName)}
                        className={`w-full rounded-xl border px-4 py-3 text-sm text-[var(--text-primary)] bg-[var(--bg-input)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors ${
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
                        className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5"
                      >
                        Business Name{' '}
                        <span className="text-[var(--text-muted)] font-normal">(Optional)</span>
                      </label>
                      <input
                        id="contact-businessName"
                        name="businessName"
                        type="text"
                        value={values.businessName}
                        onChange={(e) => setValues({...values, businessName: e.target.value})}
                        placeholder="Accra Logistics Ltd"
                        className="w-full rounded-xl border border-[var(--border-subtle)] px-4 py-3 text-sm text-[var(--text-primary)] bg-[var(--bg-input)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5"
                      >
                        Email Address <span className="text-[var(--accent)]">*</span>
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
                        placeholder="you@company.com"
                        aria-invalid={Boolean(errors.email)}
                        className={`w-full rounded-xl border px-4 py-3 text-sm text-[var(--text-primary)] bg-[var(--bg-input)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors ${
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
                        className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5"
                      >
                        Phone / WhatsApp <span className="text-[var(--accent)]">*</span>
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
                        placeholder="0545452076"
                        aria-invalid={Boolean(errors.phone)}
                        className={`w-full rounded-xl border px-4 py-3 text-sm text-[var(--text-primary)] bg-[var(--bg-input)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors ${
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
                      className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5"
                    >
                      Service Required <span className="text-[var(--accent)]">*</span>
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={values.service}
                      onChange={(e) => {
                        setValues({...values, service: e.target.value});
                        if (errors.service) setErrors({...errors, service: undefined});
                      }}
                      className="w-full rounded-xl border border-[var(--border-subtle)] px-4 py-3 text-sm text-[var(--text-primary)] bg-[var(--bg-input)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                    >
                      {SERVICE_OPTIONS.map((option) => (
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
                      className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5"
                    >
                      Project Summary <span className="text-[var(--accent)]">*</span>
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
                      placeholder="Briefly describe what you need, your team size, or your timeline..."
                      aria-invalid={Boolean(errors.description)}
                      className={`w-full rounded-xl border px-4 py-3 text-sm text-[var(--text-primary)] bg-[var(--bg-input)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors ${
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
                      <span>Review &amp; Send Message</span>
                    </button>

                    <p className="text-xs text-[var(--text-muted)]">
                      Send directly via WhatsApp or email after checking your details.
                    </p>
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
