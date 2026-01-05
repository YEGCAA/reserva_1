import React from 'react';
import { ASSETS } from '../constants';
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8 text-light">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 md:grid-cols-3 mb-16">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <img src={ASSETS.logo} alt="Reserva do Sal" className="h-16 mb-6 opacity-90" />
            <p className="text-gray-300 max-w-xs leading-relaxed">
              Condomínio residencial exclusivo em Itapuã. O equilíbrio perfeito entre a sofisticação e a natureza.
            </p>
            <div className="mt-8 flex gap-4">
              <SocialIcon icon={<Instagram size={20} />} />
              <SocialIcon icon={<Facebook size={20} />} />
              <SocialIcon icon={<Linkedin size={20} />} />
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white font-display">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="mt-1 shrink-0 text-primary" size={20} />
                <span>R. Passárgada - Itapuã<br/>Salvador - BA, 41600-090</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="shrink-0 text-primary" size={20} />
                <span>(71) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="shrink-0 text-primary" size={20} />
                <span>contato@reservadosal.com.br</span>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div>
             <h4 className="text-xl font-bold mb-6 text-white font-display">Institucional</h4>
             <ul className="space-y-3 text-gray-300">
               <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
               <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
               <li><a href="#" className="hover:text-primary transition-colors">Trabalhe Conosco</a></li>
               <li><a href="#" className="hover:text-primary transition-colors">Portal do Cliente</a></li>
             </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2024 Reserva do Sal. Todos os direitos reservados.</p>
          <p>CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <a 
    href="#" 
    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary"
  >
    {icon}
  </a>
);