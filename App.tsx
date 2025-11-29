import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, ArrowRight, ExternalLink, Trophy, History, X, ShieldCheck, Instagram, Facebook } from 'lucide-react';
import { EVENTS } from './constants';
import { SportEvent, EventStatus } from './types';

// --- Sub-components ---

const Logo: React.FC<{ className?: string }> = ({ className = "h-14 md:h-16 w-auto" }) => (
  <img 
    src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764409964183_Costadelsolsport_.com__5000_x_5000_px___1_.png?alt=media&token=3b381198-5a2d-4e99-ad85-49d33beae15b"
    alt="Costa del Sol Sport"
    className={`${className} object-contain`}
  />
);

const EventCard: React.FC<{ event: SportEvent }> = ({ event }) => {
  const isPast = event.status === 'past';
  
  return (
    <div className={`group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full ${isPast ? 'opacity-90 hover:opacity-100' : ''}`}>
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={event.imageUrl} 
          alt={event.title} 
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${isPast ? 'grayscale' : ''}`}
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-cds-blue shadow-sm uppercase tracking-wider">
          {event.category}
        </div>
        {isPast && (
          <div className="absolute inset-0 bg-gray-900/40 flex items-center justify-center">
            <span className="bg-white/90 text-gray-800 px-4 py-1 rounded-md font-bold uppercase tracking-widest text-sm shadow-lg">
              Finalizado
            </span>
          </div>
        )}
      </div>

      {/* Content Body */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-cds-blue mb-3 group-hover:text-cds-orange transition-colors line-clamp-2">
          {event.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
          {event.description}
        </p>

        {/* Info Grid */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6 space-y-3 border border-gray-100">
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-cds-orange shrink-0 mt-0.5" />
            <div>
              <span className="block text-xs text-gray-400 font-semibold uppercase">Fecha</span>
              <span className="text-sm font-medium text-gray-800">{event.date}</span>
            </div>
          </div>
          
          {!isPast && (
             <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-cds-orange shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs text-gray-400 font-semibold uppercase">Horario</span>
                <span className="text-sm font-medium text-gray-800">{event.time}</span>
              </div>
            </div>
          )}

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-cds-orange shrink-0 mt-0.5" />
            <div>
              <span className="block text-xs text-gray-400 font-semibold uppercase">Ubicación</span>
              <span className="text-sm font-medium text-gray-800">{event.venue}</span>
              <span className="text-xs text-gray-500 block">{event.location}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <a 
          href={event.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-all duration-300 ${
            isPast 
              ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' 
              : 'bg-cds-blue text-white hover:bg-cds-orange shadow-lg hover:shadow-orange-500/30'
          }`}
        >
          {isPast ? 'Ver Resultados' : 'Sitio Oficial'}
          {isPast ? <ExternalLink className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
        </a>
      </div>
    </div>
  );
};

const SectionHeader: React.FC<{ 
  title: string; 
  subtitle: string; 
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}> = ({ title, subtitle, icon, isActive, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full md:w-auto flex flex-col items-center md:items-start p-6 rounded-2xl transition-all duration-300 border-2 text-left group ${
      isActive 
        ? 'bg-white border-cds-orange shadow-lg scale-[1.02]' 
        : 'bg-white/50 border-transparent hover:bg-white hover:border-gray-200'
    }`}
  >
    <div className={`p-3 rounded-full mb-3 transition-colors ${isActive ? 'bg-orange-100 text-cds-orange' : 'bg-gray-100 text-gray-500 group-hover:text-cds-blue'}`}>
      {icon}
    </div>
    <h2 className={`text-xl font-bold mb-1 transition-colors ${isActive ? 'text-cds-blue' : 'text-gray-600'}`}>
      {title}
    </h2>
    <p className="text-sm text-gray-500">
      {subtitle}
    </p>
  </button>
);

const CookiePolicyModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col animate-in zoom-in-95 duration-200">
        <div className="p-4 md:p-6 border-b border-gray-100 flex justify-between items-center bg-white rounded-t-xl z-10 sticky top-0">
          <div className="flex items-center gap-3">
             <ShieldCheck className="w-6 h-6 text-cds-orange" />
             <h2 className="text-xl md:text-2xl font-bold text-cds-blue">Política de Cookies</h2>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-800"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 md:p-8 overflow-y-auto text-gray-700 space-y-6 text-sm md:text-base leading-relaxed">
          <h3 className="font-bold text-lg text-cds-blue">POLÍTICA DE COOKIES DE COSTADELSOLSPORT.COM</h3>
          <p className="text-gray-500 text-xs uppercase tracking-wide">Fecha de última actualización: 19 de agosto de 2025</p>
          
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900">¿Qué son las cookies?</h4>
            <p>Una cookie es un pequeño fichero de texto que un sitio web almacena en el navegador del usuario. Las cookies facilitan el uso y la navegación por una página web y son esenciales para el funcionamiento de internet, aportando innumerables ventajas en la prestación de servicios interactivos.</p>
            <p>Este sitio web, costadelsolsport.com, utiliza cookies y/o tecnologías similares que almacenan y recuperan información cuando navegas. En general, estas tecnologías pueden servir para finalidades muy diversas, como, por ejemplo, reconocerte como usuario, obtener información sobre tus hábitos de navegación, o personalizar la forma en que se muestra el contenido.</p>
          </div>

          <div className="space-y-4 bg-gray-50 p-5 rounded-lg border border-gray-100">
            <h4 className="font-bold text-gray-900">Información importante sobre la plataforma utilizada</h4>
            <p>Este sitio web ha sido creado utilizando la plataforma Gamma.app. Debido a las características técnicas actuales de esta plataforma, no es posible implementar un sistema de gestión de consentimiento (banner de cookies) que permita al usuario aceptar o rechazar las cookies de forma granular antes de su instalación.</p>
            <p>Las cookies que se describen a continuación, especialmente las analíticas, se instalan por defecto al acceder a nuestro sitio. Aunque trabajamos para que la plataforma nos ofrezca soluciones que permitan un control total al usuario, por ahora te ofrecemos esta política para que conozcas en detalle qué cookies se utilizan y cómo puedes gestionarlas a través de tu navegador.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-gray-900">Tipos de cookies utilizadas en este sitio web</h4>
            <p>A continuación, detallamos las cookies utilizadas en nuestro sitio web, distinguiendo según su finalidad y el gestor de las mismas.</p>
            
            <div className="pl-4 border-l-4 border-cds-blue/20 space-y-2">
                <p className="font-semibold text-cds-blue">A) Cookies Técnicas o Esenciales (Gestionadas por Gamma.app / Vercel)</p>
                <p>Estas cookies son estrictamente necesarias para que el sitio web funcione correctamente y no pueden ser desactivadas en nuestros sistemas. Normalmente, están configuradas para responder a acciones hechas por usted para recibir servicios, tales como la navegación en la página y el acceso a áreas seguras del sitio. Son indispensables para la navegación y la correcta visualización del contenido.</p>
                <ul className="list-disc list-inside text-gray-600 pl-2">
                    <li><span className="font-medium">Finalidad:</span> Garantizar el correcto funcionamiento técnico del sitio, controlar el tráfico y la comunicación de datos, y mantener la seguridad.</li>
                    <li><span className="font-medium">Cookies específicas:</span> Pueden incluir cookies con identificadores de sesión (ej. __Host-, __Secure-, vercel-, gamma-session).</li>
                    <li><span className="font-medium">Base legal:</span> No requieren consentimiento del usuario, ya que son indispensables para la prestación del servicio.</li>
                </ul>
            </div>

            <div className="pl-4 border-l-4 border-cds-orange/20 space-y-2 mt-4">
                <p className="font-semibold text-cds-orange">B) Cookies de Análisis o Medición (Gestionadas por Gamma.app / Vercel)</p>
                <p>Estas cookies son utilizadas por la plataforma Gamma.app y su infraestructura (Vercel) para realizar un seguimiento del número de visitantes y su comportamiento en el sitio web. La información recogida es agregada y anónima, y nos permite entender cómo interactúan los usuarios con nuestra web para así poder introducir mejoras.</p>
                <ul className="list-disc list-inside text-gray-600 pl-2">
                    <li><span className="font-medium">Finalidad:</span> Medir y analizar el tráfico del sitio web (páginas visitadas, duración de la visita, tipo de navegador, etc.) para mejorar la oferta de contenidos y servicios.</li>
                    <li><span className="font-medium">Cookies específicas:</span> Pueden incluir cookies como _ga, _gid (si usan Google Analytics integrado) o cookies propias de Vercel Analytics como vc_anid.</li>
                    <li><span className="font-medium">Base legal:</span> Requieren tu consentimiento. Como se ha explicado, debido a las limitaciones de la plataforma, estas cookies se instalan al acceder al sitio. Si no estás de acuerdo, te explicamos cómo deshabilitarlas en el siguiente apartado.</li>
                </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-gray-900">¿Cómo puedes gestionar, deshabilitar o eliminar las cookies?</h4>
            <p>Dado que no podemos ofrecer un panel de configuración en la web, la única forma de gestionar estas cookies es a través de la configuración de tu propio navegador web. Tienes la opción de permitir, bloquear o eliminar las cookies instaladas en tu equipo.</p>
            <p>Si bloqueas la instalación de cookies en tu navegador, es posible que no puedas acceder a algunas de las secciones de nuestra web o que la experiencia de navegación se vea limitada.</p>
            <p>A continuación, te proporcionamos los enlaces a las instrucciones de los navegadores más populares para que puedas gestionar las cookies:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-cds-blue font-medium">
                <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">Google Chrome <ExternalLink className="w-3 h-3"/></a></li>
                <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">Mozilla Firefox <ExternalLink className="w-3 h-3"/></a></li>
                <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">Microsoft Edge <ExternalLink className="w-3 h-3"/></a></li>
                <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">Safari (macOS) <ExternalLink className="w-3 h-3"/></a></li>
                <li><a href="https://support.apple.com/es-es/HT201265" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">Safari (iOS/iPadOS) <ExternalLink className="w-3 h-3"/></a></li>
            </ul>
          </div>

          <div className="space-y-4">
             <h4 className="font-bold text-gray-900">Transferencias internacionales de datos</h4>
             <p>La información obtenida por algunas de estas cookies puede ser procesada por proveedores de servicios (como Vercel Inc.) ubicados en Estados Unidos. Estas transferencias se realizan bajo el marco de adecuación del "EU-U.S. Data Privacy Framework", garantizando un nivel de protección de datos personales equivalente al europeo.</p>
          </div>

          <div className="space-y-4">
             <h4 className="font-bold text-gray-900">Actualizaciones de la Política de Cookies</h4>
             <p>Nos reservamos el derecho a modificar esta Política de Cookies en función de nuevas exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos. Las actualizaciones se publicarán en este mismo sitio web.</p>
          </div>

          <div className="space-y-4">
             <h4 className="font-bold text-gray-900">Contacto</h4>
             <p>Si tienes alguna duda sobre esta Política de Cookies, puedes contactar con nosotros a través de la información de contacto disponible en este sitio web.</p>
          </div>
        </div>
        
        <div className="p-4 border-t border-gray-100 bg-gray-50 rounded-b-xl flex justify-end sticky bottom-0 z-10">
            <button 
                onClick={onClose}
                className="bg-cds-blue text-white px-6 py-2 rounded-lg font-semibold hover:bg-cds-orange transition-colors"
            >
                Entendido
            </button>
        </div>
      </div>
    </div>
  );
};

const CookieBanner: React.FC<{ onOpenPolicy: () => void, onAccept: () => void }> = ({ onOpenPolicy, onAccept }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-5 duration-500">
        <div className="container mx-auto max-w-5xl bg-white/95 backdrop-blur-md border border-gray-200 shadow-2xl rounded-2xl p-4 md:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-600 flex-grow text-center sm:text-left">
                <p>
                    <span className="font-bold text-cds-blue">Valoramos tu privacidad.</span> Este sitio utiliza cookies propias y de terceros para mejorar tu experiencia de usuario. 
                    Puedes consultar nuestra <button onClick={onOpenPolicy} className="text-cds-orange font-bold hover:underline">Política de Cookies</button> para más información.
                </p>
            </div>
            <div className="flex gap-3 shrink-0">
                 <button 
                    onClick={onAccept}
                    className="bg-cds-blue text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-blue-900/10 hover:shadow-blue-900/20 hover:bg-cds-orange transition-all duration-300 transform hover:-translate-y-0.5"
                >
                    Aceptar
                </button>
            </div>
        </div>
    </div>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<EventStatus>('upcoming');
  const [showPolicy, setShowPolicy] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

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
    <div className="min-h-screen bg-gray-50 text-slate-800 font-sans selection:bg-orange-200 flex flex-col">
      
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo />
          <nav className="flex gap-6 text-sm font-semibold text-gray-600">
            <button 
              onClick={() => setActiveTab('upcoming')}
              className={`hover:text-cds-orange transition-colors ${activeTab === 'upcoming' ? 'text-cds-orange' : ''}`}
            >
              Agenda
            </button>
            <button 
              onClick={() => setActiveTab('past')}
              className={`hover:text-cds-orange transition-colors ${activeTab === 'past' ? 'text-cds-orange' : ''}`}
            >
              Histórico
            </button>
            <button onClick={() => setShowPolicy(true)} className="hover:text-cds-orange transition-colors">Cookies</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
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

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-12 -mt-8 relative z-20 flex-grow">
        
        {/* Navigation Tabs (Visual Cards) */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
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

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            
            <div className="flex flex-col items-center md:items-start gap-4">
              <Logo className="h-24 w-auto mb-2" />
              
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/costadelsolsport_com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-2.5 rounded-full text-gray-600 hover:bg-cds-orange hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61579862061125" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-2.5 rounded-full text-gray-600 hover:bg-cds-blue hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="text-center md:text-right text-gray-500 text-sm flex flex-col items-center md:items-end gap-1">
              <p>&copy; {new Date().getFullYear()} Costa del Sol Sport.</p>
              <p>Promoviendo el deporte de élite en Andalucía.</p>
              <button 
                onClick={() => setShowPolicy(true)} 
                className="text-gray-400 hover:text-cds-orange transition-colors text-xs mt-2 underline decoration-gray-300 underline-offset-4"
              >
                Política de Cookies
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Overlays */}
      {showPolicy && <CookiePolicyModal onClose={() => setShowPolicy(false)} />}
      {showBanner && !showPolicy && <CookieBanner onOpenPolicy={() => setShowPolicy(true)} onAccept={handleAcceptCookies} />}

    </div>
  );
};

export default App;