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
}