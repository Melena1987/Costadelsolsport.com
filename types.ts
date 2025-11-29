export type EventStatus = 'upcoming' | 'past';

export interface SportEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string; // The specific stadium/club
  location: string; // The city/area
  status: EventStatus;
  url: string;
  imageUrl: string;
  category: string;
  extraInfo?: {
    label: string;
    value: string;
  };
  // ISO format dates for Calendar integration (YYYYMMDD or YYYYMMDDTHHmmSS)
  isoStart: string;
  isoEnd: string; 
}