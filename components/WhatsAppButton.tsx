import React from 'react';
import { MessageCircle } from 'lucide-react';
import { LINKS } from '../constants';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110 animate-pulse-slow group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 whitespace-nowrap rounded bg-dark px-3 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
        Fale conosco
      </span>
    </a>
  );
};