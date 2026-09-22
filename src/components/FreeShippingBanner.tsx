import React, { useState } from 'react';
import { Truck, Check, Sparkles, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';
import { DamascoFruitLogo, WhatsAppIcon } from './Icons';
import { WHATSAPP_RAW_NUMBER } from '../data/links';

export function FreeShippingBanner() {
  const [cepOrState, setCepOrState] = useState('');
  const [simulatedResult, setSimulatedResult] = useState<null | {
    eligible: boolean;
    carrier: string;
    deadline: string;
    message: string;
  }>(null);

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cepOrState.trim()) return;

    setSimulatedResult({
      eligible: true,
      carrier: 'Envio Expresso Damasco & Correios / Sedex',
      deadline: '2 a 5 dias úteis',
      message: 'Parabéns! Sua região tem direito a FRETE GRÁTIS nas compras a partir de R$ 149 ou via cupom parceiro.',
    });
  };

  const whatsappShippingUrl = `https://wa.me/55${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(
    `Olá! Gostaria de consultar o Frete Grátis da Damasco para minha cidade: ${cepOrState || 'minha localização'}`
  )}`;

  return (
    <section id="frete-gratis" className="py-12 bg-[#F5F4F0] border-y border-[#EAE8E2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Highlight Pitch */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
              <Truck className="w-4 h-4 shrink-0 text-emerald-700" />
              <span>Campanha Nacional de Envio Damasco</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping" />
            </div>

            <div className="flex items-center gap-2.5">
              <DamascoFruitLogo className="w-8 h-8 shrink-0" />
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#181A1F] tracking-tight">
                Frete Grátis para Todo o Brasil
              </h2>
            </div>

            <p className="text-sm text-[#52525B] leading-relaxed max-w-xl">
              Compre suas camisetas oversized <strong className="text-orange-700 font-semibold">Damasco</strong> com tranquilidade. Garantimos frete grátis em pedidos qualificados pelo site, atendimento pelo WhatsApp ou em nossos marketplaces oficiais parceiros.
            </p>

            {/* Benefit Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-start gap-2 text-xs text-[#52525B]">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-[#181A1F]">A partir de R$ 149</strong> em qualquer modelo</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-[#52525B]">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-[#181A1F]">Mercado Envios Full</strong> & Cupons Shopee</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-[#52525B]">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-[#181A1F]">Rastreamento 100%</strong> do pedido até sua casa</span>
              </div>
            </div>
          </div>

          {/* Right: Quick Shipping Simulator / WhatsApp Checker */}
          <div className="lg:col-span-5 bg-white border border-[#EAE8E2] rounded-2xl p-5 sm:p-6 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#181A1F] flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-orange-600" />
                Consultar Frete do Seu CEP / Cidade
              </span>
              <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Ativo
              </span>
            </div>

            <form onSubmit={handleSimulate} className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={cepOrState}
                  onChange={(e) => setCepOrState(e.target.value)}
                  placeholder="Digite seu CEP ou Estado (ex: 01000-000 ou SP)"
                  className="flex-1 bg-[#FAF9F6] border border-[#EAE8E2] rounded-xl px-3.5 py-2.5 text-xs text-[#181A1F] placeholder-neutral-400 focus:outline-none focus:border-orange-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs transition-colors shrink-0 shadow-xs"
                >
                  Consultar
                </button>
              </div>

              {simulatedResult && (
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs space-y-1.5 animate-fade-in">
                  <div className="flex items-center gap-1.5 text-emerald-900 font-bold">
                    <Truck className="w-4 h-4 shrink-0 text-emerald-700" />
                    <span>{simulatedResult.message}</span>
                  </div>
                  <div className="text-[11px] text-[#52525B] flex justify-between pt-1 border-t border-emerald-200">
                    <span>Prazo estimado: <strong className="text-[#181A1F]">{simulatedResult.deadline}</strong></span>
                    <span className="text-emerald-700 font-bold">Custo: R$ 0,00</span>
                  </div>
                </div>
              )}

              <div className="pt-2">
                <a
                  href={whatsappShippingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>Confirmar Frete Grátis no WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
