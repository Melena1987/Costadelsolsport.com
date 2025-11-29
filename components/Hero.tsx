import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="bg-cds-blue text-white py-16 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cds-orange rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Agenda Deportiva Profesional <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
            de la Costa del Sol
          </span>
        </h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed font-light">
          Tu guía completa de eventos deportivos de élite en la Costa del Sol. 
          Descubre las competiciones profesionales más emocionantes que tendrán lugar en este paraíso deportivo mediterráneo.
        </p>
      </div>
    </section>
  );
};