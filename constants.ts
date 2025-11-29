import { SportEvent } from './types';

export const EVENTS: SportEvent[] = [
  // UPCOMING EVENTS (2025)
  {
    id: 'upcoming-1',
    title: 'Campeonato de España de Vóley Playa',
    description: 'La élite del vóley playa nacional se dará cita en las espectaculares instalaciones del Higuerón Resort. Las mejores parejas masculinas y femeninas competirán por el título en un entorno incomparable.',
    date: '28 - 31 Agosto 2025',
    time: 'Jornada Completa',
    venue: 'Higuerón Resort',
    location: 'Fuengirola',
    status: 'upcoming',
    url: 'https://rfeb.es/',
    imageUrl: 'https://images.unsplash.com/photo-1612872087720-48ca556cd85b?auto=format&fit=crop&q=80&w=800',
    category: 'Vóley Playa',
    extraInfo: {
      label: 'Participantes',
      value: 'Mejores parejas nacionales'
    }
  },
  {
    id: 'upcoming-2',
    title: 'Copa Davis: España vs Dinamarca',
    description: 'La élite del tenis masculino regresa a la Costa del Sol con una emocionante eliminatoria. Marbella se vestirá de gala para apoyar al equipo español en esta importante cita del calendario internacional.',
    date: '13 y 14 de Septiembre 2025',
    time: 'Por confirmar',
    venue: 'Club de Tenis Puente Romano',
    location: 'Marbella',
    status: 'upcoming',
    url: 'https://www.daviscup.com/',
    imageUrl: 'https://images.unsplash.com/photo-1622163642998-1ea36746b555?auto=format&fit=crop&q=80&w=800',
    category: 'Tenis',
    extraInfo: {
      label: 'Enfrentamiento',
      value: 'España vs. Dinamarca'
    }
  },
  {
    id: 'upcoming-3',
    title: 'Reserve Cup Marbella',
    description: 'Marbella acogerá por primera vez en Europa la Reserve Cup, un exclusivo torneo de pádel por equipos impulsado por Jimmy Butler. Un espectáculo sin precedentes con las mejores figuras mundiales.',
    date: '18 - 20 Septiembre 2025',
    time: 'Tarde / Noche',
    venue: 'Club de Tenis Puente Romano',
    location: 'Marbella',
    status: 'upcoming',
    url: 'https://reservepadel.com/',
    imageUrl: 'https://images.unsplash.com/photo-1554068865-2415f90d23bb?auto=format&fit=crop&q=80&w=800',
    category: 'Pádel',
    extraInfo: {
      label: 'Premio',
      value: '$500,000'
    }
  },
  {
    id: 'upcoming-4',
    title: 'IV Internacionales de Tenis SUB14',
    description: 'Memorial Ignacio Saracho. Las futuras promesas del tenis europeo se darán cita en Marbella. Una oportunidad única para descubrir a los talentos que dominarán el circuito en los próximos años.',
    date: '22 - 28 Septiembre 2025',
    time: '09:00 - 19:00',
    venue: 'Los Monteros Racket Club',
    location: 'Marbella',
    status: 'upcoming',
    url: 'https://tenniseurope.org/',
    imageUrl: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80&w=800',
    category: 'Tenis',
    extraInfo: {
      label: 'Categoría',
      value: 'SUB14 Internacional'
    }
  },
  {
    id: 'upcoming-5',
    title: 'Media Maratón de Marbella',
    description: 'La Sierra Blanca Estates Media Maratón de Marbella ofrece un recorrido espectacular con vistas al Mediterráneo. Una de las citas más esperadas por los corredores populares.',
    date: '28 de Septiembre 2025',
    time: '09:00 AM',
    venue: 'Arco de Marbella',
    location: 'Marbella',
    status: 'upcoming',
    url: 'https://www.marbellamediamaraton.es/',
    imageUrl: 'https://images.unsplash.com/photo-1552674605-46955595a22d?auto=format&fit=crop&q=80&w=800',
    category: 'Atletismo',
    extraInfo: {
      label: 'Modalidades',
      value: '21K, 5K y Relevos'
    }
  },
  {
    id: 'upcoming-6',
    title: 'Mundial Ironman 70.3 Marbella',
    description: 'Marbella será el epicentro del triatlón mundial. Más de 6.000 triatletas de élite competirán en un exigente recorrido de natación, ciclismo y carrera a pie por la Costa del Sol.',
    date: '8 y 9 de Noviembre 2025',
    time: '07:00 AM',
    venue: 'Puerto Banús / Centro',
    location: 'Marbella',
    status: 'upcoming',
    url: 'https://www.ironman.com/im703-world-championship',
    imageUrl: 'https://images.unsplash.com/photo-1516599763720-6819932cb41d?auto=format&fit=crop&q=80&w=800',
    category: 'Triatlón',
    extraInfo: {
      label: 'Distancia',
      value: '1.9K + 90K + 21.1K'
    }
  },
  
  // PAST EVENTS
  {
    id: '5',
    title: 'Copa Davis - Final 8 (2024)',
    description: 'Las finales de la copa del mundo de tenis regresaron a Málaga. Los 8 mejores equipos nacionales lucharon por la ensaladera en un ambiente vibrante en el Martín Carpena.',
    date: 'Noviembre 2024',
    time: 'Finalizado',
    venue: 'Palacio de Deportes',
    location: 'Málaga',
    status: 'past',
    url: 'https://www.daviscup.com/',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764409769311_Captura-de-pantalla-2025-08-19-183635.png?alt=media&token=935f4d27-a05e-4b39-a133-fa276a0e1a2a',
    category: 'Tenis'
  },
  {
    id: '6',
    title: 'SBE 2025 - Sports Business Event',
    description: 'Encuentro exclusivo que reunió a líderes del sector deportivo y empresarial en la Costa del Sol para debatir el futuro de la industria.',
    date: 'Verano 2025',
    time: 'Finalizado',
    venue: 'Marbella Arena',
    location: 'Marbella',
    status: 'past',
    url: '#',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764409769311_SBE-2025.jpg?alt=media&token=c9845373-d898-4a03-a7e2-a5aa386639b2',
    category: 'Evento Deportivo'
  },
  {
    id: '7',
    title: 'World Padel Tour - Edición Anterior',
    description: 'El circuito mundial ofreció momentos inolvidables en su paso por tierras andaluzas, confirmando a Málaga como capital mundial del pádel.',
    date: 'Julio 2024',
    time: 'Finalizado',
    venue: 'Martín Carpena',
    location: 'Málaga',
    status: 'past',
    url: 'https://www.worldpadeltour.com/',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764409769311_Captura-de-pantalla-2025-08-19-183400.png?alt=media&token=e77c27bb-cf5c-4629-8156-9f9ea229fc80',
    category: 'Pádel'
  },
  {
    id: '8',
    title: 'E1 Series Puerto Banús GP',
    description: 'La competición de lanchas eléctricas RaceBird volvió a deslumbrar en las aguas de Marbella, combinando sostenibilidad, lujo y alta velocidad.',
    date: 'Junio 2024',
    time: 'Finalizado',
    venue: 'Puerto Banús Marina',
    location: 'Marbella',
    status: 'past',
    url: 'https://www.e1series.com/',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764409769311_14676_Foto.1755189228.jpg?alt=media&token=7480845c-b86d-49d9-adf7-67f9f6a10406',
    category: 'Motonáutica'
  },
  {
    id: '9',
    title: 'Memorial Nacho Tenis',
    description: 'Emotivo torneo celebrado en el Club de Tenis Los Monteros. Una competición especial que reunió a grandes talentos locales en memoria de Nacho.',
    date: 'Agosto 2025',
    time: 'Finalizado',
    venue: 'Club Los Monteros',
    location: 'Marbella',
    status: 'past',
    url: '#',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764409769311_Memorial-Nacho-tenis-Los-Monteros-a4.jpg?alt=media&token=1fc2f742-e499-407e-ae43-b257f3d7be4c',
    category: 'Tenis'
  },
  {
    id: '10',
    title: 'Torneo Deportivo Costa del Sol',
    description: 'Gran evento deportivo celebrado recientemente en la costa, reuniendo a participantes y aficionados en una jornada inolvidable.',
    date: '2025',
    time: 'Finalizado',
    venue: 'Costa del Sol',
    location: 'Málaga',
    status: 'past',
    url: '#',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1764409769311_v14_cartel.jpg?alt=media&token=057b65ef-8f69-4e08-9e03-6d6d9a3b715a',
    category: 'Evento'
  }
];