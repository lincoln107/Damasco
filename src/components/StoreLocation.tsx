import React from 'react';
import { MapPinIcon, WhatsAppIcon, DamascoFruitLogo } from './Icons';
import { Clock, Navigation, Phone, ExternalLink, CheckCircle } from 'lucide-react';
import { OFFICIAL_CHANNELS, WHATSAPP_FORMATTED } from '../data/links';

export function StoreLocation() {
  const mapsChannel = OFFICIAL_CHANNELS.find(c => c.id === 'maps');
  const whatsappChannel = OFFICIAL_CHANNELS.find(c => c.id === 'whatsapp');

  return (
    <section id="loja-fisica" className="py-14 sm:py-20 bg-[#FBFBFA] border-t border-[#EAE8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white border border-[#EAE8E2] rounded-3xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Info & Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-700 mb-2">
                  <MapPinIcon className="w-4 h-4" />
                  <span>Loja Física & Showroom Damasco</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#181A1F] tracking-tight flex items-center gap-2">
                  <span>Venha Conhecer o Espaço Damasco na Mooca</span>
                  <DamascoFruitLogo className="w-7 h-7 shrink-0 hidden sm:inline-block" />
                </h2>
                <p className="text-sm text-[#52525B] mt-2 leading-relaxed">
                  Prefere experimentar as peças pessoalmente e sentir a textura da malha 220g? Visite nossa loja na tradicional Mooca, em São Paulo (Camiseteria di Mooca).
                </p>
              </div>

              {/* Badges / Store Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#52525B]">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2]">
                  <Clock className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#181A1F] block mb-0.5">Horário de Atendimento</strong>
                    <span>Segunda a Sexta: 09h às 18h<br />Sábado: 09h às 14h</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2]">
                  <Navigation className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#181A1F] block mb-0.5">Localização Fácil</strong>
                    <span>Região da Mooca, São Paulo - SP<br />Fácil acesso e estacionamento</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                {mapsChannel && (
                  <a
                    href={mapsChannel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm transition-all shadow-xs hover:-translate-y-0.5"
                  >
                    <MapPinIcon className="w-4 h-4" />
                    <span>Abrir Rota no Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>
                )}

                {whatsappChannel && (
                  <a
                    href={`https://wa.me/5511947310000?text=Ol%C3%A1!%20Gostaria%20de%20saber%20se%20posso%20visitar%20a%20loja%20f%C3%ADsica%20na%20Mooca.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-xs"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp: {WHATSAPP_FORMATTED}</span>
                  </a>
                )}
              </div>

              <div className="flex items-center gap-2 text-xs text-[#52525B]">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Retirada no balcão e atendimento personalizado no local.</span>
              </div>
            </div>

            {/* Right Column: Visual Map Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#EAE8E2] bg-[#FAF9F6] p-5">
                <div className="aspect-[4/3] rounded-xl bg-white overflow-hidden relative flex flex-col items-center justify-center p-6 text-center border border-[#EAE8E2] shadow-xs">
                  <div className="p-3.5 rounded-full bg-rose-50 text-rose-600 mb-3">
                    <MapPinIcon className="w-8 h-8" />
                  </div>
                  <h3 className="text-base font-bold text-[#181A1F] mb-1">
                    Camiseteria di Mooca
                  </h3>
                  <p className="text-xs text-[#52525B] max-w-xs mb-4">
                    Mooca, São Paulo - SP · Centro tradicional têxtil e moda urbana
                  </p>

                  {mapsChannel && (
                    <a
                      href={mapsChannel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 border border-neutral-300/80 text-[#181A1F] text-xs font-semibold transition-colors flex items-center gap-1.5"
                    >
                      <span>Ver no Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-[#71717A] px-1">
                  <span>São Paulo - SP</span>
                  <span className="text-emerald-700 font-medium">● Aberto em horário comercial</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
