import React from 'react';
import { ASSETS } from '../constants';

export const Hero: React.FC = () => {
  const scrollToContent = () => {
    document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={ASSETS.plants.f4}
      >
        <source src={ASSETS.heroVideo} type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/50 via-black/20 to-black/50" />



      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        
        {/* Main Logo replacing Title */}
        <div className="animate-fade-in-down mb-8">
          <img 
            src={ASSETS.logo} 
            alt="Reserva do Sal" 
            className="mx-auto w-64 md:w-96 drop-shadow-2xl"
          />
        </div>
        
        <p className="mb-10 max-w-2xl text-lg font-light md:text-2xl text-gray-100">
          Viva a exclusividade de Itapuã em harmonia com a natureza
        </p>

        <div className="mb-12 flex flex-col gap-4 md:flex-row md:gap-6">
          <Badge text="34% DE VALORIZAÇÃO*" />
          <Badge text="31 CASAS EXCLUSIVAS" />
          <Badge text="ITAPUÃ - SALVADOR/BA" />
        </div>

        <button 
          onClick={scrollToContent}
          className="group relative overflow-hidden rounded-md bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-accent hover:scale-105"
        >
          <span className="relative z-10">Conheça o Empreendimento</span>
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

const Badge: React.FC<{ text: string }> = ({ text }) => (
  <div className="rounded-full border border-white/30 bg-white/10 px-6 py-2 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-white/20">
    {text}
  </div>
);