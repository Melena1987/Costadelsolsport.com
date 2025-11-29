import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-14 md:h-16 w-auto" }) => (
  <img 
    src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764409964183_Costadelsolsport_.com__5000_x_5000_px___1_.png?alt=media&token=3b381198-5a2d-4e99-ad85-49d33beae15b"
    alt="Costa del Sol Sport"
    className={`${className} object-contain`}
  />
);