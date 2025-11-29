import React from 'react';
import { ChevronUp } from 'lucide-react';

interface HeroProps {
  onDismiss: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDismiss }) => {
  return (
    <section className="bg-cds-blue text-white py-12 md:py-20 relative overflow-hidden animate-in fade-in duration-500">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cds-orange rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 md:mb-6 leading-tight">
          Agenda Deportiva Profesional <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
            de la Costa del Sol
          </span>
        </h1>
        <p className="text-base md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed font-light mb-8">
          Tu guía completa de eventos deportivos de élite en la Costa del Sol. 
          Descubre las competiciones profesionales más emocionantes que tendrán lugar en este paraíso deportivo mediterráneo.
        </p>

        {/* Dismiss Button */}
        <button 
          onClick={onDismiss}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 transition-all text-sm font-medium text-blue-50 hover:text-white group"
          aria-label="Ocultar presentación"
        >
          <span className="uppercase tracking-wide text-xs">Ocultar presentación</span>
          <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};