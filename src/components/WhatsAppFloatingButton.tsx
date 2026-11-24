import {MessageCircle} from 'lucide-react';
import {COMPANY_INFO, LanguageCode} from '../data/companyConfig';

interface WhatsAppFloatingButtonProps {
  lang: LanguageCode;
}

export function WhatsAppFloatingButton({lang}: WhatsAppFloatingButtonProps) {
  const label = 'WhatsApp';
  const ariaLabel =
    lang === 'fr'
      ? `Discuter avec ${COMPANY_INFO.name} sur WhatsApp (${COMPANY_INFO.whatsappDisplay})`
      : `Chat with ${COMPANY_INFO.name} on WhatsApp (${COMPANY_INFO.whatsappDisplay})`;
  const prefillText =
    lang === 'fr'
      ? 'Bonjour, je souhaite me renseigner sur les services de SkyMax Technology.'
      : 'Hello, I would like to enquire about SkyMax Technology services.';

  return (
    <div className="relative flex items-center">
      <a
        href={`${COMPANY_INFO.whatsappLink}?text=${encodeURIComponent(prefillText)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        title={`${label} · ${COMPANY_INFO.whatsappInternational}`}
        className="relative inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#25D366]/60 bg-[#25D366] hover:bg-[#1ebe5d] text-[#052e16] shadow-xl transition-all duration-150 hover:-translate-y-0.5 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
      >
        <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5" aria-hidden="true">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366] ring-2 ring-[var(--bg-primary)]" />
        </span>
        <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
      </a>
    </div>
  );
}
