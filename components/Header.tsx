import React from 'react';
import { Logo } from './Logo';
import { EventStatus } from '../types';

interface HeaderProps {
  activeTab: EventStatus;
  setActiveTab: (tab: EventStatus) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <Logo />
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-semibold text-gray-600">
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
        </nav>
      </div>
    </header>
  );
};