import React from 'react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative flex h-[60vh] items-center justify-center overflow-hidden bg-[#4a5348]">
      <div className="relative z-10 px-4 text-center text-white">
        <h2 className="font-display mb-4 text-4xl font-bold md:text-6xl">
          VIVA A EXCLUSIVIDADE
        </h2>
        <p className="mb-10 text-xl font-light tracking-wide">
          Apenas 31 casas. Reserve a sua.
        </p>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-primary px-10 py-4 text-lg font-bold uppercase tracking-wider text-white shadow-2xl transition-transform hover:scale-105 hover:bg-accent rounded-md"
        >
          Quero Conhecer
        </button>
      </div>
    </section>
  );
};