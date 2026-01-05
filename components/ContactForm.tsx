import React, { useState } from 'react';
import { ASSETS } from '../constants';
import { ContactFormValues } from '../types';
import { Check, Loader2 } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formType, setFormType] = useState<'morar' | 'investir'>('morar');
  const [formData, setFormData] = useState<Partial<ContactFormValues>>({
    newsletter: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, newsletter: e.target.checked }));
  };

  // Simple mask for phone
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    val = val.replace(/^(\d{2})(\d)/g, '($1) $2');
    val = val.replace(/(\d)(\d{4})$/, '$1-$2');
    setFormData(prev => ({ ...prev, phone: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({}); // Reset form logic here would usually clear inputs
  };

  return (
    <section id="contact" className="relative py-24 px-4 md:px-8">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${ASSETS.plants.f4}')` }}
      />
      <div className="absolute inset-0 bg-secondary/85" />

      <FadeIn className="relative z-10 mx-auto max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="bg-primary px-8 py-6 text-center text-white">
          <h2 className="font-display text-2xl font-bold md:text-3xl">AGENDE UMA VISITA</h2>
          <p className="mt-2 text-primary-100 opacity-90">Preencha o formulário e nossa equipe entrará em contato.</p>
        </div>

        <div className="p-8 md:p-12">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center text-center py-12">
              <div className="mb-6 rounded-full bg-green-100 p-4 text-green-600">
                <Check size={48} />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-secondary">Mensagem Enviada!</h3>
              <p className="text-gray-600">Obrigado pelo interesse no Reserva do Sal. Em breve um de nossos consultores entrará em contato.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-8 text-primary font-semibold hover:underline"
              >
                Enviar nova mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Toggle */}
              <div className="flex rounded-lg bg-gray-100 p-1">
                <button
                  type="button"
                  onClick={() => setFormType('morar')}
                  className={`flex-1 rounded-md py-2 text-sm font-semibold transition-all ${
                    formType === 'morar' ? 'bg-primary text-white shadow-sm' : 'text-gray-600 hover:text-secondary'
                  }`}
                >
                  QUERO MORAR
                </button>
                <button
                  type="button"
                  onClick={() => setFormType('investir')}
                  className={`flex-1 rounded-md py-2 text-sm font-semibold transition-all ${
                    formType === 'investir' ? 'bg-primary text-white shadow-sm' : 'text-gray-600 hover:text-secondary'
                  }`}
                >
                  QUERO INVESTIR
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">Nome Completo *</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name || ''}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">E-mail *</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email || ''}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">Telefone/WhatsApp *</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone || ''}
                      onChange={handlePhoneChange}
                      maxLength={15}
                      className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder="(XX) XXXXX-XXXX"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                   <div>
                    <label htmlFor="interest" className="mb-1 block text-sm font-medium text-gray-700">Interesse *</label>
                    <select
                      required
                      name="interest"
                      value={formData.interest || ''}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white"
                    >
                      <option value="">Selecione...</option>
                      <option value="visita">Visita ao empreendimento</option>
                      <option value="financiamento">Informações de financiamento</option>
                      <option value="plantas">Conhecer as plantas</option>
                      <option value="corretor">Falar com corretor</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="mb-1 block text-sm font-medium text-gray-700">Previsão de Compra</label>
                    <select
                      name="timeline"
                      value={formData.timeline || ''}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white"
                    >
                      <option value="">Selecione...</option>
                      <option value="imediata">Imediatamente</option>
                      <option value="3meses">Em até 3 meses</option>
                      <option value="6meses">Em até 6 meses</option>
                      <option value="pesquisa">Apenas pesquisando</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">Mensagem</label>
                  <textarea
                    rows={3}
                    name="message"
                    value={formData.message || ''}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Conte-nos mais sobre seu interesse..."
                  />
                </div>

                <div className="flex items-start">
                  <input
                    id="newsletter"
                    type="checkbox"
                    checked={formData.newsletter}
                    onChange={handleCheckboxChange}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
                    Aceito receber informações e novidades sobre o Reserva do Sal.
                  </label>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-primary py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-accent hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" /> Enviando...
                    </>
                  ) : (
                    "SOLICITAR CONTATO"
                  )}
                </button>
                <p className="mt-4 text-center text-xs text-gray-400">
                  Seus dados estão protegidos conforme a LGPD.
                </p>
              </div>
            </form>
          )}
        </div>
      </FadeIn>
    </section>
  );
};