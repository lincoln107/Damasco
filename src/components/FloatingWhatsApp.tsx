import React, { useState } from 'react';
import { WhatsAppIcon, DamascoFruitLogo } from './Icons';
import { X, Truck } from 'lucide-react';
import { WHATSAPP_RAW_NUMBER } from '../data/links';

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/55${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent('Olá! Vim pelo site da Damasco e gostaria de atendimento para comprar com frete grátis.')}`;

  return (
    <aside aria-label="Atendimento rápido WhatsApp" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-xl bg-[#181c24] border border-emerald-500/30 text-white text-xs shadow-2xl animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <div className="flex items-center gap-1.5">
            <DamascoFruitLogo className="w-3.5 h-3.5" />
            <span>Damasco Online: Peça com <strong>Frete Grátis</strong></span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="ml-1 text-neutral-400 hover:text-white p-0.5"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp (11) 94731-0000"
        className="group flex items-center gap-2.5 p-3.5 sm:px-4 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/60 transition-all duration-200 hover:scale-105 active:scale-95"
      >
        <WhatsAppIcon className="w-6 h-6" />
        <span className="hidden sm:inline font-semibold text-xs whitespace-nowrap">
          Compre no WhatsApp · Frete Grátis
        </span>
      </a>
    </aside>
  );
}
