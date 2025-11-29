import React from 'react';
import { ShieldCheck, X, ExternalLink } from 'lucide-react';

export const CookiePolicyModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
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

export const CookieBanner: React.FC<{ onOpenPolicy: () => void, onAccept: () => void }> = ({ onOpenPolicy, onAccept }) => {
  return (
    <div className="fixed bottom-20 md:bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-5 duration-500">
        <div className="container mx-auto max-w-5xl bg-white/95 backdrop-blur-md border border-gray-200 shadow-2xl rounded-2xl p-4 md:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-600 flex-grow text-center sm:text-left">
                <p>
                    <span className="font-bold text-cds-blue">Valoramos tu privacidad.</span> Este sitio utiliza cookies propias y de terceros. 
                    <button onClick={onOpenPolicy} className="text-cds-orange font-bold hover:underline ml-1">Ver Política</button>.
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