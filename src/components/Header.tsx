import React from 'react';
import { WhatsAppIcon, MercadoLivreIcon, DamascoFruitLogo } from './Icons';
import { Truck } from 'lucide-react';
import { OFFICIAL_CHANNELS } from '../data/links';

export function Header() {
  const whatsappChannel = OFFICIAL_CHANNELS.find(c => c.id === 'whatsapp');
  const mlChannel = OFFICIAL_CHANNELS.find(c => c.id === 'mercadolivre');

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#EAE8E2]">
      {/* Top Free Shipping Bar */}
      <div className="bg-[#FAF0E6] border-b border-[#EEDDCF] text-[#8A380C] text-[11px] sm:text-xs font-semibold py-1.5 px-4 text-center tracking-wide flex items-center justify-center gap-2">
        <Truck className="w-3.5 h-3.5 shrink-0 text-orange-600" />
        <span>
          <strong>FRETE GRÁTIS</strong> PARA TODO O BRASIL A PARTIR DE R$ 149 · OU USE CUPONS NA SHOPEE & MERCADO LIVRE
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand with Damasco Fruit Logo */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 group shrink-0"
        >
          <div className="relative p-1 rounded-xl bg-orange-50/80 border border-orange-200/60 group-hover:border-orange-500/50 transition-colors">
            <DamascoFruitLogo className="w-7 h-7 group-hover:scale-105 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#181A1F] font-display group-hover:text-orange-600 transition-colors flex items-center gap-1.5 leading-tight">
              DAMASCO
              <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-orange-100/80 text-orange-700 border border-orange-200">
                OVERSIZE
              </span>
            </span>
            <span className="text-[10px] text-[#71717A] font-medium tracking-wider uppercase">
              Streetwear Adulto
            </span>
          </div>
        </a>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#52525B]">
          <a href="#colecao" className="hover:text-[#181A1F] transition-colors">
            Coleção
          </a>
          <a href="#frete-gratis" className="text-orange-600 hover:text-orange-700 transition-colors font-semibold flex items-center gap-1">
            <Truck className="w-3.5 h-3.5" />
            Frete Grátis
          </a>
          <a href="#canais" className="hover:text-[#181A1F] transition-colors">
            Onde Comprar
          </a>
          <a href="#guia-medidas" className="hover:text-[#181A1F] transition-colors">
            Guia de Medidas
          </a>
          <a href="#qualidade" className="hover:text-[#181A1F] transition-colors">
            Tecido 220g
          </a>
          <a href="#loja-fisica" className="hover:text-[#181A1F] transition-colors">
            Loja na Mooca
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {mlChannel && (
            <a
              href={mlChannel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold bg-[#FFE600] text-neutral-900 rounded-lg hover:bg-[#F3DC00] transition-colors whitespace-nowrap shadow-xs"
              title="Comprar pelo Mercado Livre"
            >
              <MercadoLivreIcon className="w-3.5 h-3.5" />
              <span>Mercado Livre</span>
            </a>
          )}
          {whatsappChannel && (
            <a
              href={whatsappChannel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors whitespace-nowrap shadow-xs"
              title="Atendimento no WhatsApp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
