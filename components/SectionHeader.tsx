import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, icon, isActive, onClick }) => (
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