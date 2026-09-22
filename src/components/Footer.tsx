import React from 'react';
import { 
  WhatsAppIcon, 
  MercadoLivreIcon, 
  ShopeeIcon, 
  MagaLuIcon, 
  InstagramIcon, 
  FacebookIcon, 
  MapPinIcon,
  DamascoFruitLogo 
} from './Icons';
import { ShieldCheck, Truck, RotateCcw, CreditCard } from 'lucide-react';
import { OFFICIAL_CHANNELS, WHATSAPP_FORMATTED } from '../data/links';

export function Footer() {
  return (
    <footer className="bg-[#F5F4F0] border-t border-[#EAE8E2] pt-16 pb-12 text-xs text-[#52525B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Badges Bar with Frete Grátis Highlight */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 mb-12 border-b border-[#EAE8E2] text-[#52525B]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-orange-50 text-orange-600 border border-orange-200/60">
              <Truck className="w-5 h-5 shrink-0" />
            </div>
            <div>
              <strong className="block text-[#181A1F] text-xs">Frete Grátis Brasil</strong>
              <span className="text-[11px] text-[#71717A]">Em compras acima de R$ 149</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-orange-50 text-orange-600 border border-orange-200/60">
              <ShieldCheck className="w-5 h-5 shrink-0" />
            </div>
            <div>
              <strong className="block text-[#181A1F] text-xs">Compra 100% Garantida</strong>
              <span className="text-[11px] text-[#71717A]">Proteção total ao consumidor</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-orange-50 text-orange-600 border border-orange-200/60">
              <RotateCcw className="w-5 h-5 shrink-0" />
            </div>
            <div>
              <strong className="block text-[#181A1F] text-xs">Troca Descomplicada</strong>
              <span className="text-[11px] text-[#71717A]">Até 7 dias após o recebimento</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-orange-50 text-orange-600 border border-orange-200/60">
              <CreditCard className="w-5 h-5 shrink-0" />
            </div>
            <div>
              <strong className="block text-[#181A1F] text-xs">Pagamento Flexível</strong>
              <span className="text-[11px] text-[#71717A]">Pix, Boleto ou Cartão em até 12x</span>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-2">
              <DamascoFruitLogo className="w-7 h-7" />
              <div className="text-lg font-bold text-[#181A1F] font-display tracking-tight">
                DAMASCO <span className="text-orange-600 font-normal">·</span> OVERSIZE
              </div>
            </div>
            <p className="text-xs text-[#52525B] leading-relaxed max-w-sm">
              Especialistas em camisetas oversized masculinas e femininas para adultos. Modelagem boxy exclusiva, gola de 3cm, malha pesada 220g/m² e Frete Grátis para todo o Brasil.
            </p>
            <div className="text-xs text-[#52525B] pt-2">
              <span className="block">WhatsApp: <strong className="text-[#181A1F]">{WHATSAPP_FORMATTED}</strong></span>
              <span className="block mt-1">Loja Física: <strong className="text-[#181A1F]">Camiseteria di Mooca - São Paulo/SP</strong></span>
            </div>
          </div>

          {/* All 7 Official Buttons Quick Access */}
          <div className="md:col-span-5 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#181A1F]">
              Canais Oficiais & Marketplaces
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a 
                href="https://wa.me/5511947310000" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 p-2.5 rounded-xl bg-white hover:bg-neutral-50 border border-[#EAE8E2] text-[#181A1F] transition-colors shadow-xs"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium">WhatsApp</span>
              </a>

              <a 
                href="https://lista.mercadolivre.com.br/camisetas" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 p-2.5 rounded-xl bg-white hover:bg-neutral-50 border border-[#EAE8E2] text-[#181A1F] transition-colors shadow-xs"
              >
                <MercadoLivreIcon className="w-4 h-4 text-neutral-900 shrink-0" />
                <span className="font-medium">Mercado Livre</span>
              </a>

              <a 
                href="https://shopee.com.br/Camiseta-T-shirt-Feminina-Blusa-flores-imagens-estampadas-i.961449939.22491895647" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 p-2.5 rounded-xl bg-white hover:bg-neutral-50 border border-[#EAE8E2] text-[#181A1F] transition-colors shadow-xs"
              >
                <ShopeeIcon className="w-4 h-4 text-orange-600 shrink-0" />
                <span className="font-medium">Shopee (Shopp)</span>
              </a>

              <a 
                href="https://www.magazineluiza.com.br/busca/camisetas/?srsltid=AU7gw4XydyGiRPG4C697f-_C8t02g26tcJ6u6TBMZvHacLdVj6iiKOQB" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 p-2.5 rounded-xl bg-white hover:bg-neutral-50 border border-[#EAE8E2] text-[#181A1F] transition-colors shadow-xs"
              >
                <MagaLuIcon className="w-4 h-4 text-sky-600 shrink-0" />
                <span className="font-medium">MagaLu</span>
              </a>

              <a 
                href="https://www.instagram.com/fenomenaloficial/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 p-2.5 rounded-xl bg-white hover:bg-neutral-50 border border-[#EAE8E2] text-[#181A1F] transition-colors shadow-xs"
              >
                <InstagramIcon className="w-4 h-4 text-pink-600 shrink-0" />
                <span className="font-medium">Instagram</span>
              </a>

              <a 
                href="https://www.facebook.com/camisetaexpress/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 p-2.5 rounded-xl bg-white hover:bg-neutral-50 border border-[#EAE8E2] text-[#181A1F] transition-colors shadow-xs"
              >
                <FacebookIcon className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-medium">Facebook</span>
              </a>

              <a 
                href="https://www.google.com/maps/place/Camiseteria+di+Mooca/@-23.5542786,-46.6385384,14z/data=!4m10!1m2!2m1!1smaps+camisetas!3m6!1s0x94ce59378ed53755:0x8fa04057f66816b5!8m2!3d-23.5542786!4d-46.6024895!15sCg5tYXBzIGNhbWlzZXRhc1oLIgljYW1pc2V0YXOSAQxzb2NjZXJfc3RvcmXgAQA!16s%2Fg%2F1ptxnv291?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="col-span-2 flex items-center gap-2 p-2.5 rounded-xl bg-white hover:bg-neutral-50 border border-[#EAE8E2] text-[#181A1F] transition-colors shadow-xs"
              >
                <MapPinIcon className="w-4 h-4 text-rose-600 shrink-0" />
                <span className="font-medium">Google Maps (Camiseteria di Mooca - SP)</span>
              </a>
            </div>
          </div>

          {/* Quick Page Anchors */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#181A1F]">
              Navegação
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#colecao" className="hover:text-orange-600 transition-colors">
                  Coleção de Camisetas Damasco
                </a>
              </li>
              <li>
                <a href="#frete-gratis" className="hover:text-orange-600 transition-colors text-orange-700 font-semibold">
                  Condições de Frete Grátis
                </a>
              </li>
              <li>
                <a href="#canais" className="hover:text-orange-600 transition-colors">
                  Todos os Canais de Venda
                </a>
              </li>
              <li>
                <a href="#guia-medidas" className="hover:text-orange-600 transition-colors">
                  Tabela de Medidas (P ao XGG)
                </a>
              </li>
              <li>
                <a href="#qualidade" className="hover:text-orange-600 transition-colors">
                  Diferenciais do Tecido 220g
                </a>
              </li>
              <li>
                <a href="#loja-fisica" className="hover:text-orange-600 transition-colors">
                  Visitar Loja na Mooca
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#EAE8E2] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#71717A]">
          <div className="flex items-center gap-2">
            <DamascoFruitLogo className="w-4 h-4" />
            <span>© {new Date().getFullYear()} Damasco Oversize Premium. Todos os direitos reservados.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-emerald-700 font-semibold">Frete Grátis Brasil</span>
            <span>·</span>
            <span>100% Algodão Heavyweight</span>
            <span>·</span>
            <span>São Paulo - Brasil</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
