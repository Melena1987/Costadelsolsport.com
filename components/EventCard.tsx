import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Clock, ArrowRight, ExternalLink, Trophy, CalendarPlus, Download } from 'lucide-react';
import { SportEvent } from '../types';

interface EventCardProps {
  event: SportEvent;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const isPast = event.status === 'past';
  const [showCalendarMenu, setShowCalendarMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowCalendarMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // --- Calendar Generators ---
  const generateGoogleUrl = () => {
    const details = `${event.description}\n\nMás info: ${event.url}`;
    const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE";
    const params = new URLSearchParams();
    params.append('text', event.title);
    params.append('dates', `${event.isoStart}/${event.isoEnd}`);
    params.append('details', details);
    params.append('location', `${event.venue}, ${event.location}`);
    return `${baseUrl}&${params.toString()}`;
  };

  const downloadIcs = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Costa del Sol Sport//NONSGML v1.0//EN',
      'BEGIN:VEVENT',
      `UID:${event.id}@costadelsolsport.com`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:.]/g, '')}`,
      `DTSTART;VALUE=${event.isoStart.includes('T') ? 'DATE-TIME' : 'DATE'}:${event.isoStart.replace(/[-:]/g, '')}`,
      `DTEND;VALUE=${event.isoEnd.includes('T') ? 'DATE-TIME' : 'DATE'}:${event.isoEnd.replace(/[-:]/g, '')}`,
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.description}\\n\\n${event.url}`,
      `LOCATION:${event.venue}, ${event.location}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${event.title.replace(/\s+/g, '_')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
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
      <div className="p-6 flex flex-col flex-grow relative">
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
          
          {!isPast && event.time && (
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

          {/* Extra Info (Highlighted) */}
          {event.extraInfo && (
            <div className="flex items-start gap-3">
              <Trophy className="w-5 h-5 text-cds-orange shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs text-gray-400 font-semibold uppercase">{event.extraInfo.label}</span>
                <span className="text-sm font-medium text-gray-800">{event.extraInfo.value}</span>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {!isPast && (
            <div className="relative" ref={menuRef}>
              <button 
                onClick={() => setShowCalendarMenu(!showCalendarMenu)}
                className="h-full px-4 rounded-lg border-2 border-cds-orange/20 text-cds-orange hover:bg-orange-50 hover:border-cds-orange transition-all duration-300 flex items-center justify-center"
                aria-label="Añadir al calendario"
                title="Añadir al calendario"
              >
                <CalendarPlus className="w-5 h-5" />
              </button>

              {/* Calendar Dropdown */}
              {showCalendarMenu && (
                <div className="absolute bottom-full left-0 mb-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 p-1 z-20 animate-in fade-in zoom-in-95 duration-200">
                   <a 
                     href={generateGoogleUrl()} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                     onClick={() => setShowCalendarMenu(false)}
                   >
                     <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg" alt="G" className="w-4 h-4" />
                     Google Calendar
                   </a>
                   <button 
                     onClick={() => { downloadIcs(); setShowCalendarMenu(false); }}
                     className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors text-left"
                   >
                     <Download className="w-4 h-4 text-gray-500" />
                     Outlook / Apple (iCal)
                   </button>
                </div>
              )}
            </div>
          )}

          <a 
            href={event.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex-grow flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-all duration-300 ${
              isPast 
                ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' 
                : 'bg-cds-blue text-white hover:bg-cds-orange shadow-lg hover:shadow-orange-500/30'
            }`}
          >
            {isPast ? 'Ver Resultados' : 'Más Información'}
            {isPast ? <ExternalLink className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </a>
        </div>
      </div>
    </div>
  );
};