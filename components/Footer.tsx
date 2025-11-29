import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenPolicy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8 mb-16 md:mb-0">
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
              onClick={onOpenPolicy} 
              className="text-gray-400 hover:text-cds-orange transition-colors text-xs mt-2 underline decoration-gray-300 underline-offset-4"
            >
              Política de Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};