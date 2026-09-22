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
import { ExternalLink, ShoppingBag, ShieldCheck, Zap, Truck } from 'lucide-react';

interface ChannelItem {
  key: string;
  name: string;
  url: string;
  badge: string;
  description: string;
  btnBg: string;
  textColor: string;
  borderHover: string;
  icon: React.ReactNode;
}

export function OfficialChannelsBar() {
  const channels: ChannelItem[] = [
    {
      key: 'whatsapp',
      name: 'WhatsApp',
      url: 'https://wa.me/5511947310000?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Damasco%20e%20quero%20conhecer%20as%20camisetas%20oversized%20com%20frete%20gr%C3%A1tis.',
      badge: '(11) 94731-0000',
      description: 'Atendimento direto, cotação de Frete Grátis e suporte personalizado',
      btnBg: 'bg-emerald-600 hover:bg-emerald-500',
      textColor: 'text-white',
      borderHover: 'hover:border-emerald-500/50',
      icon: <WhatsAppIcon className="w-5 h-5 shrink-0" />,
    },
    {
      key: 'mercadolivre',
      name: 'MercadoLivre',
      url: 'https://lista.mercadolivre.com.br/camisetas',
      badge: 'Frete Grátis Mercado Envios',
      description: 'Entrega Full super rápida, parcelamento sem juros e compra 100% garantida',
      btnBg: 'bg-[#ffe600] hover:bg-[#ebd300]',
      textColor: 'text-neutral-950 font-bold',
      borderHover: 'hover:border-yellow-400/50',
      icon: <MercadoLivreIcon className="w-5 h-5 shrink-0 text-neutral-900" />,
    },
    {
      key: 'shopp',
      name: 'Shopp (Shopee)',
      url: 'https://shopee.com.br/Camiseta-T-shirt-Feminina-Blusa-flores-imagens-estampadas-i.961449939.22491895647',
      badge: 'Cupons de Frete Grátis',
      description: 'Aproveite cupons oficiais de Frete Grátis e descontos exclusivos na Shopee',
      btnBg: 'bg-[#ee4d2d] hover:bg-[#dc3a1c]',
      textColor: 'text-white',
      borderHover: 'hover:border-orange-500/50',
      icon: <ShopeeIcon className="w-5 h-5 shrink-0" />,
    },
    {
      key: 'magalu',
      name: 'MagaLu',
      url: 'https://www.magazineluiza.com.br/busca/camisetas/?srsltid=AU7gw4XydyGiRPG4C697f-_C8t02g26tcJ6u6TBMZvHacLdVj6iiKOQB',
      badge: 'Magazine Luiza',
      description: 'Garantia e tradição MagaLu para comprar suas camisetas Damasco',
      btnBg: 'bg-[#0086ff] hover:bg-[#0073dc]',
      textColor: 'text-white',
      borderHover: 'hover:border-sky-500/50',
      icon: <MagaLuIcon className="w-5 h-5 shrink-0" />,
    },
    {
      key: 'instagram',
      name: 'Instagram',
      url: 'https://www.instagram.com/fenomenaloficial/',
      badge: '@fenomenaloficial',
      description: 'Looks, fotos de clientes, provador e novidades da coleção Damasco',
      btnBg: 'bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90',
      textColor: 'text-white',
      borderHover: 'hover:border-pink-500/50',
      icon: <InstagramIcon className="w-5 h-5 shrink-0" />,
    },
    {
      key: 'facebook',
      name: 'Facebook',
      url: 'https://www.facebook.com/camisetaexpress/',
      badge: '@camisetaexpress',
      description: 'Página oficial de novidades e promoções no Facebook',
      btnBg: 'bg-[#1877f2] hover:bg-[#166fe5]',
      textColor: 'text-white',
      borderHover: 'hover:border-blue-500/50',
      icon: <FacebookIcon className="w-5 h-5 shrink-0" />,
    },
    {
      key: 'maps',
      name: 'Maps',
      url: 'https://www.google.com/maps/place/Camiseteria+di+Mooca/@-23.5542786,-46.6385384,14z/data=!4m10!1m2!2m1!1smaps+camisetas!3m6!1s0x94ce59378ed53755:0x8fa04057f66816b5!8m2!3d-23.5542786!4d-46.6024895!15sCg5tYXBzIGNhbWlzZXRhc1oLIgljYW1pc2V0YXOSAQxzb2NjZXJfc3RvcmXgAQA!16s%2Fg%2F1ptxnv291?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D',
      badge: 'Camiseteria di Mooca',
      description: 'Venha experimentar pessoalmente em nosso ponto na Mooca - SP',
      btnBg: 'bg-rose-600 hover:bg-rose-500',
      textColor: 'text-white',
      borderHover: 'hover:border-rose-500/50',
      icon: <MapPinIcon className="w-5 h-5 shrink-0" />,
    },
  ];

  return (
    <section id="canais" className="relative py-12 sm:py-16 bg-[#F5F4F0] border-y border-[#EAE8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-orange-700 font-semibold mb-2">
            <DamascoFruitLogo className="w-4 h-4" />
            <span>Canais Oficiais Damasco · Venda Direta & Marketplaces</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-[#181A1F] mb-3">
            Onde Comprar Suas Camisetas Oversized Damasco
          </h2>
          <p className="text-sm sm:text-base text-[#52525B]">
            Escolha seu marketplace ou canal de atendimento favorito. Compre com <span className="text-emerald-700 font-semibold">Frete Grátis</span> para todo o Brasil ou venha até nossa loja física.
          </p>
        </div>

        {/* 7 Official Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {channels.map((channel) => (
            <a
              key={channel.key}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between p-5 rounded-2xl bg-white border border-[#EAE8E2] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-neutral-400"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="p-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-[#181A1F] group-hover:scale-105 transition-transform">
                      {channel.icon}
                    </span>
                    <span className="text-base font-bold text-[#181A1F] group-hover:text-orange-600 transition-colors">
                      {channel.name}
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-[#181A1F] transition-colors shrink-0" />
                </div>

                <p className="text-xs text-[#52525B] line-clamp-2 mb-4 leading-relaxed">
                  {channel.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[#EAE8E2] flex items-center justify-between gap-2">
                <span className="text-[11px] font-medium text-[#71717A] truncate">
                  {channel.badge}
                </span>
                <span className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${channel.btnBg} ${channel.textColor} flex items-center gap-1.5 shrink-0 shadow-xs`}>
                  Acessar
                </span>
              </div>
            </a>
          ))}

          {/* Quick summary card */}
          <div className="flex flex-col justify-between p-5 rounded-2xl bg-white border border-orange-200 shadow-xs">
            <div>
              <div className="flex items-center gap-2 text-orange-700 text-xs font-semibold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                Garantia & Procedência Damasco
              </div>
              <h3 className="text-sm font-bold text-[#181A1F] mb-2">
                Qualidade 100% Algodão Heavyweight 220g
              </h3>
              <p className="text-xs text-[#52525B] leading-relaxed">
                Produção própria com gramatura pesada 220g. Não encolhe, não esgarça a gola e conta com <strong className="text-emerald-700 font-semibold">Frete Grátis</strong> para compras acima de R$ 149.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#EAE8E2] flex items-center justify-between text-xs text-[#52525B]">
              <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                <Truck className="w-3.5 h-3.5" />
                Frete Grátis Brasil
              </span>
              <span className="text-orange-700 font-semibold">Tamanhos P ao XGG</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
