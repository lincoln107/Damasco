import React, { useState } from 'react';
import { SIZE_TABLE } from '../data/products';
import { Ruler, Sparkles, CheckCircle2, HelpCircle } from 'lucide-react';
import { DamascoFruitLogo } from './Icons';

export function OversizeFitGuide() {
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [userWeight, setUserWeight] = useState<number>(75);

  const currentSizeData = SIZE_TABLE.find(s => s.size === selectedSize) || SIZE_TABLE[1];

  // Quick helper calculator based on weight
  const getCalculatedRecommendation = (weight: number) => {
    if (weight <= 68) return 'P';
    if (weight <= 80) return 'M';
    if (weight <= 92) return 'G';
    if (weight <= 104) return 'GG';
    return 'XGG';
  };

  const calculatedSize = getCalculatedRecommendation(userWeight);

  return (
    <section id="guia-medidas" className="py-14 sm:py-20 bg-[#F5F4F0] border-t border-[#EAE8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-orange-700 font-semibold mb-2">
            <DamascoFruitLogo className="w-4 h-4" />
            <span>Medidas Reais em Centímetros · Damasco</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#181A1F] tracking-tight mb-3">
            Guia de Modelagem & Tamanhos Oversized
          </h2>
          <p className="text-sm sm:text-base text-[#52525B]">
            A modelagem oversized Damasco possui medidas pensadas para o drapeado perfeito. Confira as dimensões para garantir o caimento ideal no seu corpo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Size Recommender */}
          <div className="lg:col-span-5 bg-white border border-[#EAE8E2] rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-2 text-orange-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Ruler className="w-4 h-4" />
              <span>Simulador de Caimento</span>
            </div>
            
            <h3 className="text-lg font-bold text-[#181A1F] mb-2">
              Descubra seu tamanho ideal
            </h3>
            <p className="text-xs text-[#52525B] mb-6">
              Arraste seu peso aproximado para descobrir a recomendação exata da nossa equipe:
            </p>

            {/* Slider */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#52525B]">Seu Peso:</span>
                <span className="text-base font-bold font-mono text-[#181A1F] tabular-nums">
                  {userWeight} kg
                </span>
              </div>
              <input
                type="range"
                min="48"
                max="125"
                value={userWeight}
                onChange={(e) => setUserWeight(Number(e.target.value))}
                className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
              />
              <div className="flex justify-between text-[11px] text-[#71717A] font-mono">
                <span>50kg</span>
                <span>75kg</span>
                <span>100kg</span>
                <span>120kg+</span>
              </div>
            </div>

            {/* Recommendation Result Card */}
            <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 mb-6">
              <div className="text-xs text-[#71717A] mb-1">
                Tamanho recomendado para corte oversized:
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold font-display text-orange-700">
                  Tamanho {calculatedSize}
                </span>
                <span className="text-xs text-[#71717A]">
                  (Caimento solto streetwear)
                </span>
              </div>
              <p className="text-[11px] text-[#52525B] mt-2 leading-relaxed">
                {calculatedSize === 'P' && 'Ideal para silhuetas mais compactas que buscam volume street sem sobrar no comprimento.'}
                {calculatedSize === 'M' && 'Tamanho versátil para a maioria dos adultos entre 69 e 80kg.'}
                {calculatedSize === 'G' && 'Excelente estrutura de ombro caído com peito folgado de 62cm.'}
                {calculatedSize === 'GG' && 'Volume streetwear autêntico com 65cm de largura de tórax.'}
                {calculatedSize === 'XGG' && 'Corte amplo extra espaçoso para máxima liberdade e conforto.'}
              </p>
            </div>

            {/* Tips for Men vs Women */}
            <div className="space-y-3 text-xs text-[#52525B] border-t border-[#EAE8E2] pt-4">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#181A1F]">Para Homens:</strong> Escolha seu tamanho normal para caimento solto e ombro caído.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#181A1F]">Para Mulheres:</strong> Fica com caimento boyfriend despojado. O tamanho P veste confortavelmente manequins 36 a 40.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Size Table with Tabular Numerals */}
          <div className="lg:col-span-7 bg-white border border-[#EAE8E2] rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-[#181A1F]">
                  Tabela Oficial de Medidas (cm)
                </h3>
                <p className="text-xs text-[#52525B]">
                  Medidas tiradas com a peça plana em superfície reta.
                </p>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[#FAF9F6] text-[#52525B] border border-[#EAE8E2]">
                100% Algodão 220g
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-[#52525B]">
                <thead>
                  <tr className="border-b border-[#EAE8E2] text-[#71717A] text-[11px] uppercase tracking-wider">
                    <th className="py-3 px-3 font-semibold">Tamanho</th>
                    <th className="py-3 px-3 font-semibold text-center">Tórax / Largura</th>
                    <th className="py-3 px-3 font-semibold text-center">Comprimento</th>
                    <th className="py-3 px-3 font-semibold text-center">Manga</th>
                    <th className="py-3 px-3 font-semibold">Peso Recomendado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE8E2]">
                  {SIZE_TABLE.map((row) => {
                    const isSelected = row.size === calculatedSize;
                    return (
                      <tr 
                        key={row.size}
                        onClick={() => setSelectedSize(row.size)}
                        className={`cursor-pointer transition-colors ${
                          isSelected ? 'bg-orange-50/80 font-semibold text-[#181A1F]' : 'hover:bg-neutral-50'
                        }`}
                      >
                        <td className="py-3.5 px-3">
                          <span className={`inline-flex items-center justify-center w-7 h-7 rounded-lg font-bold font-mono ${
                            isSelected ? 'bg-orange-600 text-white shadow-xs' : 'bg-neutral-100 text-[#181A1F]'
                          }`}>
                            {row.size}
                          </span>
                        </td>
                        <td className="py-3.5 px-3 text-center font-mono tabular-nums text-sm">
                          {row.chest} cm
                        </td>
                        <td className="py-3.5 px-3 text-center font-mono tabular-nums text-sm">
                          {row.length} cm
                        </td>
                        <td className="py-3.5 px-3 text-center font-mono tabular-nums text-sm">
                          {row.sleeve} cm
                        </td>
                        <td className="py-3.5 px-3 font-mono text-[#71717A]">
                          {row.recommendedWeight}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Visual Guide explanation */}
            <div className="mt-6 p-4 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#52525B]">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Em dúvida entre dois tamanhos? Escolha o maior para visual streetwear amplo, ou o menor para um corte mais tradicional.</span>
              </div>
              <a
                href="https://wa.me/5511947310000?text=Ol%C3%A1!%20Tenho%20d%C3%BAvida%20sobre%20qual%20tamanho%20de%20camiseta%20oversized%20escolher."
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap text-xs font-semibold text-orange-600 hover:text-orange-700 underline"
              >
                Fale com um consultor
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
