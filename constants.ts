import { SportEvent } from './types';

export const EVENTS: SportEvent[] = [
  {
    id: '7',
    title: 'Avance Global Cup 2026',
    description: 'La Avance Global Cup 2026 es el principal torneo internacional para clubes de baloncesto de élite en categoría escolar y junior. El evento reunirá en The Embassy (Fuengirola) a 10 de los mejores equipos de 5 continentes, incluyendo academias de la NBA y clubes europeos, ofreciendo un espectáculo único con las futuras estrellas del baloncesto mundial.',
    date: '29-31 Enero 2026',
    time: '',
    venue: 'The Embassy',
    location: 'Fuengirola, Málaga',
    status: 'upcoming',
    url: 'https://www.avanceglobalcup.com/',
    imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2070&auto=format&fit=crop',
    category: 'Baloncesto',
    extraInfo: {
      label: 'Participantes',
      value: '10 Equipos Internacionales'
    },
    isoStart: '20260129',
    isoEnd: '20260201'
  },
  // PAST EVENTS
  {
    id: '1',
    title: 'Campeonato de España de Vóley Playa en Higuerón Resort',
    description: 'La élite del vóley playa nacional se dará cita en las espectaculares instalaciones del Higuerón Resort de Fuengirola del 28 al 31 de agosto de 2025. Las mejores parejas masculinas y femeninas del país competirán por el título nacional en un ambiente inmejorable con música, animación y un entorno deportivo incomparable frente al Mediterráneo.',
    date: '28-31 Agosto 2025',
    time: '',
    venue: 'Higuerón Resort',
    location: 'Fuengirola, Málaga',
    status: 'past',
    url: 'https://www.rfevb.com/campeonato-de-espana-de-voley-playa-2025',
    imageUrl: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&q=80',
    category: 'Vóley Playa',
    extraInfo: {
      label: 'Participantes',
      value: 'Mejores parejas nacionales'
    },
    isoStart: '20250828',
    isoEnd: '20250901'
  },
  {
    id: '2',
    title: 'Copa Davis en Marbella',
    description: 'La élite del tenis masculino regresa a la Costa del Sol con una emocionante eliminatoria de la Copa Davis. El equipo español se enfrentará a Dinamarca los días 13 y 14 de septiembre de 2025. Marbella se vestirá de gala para acoger esta importante cita del calendario tenístico internacional que promete vibrar con el apoyo incondicional de la afición española.',
    date: '13-14 Septiembre 2025',
    time: '',
    venue: 'Club de Tenis Puente Romano',
    location: 'Marbella',
    status: 'past',
    url: 'https://www.rfet.es/es/noticia/nota-informativa-venta-de-entradas-copa-davis-marbella-2025',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764409769311_Captura-de-pantalla-2025-08-19-183635.png?alt=media&token=935f4d27-a05e-4b39-a133-fa276a0e1a2a',
    category: 'Tenis',
    extraInfo: {
      label: 'Enfrentamiento',
      value: 'España vs. Dinamarca'
    },
    isoStart: '20250913',
    isoEnd: '20250915'
  },
  {
    id: '3',
    title: 'Reserve Cup Marbella',
    description: 'Marbella acogerá por primera vez en Europa la Reserve Cup, un exclusivo torneo de pádel por equipos impulsado por la estrella de la NBA Jimmy Butler. Del 18 al 20 de septiembre de 2025, las instalaciones del Club de Tenis Puente Romano serán testigo de un espectáculo sin precedentes que reunirá a figuras como Arturo Coello, Agustín Tapia y Alejandro Galán.',
    date: '18-20 Septiembre 2025',
    time: '',
    venue: 'Club de Tenis Puente Romano',
    location: 'Marbella',
    status: 'past',
    url: 'https://www.reservecup.com/',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764409769311_Captura-de-pantalla-2025-08-19-183400.png?alt=media&token=e77c27bb-cf5c-4629-8156-9f9ea229fc80',
    category: 'Pádel',
    extraInfo: {
      label: 'Premio',
      value: '$500,000'
    },
    isoStart: '20250918',
    isoEnd: '20250921'
  },
  {
    id: '4',
    title: 'Internacionales de Tenis SUB14 Los Monteros',
    description: 'Las futuras promesas del tenis europeo se darán cita en el IV Torneo Internacional de Tenis SUB14 - Memorial Ignacio Saracho. Una oportunidad única para descubrir a los talentos que dominarán el circuito profesional en los próximos años, disputándose en el prestigioso Los Monteros Racket Club de Marbella.',
    date: '22-28 Septiembre 2025',
    time: '',
    venue: 'Los Monteros Racket Club',
    location: 'Marbella',
    status: 'past',
    url: 'https://www.tenniseurope.org/calendarevent/87103/Marbella',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764409769311_Memorial-Nacho-tenis-Los-Monteros-a4.jpg?alt=media&token=1fc2f742-e499-407e-ae43-b257f3d7be4c',
    category: 'Tenis',
    extraInfo: {
      label: 'Categoría',
      value: 'SUB14 Internacional'
    },
    isoStart: '20250922',
    isoEnd: '20250929'
  },
  {
    id: '5',
    title: 'Media Maratón de Marbella',
    description: 'La Sierra Blanca Estates Media Maratón de Marbella celebrará una nueva edición el domingo 28 de septiembre de 2025. La salida tendrá lugar a las 9:00 AM desde el emblemático Arco de Marbella, ofreciendo un recorrido espectacular con vistas al Mediterráneo, convirtiéndose en una de las citas más esperadas por los corredores populares.',
    date: '28 Septiembre 2025',
    time: '09:00 AM',
    venue: 'Arco de Marbella',
    location: 'Marbella',
    status: 'past',
    url: 'https://www.run-on.es/',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764409769311_SBE-2025.jpg?alt=media&token=c9845373-d898-4a03-a7e2-a5aa386639b2',
    category: 'Atletismo',
    extraInfo: {
      label: 'Modalidades',
      value: '21K, 5K y 3x7 Relevos'
    },
    isoStart: '20250928T090000',
    isoEnd: '20250928T140000'
  },
  {
    id: '6',
    title: 'Mundial Ironman 70.3 Marbella',
    description: 'Marbella se convertirá en el epicentro del triatlón mundial al acoger el Campeonato del Mundo VinFast IRONMAN 70.3 los días 8 y 9 de noviembre de 2025. Más de 6.000 triatletas de élite competirán en un exigente recorrido de 1.9 km de natación, 90 km de ciclismo y 21.1 km de carrera a pie.',
    date: '8-9 Noviembre 2025',
    time: '',
    venue: 'Marbella',
    location: 'Marbella, España',
    status: 'past',
    url: 'https://www.ironman.com/im703-world-championship-2025',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764409769311_Captura-de-pantalla-2025-08-19-183635.png?alt=media&token=935f4d27-a05e-4b39-a133-fa276a0e1a2a',
    category: 'Triatlón',
    extraInfo: {
      label: 'Distancia',
      value: '1.9K + 90K + 21.1K'
    },
    isoStart: '20251108',
    isoEnd: '20251110'
  }
];