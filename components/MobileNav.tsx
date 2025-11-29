import React from 'react';
import { Trophy, History } from 'lucide-react';
import { EventStatus } from '../types';

interface MobileNavProps {
  activeTab: EventStatus;
  setActiveTab: (tab: EventStatus) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 flex justify-around items-center h-[72px] shadow-[0_-4px_10px_rgba(0,0,0,0.05)] pb-safe">
      <button 
        onClick={() => setActiveTab('upcoming')}
        className="flex flex-col items-center justify-center w-full h-full transition-colors active:scale-95"
      >
        <div className={`p-1.5 rounded-full mb-1 ${activeTab === 'upcoming' ? 'bg-orange-50' : 'bg-transparent'}`}>
          <Trophy className={`w-6 h-6 ${activeTab === 'upcoming' ? 'text-cds-orange' : 'text-gray-400'}`} />
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-wide ${activeTab === 'upcoming' ? 'text-cds-orange' : 'text-gray-400'}`}>
          Agenda
        </span>
      </button>
      
      <div className="w-px h-8 bg-gray-100"></div>

      <button 
        onClick={() => setActiveTab('past')}
        className="flex flex-col items-center justify-center w-full h-full transition-colors active:scale-95"
      >
        <div className={`p-1.5 rounded-full mb-1 ${activeTab === 'past' ? 'bg-orange-50' : 'bg-transparent'}`}>
          <History className={`w-6 h-6 ${activeTab === 'past' ? 'text-cds-orange' : 'text-gray-400'}`} />
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-wide ${activeTab === 'past' ? 'text-cds-orange' : 'text-gray-400'}`}>
          Histórico
        </span>
      </button>
    </div>
  );
};