import React, { useState } from 'react';
import { ASSETS, LINKS } from '../constants';
import { MapPin, ArrowRight, ArrowLeft, Umbrella, Building2, ShoppingBag, Hospital, Utensils } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const IMAGES = [ASSETS.location.loc1, ASSETS.location.loc2, ASSETS.location.loc3];
const POINTS = [
  { icon: Umbrella, name: "Praia de Itapuã", desc: "Proximidade Imediata" },
  { icon: Building2, name: "Hotel Deville", desc: "Referência em luxo" },
  { icon: HomeIcon, name: "Cond. Quatro Rodas", desc: "Vizinhança Premium" },
  { icon: ShoppingBag, name: "Comércio Local", desc: "Acesso fácil" },
  { icon: Hospital, name: "Serviços de Saúde", desc: "Infraestrutura completa" },
  { icon: Utensils, name: "Gastronomia", desc: "Restaurantes e lazer" },
];

function HomeIcon(props: any) { return <MapPin {...props} />; }

export const Location: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);

  return (
    <section className="bg-light py-24 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="text-center mb-16">
          <h2 className="font-display mb-4 text-3xl font-bold text-secondary md:text-4xl">
            LOCALIZAÇÃO PRIVILEGIADA
          </h2>
          <a 
            href={LINKS.maps} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium transition-colors"
          >
            <MapPin size={18} />
            R. Passárgada - Itapuã, Salvador - BA
          </a>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Carousel */}
          <FadeIn direction="right" className="relative overflow-hidden rounded-xl shadow-2xl aspect-[4/3] group">
             <div 
                className="absolute inset-0 flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
             >
               {IMAGES.map((src, idx) => (
                 <img key={idx} src={src} alt={`Localização ${idx + 1}`} className="h-full w-full min-w-full object-cover" />
               ))}
             </div>
             
             {/* Controls */}
             <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100">
               <ArrowLeft size={24} />
             </button>
             <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100">
               <ArrowRight size={24} />
             </button>
             
             {/* Dots */}
             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
               {IMAGES.map((_, idx) => (
                 <button 
                   key={idx}
                   onClick={() => setCurrentSlide(idx)}
                   className={`h-2 w-2 rounded-full transition-all ${currentSlide === idx ? 'bg-white w-6' : 'bg-white/50'}`}
                 />
               ))}
             </div>
          </FadeIn>

          {/* Points Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {POINTS.map((point, idx) => (
              <FadeIn key={idx} delay={idx * 100} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-primary mb-3">
                  <point.icon size={28} />
                </div>
                <h3 className="font-bold text-secondary mb-1">{point.name}</h3>
                <p className="text-sm text-gray-500">{point.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};