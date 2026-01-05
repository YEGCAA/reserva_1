import React, { useEffect, useState, useRef } from 'react';
import { ASSETS } from '../constants';
import { Rocket, Construction, Home } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const Investment: React.FC = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = 34;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section className="relative py-24 px-4 md:px-8">
       {/* Background */}
       <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${ASSETS.location.loc2}')` }}
      />
      <div className="absolute inset-0 z-0 bg-secondary/90" />

      <div className="relative z-10 mx-auto max-w-7xl text-white">
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="font-display mb-4 text-3xl font-bold md:text-5xl">INVESTIMENTO QUE VALORIZA</h2>
            <div ref={counterRef} className="flex flex-col items-center justify-center py-8">
              <span className="font-display text-8xl font-bold text-white md:text-9xl tracking-tighter">
                {count}%
              </span>
              <span className="text-xl md:text-2xl font-light tracking-wide uppercase mt-2">
                De Valorização no Pré-Lançamento
              </span>
            </div>
            <p className="text-lg md:text-xl text-gray-300 font-medium bg-white/10 inline-block px-6 py-2 rounded-full backdrop-blur-sm">
              Valor Estimado: R$ 2.846.895,84
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-8 md:grid-cols-3 relative">
          {/* Timeline Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-white/20 z-0"></div>

          <InvestmentCard 
            icon={<Rocket size={32} />}
            title="NO LANÇAMENTO"
            items={[
              "Preço promocional exclusivo",
              "Condições especiais de pagamento",
              "Maior potencial de valorização"
            ]}
            delay={100}
          />
          <InvestmentCard 
            icon={<Construction size={32} />}
            title="DURANTE A OBRA"
            items={[
              "Valorização progressiva garantida",
              "Acompanhamento da construção",
              "Crescimento sólido do ativo"
            ]}
            delay={300}
          />
          <InvestmentCard 
            icon={<Home size={32} />}
            title="PRONTO PARA MORAR"
            items={[
              "Valor de mercado consolidado",
              "Pronto para usufruir ou alugar",
              "Retorno sobre investimento máximo"
            ]}
            delay={500}
          />
        </div>
      </div>
    </section>
  );
};

const InvestmentCard: React.FC<{ icon: React.ReactNode; title: string; items: string[]; delay: number }> = ({ icon, title, items, delay }) => (
  <FadeIn delay={delay} className="relative z-10 h-full">
    <div className="h-full rounded-xl border border-white/20 bg-white/5 p-8 backdrop-blur-md transition-transform hover:-translate-y-2">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-lg mx-auto md:mx-0">
        {icon}
      </div>
      <h3 className="mb-6 text-xl font-bold text-white text-center md:text-left">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start text-sm text-gray-200">
            <span className="mr-2 mt-1 block h-1.5 w-1.5 rounded-full bg-accent"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </FadeIn>
);