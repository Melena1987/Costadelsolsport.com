import { SportEvent } from './types';

export const EVENTS: SportEvent[] = [
  // UPCOMING EVENTS
  {
    id: '1',
    title: 'Estrella Damm N.A. Andalucía Masters',
    description: 'El torneo de golf más prestigioso del sur de Europa regresa al Real Club Valderrama. Los mejores golfistas del mundo se dan cita en este icónico campo.',
    date: '17 - 20 Octubre 2024',
    time: '09:00 - 18:30',
    venue: 'Real Club Valderrama',
    location: 'Sotogrande, San Roque',
    status: 'upcoming',
    url: 'https://www.europeantour.com/',
    imageUrl: 'https://picsum.photos/seed/golf1/800/600',
    category: 'Golf'
  },
  {
    id: '2',
    title: 'Málaga Maratón Generali',
    description: 'Una de las maratones más bellas de Europa. Un recorrido llano y rápido que atraviesa el corazón de la ciudad y su espectacular línea costera.',
    date: '15 Diciembre 2024',
    time: '08:30 Start',
    venue: 'Paseo del Parque',
    location: 'Málaga Capital',
    status: 'upcoming',
    url: 'https://www.generalimaratonmalaga.com/',
    imageUrl: 'https://picsum.photos/seed/marathon/800/600',
    category: 'Atletismo'
  },
  {
    id: '3',
    title: 'Premier Padel Andalucía',
    description: 'El circuito profesional de pádel más importante del mundo aterriza en la cuna de este deporte. Espectáculo garantizado con las mejores palas del ranking.',
    date: '08 - 14 Julio 2025',
    time: '10:00 - 22:00',
    venue: 'Martín Carpena',
    location: 'Málaga',
    status: 'upcoming',
    url: 'https://premierpadel.com/',
    imageUrl: 'https://picsum.photos/seed/padel/800/600',
    category: 'Pádel'
  },
  {
    id: '4',
    title: 'Ironman 70.3 Marbella',
    description: 'La prueba de triatlón que abre la temporada europea. Natación en el Mediterráneo, ciclismo por puertos de montaña y carrera a pie por el paseo marítimo.',
    date: '27 Abril 2025',
    time: '07:00 Start',
    venue: 'Puerto Banús',
    location: 'Marbella',
    status: 'upcoming',
    url: 'https://www.ironman.com/im703-marbella',
    imageUrl: 'https://picsum.photos/seed/triathlon/800/600',
    category: 'Triatlón'
  },
  
  // PAST EVENTS
  {
    id: '5',
    title: 'Copa Davis - Final 8',
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
  }
];