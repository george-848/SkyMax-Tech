import {ArrowRight, MessageCircle} from 'lucide-react';
import {COMPANY_INFO} from '../data/companyConfig';

interface QuoteCtaSectionProps {
  onRequestQuoteClick: () => void;
}

export function QuoteCtaSection({onRequestQuoteClick}: QuoteCtaSectionProps) {
  return (
    <section
      id="quote"
      className="py-16 lg:py-20 bg-[#0B1220] text-white bg-navy-grid border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-[#142D4E] via-[#142D4E]/90 to-[#0B1220] border border-white/15 p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#06B6D4] tracking-wide">
              Start Your Project
            </p>
            <h2
              className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
              style={{textWrap: 'balance'}}
            >
              Have a Technology Project in Mind?
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
              Let&apos;s discuss how we can help your business with software, cloud infrastructure,
              networking and IT solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={onRequestQuoteClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm sm:text-base transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer shadow-lg shadow-[#2563EB]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>

            <a
              href={`${COMPANY_INFO.whatsappLink}?text=${encodeURIComponent(
                'Hello, I would like to discuss a technology project with your team.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold text-sm sm:text-base transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]"
            >
              <MessageCircle className="w-4 h-4 text-[#06B6D4]" aria-hidden="true" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
