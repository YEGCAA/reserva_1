import React, { useState } from 'react';
import { ASSETS } from '../constants';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'standard' | 'premium'>('standard');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState<string[]>([]);

  const standardImages = [
    { src: ASSETS.plants.f1, title: "Fachada Casa 1" },
    { src: ASSETS.plants.f2, title: "Fachada Casa 2" },
    { src: ASSETS.plants.f3, title: "Fachada Casa 3" },
    { src: ASSETS.plants.t123, title: "Planta Térreo" },
    { src: ASSETS.plants.s123, title: "Planta Superior" }
  ];

  const premiumImages = [
    { src: ASSETS.plants.f4, title: "Fachada Exclusiva" },
    { src: ASSETS.plants.t4, title: "Planta Térreo" },
    { src: ASSETS.plants.s4, title: "Planta Superior" }
  ];

  const handleImageClick = (images: typeof standardImages, index: number) => {
    setCurrentImages(images.map(img => img.src));
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  return (
    <section className="bg-white py-24 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h2 className="font-display mb-12 text-center text-3xl font-bold text-secondary md:text-4xl">
            CONHEÇA OS MODELOS
          </h2>
        </FadeIn>

        {/* Tabs */}
        <div className="mb-12 flex justify-center space-x-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('standard')}
            className={`pb-4 text-lg font-medium transition-colors ${
              activeTab === 'standard' 
                ? 'border-b-2 border-primary text-primary' 
                : 'text-gray-500 hover:text-secondary'
            }`}
          >
            Casas 1, 2 e 3
          </button>
          <button
            onClick={() => setActiveTab('premium')}
            className={`pb-4 text-lg font-medium transition-colors ${
              activeTab === 'premium' 
                ? 'border-b-2 border-primary text-primary' 
                : 'text-gray-500 hover:text-secondary'
            }`}
          >
            Casa 4 (Premium)
          </button>
        </div>

        {/* Content */}
        <div className="min-h-[400px]">
          {activeTab === 'standard' ? (
            <div className="animate-fade-in space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-secondary">MODELOS CLÁSSICOS</h3>
                <p className="mt-2 text-gray-600">Casas espaçosas com arquitetura moderna e funcional, pensadas para o conforto da sua família.</p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {standardImages.map((img, idx) => (
                  <div 
                    key={idx} 
                    className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md bg-light aspect-[4/3]"
                    onClick={() => handleImageClick(standardImages, idx)}
                  >
                    <img src={img.src} alt={img.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
                      <ZoomIn className="text-white opacity-0 transition-opacity group-hover:opacity-100" size={32} />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-center text-white backdrop-blur-sm">
                      {img.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="animate-fade-in space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-secondary">MODELO PREMIUM</h3>
                <p className="mt-2 text-gray-600">O ápice do condomínio, com design exclusivo, maior área privativa e diferenciais únicos.</p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {premiumImages.map((img, idx) => (
                  <div 
                    key={idx} 
                    className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md bg-light aspect-[4/3]"
                    onClick={() => handleImageClick(premiumImages, idx)}
                  >
                    <img src={img.src} alt={img.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
                      <ZoomIn className="text-white opacity-0 transition-opacity group-hover:opacity-100" size={32} />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-center text-white backdrop-blur-sm">
                      {img.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4" onClick={closeLightbox}>
          <button className="absolute top-4 right-4 text-white hover:text-primary transition-colors">
            <X size={40} />
          </button>
          
          <button onClick={prevImage} className="absolute left-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 md:left-8">
            <ChevronLeft size={40} />
          </button>
          
          <img 
            src={currentImages[currentImageIndex]} 
            alt="Ampliada" 
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-md shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          />
          
          <button onClick={nextImage} className="absolute right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 md:right-8">
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
};