import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { WhatsAppIcon, MercadoLivreIcon, ShopeeIcon, DamascoFruitLogo } from './Icons';
import { ShoppingBag, Eye, ShieldCheck, Sparkles, Truck } from 'lucide-react';
import { getWhatsAppProductUrl, OFFICIAL_CHANNELS } from '../data/links';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
  onOpenSizeGuide: () => void;
}

export function ProductCatalog({ onSelectProduct, onOpenSizeGuide }: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<'todos' | 'masculino' | 'feminino' | 'unissex'>('todos');

  const filteredProducts = activeCategory === 'todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const mlChannel = OFFICIAL_CHANNELS.find(c => c.id === 'mercadolivre');
  const shopeeChannel = OFFICIAL_CHANNELS.find(c => c.id === 'shopp');

  return (
    <section id="colecao" className="py-14 sm:py-20 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-orange-700 font-semibold mb-2">
              <DamascoFruitLogo className="w-4 h-4" />
              <span>Coleção Oficial Damasco · Modelagem Boxy Streetwear</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#181A1F] tracking-tight">
              Catálogo de Camisetas Oversized
            </h2>
            <p className="text-sm text-[#52525B] mt-2 max-w-xl">
              Modelos masculinos, femininos e unissex com malha pesada 100% algodão 220g e <strong className="text-emerald-700">Frete Grátis</strong> para todo o Brasil.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#EFECE6] border border-[#E2DFD7] rounded-xl overflow-x-auto shrink-0">
            <button
              onClick={() => setActiveCategory('todos')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeCategory === 'todos'
                  ? 'bg-white text-[#181A1F] shadow-xs'
                  : 'text-[#71717A] hover:text-[#181A1F]'
              }`}
            >
              Todos ({PRODUCTS.length})
            </button>
            <button
              onClick={() => setActiveCategory('masculino')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeCategory === 'masculino'
                  ? 'bg-white text-[#181A1F] shadow-xs'
                  : 'text-[#71717A] hover:text-[#181A1F]'
              }`}
            >
              Masculino
            </button>
            <button
              onClick={() => setActiveCategory('feminino')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeCategory === 'feminino'
                  ? 'bg-white text-[#181A1F] shadow-xs'
                  : 'text-[#71717A] hover:text-[#181A1F]'
              }`}
            >
              Feminino
            </button>
            <button
              onClick={() => setActiveCategory('unissex')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeCategory === 'unissex'
                  ? 'bg-white text-[#181A1F] shadow-xs'
                  : 'text-[#71717A] hover:text-[#181A1F]'
              }`}
            >
              Unissex Estonado
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-white border border-[#EAE8E2] rounded-2xl overflow-hidden hover:border-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]"
            >
              {/* Product Image Slot */}
              <div 
                className="relative aspect-[4/3] bg-[#F5F4F0] overflow-hidden cursor-pointer"
                onClick={() => onSelectProduct(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md border border-[#EAE8E2] text-[10px] font-semibold text-orange-700 flex items-center gap-1 shadow-xs">
                    <DamascoFruitLogo className="w-3 h-3" />
                    {product.genderLabel}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-semibold flex items-center gap-1 shadow-xs">
                    <Truck className="w-3 h-3" />
                    Frete Grátis
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 rounded bg-white/90 backdrop-blur-md text-[10px] text-[#52525B] font-mono border border-[#EAE8E2] shadow-xs">
                    {product.grammage}
                  </span>
                </div>

                {/* Hover Quick Action */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 border border-[#EAE8E2] text-xs font-semibold text-[#181A1F] shadow-md backdrop-blur-xs">
                    <Eye className="w-3.5 h-3.5 text-orange-600" />
                    Ver Detalhes & Comprar
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  {/* Category & Color indicators */}
                  <div className="flex items-center justify-between text-xs text-[#71717A] mb-2">
                    <span className="capitalize">{product.category} · Boxy Cut</span>
                    <div className="flex items-center gap-1">
                      {product.colors.map(c => (
                        <span 
                          key={c.name} 
                          className="w-2.5 h-2.5 rounded-full border border-neutral-300" 
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        />
                      ))}
                    </div>
                  </div>

                  <h3 
                    className="text-base font-bold text-[#181A1F] mb-2 leading-snug line-clamp-2 hover:text-orange-600 cursor-pointer transition-colors"
                    onClick={() => onSelectProduct(product)}
                  >
                    {product.name}
                  </h3>

                  <p className="text-xs text-[#52525B] line-clamp-2 mb-3 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div>
                  {/* Sizes Available */}
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-[11px] text-[#71717A] mr-1">Tam:</span>
                    {product.sizes.map(s => (
                      <span key={s} className="px-1.5 py-0.5 rounded bg-neutral-100 text-[10px] font-mono text-[#52525B] border border-neutral-200/60">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Price & Free shipping label */}
                  <div className="mb-4">
                    <div className="flex items-baseline justify-between">
                      <div className="text-xl font-bold font-mono text-[#181A1F] tabular-nums">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </div>
                      {product.originalPrice && (
                        <span className="text-xs text-neutral-400 line-through font-mono">
                          R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-[11px] mt-0.5">
                      <span className="text-[#71717A] font-mono">{product.installments}</span>
                      <span className="text-emerald-700 font-semibold flex items-center gap-0.5">
                        <Truck className="w-3 h-3" /> Frete Grátis
                      </span>
                    </div>
                  </div>

                  {/* Fast Action Buttons */}
                  <div className="space-y-2 pt-2 border-t border-[#EAE8E2]">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="w-full py-2.5 px-3 rounded-lg bg-[#181A1F] hover:bg-neutral-800 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Comprar / Escolher Opções</span>
                    </button>

                    <div className="grid grid-cols-2 gap-1.5">
                      <a
                        href={getWhatsAppProductUrl(product.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-1.5 px-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-[11px] font-medium transition-colors flex items-center justify-center gap-1"
                        title="Comprar no WhatsApp com Frete Grátis"
                      >
                        <WhatsAppIcon className="w-3 h-3 shrink-0" />
                        <span>WhatsApp</span>
                      </a>

                      <a
                        href={product.preferredMarketplace?.url || mlChannel?.url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-1.5 px-2 rounded-lg bg-neutral-50 hover:bg-neutral-100 text-neutral-800 border border-neutral-200 text-[11px] font-medium transition-colors flex items-center justify-center gap-1 truncate"
                        title="Comprar no Marketplace"
                      >
                        {product.preferredMarketplace?.name === 'Shopee' ? (
                          <ShopeeIcon className="w-3 h-3 text-orange-600 shrink-0" />
                        ) : (
                          <MercadoLivreIcon className="w-3 h-3 shrink-0" />
                        )}
                        <span className="truncate">{product.preferredMarketplace?.name || 'Mercado Livre'}</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
