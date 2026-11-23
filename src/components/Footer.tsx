import {ArrowUpRight, Mail, MapPin, MessageCircle} from 'lucide-react';
import {COMPANY_INFO, PageId, SERVICES, ServiceItem} from '../data/companyConfig';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenService: (service: ServiceItem) => void;
  onOpenLegal: (doc: 'privacy' | 'terms') => void;
}

const FOOTER_NAV: {label: string; page: PageId}[] = [
  {label: 'Home', page: 'home'},
  {label: 'About Us', page: 'about'},
  {label: 'Services', page: 'services'},
  {label: 'Solutions', page: 'solutions'},
  {label: 'Projects', page: 'projects'},
  {label: 'Contact', page: 'contact'},
];

export function Footer({onNavigate, onOpenService, onOpenLegal}: FooterProps) {
  return (
    <footer className="bg-[#0B1220] text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="inline-flex items-center gap-2.5 text-white font-bold text-lg tracking-tight"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 64 64"
                fill="none"
                aria-hidden="true"
                className="shrink-0"
              >
                <rect width="64" height="64" rx="14" fill="#142D4E" />
                <path
                  d="M16 44V20L26 32L36 20V44"
                  stroke="#F8FAFC"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M44 22L48 26L44 30"
                  stroke="#06B6D4"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="46" cy="40" r="4" fill="#2563EB" />
              </svg>
              <span>{COMPANY_INFO.name}</span>
            </a>

            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-sm">
              {COMPANY_INFO.footerIntro}
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {COMPANY_INFO.socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#2563EB] border border-white/10 text-xs font-medium text-slate-200 hover:text-white transition-colors"
                >
                  <span>{social.label}</span>
                  <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white">Pages</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {FOOTER_NAV.map((item) => (
                <li key={item.page}>
                  <a
                    href={`#${item.page}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.page);
                    }}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => onOpenService(service)}
                    className="text-left text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{COMPANY_INFO.location}</span>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.emailPlaceholder}`}
                  className="inline-flex items-start gap-2.5 text-slate-300 hover:text-white transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{COMPANY_INFO.emailPlaceholder}</span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                >
                  <MessageCircle
                    className="w-4 h-4 text-[#06B6D4] shrink-0"
                    aria-hidden="true"
                  />
                  <span>WhatsApp: {COMPANY_INFO.whatsappInternational}</span>
                </a>
              </li>
            </ul>

            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0"
            >
              <span>Start WhatsApp Chat</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {COMPANY_INFO.copyrightYear} {COMPANY_INFO.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms and Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
