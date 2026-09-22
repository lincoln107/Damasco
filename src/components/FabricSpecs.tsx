import React from 'react';
import { Layers, ShieldCheck, RefreshCw, Feather, Scissors, Check } from 'lucide-react';
import { DamascoFruitLogo } from './Icons';

export function FabricSpecs() {
  const specs = [
    {
      title: 'Gramatura Heavyweight 220g/m²',
      description: 'Estrutura encorpada que garante caimento reto impecável. Não marca o corpo e possui zero transparência tanto nas cores claras quanto escuras.',
      icon: <Layers className="w-5 h-5 text-orange-400" />,
    },
    {
      title: 'Gola Canelada 2x1 de 3cm',
      description: 'Gola grossa reforçada com ribana canelada 2x1 de alta densidade. Não deforma e não esgarça mesmo após dezenas de ciclos de lavagem.',
      icon: <Scissors className="w-5 h-5 text-orange-400" />,
    },
    {
      title: '100% Algodão Penteado 26.1',
      description: 'Fibras longas selecionadas livres de impurezas. Toque aveludado superior, alta durabilidade e respirabilidade natural para uso diário.',
      icon: <Feather className="w-5 h-5 text-orange-400" />,
    },
    {
      title: 'Costura Ombro a Ombro Reforçada',
      description: 'Pesponto duplo e fita de reforço interno de viés de ponta a ponta, suportando o peso do tecido encorpado sem descosturar.',
      icon: <ShieldCheck className="w-5 h-5 text-orange-400" />,
    },
  ];

  return (
    <section id="qualidade" className="py-14 sm:py-20 bg-[#FBFBFA] border-t border-[#EAE8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-orange-700 font-semibold mb-2">
            <DamascoFruitLogo className="w-4 h-4" />
            <span>Padrão Construtivo Damasco</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#181A1F] tracking-tight mb-3">
            Por Que a Camiseta Oversized Damasco é Diferente?
          </h2>
          <p className="text-sm sm:text-base text-[#52525B]">
            A maioria das marcas vende camisetas normais de tamanho maior como se fossem oversized. Nós desenvolvemos uma modelagem exclusiva do zero com malha pesada.
          </p>
        </div>

        {/* Feature Comparison Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Traditional Tee */}
          <div className="p-6 rounded-2xl bg-[#F5F4F0] border border-[#EAE8E2]">
            <div className="text-xs font-semibold text-[#71717A] uppercase tracking-wider mb-2">
              Camiseta Comum do Mercado
            </div>
            <h3 className="text-lg font-bold text-[#181A1F] mb-4">
              Malha Leve Convencional (140g - 160g)
            </h3>
            <ul className="space-y-3 text-xs text-[#52525B]">
              <li className="flex items-center gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                Tecido fino que marca e fica transparente ao sol
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                Gola fina de 1,5cm que esgarça e enrola na primeira lavagem
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                Apenas tamanho ampliado sem ajuste de ombro e manga
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                Encolhe e perde o alinhamento rapidamente
              </li>
            </ul>
          </div>

          {/* Our Oversized Tee */}
          <div className="p-6 rounded-2xl bg-white border-2 border-orange-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] relative overflow-hidden">
            <div className="text-xs font-semibold text-orange-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <DamascoFruitLogo className="w-3.5 h-3.5" />
              <span>Modelagem Damasco Oversized</span>
            </div>
            <h3 className="text-lg font-bold text-[#181A1F] mb-4">
              Heavyweight Autêntica (220g/m²)
            </h3>
            <ul className="space-y-3 text-xs text-[#52525B]">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-[#181A1F] font-medium">Malha encorpada pesada com drapeado reto e caimento estruturado</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-[#181A1F] font-medium">Gola canelada grossa de 3cm que permanece firme para sempre</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-[#181A1F] font-medium">Ombro deslocado (drop-shoulder) e mangas amplas até o cotovelo</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-[#181A1F] font-medium">Tecido pré-lavado e bio-polido: toque macio e sem encolhimento</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {specs.map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-[#EAE8E2] hover:border-neutral-400 transition-colors shadow-xs">
              <div className="p-2.5 rounded-xl bg-orange-50 w-fit mb-3 text-orange-600">
                {item.icon}
              </div>
              <h4 className="text-sm font-bold text-[#181A1F] mb-2">
                {item.title}
              </h4>
              <p className="text-xs text-[#52525B] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
