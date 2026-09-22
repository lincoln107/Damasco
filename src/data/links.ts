import { ChannelLink } from '../types';

export const OFFICIAL_CHANNELS: ChannelLink[] = [
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    url: 'https://wa.me/5511947310000?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20conhecer%20as%20camisetas%20oversized.',
    category: 'direct',
    description: 'Atendimento direto, tire dúvidas e compre na hora: (11) 94731-0000',
    badge: 'Atendimento Rápido',
    colorClass: 'from-emerald-600 to-green-500 text-white',
    buttonClass: 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/40',
    icon: 'whatsapp',
    highlight: true,
  },
  {
    id: 'mercadolivre',
    name: 'MercadoLivre',
    url: 'https://lista.mercadolivre.com.br/camisetas',
    category: 'marketplace',
    description: 'Compre com segurança, garantia e frete rápido via Mercado Livre',
    badge: 'Envio Rápido',
    colorClass: 'from-yellow-400 to-amber-500 text-slate-950',
    buttonClass: 'bg-[#ffe600] hover:bg-[#ebd300] text-slate-900 font-semibold shadow-md',
    icon: 'mercadolivre',
    highlight: true,
  },
  {
    id: 'shopp',
    name: 'Shopee',
    url: 'https://shopee.com.br/Camiseta-T-shirt-Feminina-Blusa-flores-imagens-estampadas-i.961449939.22491895647',
    category: 'marketplace',
    description: 'Aproveite cupons de frete grátis e promoções na Shopee',
    badge: 'Cupons & Descontos',
    colorClass: 'from-orange-600 to-amber-600 text-white',
    buttonClass: 'bg-[#ee4d2d] hover:bg-[#d73f20] text-white font-semibold shadow-md',
    icon: 'shopee',
    highlight: true,
  },
  {
    id: 'magalu',
    name: 'MagaLu',
    url: 'https://www.magazineluiza.com.br/busca/camisetas/?srsltid=AU7gw4XydyGiRPG4C697f-_C8t02g26tcJ6u6TBMZvHacLdVj6iiKOQB',
    category: 'marketplace',
    description: 'Encontre nossos modelos no Magazine Luiza com parcelamento facilitado',
    badge: 'Confiança MagaLu',
    colorClass: 'from-blue-600 to-sky-500 text-white',
    buttonClass: 'bg-[#0086ff] hover:bg-[#0074dd] text-white font-semibold shadow-md',
    icon: 'magalu',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/fenomenaloficial/',
    category: 'social',
    description: 'Siga @fenomenaloficial para novidades, lançamentos e fotos de clientes',
    badge: '@fenomenaloficial',
    colorClass: 'from-pink-600 via-purple-600 to-amber-500 text-white',
    buttonClass: 'bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 text-white font-medium shadow-md',
    icon: 'instagram',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://www.facebook.com/camisetaexpress/',
    category: 'social',
    description: 'Acompanhe nossa página oficial no Facebook @camisetaexpress',
    badge: '@camisetaexpress',
    colorClass: 'from-blue-700 to-indigo-700 text-white',
    buttonClass: 'bg-[#1877f2] hover:bg-[#166fe5] text-white font-medium shadow-md',
    icon: 'facebook',
  },
  {
    id: 'maps',
    name: 'Maps (Loja Física)',
    url: 'https://www.google.com/maps/place/Camiseteria+di+Mooca/@-23.5542786,-46.6385384,14z/data=!4m10!1m2!2m1!1smaps+camisetas!3m6!1s0x94ce59378ed53755:0x8fa04057f66816b5!8m2!3d-23.5542786!4d-46.6024895!15sCg5tYXBzIGNhbWlzZXRhc1oLIgljYW1pc2V0YXOSAQxzb2NjZXJfc3RvcmXgAQA!16s%2Fg%2F1ptxnv291?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D',
    category: 'location',
    description: 'Visite nossa loja física: Camiseteria di Mooca - São Paulo / SP',
    badge: 'Mooca · São Paulo',
    colorClass: 'from-red-600 to-rose-600 text-white',
    buttonClass: 'bg-rose-600 hover:bg-rose-500 text-white font-semibold shadow-md',
    icon: 'map-pin',
  },
];

export const WHATSAPP_RAW_NUMBER = '11947310000';
export const WHATSAPP_FORMATTED = '(11) 94731-0000';

export function getWhatsAppProductUrl(productName: string, size?: string, color?: string): string {
  const details = [
    productName,
    size ? `Tamanho: ${size}` : '',
    color ? `Cor: ${color}` : '',
  ].filter(Boolean).join(' | ');

  const text = `Olá! Gostaria de comprar a camiseta oversized: ${details}. Pode me passar disponibilidade e opções de envio?`;
  return `https://wa.me/55${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(text)}`;
}
