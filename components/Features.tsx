import React from 'react';
import { Home, TrendingUp, MapPin } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const Features: React.FC = () => {
  return (
    <section id="details" className="bg-light py-20 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h2 className="font-display mb-16 text-center text-3xl font-bold text-secondary md:text-4xl">
            UM REFÚGIO EXCLUSIVO EM ITAPUÃ
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <FeatureCard 
            icon={<Home size={48} />}
            title="APENAS 31 CASAS"
            description="Um condomínio pensado para quem busca privacidade e sofisticação em cada detalhe."
            delay={100}
          />
          <FeatureCard 
            icon={<TrendingUp size={48} />}
            title="34% DE VALORIZAÇÃO"
            description="No pré-lançamento com valor estimado de mercado de R$ 2.846.895,84."
            delay={200}
          />
          <FeatureCard 
            icon={<MapPin size={48} />}
            title="ITAPUÃ PRIVILEGIADO"
            description="Localização estratégica próximo ao Condomínio Quatro Rodas e Hotel Deville."
            delay={300}
          />
        </div>

        <div className="mt-12 text-center">
            <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-primary font-semibold hover:text-accent underline underline-offset-4 transition-colors"
            >
                QUERO MAIS INFORMAÇÕES
            </button>
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: number }> = ({ icon, title, description, delay }) => (
  <FadeIn delay={delay} className="h-full">
    <div className="flex h-full flex-col items-center rounded-xl bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-6 text-secondary">
        {icon}
      </div>
      <h3 className="mb-4 text-xl font-bold text-primary">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </FadeIn>
);