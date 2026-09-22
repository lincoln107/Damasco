import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { WhatsAppIcon, MercadoLivreIcon, ShopeeIcon, MagaLuIcon, DamascoFruitLogo } from './Icons';
import { X, Check, ShieldCheck, Ruler, ExternalLink, Truck } from 'lucide-react';
import { getWhatsAppProductUrl, OFFICIAL_CHANNELS } from '../data/links';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenSizeGuide: () => void;
}

export function ProductModal({ product, onClose, onOpenSizeGuide }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0] || 'M');
      setSelectedColor(product.colors[0]?.name || '');
    }
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const whatsappUrl = getWhatsAppProductUrl(product.name, selectedSize, selectedColor);
  const mlChannel = OFFICIAL_CHANNELS.find(c => c.id === 'mercadolivre');
  const shopeeChannel = OFFICIAL_CHANNELS.find(c => c.id === 'shopp');
  const magaluChannel = OFFICIAL_CHANNELS.find(c => c.id === 'magalu');

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white border border-[#EAE8E2] rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 hover:text-[#181A1F] transition-colors"
          aria-label="Fechar detalhes do produto"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-5 sm:p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            {/* Image Preview */}
            <div className="relative rounded-2xl overflow-hidden bg-[#F5F4F0] border border-[#EAE8E2] aspect-[4/3] sm:aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-semibold text-orange-700 border border-[#EAE8E2] flex items-center gap-1 shadow-xs">
                  <DamascoFruitLogo className="w-3.5 h-3.5" />
                  {product.genderLabel}
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-semibold flex items-center gap-1 shadow-xs">
                  <Truck className="w-3 h-3" />
                  Frete Grátis Disponível
                </span>
              </div>
            </div>

            {/* Product details */}
            <div className="flex flex-col">
              <div className="text-xs text-orange-700 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <DamascoFruitLogo className="w-3.5 h-3.5" />
                <span>Damasco · {product.category} Oversize Boxy</span>
              </div>
              <h2 id="modal-product-title" className="text-xl font-bold font-display text-[#181A1F] mb-2 leading-snug">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-2xl font-bold text-[#181A1F] font-mono tabular-nums">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-neutral-400 line-through font-mono tabular-nums">
                    R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between text-xs text-[#71717A] mb-4 font-mono">
                <span>ou {product.installments}</span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5" /> Frete Grátis Brasil
                </span>
              </div>

              {/* Color selector */}
              <div className="mb-4">
                <div className="text-xs font-medium text-[#52525B] mb-2 flex items-center justify-between">
                  <span>Cor Selecionada: <strong className="text-[#181A1F]">{selectedColor}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`group relative flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColor === c.name ? 'border-orange-600 scale-110 ring-2 ring-orange-500/20' : 'border-neutral-300 hover:border-neutral-400'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    >
                      {selectedColor === c.name && (
                        <Check className={`w-4 h-4 ${c.name.includes('Off-White') || c.name.includes('Areia') ? 'text-black' : 'text-white'}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size selector */}
              <div className="mb-4">
                <div className="text-xs font-medium text-[#52525B] mb-2 flex items-center justify-between">
                  <span>Tamanho Adulto: <strong className="text-[#181A1F]">{selectedSize}</strong></span>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenSizeGuide();
                    }}
                    className="inline-flex items-center gap-1 text-[11px] text-orange-600 hover:underline font-semibold"
                  >
                    <Ruler className="w-3 h-3" />
                    Guia de Medidas
                  </button>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                        selectedSize === s
                          ? 'bg-[#181A1F] text-white shadow-xs'
                          : 'bg-neutral-100 text-[#181A1F] hover:bg-neutral-200 border border-neutral-200/80'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Description & Technical Specs */}
          <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] space-y-2">
            <p className="text-xs text-[#52525B] leading-relaxed">
              {product.description}
            </p>
            <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] text-[#71717A] border-t border-[#EAE8E2]">
              <div>Marca: <span className="text-orange-700 font-semibold">Damasco</span></div>
              <div>Frete: <span className="text-emerald-700 font-semibold">Grátis para todo Brasil</span></div>
              <div>Tecido: <span className="text-[#181A1F]">{product.fabric}</span></div>
              <div>Gramatura: <span className="text-[#181A1F]">{product.grammage}</span></div>
              <div>Gola: <span className="text-[#181A1F]">{product.collar}</span></div>
              <div>Modelagem: <span className="text-[#181A1F]">Streetwear Boxy Adulto</span></div>
            </div>
          </div>

          {/* Purchase Channel Selection */}
          <div className="space-y-2.5 pt-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#181A1F] flex items-center justify-between">
              <span>Escolha seu Canal para Finalizar a Compra:</span>
              <span className="text-emerald-700 text-[11px] font-semibold flex items-center gap-1">
                <Truck className="w-3 h-3" /> Frete Grátis Disponível
              </span>
            </div>

            {/* Direct WhatsApp Order */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-xs"
            >
              <div className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Comprar pelo WhatsApp (11) 94731-0000</span>
              </div>
              <span className="text-xs bg-emerald-700/80 px-2 py-0.5 rounded text-white font-normal">
                Atendimento Imediato
              </span>
            </a>

            {/* Direct Marketplace options */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {mlChannel && (
                <a
                  href={mlChannel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-[#FFE600] hover:bg-[#F3DC00] text-neutral-950 font-bold text-xs transition-colors shadow-xs"
                >
                  <MercadoLivreIcon className="w-4 h-4" />
                  <span>Mercado Livre</span>
                </a>
              )}
              {shopeeChannel && (
                <a
                  href={product.preferredMarketplace?.url || shopeeChannel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-[#EE4D2D] hover:bg-[#DE3C1C] text-white font-semibold text-xs transition-colors shadow-xs"
                >
                  <ShopeeIcon className="w-4 h-4" />
                  <span>Shopee</span>
                </a>
              )}
              {magaluChannel && (
                <a
                  href={magaluChannel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-[#0086FF] hover:bg-[#0073DC] text-white font-semibold text-xs transition-colors shadow-xs"
                >
                  <MagaLuIcon className="w-4 h-4" />
                  <span>MagaLu</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
