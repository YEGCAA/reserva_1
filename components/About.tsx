import React from 'react';
import { ASSETS } from '../constants';
import { Check } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const AMENITIES = [
  "Guarita / Portaria 24h",
  "Administração / Depósito",
  "Estacionamento para Visitantes",
  "Parque Infantil",
  "Academia Equipada",
  "Piscina Praia / Beach Club",
  "Área de Lazer Completa",
  "Segurança Total"
];

export const About: React.FC = () => {
  return (
    <section className="relative py-24 px-4 md:px-8">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${ASSETS.location.loc1}')` }}
      />
      <div className="absolute inset-0 z-0 bg-secondary/85 mix-blend-multiply" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn direction="right">
            <div>
              <h2 className="font-display mb-6 text-3xl font-bold text-white md:text-5xl">
                SOBRE O RESERVA DO SAL
              </h2>
              <div className="h-1 w-20 bg-primary mb-8"></div>
              <p className="text-lg leading-relaxed text-gray-200">
                O Reserva do Sal é um condomínio residencial exclusivo localizado no coração de Itapuã, 
                um dos bairros mais desejados de Salvador. Com apenas 31 casas, o empreendimento oferece 
                a combinação perfeita entre privacidade, segurança e contato com a natureza, a poucos 
                minutos das melhores praias da cidade.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={200}>
            <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm border border-white/20">
              <h3 className="mb-6 text-xl font-semibold text-primary">Destaques do Condomínio</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {AMENITIES.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      <Check size={14} />
                    </div>
                    <span className="text-gray-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};