import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Location } from './components/Location';
import { Investment } from './components/Investment';
import { Differentials } from './components/Differentials';
import { ContactForm } from './components/ContactForm';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <main className="min-h-screen w-full bg-light font-sans text-dark antialiased">
      <Hero />
      <Features />
      <About />
      <Gallery />
      <Location />
      <Investment />
      <Differentials />
      <ContactForm />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default App;