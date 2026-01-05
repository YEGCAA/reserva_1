import React from 'react';
import { Shield, Waves, Dumbbell, Gamepad2, Car, Users, TreePine, Volleyball } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const Differentials: React.FC = () => {
  return (
    <section className="bg-white py-24 px-4 md:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold text-secondary md:text-4xl">
            INFRAESTRUTURA PARA SEU BEM-ESTAR
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Security Column */}
          <FadeIn direction="right" className="bg-light p-8 md:p-12 rounded-2xl flex flex-col justify-center">
            <div className="inline-block p-4 bg-primary/10 rounded-full w-fit mb-6 text-primary">
              <Shield size={48} />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-4">Segurança 24 Horas</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Sua tranquilidade é nossa prioridade. O Reserva do Sal conta com um sistema integrado de segurança para que você e sua família vivam sem preocupações.
            </p>
            <ul className="space-y-4">
               {['Guarita com portaria 24h', 'Controle de acesso rigoroso', 'Administração dedicada', 'Monitoramento por câmeras'].map((item, idx) => (
                 <li key={idx} className="flex items-center gap-3 text-secondary font-medium">
                   <div className="h-2 w-2 rounded-full bg-primary" />
                   {item}
                 </li>
               ))}
            </ul>
          </FadeIn>

          {/* Leisure Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Waves, label: "Piscina Praia" },
              { icon: Dumbbell, label: "Academia" },
              { icon: Gamepad2, label: "Parque Infantil" },
              { icon: Car, label: "Visitantes" },
              { icon: Users, label: "Administração" },
              { icon: TreePine, label: "Áreas Verdes" },
              { icon: Volleyball, label: "Lazer Completo" },
              { icon: Shield, label: "Segurança" },
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 50} className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all flex flex-col items-center justify-center text-center gap-3">
                <div className="text-primary">
                  <item.icon size={32} />
                </div>
                <span className="font-semibold text-secondary text-sm md:text-base">{item.label}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};