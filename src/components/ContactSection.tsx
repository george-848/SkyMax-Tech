import {FormEvent, useEffect, useState} from 'react';
import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  AlertCircle,
} from 'lucide-react';
import {COMPANY_INFO, SERVICES} from '../data/companyConfig';
import {PageHeader} from './PageHeader';

interface ContactSectionProps {
  preselectedService: string;
}

interface FormValues {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
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

const BUDGET_OPTIONS = [
  'Prefer to discuss during consultation',
  'Under GHS 10,000',
  'GHS 10,000 – GHS 30,000',
  'GHS 30,000 – GHS 75,000',
  'GHS 75,000+',
];

export function ContactSection({preselectedService}: ContactSectionProps) {
  const [values, setValues] = useState<FormValues>({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    service: preselectedService || SERVICE_OPTIONS[0],
    budget: BUDGET_OPTIONS[0],
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
    if (!form.description.trim() || form.description.trim().length < 15) {
      nextErrors.description =
        'Please share a brief overview of your requirements (15+ characters).';
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
      `I would like to request a quote / consultation.`,
      ``,
      `Name: ${data.fullName}`,
      data.businessName ? `Business: ${data.businessName}` : null,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Service: ${data.service}`,
      data.budget ? `Budget: ${data.budget}` : null,
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
      `Estimated Budget: ${data.budget || 'Not specified'}`,
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
      budget: BUDGET_OPTIONS[0],
      description: '',
    });
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact & Request a Quote"
        title="Discuss Your Technology Project With Us"
        subtitle="Prepare your project brief below or reach our engineering team directly on WhatsApp or email."
      />

      <section className="py-16 lg:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Direct Contact Information */}
            <aside className="lg:col-span-5">
              <div className="rounded-2xl bg-[#0B1220] text-white p-7 sm:p-8 border border-[#142D4E]">
                <h2 className="text-xl font-bold text-white">Direct Contact Channels</h2>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Available for consultations, site surveys, infrastructure audits, and software
                  project scoping.
                </p>

                <div className="mt-6 space-y-4">
                  <a
                    href={`${COMPANY_INFO.whatsappLink}?text=${encodeURIComponent(
                      'Hello, I would like to enquire about your IT and technology services.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#142D4E]/75 border border-white/10 hover:border-[#06B6D4]/60 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#2563EB] text-white flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#06B6D4]">WhatsApp Direct Chat</p>
                      <p className="mt-0.5 text-base font-bold text-white group-hover:text-[#06B6D4] transition-colors tabular-nums">
                        {COMPANY_INFO.whatsappInternational} ({COMPANY_INFO.whatsappDisplay})
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+233545452076"
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/25 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/10 text-[#06B6D4] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-400">Phone Line</p>
                      <p className="mt-0.5 text-sm font-semibold text-white tabular-nums">
                        {COMPANY_INFO.whatsappInternational}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${COMPANY_INFO.emailPlaceholder}`}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/25 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/10 text-[#06B6D4] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-slate-400">Email Address</p>
                      <p className="mt-0.5 text-sm font-semibold text-white break-all">
                        {COMPANY_INFO.emailPlaceholder}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-10 h-10 rounded-lg bg-white/10 text-[#06B6D4] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-400">Business Location</p>
                      <p className="mt-0.5 text-sm font-semibold text-white">
                        {COMPANY_INFO.location}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-300">
                        {COMPANY_INFO.locationDetail}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 px-2 pt-1 text-xs text-slate-300">
                    <Clock className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{COMPANY_INFO.businessHours}</span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="text-xs font-semibold text-slate-400">Social Channels</p>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {COMPANY_INFO.socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#2563EB] border border-white/10 text-xs font-medium text-slate-200 hover:text-white transition-colors"
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Column: Validated Project Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-xs">
                {submittedSummary ? (
                  <div className="py-4" role="status" aria-live="polite">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                    </div>

                    <h2 className="mt-5 text-2xl font-bold text-[#0F172A]">
                      Your Project Brief Is Ready
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-[#64748B] leading-relaxed">
                      Thank you,{' '}
                      <strong className="text-[#0F172A]">{submittedSummary.fullName}</strong>.
                      Because this static website does not send automated background emails, select
                      how you would like to send your prepared brief directly:
                    </p>

                    <div className="mt-6 rounded-xl bg-[#F8FAFC] border border-slate-200 p-5 space-y-2 text-sm">
                      <p>
                        <span className="font-semibold text-[#0F172A]">Service:</span>{' '}
                        <span className="text-[#64748B]">{submittedSummary.service}</span>
                      </p>
                      {submittedSummary.businessName && (
                        <p>
                          <span className="font-semibold text-[#0F172A]">Business:</span>{' '}
                          <span className="text-[#64748B]">{submittedSummary.businessName}</span>
                        </p>
                      )}
                      <p>
                        <span className="font-semibold text-[#0F172A]">Contact:</span>{' '}
                        <span className="text-[#64748B]">
                          {submittedSummary.email} · {submittedSummary.phone}
                        </span>
                      </p>
                      <p>
                        <span className="font-semibold text-[#0F172A]">Budget:</span>{' '}
                        <span className="text-[#64748B]">{submittedSummary.budget}</span>
                      </p>
                      <p className="pt-2 border-t border-slate-200 text-[#0F172A]">
                        {submittedSummary.description}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <a
                        href={buildWhatsAppMessageUrl(submittedSummary)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm transition-colors whitespace-nowrap shrink-0"
                      >
                        <MessageCircle className="w-4 h-4" aria-hidden="true" />
                        <span>Send via WhatsApp ({COMPANY_INFO.whatsappDisplay})</span>
                      </a>

                      <a
                        href={buildMailtoUrl(submittedSummary)}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#0B1220] hover:bg-[#142D4E] text-white font-semibold text-sm transition-colors whitespace-nowrap shrink-0"
                      >
                        <Mail className="w-4 h-4" aria-hidden="true" />
                        <span>Open in Email Client</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleReset}
                        className="px-4 py-3 rounded-lg border border-slate-200 text-sm font-semibold text-[#64748B] hover:text-[#0F172A] hover:border-slate-300 transition-colors cursor-pointer"
                      >
                        Edit or New Enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="pb-4 border-b border-slate-100">
                      <h2 className="text-xl font-bold text-[#0F172A]">Project Enquiry Form</h2>
                      <p className="mt-1 text-sm text-[#64748B]">
                        Fields marked with <span className="text-rose-600">*</span> are required.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-fullName"
                          className="block text-sm font-semibold text-[#0F172A]"
                        >
                          Full Name <span className="text-rose-600">*</span>
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
                          placeholder="e.g. Kwame Mensah"
                          aria-invalid={Boolean(errors.fullName)}
                          className={`mt-1.5 w-full rounded-lg border px-3.5 py-2.5 text-sm text-[#0F172A] bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] ${
                            errors.fullName ? 'border-rose-500' : 'border-slate-300'
                          }`}
                        />
                        {errors.fullName && (
                          <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-600">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.fullName}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-businessName"
                          className="block text-sm font-semibold text-[#0F172A]"
                        >
                          Business Name{' '}
                          <span className="text-xs font-normal text-[#64748B]">(Optional)</span>
                        </label>
                        <input
                          id="contact-businessName"
                          name="businessName"
                          type="text"
                          value={values.businessName}
                          onChange={(e) => setValues({...values, businessName: e.target.value})}
                          placeholder="e.g. Accra Logistics Ltd"
                          className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-[#0F172A] bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-sm font-semibold text-[#0F172A]"
                        >
                          Email Address <span className="text-rose-600">*</span>
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
                          className={`mt-1.5 w-full rounded-lg border px-3.5 py-2.5 text-sm text-[#0F172A] bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] ${
                            errors.email ? 'border-rose-500' : 'border-slate-300'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-600">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-sm font-semibold text-[#0F172A]"
                        >
                          Phone / WhatsApp Number <span className="text-rose-600">*</span>
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
                          placeholder="e.g. 0545452076 or +233..."
                          aria-invalid={Boolean(errors.phone)}
                          className={`mt-1.5 w-full rounded-lg border px-3.5 py-2.5 text-sm text-[#0F172A] bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] ${
                            errors.phone ? 'border-rose-500' : 'border-slate-300'
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-600">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-service"
                          className="block text-sm font-semibold text-[#0F172A]"
                        >
                          Service Required <span className="text-rose-600">*</span>
                        </label>
                        <select
                          id="contact-service"
                          name="service"
                          value={values.service}
                          onChange={(e) => {
                            setValues({...values, service: e.target.value});
                            if (errors.service) setErrors({...errors, service: undefined});
                          }}
                          className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-[#0F172A] bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                        >
                          {SERVICE_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-budget"
                          className="block text-sm font-semibold text-[#0F172A]"
                        >
                          Project Budget{' '}
                          <span className="text-xs font-normal text-[#64748B]">(Optional)</span>
                        </label>
                        <select
                          id="contact-budget"
                          name="budget"
                          value={values.budget}
                          onChange={(e) => setValues({...values, budget: e.target.value})}
                          className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-[#0F172A] bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                        >
                          {BUDGET_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-description"
                        className="block text-sm font-semibold text-[#0F172A]"
                      >
                        Project Description <span className="text-rose-600">*</span>
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
                        placeholder="Describe your goals, team size, premises, or requirements..."
                        aria-invalid={Boolean(errors.description)}
                        className={`mt-1.5 w-full rounded-lg border px-3.5 py-2.5 text-sm text-[#0F172A] bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] ${
                          errors.description ? 'border-rose-500' : 'border-slate-300'
                        }`}
                      />
                      {errors.description && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-600">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.description}</span>
                        </p>
                      )}
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm sm:text-base transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                      >
                        <Send className="w-4 h-4" aria-hidden="true" />
                        <span>Submit Enquiry</span>
                      </button>

                      <p className="text-xs text-[#64748B]">
                        Prepares your brief to send via WhatsApp or your email app.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
