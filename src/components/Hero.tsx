import React from 'react';
import { WhatsAppIcon, MercadoLivreIcon, ShopeeIcon, DamascoFruitLogo } from './Icons';
import { ShieldCheck, Truck, Sparkles, ArrowDown, Gift } from 'lucide-react';
import { OFFICIAL_CHANNELS } from '../data/links';

export function Hero() {
  const whatsappChannel = OFFICIAL_CHANNELS.find(c => c.id === 'whatsapp');
  const mlChannel = OFFICIAL_CHANNELS.find(c => c.id === 'mercadolivre');
  const shopeeChannel = OFFICIAL_CHANNELS.find(c => c.id === 'shopp');

  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:pt-10 lg:pb-20 bg-[#FBFBFA]">
      {/* Subtle warm light ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-orange-100/40 via-amber-50/20 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Free Shipping Highlight Banner */}
        <div id="frete-gratis" className="mb-8 p-3.5 sm:p-4 rounded-2xl bg-white border border-[#EAE8E2] flex flex-col sm:flex-row items-center justify-between gap-3 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-orange-500 text-white shadow-xs shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#181A1F] flex items-center gap-2">
                <span>FRETE GRÁTIS PARA TODO O BRASIL</span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[11px] font-semibold border border-emerald-200">
                  Economia Real
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#71717A]">
                Válido em compras a partir de R$ 149 · Também disponível via cupons oficiais no Mercado Livre e Shopee!
              </p>
            </div>
          </div>
          <a
            href={whatsappChannel?.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-4 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 border border-neutral-300/80 text-[#181A1F] text-xs font-semibold whitespace-nowrap transition-colors text-center"
          >
            Consultar CEP no WhatsApp
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#EAE8E2] text-xs font-semibold text-orange-700 mb-4 shadow-xs">
              <DamascoFruitLogo className="w-4 h-4" />
              <span>Damasco Oversize · Coleção Adulto Masculina & Feminina</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-[#181A1F] leading-tight mb-4 text-balance">
              Camisetas Oversized <span className="text-orange-600">Damasco</span> com Frete Grátis
            </h1>

            <p className="text-base sm:text-lg text-[#52525B] leading-relaxed mb-6 max-w-2xl">
              A modelagem boxy com ombro caído (drop-shoulder) que conquistou o streetwear nacional. Confeccionada em 100% algodão penteado 220g e gola grossa de 3cm que nunca deforma.
            </p>

            {/* Main Action Buttons */}
            <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
              {whatsappChannel && (
                <a
                  href={whatsappChannel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all duration-200 shadow-sm hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Comprar pelo WhatsApp (11) 94731-0000</span>
                </a>
              )}

              {mlChannel && (
                <a
                  href={mlChannel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#FFE600] hover:bg-[#F3DC00] text-neutral-950 font-bold text-sm transition-all duration-200 shadow-xs hover:-translate-y-0.5"
                >
                  <MercadoLivreIcon className="w-4 h-4" />
                  <span>Mercado Livre</span>
                </a>
              )}

              {shopeeChannel && (
                <a
                  href={shopeeChannel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#EE4D2D] hover:bg-[#DE3C1C] text-white font-semibold text-sm transition-all duration-200 shadow-xs hover:-translate-y-0.5"
                >
                  <ShopeeIcon className="w-4 h-4" />
                  <span>Shopee</span>
                </a>
              )}
            </div>

            {/* Trust highlights & Technical Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#EAE8E2] w-full text-xs text-[#52525B]">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-orange-50 text-orange-600 shrink-0">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-[#181A1F]">Frete Grátis Brasil</div>
                  <div className="text-[#71717A]">Envio expresso rastreado</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-orange-50 text-orange-600 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-[#181A1F]">Algodão 220g/m²</div>
                  <div className="text-[#71717A]">Zero transparência</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                <div>
                  <div className="font-semibold text-[#181A1F]">P ao XGG Adulto</div>
                  <div className="text-[#71717A]">Caimento estruturado</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-[#71717A]">
              <a href="#colecao" className="inline-flex items-center gap-1 hover:text-[#181A1F] transition-colors">
                <ArrowDown className="w-3.5 h-3.5 text-orange-600" />
                Ver catálogo completo de modelos Damasco abaixo
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#EAE8E2] bg-white shadow-xl group">
              <img
                src="/src/assets/images/hero_oversized_tshirts_1790118696018.jpg"
                alt="Modelos adulto masculino e feminino vestindo camisetas oversized de alta qualidade Damasco"
                className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] object-cover object-top transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />

              {/* Float label with Damasco Fruit Logo */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-white/80 shadow-lg flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <DamascoFruitLogo className="w-6 h-6 shrink-0" />
                  <div>
                    <div className="font-semibold text-[#181A1F]">Damasco Oversize 2026</div>
                    <div className="text-[#71717A]">Corte Boxy Streetwear · Masculino & Feminino</div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-emerald-700 font-bold text-[11px] flex items-center gap-1">
                    <Truck className="w-3 h-3" /> Frete Grátis
                  </span>
                  <span className="text-orange-600 font-bold font-mono text-[11px]">220g/m²</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
