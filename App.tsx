import React, { useState, useEffect } from 'react';
import { Trophy, History, Calendar } from 'lucide-react';
import { EVENTS } from './constants';
import { EventStatus } from './types';

// Importing new modular components
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EventCard } from './components/EventCard';
import { SectionHeader } from './components/SectionHeader';
import { Footer } from './components/Footer';
import { MobileNav } from './components/MobileNav';
import { CookiePolicyModal, CookieBanner } from './components/CookieConsent';
import { JsonLd } from './components/JsonLd';

const App: React.FC = () => {
  // Determine initial tab based on data
  const [activeTab, setActiveTab] = useState<EventStatus>(() => {
    const hasUpcoming = EVENTS.some(event => event.status === 'upcoming');
    return hasUpcoming ? 'upcoming' : 'past';
  });

  const [showPolicy, setShowPolicy] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  // Dynamic Page Title for SEO
  useEffect(() => {
    const baseTitle = "Costa del Sol Sport | Agenda Deportiva";
    if (activeTab === 'upcoming') {
      document.title = `Próximos Eventos - ${baseTitle}`;
    } else {
      document.title = `Resultados y Eventos Pasados - ${baseTitle}`;
    }
  }, [activeTab]);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasConsented = localStorage.getItem('cds_cookie_consent');
    if (!hasConsented) {
      // Small delay for better UX on first load
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cds_cookie_consent', 'true');
    setShowBanner(false);
  };

  const filteredEvents = EVENTS.filter(event => event.status === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 text-slate-800 font-sans selection:bg-orange-200 flex flex-col pb-20 md:pb-0">
      
      {/* SEO: Inject Structured Data */}
      <JsonLd events={EVENTS} />

      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <Hero />

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-12 -mt-8 relative z-20 flex-grow">
        
        {/* Navigation Tabs (Visual Cards) - HIDDEN ON MOBILE */}
        <div className="hidden md:flex flex-col md:flex-row justify-center gap-4 mb-12">
          <SectionHeader 
            title="Próximos Eventos" 
            subtitle="Calendario de competiciones futuras"
            icon={<Trophy className="w-6 h-6" />}
            isActive={activeTab === 'upcoming'}
            onClick={() => setActiveTab('upcoming')}
          />
          <SectionHeader 
            title="Eventos ya celebrados" 
            subtitle="Archivo histórico de resultados"
            icon={<History className="w-6 h-6" />}
            isActive={activeTab === 'past'}
            onClick={() => setActiveTab('past')}
          />
        </div>

        {/* Mobile Section Title (Simple) */}
        <div className="md:hidden mb-6 flex items-center gap-2 text-cds-blue">
          {activeTab === 'upcoming' ? <Trophy className="w-5 h-5 text-cds-orange" /> : <History className="w-5 h-5 text-cds-orange" />}
          <h2 className="text-xl font-bold">
            {activeTab === 'upcoming' ? 'Próximos Eventos' : 'Histórico de Eventos'}
          </h2>
        </div>

        {/* Content Grid */}
        <div className="min-h-[400px]">
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
              <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-500">No hay eventos para mostrar</h3>
              <p className="text-gray-400">Vuelve a consultar más tarde.</p>
            </div>
          )}
        </div>

      </main>

      <Footer onOpenPolicy={() => setShowPolicy(true)} />

      <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Overlays */}
      {showPolicy && <CookiePolicyModal onClose={() => setShowPolicy(false)} />}
      {showBanner && !showPolicy && <CookieBanner onOpenPolicy={() => setShowPolicy(true)} onAccept={handleAcceptCookies} />}

    </div>
  );
};

export default App;